(function () {
  'use strict';

  // ── Layout constants ──────────────────────────────────────────────────────
  const NODE_WIDTH   = 148;
  const NODE_HEIGHT  = 44;
  const NODE_RADIUS  = NODE_HEIGHT / 2;
  const LAYER_SPACING = 124;
  const NODE_SPACING  = 18;
  const MAX_DEPTH     = 5;

  // ── Colour palette ────────────────────────────────────────────────────────
  const COLORS = {
    citrus:       '#d97706',
    apple:        '#dc2626',
    ancient:      '#3d7a5a',
    extinct:      '#c4916a',
    grape:        '#a855f7',
    mango:        '#fb923c',
    stone:        '#f472b6',
    berry:        '#be123c',
    banana:       '#eab308',
    pomegranate:  '#dc143c',
  };
  function blendHex(hexA, hexB, t) {
    const rA = parseInt(hexA.slice(1,3),16), gA = parseInt(hexA.slice(3,5),16), bA = parseInt(hexA.slice(5,7),16);
    const rB = parseInt(hexB.slice(1,3),16), gB = parseInt(hexB.slice(3,5),16), bB = parseInt(hexB.slice(5,7),16);
    const r = Math.round(rA + (rB - rA) * t);
    const g = Math.round(gA + (gB - gA) * t);
    const b = Math.round(bA + (bB - bA) * t);
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  function focusBgColor(node)   { return blendHex('#e8f5ee', nodeColor(node), 0.25); }
  function focusTextColor(node) { return blendHex('#1a1a1a', nodeColor(node), 0.55); }

  // ── Children lookup (inverse of fruitData.parents) ───────────────────────
  const childrenByFruit = {};
  for (const [fruitName, fruitEntry] of Object.entries(fruitData)) {
    if (!childrenByFruit[fruitName]) childrenByFruit[fruitName] = [];
    for (const parentName of fruitEntry.parents) {
      if (!childrenByFruit[parentName]) childrenByFruit[parentName] = [];
      if (!childrenByFruit[parentName].includes(fruitName))
        childrenByFruit[parentName].push(fruitName);
    }
  }

  // ── View state ────────────────────────────────────────────────────────────
  const state = { focus: null, depth: 1 };

  // ── Subgraph builder ──────────────────────────────────────────────────────
  function subgraph(focusName, depth) {
    const nodeSet = new Set([focusName]);

    // Phase 1 — collect nodes (pure BFS, no layer logic)
    let frontier = [focusName];
    for (let gen = 0; gen < depth; gen++) {
      const nextFrontier = [];
      for (const fruitName of frontier) {
        for (const parentName of (fruitData[fruitName]?.parents ?? [])) {
          if (!nodeSet.has(parentName)) { nodeSet.add(parentName); nextFrontier.push(parentName); }
        }
      }
      frontier = nextFrontier;
    }
    frontier = [focusName];
    for (let gen = 0; gen < depth; gen++) {
      const nextFrontier = [];
      for (const fruitName of frontier) {
        for (const childName of (childrenByFruit[fruitName] ?? [])) {
          if (!nodeSet.has(childName)) { nodeSet.add(childName); nextFrontier.push(childName); }
        }
      }
      frontier = nextFrontier;
    }

    // Phase 2 — collect all edges between visible nodes (catches cross-edges too)
    const edges = [];
    for (const fruitName of nodeSet) {
      for (const parentName of (fruitData[fruitName]?.parents ?? [])) {
        if (nodeSet.has(parentName)) edges.push({ src: parentName, tgt: fruitName });
      }
    }

    // Phase 3 — topological sort (Kahn's)
    const childrenInGraph = new Map();
    const parentsInGraph  = new Map();
    const topoInDegree    = new Map();
    for (const name of nodeSet) {
      childrenInGraph.set(name, []);
      parentsInGraph.set(name, []);
      topoInDegree.set(name, 0);
    }
    for (const { src, tgt } of edges) {
      topoInDegree.set(tgt, topoInDegree.get(tgt) + 1);
      childrenInGraph.get(src).push(tgt);
      parentsInGraph.get(tgt).push(src);
    }
    const topoOrder = [];
    const topoQueue = [];
    for (const [name, deg] of topoInDegree) { if (deg === 0) topoQueue.push(name); }
    let qi = 0;
    while (qi < topoQueue.length) {
      const name = topoQueue[qi++];
      topoOrder.push(name);
      for (const child of childrenInGraph.get(name)) {
        topoInDegree.set(child, topoInDegree.get(child) - 1);
        if (topoInDegree.get(child) === 0) topoQueue.push(child);
      }
    }

    // Phase 4 — layer assignment via longest-path DP in both directions.
    // Ancestors get layer = -(longest path from that node to focus).
    // Descendants get layer = +(longest path from focus to that node).
    // This ensures every node sits strictly below all its visible parents.

    // Forward pass: longest path from focus to each descendant
    const distFromFocus = new Map([[focusName, 0]]);
    for (const name of topoOrder) {
      if (!distFromFocus.has(name)) continue;
      const d = distFromFocus.get(name);
      for (const child of childrenInGraph.get(name)) {
        const cur = distFromFocus.get(child);
        if (cur === undefined || d + 1 > cur) distFromFocus.set(child, d + 1);
      }
    }

    // Backward pass: longest path from each ancestor to focus
    const distToFocus = new Map([[focusName, 0]]);
    for (let i = topoOrder.length - 1; i >= 0; i--) {
      const name = topoOrder[i];
      if (!distToFocus.has(name)) continue;
      const d = distToFocus.get(name);
      for (const parent of parentsInGraph.get(name)) {
        const cur = distToFocus.get(parent);
        if (cur === undefined || d + 1 > cur) distToFocus.set(parent, d + 1);
      }
    }

    const nodes = Array.from(nodeSet, id => ({
      id,
      layer: distToFocus.has(id) ? -distToFocus.get(id) : (distFromFocus.get(id) ?? 0),
      fd: fruitData[id] ?? { parents: [], category: '', scientificName: '', description: '', emoji: '' },
    }));

    return { nodes, edges };
  }

  // ── Layout engine ─────────────────────────────────────────────────────────
  function layout(nodes, edges, canvasWidth, canvasHeight) {
    const nodesByLayer = d3.group(nodes, node => node.layer);
    const layerNumbers = Array.from(nodesByLayer.keys()).sort((a, b) => a - b);
    const minLayer     = layerNumbers[0] ?? 0;
    const maxLayer     = layerNumbers[layerNumbers.length - 1] ?? 0;
    const totalGraphHeight = (maxLayer - minLayer) * LAYER_SPACING;
    const graphTopOffset   = (canvasHeight - totalGraphHeight) / 2;
    const layerToY = layer => graphTopOffset + (layer - minLayer) * LAYER_SPACING;

    // x positions finalised so far, used by the barycenter heuristic
    const resolvedX = new Map();

    // Process layers outward from 0 so each layer can align to its neighbours
    const processingOrder = [
      0,
      ...layerNumbers.filter(l => l !== 0).sort((a, b) => Math.abs(a) - Math.abs(b)),
    ];

    for (const layer of processingOrder) {
      const layerNodes = nodesByLayer.get(layer) ?? [];

      // Score each node by the mean x of its already-placed neighbours
      layerNodes.forEach(node => {
        const neighbourXCoords = edges
          .filter(edge => edge.src === node.id || edge.tgt === node.id)
          .map(edge => (edge.src === node.id ? edge.tgt : edge.src))
          .filter(id => resolvedX.has(id))
          .map(id => resolvedX.get(id));
        node._barycentreScore = neighbourXCoords.length
          ? d3.mean(neighbourXCoords)
          : canvasWidth / 2;
      });

      layerNodes.sort((a, b) => a._barycentreScore - b._barycentreScore);

      const rowWidth = layerNodes.length * NODE_WIDTH + (layerNodes.length - 1) * NODE_SPACING;
      const rowLeftX = (canvasWidth - rowWidth) / 2;
      layerNodes.forEach((node, index) => {
        node.x = rowLeftX + index * (NODE_WIDTH + NODE_SPACING) + NODE_WIDTH / 2;
        node.y = layerToY(layer);
        resolvedX.set(node.id, node.x);
      });
    }
  }

  // ── Text helpers ──────────────────────────────────────────────────────────
  function breakIntoLines(text, maxLineLength = 14) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      if (candidate.length <= maxLineLength) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // ── Color helpers ─────────────────────────────────────────────────────────
  const NODE_CATEGORIES = Object.keys(COLORS);  // ['citrus', 'apple', 'ancient']

  function nodeCategory(node) {
    if (node.fd.extinct) return 'extinct';
    if (node.fd.parents.length === 0) return 'ancient';
    const cat = node.fd.category || '';
    return NODE_CATEGORIES.includes(cat) ? cat : 'ancient';
  }
  function nodeColor(node) {
    if (node.fd.extinct) return COLORS.extinct;
    if (node.fd.parents.length === 0) {
      const catColor = node.fd.category && COLORS[node.fd.category];
      return catColor ? blendHex(COLORS.ancient, catColor, 0.5) : COLORS.ancient;
    }
    return COLORS[node.fd.category] ?? '#888';
  }
  function edgeGradientId(sourceNode, targetNode) {
    return `eg-${nodeCategory(sourceNode)}-${nodeCategory(targetNode)}`;
  }

  // ── One-time SVG setup ────────────────────────────────────────────────────
  const svg   = d3.select('#graph');
  const scene = svg.append('g').attr('class', 'scene');
  const zoom  = d3.zoom().scaleExtent([0.2, 4])
    .on('zoom', event => scene.attr('transform', event.transform));
  svg.call(zoom).on('dblclick.zoom', null);

  const defs = svg.append('defs');

  // Per-category-pair edge gradients — brighter at the ancestor end, fading
  // toward the child end so the direction of each line is immediately clear.
  for (const fromCat of NODE_CATEGORIES) {
    for (const toCat of NODE_CATEGORIES) {
      const gradient = defs.append('linearGradient')
        .attr('id', `eg-${fromCat}-${toCat}`)
        .attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
      gradient.append('stop').attr('offset', '0%')
        .attr('stop-color', COLORS[fromCat]).attr('stop-opacity', .25);
      gradient.append('stop').attr('offset', '100%')
        .attr('stop-color', COLORS[toCat]).attr('stop-opacity', 1);
    }
  }

  defs.append('marker')
    .attr('id', 'arr')
    .attr('viewBox', '0 -4 8 8')
    .attr('refX', 8).attr('refY', 0)
    .attr('markerWidth', 5).attr('markerHeight', 5)
    .attr('orient', 'auto')
    .append('path').attr('d', 'M0,-4L8,0L0,4').attr('fill', '#b0a080');

  // ── Render ────────────────────────────────────────────────────────────────
  function render() {
    const container = document.getElementById('graph-container');
    const width  = container.clientWidth;
    const height = container.clientHeight;
    svg.attr('width', width).attr('height', height);

    scene.selectAll('*').remove();

    if (!state.focus) return;

    const { nodes, edges } = subgraph(state.focus, state.depth);
    layout(nodes, edges, width, height);

    const nodeById = new Map(nodes.map(node => [node.id, node]));

    const edgeData = edges
      .filter(edge => nodeById.has(edge.src) && nodeById.has(edge.tgt))
      .map(edge => ({
        src:        edge.src,
        tgt:        edge.tgt,
        sourceNode: nodeById.get(edge.src),
        targetNode: nodeById.get(edge.tgt),
      }));

    // ── Edges ──────────────────────────────────────────────────────────────
    scene.append('g').selectAll('path')
      .data(edgeData)
      .join('path')
      .attr('fill', 'none')
      .attr('stroke', ({ sourceNode, targetNode }) => `url(#${edgeGradientId(sourceNode, targetNode)})`)
      .attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#arr)')
      .attr('d', ({ sourceNode, targetNode, src, tgt }) => {
        const sourceBottomY = sourceNode.y + NODE_HEIGHT / 2;
        const targetTopY    = targetNode.y - NODE_HEIGHT / 2;
        const midY          = (sourceBottomY + targetTopY) / 2;
        const nudge = Math.abs(targetNode.x - sourceNode.x) < 2 ? 30 : 0;
        // Long-range edges arc outward to avoid passing through intermediate nodes.
        const layerSpan = Math.abs((targetNode.layer ?? 0) - (sourceNode.layer ?? 0));
        const arcOffset = layerSpan > 1 ? (layerSpan - 1) * 55 : 0;
        const arcSign   = sourceNode.x <= targetNode.x ? 1 : -1;
        // Jitter only on source-side control point — destination side stays
        // aligned with the target so the arrowhead orientation is always correct.
        let h = 0;
        for (const c of (src ?? '') + '|' + (tgt ?? '')) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
        const jitter = (h % 12) - 6;   // −6 … +6 px, source side only
        const cpX1 = sourceNode.x + nudge + arcSign * arcOffset + jitter;
        const cpX2 = targetNode.x - nudge + arcSign * arcOffset;
        return `M${sourceNode.x},${sourceBottomY} C${cpX1},${midY} ${cpX2},${midY} ${targetNode.x},${targetTopY}`;
      });

    // ── Nodes ──────────────────────────────────────────────────────────────
    const nodeGroups = scene.append('g').selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .attr('transform', node => `translate(${node.x - NODE_WIDTH / 2},${node.y - NODE_HEIGHT / 2})`)
      .on('click', (event, node) => { event.stopPropagation(); setFocus(node.id); });

    const isFocused = node => node.id === state.focus;

    // Outer glow ring on focused node
    nodeGroups.filter(isFocused)
      .append('rect')
      .attr('class', 'glow')
      .attr('x', -5).attr('y', -5)
      .attr('width', NODE_WIDTH + 10).attr('height', NODE_HEIGHT + 10)
      .attr('rx', NODE_RADIUS + 5).attr('ry', NODE_RADIUS + 5)
      .attr('fill', 'none')
      .attr('stroke', node => nodeColor(node))
      .attr('stroke-width', 1.5)
      .attr('opacity', .35);

    // Pill background
    nodeGroups.append('rect')
      .attr('class', 'pill')
      .attr('width', NODE_WIDTH).attr('height', NODE_HEIGHT)
      .attr('rx', NODE_RADIUS).attr('ry', NODE_RADIUS)
      .attr('fill',         node => isFocused(node) ? focusBgColor(node) : '#ffffff')
      .attr('stroke',       node => nodeColor(node))
      .attr('stroke-width', node => isFocused(node) ? 2.5 : 1.5);

    // Text label (1 or 2 lines, word-wrapped)
    nodeGroups.each(function (node) {
      const labelGroup = d3.select(this);
      const textLines  = breakIntoLines(node.id);
      const lineHeight = 15;
      const fontSize   = textLines.length > 1 ? 10.5 : 12;
      const textColor  = isFocused(node) ? focusTextColor(node) : '#2a2620';

      textLines.forEach((lineText, lineIndex) => {
        labelGroup.append('text')
          .attr('x', NODE_WIDTH / 2)
          .attr('y', NODE_HEIGHT / 2 + (lineIndex - (textLines.length - 1) / 2) * lineHeight)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${fontSize}px`)
          .attr('font-family', 'inherit')
          .attr('fill', textColor)
          .attr('pointer-events', 'none')
          .text(lineText);
      });
    });

    updateInfoPanel();
    updateDepthButtons();
  }

  // ── Focus management ──────────────────────────────────────────────────────
  function setFocus(fruitName) {
    if (!fruitData[fruitName] || fruitName === state.focus) return;
    state.focus = fruitName;
    document.getElementById('search-input').value = fruitName;
    document.getElementById('empty-state').classList.add('hidden');
    svg.call(zoom.transform, d3.zoomIdentity);
    scene.attr('opacity', 0);
    render();
    scene.transition().duration(220).attr('opacity', 1);
  }

  // ── Info panel ────────────────────────────────────────────────────────────
  function updateInfoPanel() {
    const fruit = fruitData[state.focus];
    if (!fruit) return;
    const offspring = childrenByFruit[state.focus] ?? [];
    const isAncient  = fruit.parents.length === 0 && !fruit.extinct;
    const isExtinct  = !!fruit.extinct;

    const badgeClass = isExtinct ? 'extinct' : isAncient ? 'ancient' : (fruit.category || '');
    const badgeLabel = isExtinct
      ? 'Extinct Variety'
      : isAncient
        ? 'Ancient / Fundamental'
        : (fruit.category.charAt(0).toUpperCase() + fruit.category.slice(1));

    const fruitChips = names => names
      .map(name => `<button class="chip" data-name="${name}">${name}</button>`)
      .join('');

    document.getElementById('info-content').innerHTML = `
      <div class="info-emoji">${fruit.emoji || '🍑'}</div>
      <div class="info-name">${state.focus}</div>
      <div class="info-sci">${fruit.scientificName}</div>
      <span class="info-badge ${badgeClass}">${badgeLabel}</span>
      <p class="info-desc">${fruit.description}</p>
      ${fruit.parents.length
        ? `<div class="info-section"><h3>Parents</h3><div class="chip-list">${fruitChips(fruit.parents)}</div></div>`
        : ''}
      ${offspring.length
        ? `<div class="info-section"><h3>Offspring</h3><div class="chip-list">${fruitChips(offspring)}</div></div>`
        : ''}
    `;

    document.querySelectorAll('#info-content .chip').forEach(chip =>
      chip.addEventListener('click', () => setFocus(chip.dataset.name))
    );
  }

  // ── Depth controls ────────────────────────────────────────────────────────
  function updateDepthButtons() {
    document.getElementById('depth-label').textContent =
      `${state.depth} generation${state.depth !== 1 ? 's' : ''}`;
    document.getElementById('btn-fewer').disabled = state.depth <= 1;
    document.getElementById('btn-more').disabled  = state.depth >= MAX_DEPTH;
  }

  document.getElementById('btn-more').addEventListener('click', () => {
    if (state.depth < MAX_DEPTH) {
      state.depth++;
      svg.call(zoom.transform, d3.zoomIdentity);
      render();
    }
  });
  document.getElementById('btn-fewer').addEventListener('click', () => {
    if (state.depth > 1) {
      state.depth--;
      svg.call(zoom.transform, d3.zoomIdentity);
      render();
    }
  });

  // ── Search / autocomplete ─────────────────────────────────────────────────
  const searchInput      = document.getElementById('search-input');
  const suggestionsEl    = document.getElementById('suggestions');
  const allFruitNames    = Object.keys(fruitData).sort();
  let highlightedIndex   = -1;

  function showSuggestions(query) {
    query = query.toLowerCase().trim();
    if (!query) { hideSuggestions(); return; }
    const matches = allFruitNames.filter(name => name.toLowerCase().includes(query)).slice(0, 9);
    if (!matches.length) { hideSuggestions(); return; }

    suggestionsEl.innerHTML = matches.map((name, index) =>
      `<li data-name="${name}" data-i="${index}">
        <span class="s-name">${name}</span>
        <span class="s-sci">${fruitData[name].scientificName}</span>
      </li>`
    ).join('');
    suggestionsEl.classList.add('open');
    highlightedIndex = -1;

    suggestionsEl.querySelectorAll('li').forEach(item =>
      item.addEventListener('mousedown', event => {
        event.preventDefault();
        pickSuggestion(item.dataset.name);
      })
    );
  }

  function hideSuggestions() {
    suggestionsEl.classList.remove('open');
    suggestionsEl.innerHTML = '';
    highlightedIndex = -1;
  }

  function pickSuggestion(fruitName) {
    setFocus(fruitName);
    hideSuggestions();
    searchInput.blur();
  }

  searchInput.addEventListener('input', event => showSuggestions(event.target.value));
  searchInput.addEventListener('blur',  () => setTimeout(hideSuggestions, 120));

  searchInput.addEventListener('keydown', event => {
    const items = suggestionsEl.querySelectorAll('li');
    if (!items.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      highlightedIndex = (highlightedIndex + 1) % items.length;
      items.forEach((item, i) => item.classList.toggle('hi', i === highlightedIndex));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
      items.forEach((item, i) => item.classList.toggle('hi', i === highlightedIndex));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (highlightedIndex >= 0) pickSuggestion(items[highlightedIndex].dataset.name);
    } else if (event.key === 'Escape') {
      hideSuggestions();
    }
  });

  // ── Resize handler ────────────────────────────────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (state.focus) render(); }, 80);
  });

  // ── Boot ──────────────────────────────────────────────────────────────────
  updateDepthButtons();
})();
