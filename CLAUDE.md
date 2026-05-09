# Fruit Tree — Research Guide for Claude

This file contains guidance for Claude on how to research and add new fruit entries to `data.js`.

---

## Data entry format

Each entry in `data.js` follows this schema:

```js
"Fruit Name": {
  scientificName: "Genus species 'Cultivar'",
  parents: ["Parent One", "Parent Two"],   // empty [] for ancient/wild types
  category: "apple | citrus | grape | mango | stone | berry | banana | ancient",
  emoji: "🍎",
  extinct: true,                           // only include if actually commercially extinct
  description: "2–4 sentences. Lead with origin/history, then key parentage fact, then modern significance. Cite the specific DNA study if one confirmed parentage.",
  links: [
    { label: "Author Year (Journal)", url: "https://doi.org/..." },
    { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/..." }
  ]
},
```

**Category values and their COLORS in the app:**
- `citrus` — amber/orange (lemons, limes, oranges, grapefruit, yuzu)
- `apple` — red (all Malus domestica cultivars)
- `grape` — purple (Vitis vinifera cultivars, wine and table grapes)
- `mango` — orange (Mangifera indica cultivars)
- `stone` — pink (Prunus species: peach, plum, cherry, apricot, nectarine + hybrids)
- `berry` — dark red (Rubus, Fragaria, and related berry hybrids)
- `banana` — yellow (Musa species and cultivars)

Nodes with empty `parents: []` automatically display as **ancient** (green) regardless of category. Nodes with `extinct: true` display as a brownish **extinct** colour.

---

## Confidence levels — how to write descriptions

Always distinguish confirmed parentage from traditional/disputed parentage:

| Situation | Language to use |
|-----------|----------------|
| DNA microsatellite study | "DNA fingerprinting by [Author, Year] confirmed…" |
| Documented breeding record | "Developed by [breeder] as a cross of…" |
| Traditional/unverified claim | "Traditionally believed to descend from… though parentage is undocumented." |
| Corrected by DNA | "Earlier records attributed it to X, but DNA analysis (Author, Year) revealed the actual parent is Y." |

If parentage is truly unknown, use `parents: []` and note the uncertainty in the description.

---

## Reliable sources — prioritised list

### DNA / genomic studies (highest reliability)
- **UC Davis Meredith Lab grape parentage papers** — the definitive source for wine grape genealogy:
  - Bowers & Meredith 1997, *Nature Genetics* 17: 84–87 — Chardonnay, many others
  - Meredith & Bowers 1999, *American Journal of Enology and Viticulture* 50(3): 249–255 — Cabernet Franc, Sauvignon Blanc
  - Bowers et al. 2000, *AJEV* 51(3): 236–241 — Syrah (Dureza × Mondeuse Blanche)
  - Boursiquot et al. 2009, *Australian Journal of Grape and Wine Research* — Merlot (Magdeleine Noire)
- **Florida mango DNA study**: Campbell et al. 2006, *Journal of ASHS* 131(2): 214–218 — corrects Keitt parentage
- **Banana genomics**: D'Hont et al. 2012, *Nature* 488: 213–217 — Musa acuminata genome
- **Nectarine mutation**: Leida et al. 2012, *BMC Plant Biology* 12: 168 — single locus G gene
- **Strawberry origin**: See Darrow (1966) *The Strawberry* (USDA monograph) for historical record

### Authoritative cultivar databases
- **Vitis International Variety Catalogue (VIVC)**: https://www.vivc.de/ — definitive wine grape pedigrees
- **USDA GRIN (Germplasm Resources Information Network)**: https://www.ars-grin.gov/ — plant accession and parentage records
- **USDA ARS National Clonal Germplasm Repository**: https://www.ars.usda.gov/pacific-west-area/davis-ca/national-clonal-germplasm-repository/
- **Washington State University Tree Fruit Research**: https://treefruit.wsu.edu/crop-resource/ — cherry and apple varieties
- **UC Cooperative Extension Mango**: https://ucanr.edu/ — California/Florida mango cultivar records
- **Royal Horticultural Society (RHS)**: https://www.rhs.org.uk/plants/ — UK berry and tree fruit cultivars

### Secondary reference (use for history/context, verify parentage claims separately)
- Wikipedia — good starting point for names/dates; always verify parentage claims against primary sources listed above

---

## Research workflow when adding new fruits

1. **Start with Wikipedia** to get an overview and spot-check names, dates, breeders.
2. **Search VIVC** (for grapes) or **USDA GRIN** (for other fruits) for the official parentage record.
3. **Find the original DNA study** if one exists — search Google Scholar: `"[variety name]" parentage microsatellite SSR`.
4. **Cross-check**: if the Wikipedia parentage matches the DNA study, write "DNA fingerprinting confirmed…". If they conflict, trust the peer-reviewed DNA paper and note the discrepancy.
5. **Use DOI links** (`https://doi.org/...`) for journal papers wherever possible — these are stable and verifiable.

---

## Categories to consider adding in future

Fruits with interesting genealogy not yet in the database:
- **Pears** (Pyrus): Bartlett/Williams, Conference, Comice — relatively simple lineage
- **Watermelon**: modern seedless triploids (wild Citrullus lanatus × tetraploid crosses)
- **Kiwi**: Hayward (Actinidia deliciosa 'Hayward') from wild Chinese gooseberry
- **Avocado**: Mexican, Guatemalan, and West Indian races; Hass (a seedling of Guatemalan × Mexican cross)
- **Blueberry**: Highbush (Vaccinium corymbosum hybrid complex) — interesting wild parent story
- **Pomelo × grapefruit hybrids**: Oroblanco, Melogold (UC Riverside crosses of grapefruit and pomelo beyond what's already in citrus section)
- **Olive cultivars**: Arbequina, Koroneiki — minimal breeding history, but ancient origin story
- **Fig**: Smyrna vs. Common vs. San Pedro types — interesting pollination biology (caprifig wasp)
