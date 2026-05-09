(function () {
  'use strict';

  // ── Layout & animation constants ──────────────────────────────────────────
  const NODE_WIDTH    = 148;
  const NODE_HEIGHT   = 44;
  const NODE_RADIUS   = NODE_HEIGHT / 2;
  const LAYER_SPACING = 130;   // vertical distance between adjacent layers
  const NODE_SPACING  = 22;    // horizontal gap between nodes in the same layer
  const MAX_DEPTH     = 5;

  const WAVE_DELAY_MS  = 120;  // stagger added per layer during the entry animation
  const EDGE_DRAW_MS   = 500;  // duration of the edge sprout animation
  const NODE_FADE_MS   = 280;  // duration of node fade-in on entry
  const NODE_SLIDE_MS  = 380;  // duration of node position slide on update

  // ── Colour palette ────────────────────────────────────────────────────────
  const COLORS = {
    citrus:  '#f59e0b',
    apple:   '#ef4444',
    ancient: '#86c46e',
    extinct: '#c4916a',
    grape:   '#a855f7',
    mango:   '#fb923c',
    stone:   '#f472b6',
    berry:   '#be123c',
    banana:  '#eab308',
  };

  function blendHex(hexA, hexB, t) {
    const rA = parseInt(hexA.slice(1,3),16), gA = parseInt(hexA.slice(3,5),16), bA = parseInt(hexA.slice(5,7),16);
    const rB = parseInt(hexB.slice(1,3),16), gB = parseInt(hexB.slice(3,5),16), bB = parseInt(hexB.slice(5,7),16);
    const r = Math.round(rA + (rB - rA) * t);
    const g = Math.round(gA + (gB - gA) * t);
    const b = Math.round(bA + (bB - bA) * t);
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  // Focus highlight palette derived from the node's own category colour
  function focusBgColor(node)   { return blendHex('#0b1410', nodeColor(node), 0.22); }
  function focusTextColor(node) { return blendHex('#d8d0c4', nodeColor(node), 0.5);  }

  function nodeCategory(node) {
    if (node.fd.extinct) return 'extinct';
    if (node.fd.parents.length === 0) return 'ancient';
    return node.fd.category || 'other';
  }
  // Ancient (wild) nodes blend the ancient green with their family colour so
  // their lineage is visually clear while keeping the "wild ancestor" feel.
  function nodeColor(node) {
    const cat = nodeCategory(node);
    if (cat === 'ancient') {
      const catColor = node.fd.category && COLORS[node.fd.category];
      return catColor ? blendHex(COLORS.ancient, catColor, 0.5) : COLORS.ancient;
    }
    return COLORS[cat] ?? '#888';
  }
  function nodeFillColor(node) {
    const hex = nodeColor(node);
    const red   = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue  = parseInt(hex.slice(5, 7), 16);
    return `rgba(${red},${green},${blue},0.08)`;
  }

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
  const previousNodePositions = new Map();  // fruitName → { x, y } from last render
  let edgeCleanupTimer = null;

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
    const nodesByLayer  = d3.group(nodes, node => node.layer);
    const layerNumbers  = Array.from(nodesByLayer.keys()).sort((a, b) => a - b);
    const minLayer      = layerNumbers[0] ?? 0;
    const maxLayer      = layerNumbers.at(-1) ?? 0;
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

  // ── Edge path helpers ─────────────────────────────────────────────────────
  function edgePath({ sourceNode, targetNode, src, tgt }) {
    const sourceBottomY = sourceNode.y + NODE_HEIGHT / 2;
    const targetTopY    = targetNode.y - NODE_HEIGHT / 2;
    const midY          = (sourceBottomY + targetTopY) / 2;
    // objectBoundingBox gradients fail on zero-width boxes (vertical paths).
    const horizontalNudge = Math.abs(targetNode.x - sourceNode.x) < 2 ? 30 : 0;
    // Long-range edges arc outward to avoid routing visually through intermediate
    // nodes. The arc direction follows which side has more horizontal space.
    const layerSpan = Math.abs((targetNode.layer ?? 0) - (sourceNode.layer ?? 0));
    const arcOffset = layerSpan > 1 ? (layerSpan - 1) * 55 : 0;
    const arcSign   = sourceNode.x <= targetNode.x ? 1 : -1;
    // Jitter only on the source-side control point so each edge has a unique
    // curve shape while the destination-side tangent stays aligned with the
    // target node — keeping the arrowhead orientation correct.
    let h = 0;
    for (const c of (src ?? '') + '|' + (tgt ?? '')) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
    const jitter = (h % 24) - 12;  // −12 … +12 px
    const cpX1 = sourceNode.x + horizontalNudge + arcSign * arcOffset + jitter;
    const cpX2 = targetNode.x - horizontalNudge + arcSign * arcOffset;
    return (
      `M${sourceNode.x},${sourceBottomY} ` +
      `C${cpX1},${midY} ` +
      `${cpX2},${midY} ` +
      `${targetNode.x},${targetTopY}`
    );
  }

  function edgeGradientId(sourceNode, targetNode) {
    return `eg-${nodeCategory(sourceNode)}-${nodeCategory(targetNode)}`;
  }
  function arrowMarkerId(node) {
    return `arr-${nodeCategory(node)}`;
  }

  // ── One-time SVG setup ────────────────────────────────────────────────────
  const svg  = d3.select('#graph');
  const defs = svg.append('defs');

  // Glow filter applied to the focused node
  const glowFilter = defs.append('filter')
    .attr('id', 'glow').attr('x', '-40%').attr('y', '-40%')
    .attr('width', '180%').attr('height', '180%');
  glowFilter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
  glowFilter.append('feComposite').attr('in', 'SourceGraphic').attr('in2', 'blur').attr('operator', 'over');

  // One vertical gradient per category-pair combination
  const NODE_CATEGORIES = ['ancient', 'citrus', 'apple', 'extinct', 'grape', 'mango', 'stone', 'berry', 'banana'];
  for (const fromCategory of NODE_CATEGORIES) {
    for (const toCategory of NODE_CATEGORIES) {
      const gradient = defs.append('linearGradient')
        .attr('id', `eg-${fromCategory}-${toCategory}`)
        .attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', COLORS[fromCategory] ?? '#888')
        .attr('stop-opacity', .3);   // dim at the ancestor (source) end
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#ffffff')
        .attr('stop-opacity', .88);  // bright white at the child (destination) end
    }
  }

  // Arrowhead marker per category
  for (const category of NODE_CATEGORIES) {
    defs.append('marker')
      .attr('id', `arr-${category}`)
      .attr('viewBox', '0 -4 8 8').attr('refX', 8).attr('refY', 0)
      .attr('markerWidth', 5).attr('markerHeight', 5).attr('orient', 'auto')
      .append('path').attr('d', 'M0,-4L8,0L0,4')
      .attr('fill', COLORS[category] ?? '#888').attr('opacity', .7);
  }

  const scene     = svg.append('g').attr('class', 'scene');
  const linkLayer = scene.append('g').attr('class', 'link-layer');
  const nodeLayer = scene.append('g').attr('class', 'node-layer');

  const zoom = d3.zoom().scaleExtent([0.18, 4])
    .on('zoom', event => scene.attr('transform', event.transform));
  svg.call(zoom).on('dblclick.zoom', null);

  // ── Leaf decorations (ancient nodes only) ─────────────────────────────────
  const LEAF_PATH = 'M0,0 Q5,-7 0,-15 Q-5,-7 0,0';

  function addLeafDecorations(parentGroup) {
    const leafPositions = [
      { x: -10,                      y: NODE_HEIGHT / 2 - 2, rotation: -80, animClass: 'leaf-sway-1', scale: .90 },
      { x: NODE_WIDTH + 10,          y: NODE_HEIGHT / 2 - 2, rotation:  80, animClass: 'leaf-sway-2', scale: .85 },
      { x: NODE_WIDTH / 3 - 4,       y: -6,                  rotation: -15, animClass: 'leaf-sway-3', scale: .75 },
      { x: (2 * NODE_WIDTH) / 3 + 4, y: -6,                  rotation:  20, animClass: 'leaf-sway-4', scale: .80 },
    ];
    const leafGroup = parentGroup.append('g')
      .attr('class', 'leaf-group').attr('pointer-events', 'none');
    for (const { x, y, rotation, animClass, scale } of leafPositions) {
      leafGroup.append('path')
        .attr('class', `leaf ${animClass}`)
        .attr('d', LEAF_PATH)
        .attr('transform', `translate(${x},${y}) rotate(${rotation}) scale(${scale})`)
        .attr('fill', '#4a9e3a').attr('opacity', .55)
        .attr('stroke', '#3a7a2a').attr('stroke-width', .5);
    }
  }

  // ── Node rendering ────────────────────────────────────────────────────────
  function buildNode(nodeGroup) {
    const isAncient = datum => datum.fd.parents.length === 0 && !datum.fd.extinct;

    // Leaf decorations sit behind everything else
    nodeGroup.filter(isAncient).call(addLeafDecorations);

    // Glow ring — rendered outside the pill, visible on the focused node only
    nodeGroup.append('rect').attr('class', 'node-glow')
      .attr('x', -9).attr('y', -9)
      .attr('width', NODE_WIDTH + 18).attr('height', NODE_HEIGHT + 18)
      .attr('rx', NODE_RADIUS + 9).attr('ry', NODE_RADIUS + 9)
      .attr('fill', 'none').attr('stroke-width', 2).attr('opacity', 0);

    // Opaque background — prevents edges behind this node from bleeding through
    // the semi-transparent pill fill
    nodeGroup.append('rect').attr('class', 'node-bg')
      .attr('width', NODE_WIDTH).attr('height', NODE_HEIGHT)
      .attr('rx', NODE_RADIUS).attr('ry', NODE_RADIUS)
      .attr('fill', '#0b1410');

    // Pill — semi-transparent coloured overlay on top of the background
    nodeGroup.append('rect').attr('class', 'node-pill')
      .attr('width', NODE_WIDTH).attr('height', NODE_HEIGHT)
      .attr('rx', NODE_RADIUS).attr('ry', NODE_RADIUS);

    // Small dot indicating node category
    nodeGroup.append('circle').attr('class', 'cat-dot')
      .attr('cx', 16).attr('cy', NODE_HEIGHT / 2).attr('r', 4);

    // Text label container
    nodeGroup.append('g').attr('class', 'label-g');

    updateNodeAppearance(nodeGroup);
  }

  function updateNodeAppearance(selection) {
    const isFocused = datum => datum.id === state.focus;
    const isAncient = datum => datum.fd.parents.length === 0 && !datum.fd.extinct;

    selection.select('.node-glow')
      .attr('stroke', datum => isFocused(datum) ? nodeColor(datum) : 'none')
      .attr('opacity', datum => isFocused(datum) ? .6 : 0)
      .attr('filter',  datum => isFocused(datum) ? 'url(#glow)' : null);

    selection.select('.node-pill')
      .attr('fill',             datum => isFocused(datum) ? focusBgColor(datum) : nodeFillColor(datum))
      .attr('stroke',           datum => nodeColor(datum))
      .attr('stroke-width',     datum => isFocused(datum) ? 2.5 : 1.5)
      .attr('stroke-dasharray', datum => isAncient(datum) && !isFocused(datum) ? '7,3' : null);

    selection.select('.cat-dot')
      .attr('fill',    datum => nodeColor(datum))
      .attr('opacity', datum => isFocused(datum) ? 0 : .9);

    selection.select('.label-g').each(function (datum) {
      const labelGroup = d3.select(this);
      const textLines  = breakIntoLines(datum.id);
      const lineHeight = 14;
      const fontSize   = textLines.length > 1 ? 10.5 : 12;
      const ancientText = isAncient(datum)
        ? blendHex('#c8e0b8', blendHex(nodeColor(datum), '#ffffff', 0.5), 0.35)
        : '#ccc4b4';
      const textColor  = isFocused(datum) ? focusTextColor(datum) : ancientText;
      const labelX = isFocused(datum) ? NODE_WIDTH / 2 : NODE_WIDTH / 2 + 4;

      labelGroup.selectAll('text').remove();
      textLines.forEach((lineText, lineIndex) => {
        labelGroup.append('text')
          .attr('x', labelX)
          .attr('y', NODE_HEIGHT / 2 + (lineIndex - (textLines.length - 1) / 2) * lineHeight)
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
          .attr('font-size', `${fontSize}px`).attr('font-family', 'inherit')
          .attr('fill', textColor).attr('pointer-events', 'none')
          .text(lineText);
      });
    });
  }

  // ── Render ────────────────────────────────────────────────────────────────
  function render(animated = true) {
    const container = document.getElementById('graph-container');
    const width  = container.clientWidth;
    const height = container.clientHeight;
    svg.attr('width', width).attr('height', height);

    if (!state.focus) return;

    // Cancel in-flight animations and clear any stale dash attributes so that
    // interrupted edges are immediately fully visible on the next render.
    linkLayer.selectAll('.link')
      .interrupt()
      .attr('stroke-dasharray',  null)
      .attr('stroke-dashoffset', null)
      .attr('opacity', 1);
    nodeLayer.selectAll('.node-outer')
      .interrupt()
      .attr('opacity', 1);

    const { nodes, edges } = subgraph(state.focus, state.depth);
    layout(nodes, edges, width, height);

    const nodeById    = new Map(nodes.map(node => [node.id, node]));
    const focusedNode = nodeById.get(state.focus);
    const focusX = focusedNode?.x ?? width  / 2;
    const focusY = focusedNode?.y ?? height / 2;

    const edgeData = edges
      .filter(edge => nodeById.has(edge.src) && nodeById.has(edge.tgt))
      .map(edge => ({
        src:        edge.src,
        tgt:        edge.tgt,
        sourceNode: nodeById.get(edge.src),
        targetNode: nodeById.get(edge.tgt),
      }));

    // ── Edges ─────────────────────────────────────────────────────────────
    linkLayer.selectAll('.link')
      .data(edgeData, edge => `${edge.src}|${edge.tgt}`)
      .join(
        enter => {
          const enteringEdges = enter.append('path')
            .attr('class', 'link')
            .attr('fill', 'none')
            .attr('stroke-width', 1.5)
            .attr('stroke',     edge => `url(#${edgeGradientId(edge.sourceNode, edge.targetNode)})`)
            .attr('marker-end', edge => `url(#${arrowMarkerId(edge.targetNode)})`)
            .attr('d',          edge => edgePath(edge));

          if (animated) {
            enteringEdges.each(function (edge) {
              d3.select(this)
                .attr('opacity', 0)
                .transition()
                .delay(Math.abs(edge.sourceNode.layer) * WAVE_DELAY_MS)
                .on('start', function () {
                  // Dash attributes are set here, after the delay elapses, so
                  // that an interrupt() during the delay period leaves no stale
                  // dasharray in the DOM — the edge snaps to fully visible.
                  const pathLength = this.getTotalLength() || 1;
                  d3.select(this)
                    .attr('stroke-dasharray',  pathLength)
                    .attr('stroke-dashoffset', pathLength)
                    .attr('opacity', 1);
                })
                .duration(EDGE_DRAW_MS).ease(d3.easeCubicOut)
                .attr('stroke-dashoffset', 0)
                .on('end', function () {
                  d3.select(this)
                    .attr('stroke-dasharray',  null)
                    .attr('stroke-dashoffset', null);
                });
            });
          }
          return enteringEdges;
        },
        update => {
          // Stroke and marker-end are set synchronously, not inside the transition.
          // D3 string-interpolates URL references mid-transition which can produce
          // unresolvable gradient IDs and make the edge invisible.
          update
            .attr('stroke-dasharray',  null)
            .attr('stroke-dashoffset', null)
            .attr('opacity', 1)
            .attr('stroke',     edge => `url(#${edgeGradientId(edge.sourceNode, edge.targetNode)})`)
            .attr('marker-end', edge => `url(#${arrowMarkerId(edge.targetNode)})`);
          return update
            .transition().duration(animated ? NODE_SLIDE_MS : 0).ease(d3.easeCubicInOut)
            .attr('d', edge => edgePath(edge));
        },
        exit => exit
          .transition().duration(animated ? 200 : 0)
          .attr('opacity', 0).remove()
      );

    // ── Nodes ─────────────────────────────────────────────────────────────
    nodeLayer.selectAll('.node-outer')
      .data(nodes, node => node.id)
      .join(
        enter => {
          const nodeGroup = enter.append('g')
            .attr('class', 'node-outer')
            .attr('opacity', 0)
            .attr('transform', node => {
              const previous = previousNodePositions.get(node.id);
              const startX = previous ? previous.x - NODE_WIDTH  / 2 : focusX - NODE_WIDTH  / 2;
              const startY = previous ? previous.y - NODE_HEIGHT / 2 : focusY - NODE_HEIGHT / 2;
              return `translate(${startX},${startY})`;
            })
            .on('click', (event, node) => { event.stopPropagation(); setFocus(node.id); });

          buildNode(nodeGroup);

          nodeGroup.transition()
            .delay(animated ? node => Math.abs(node.layer) * WAVE_DELAY_MS : 0)
            .duration(NODE_FADE_MS).ease(d3.easeCubicOut)
            .attr('opacity', 1)
            .attr('transform', node =>
              `translate(${node.x - NODE_WIDTH / 2},${node.y - NODE_HEIGHT / 2})`);
          return nodeGroup;
        },
        update => {
          updateNodeAppearance(update);
          // Restore opacity: a node interrupted during its entry delay would
          // be stuck at opacity 0 without this explicit reset.
          update.attr('opacity', 1);
          return update
            .transition().duration(animated ? NODE_SLIDE_MS : 0).ease(d3.easeCubicInOut)
            .attr('transform', node =>
              `translate(${node.x - NODE_WIDTH / 2},${node.y - NODE_HEIGHT / 2})`);
        },
        exit => exit
          .transition().duration(animated ? 180 : 0)
          .attr('opacity', 0).remove()
      );

    previousNodePositions.clear();
    nodes.forEach(node => previousNodePositions.set(node.id, { x: node.x, y: node.y }));

    // Safety net: after the full animation window, snap any edge that still
    // carries dash attrs to fully visible. Catches any remaining edge cases
    // without depending on the animation bookkeeping being perfect.
    clearTimeout(edgeCleanupTimer);
    edgeCleanupTimer = setTimeout(() => {
      linkLayer.selectAll('.link')
        .attr('stroke-dasharray',  null)
        .attr('stroke-dashoffset', null)
        .attr('opacity', 1);
    }, WAVE_DELAY_MS * 5 + EDGE_DRAW_MS + 100);

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
    render(true);
  }

  // ── Random fruit button ───────────────────────────────────────────────────
  const allFruitNames = Object.keys(fruitData);
  document.getElementById('btn-random').addEventListener('click', () => {
    const candidates = allFruitNames.filter(name => name !== state.focus);
    setFocus(candidates[Math.floor(Math.random() * candidates.length)]);
  });

  // ── Info panel ────────────────────────────────────────────────────────────
  function updateInfoPanel() {
    const fruit = fruitData[state.focus];
    if (!fruit) return;

    const offspring = childrenByFruit[state.focus] ?? [];
    const isAncient = fruit.parents.length === 0 && !fruit.extinct;
    const isExtinct = fruit.extinct === true;

    const badgeClass = isExtinct ? 'extinct' : isAncient ? 'ancient' : (fruit.category || '');
    const badgeLabel = isExtinct ? '† Extinct'
                     : isAncient ? '🌿 Ancient / Fundamental'
                     : (fruit.category
                         ? fruit.category.charAt(0).toUpperCase() + fruit.category.slice(1)
                         : '');

    const fruitChips = names => names
      .map(name => `<button class="chip" data-name="${name}">${name}</button>`)
      .join('');

    const linksHtml = (fruit.links ?? [])
      .map(link => `<a class="info-link" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`)
      .join('');

    document.getElementById('info-content').innerHTML = `
      <div class="info-emoji">${fruit.emoji || '🍑'}</div>
      <div class="info-name">${state.focus}</div>
      <div class="info-sci">${fruit.scientificName}</div>
      <span class="info-badge ${badgeClass}">${badgeLabel}</span>
      <p class="info-desc">${fruit.description}</p>
      ${linksHtml ? `<div class="info-links">${linksHtml}</div>` : ''}
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
      render(true);
    }
  });
  document.getElementById('btn-fewer').addEventListener('click', () => {
    if (state.depth > 1) {
      state.depth--;
      svg.call(zoom.transform, d3.zoomIdentity);
      render(true);
    }
  });

  // ── Search ────────────────────────────────────────────────────────────────
  const searchInput      = document.getElementById('search-input');
  const suggestionsEl    = document.getElementById('suggestions');
  const sortedFruitNames = [...allFruitNames].sort();
  let highlightedIndex   = -1;

  function showSuggestions(query) {
    query = query.toLowerCase().trim();
    if (!query) { hideSuggestions(); return; }

    const matches = sortedFruitNames
      .filter(name => name.toLowerCase().includes(query))
      .slice(0, 9);
    if (!matches.length) { hideSuggestions(); return; }

    suggestionsEl.innerHTML = matches.map((name, index) => {
      const fruit     = fruitData[name];
      const isAncient = fruit.parents.length === 0;
      return `<li data-name="${name}" data-i="${index}">
        <span class="s-icon">${fruit.emoji || '🍑'}</span>
        <span class="s-name">${name}</span>
        <span class="s-sci">${fruit.scientificName}</span>
        ${isAncient ? '<span class="s-anc">🌿 ancient</span>' : ''}
      </li>`;
    }).join('');
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

  searchInput.addEventListener('input',   event => showSuggestions(event.target.value));
  searchInput.addEventListener('blur',    () => setTimeout(hideSuggestions, 140));
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

  // ── Suggestion modal ──────────────────────────────────────────────────────
  const suggestModal = document.getElementById('suggest-modal');
  const suggestFab   = document.getElementById('fab-suggest');

  suggestFab.addEventListener('click', () => suggestModal.showModal());
  document.getElementById('modal-close').addEventListener('click',  () => suggestModal.close());
  document.getElementById('modal-cancel').addEventListener('click', () => suggestModal.close());
  suggestModal.addEventListener('click', event => {
    if (event.target === suggestModal) suggestModal.close();
  });

  // Parent tag input
  const parentChipsContainer = document.getElementById('parent-chips');
  const parentInput          = document.getElementById('parent-text');
  const parentSuggestionsEl  = document.getElementById('parent-sugg');
  let selectedParents        = [];

  function renderSelectedParents() {
    parentChipsContainer.innerHTML = selectedParents
      .map(name =>
        `<span class="tag-chip">${name}<button data-tag="${name}" aria-label="remove">×</button></span>`)
      .join('');
    parentChipsContainer.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', () => {
        selectedParents = selectedParents.filter(name => name !== btn.dataset.tag);
        renderSelectedParents();
      })
    );
  }

  function showParentSuggestions(query) {
    query = query.toLowerCase().trim();
    if (!query) { parentSuggestionsEl.classList.remove('open'); return; }
    const matches = sortedFruitNames
      .filter(name => name.toLowerCase().includes(query) && !selectedParents.includes(name))
      .slice(0, 7);
    if (!matches.length) { parentSuggestionsEl.classList.remove('open'); return; }
    parentSuggestionsEl.innerHTML = matches.map(name => `<li data-name="${name}">${name}</li>`).join('');
    parentSuggestionsEl.classList.add('open');
    parentSuggestionsEl.querySelectorAll('li').forEach(item =>
      item.addEventListener('mousedown', event => {
        event.preventDefault();
        selectedParents.push(item.dataset.name);
        renderSelectedParents();
        parentInput.value = '';
        parentSuggestionsEl.classList.remove('open');
      })
    );
  }

  parentInput.addEventListener('input',   event => showParentSuggestions(event.target.value));
  parentInput.addEventListener('blur',    () => setTimeout(() => parentSuggestionsEl.classList.remove('open'), 140));
  parentInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const typed = parentInput.value.trim();
      if (typed && !selectedParents.includes(typed)) {
        selectedParents.push(typed);
        renderSelectedParents();
        parentInput.value = '';
      }
      parentSuggestionsEl.classList.remove('open');
    }
  });
  document.getElementById('parents-field').addEventListener('click', () => parentInput.focus());

  // JSON preview generator
  document.getElementById('modal-preview-btn').addEventListener('click', () => {
    const name = document.getElementById('s-name').value.trim();
    if (!name) { document.getElementById('s-name').focus(); return; }

    const entry = {
      scientificName: document.getElementById('s-sci').value.trim() || '',
      parents:        selectedParents,
      category:       document.getElementById('s-cat').value,
      emoji:          document.getElementById('s-emoji').value.trim() || '🍑',
      description:    document.getElementById('s-desc').value.trim() || '',
    };
    const status = document.getElementById('s-status').value;
    if (status === 'ancient' || status === 'extinct') entry.parents = [];
    if (status === 'extinct')  entry.extinct  = true;
    if (status === 'heritage') entry.heritage = true;

    const json = `"${name}": ${JSON.stringify(entry, null, 2).replace(/^/gm, '  ').trimStart()}`;
    document.getElementById('preview-code').textContent = json;
    document.getElementById('modal-preview').style.display = 'block';
    document.getElementById('modal-copy').style.display    = 'inline-flex';
  });

  document.getElementById('modal-copy').addEventListener('click', async function () {
    const previewText = document.getElementById('preview-code').textContent;
    try {
      await navigator.clipboard.writeText(previewText);
      this.textContent = '✓ Copied!';
      this.classList.add('copy-ok');
      setTimeout(() => {
        this.textContent = 'Copy to clipboard';
        this.classList.remove('copy-ok');
      }, 2200);
    } catch {
      const range = document.createRange();
      range.selectNode(document.getElementById('preview-code'));
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  });

  suggestModal.addEventListener('close', () => {
    document.getElementById('suggest-form').reset();
    selectedParents = [];
    renderSelectedParents();
    document.getElementById('modal-preview').style.display = 'none';
    document.getElementById('modal-copy').style.display    = 'none';
  });

  // ── Resize handler ────────────────────────────────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (state.focus) render(false); }, 80);
  });

  // ── Boot ──────────────────────────────────────────────────────────────────
  updateDepthButtons();
})();
