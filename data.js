// fruitData — generic format. Add any category by extending this object.
// parents: []  → fundamental wild species with no tracked ancestry in this dataset.
// links: []    → optional array of { label, url } for the info panel.
// extinct: true → mark a cultivar as no longer in commercial cultivation.
// heritage: true → rare / heritage variety, still grown but uncommon.
const fruitData = {

  // ══════════════════════════════════════════════════════════════════════════
  //  CITRUS — Fundamental species
  // ══════════════════════════════════════════════════════════════════════════

  "Pomelo": {
    scientificName: "Citrus maxima",
    parents: [],
    category: "citrus",
    emoji: "🍈",
    description: "One of the three original citrus species and the largest citrus fruit. Native to Southeast Asia, with a thick spongy rind and mildly sweet flesh. Ancestor of nearly every commercial citrus variety through centuries of natural hybridisation.",
    links: [
      { label: "UCR Citrus Variety Collection", url: "https://citrusvariety.ucr.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomelo" }
    ]
  },

  "Mandarin": {
    scientificName: "Citrus reticulata",
    parents: [],
    category: "citrus",
    emoji: "🍊",
    description: "One of the three original citrus species. Small, easy-to-peel, and sweet — native to northeast India and China. Tangerines, satsumas, and clementines all trace lineage here. The most genetically diverse of the three progenitor species.",
    links: [
      { label: "UCR Citrus Variety Collection", url: "https://citrusvariety.ucr.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mandarin_orange" }
    ]
  },

  "Citron": {
    scientificName: "Citrus medica",
    parents: [],
    category: "citrus",
    emoji: "🍋",
    description: "One of the three original citrus species. Mostly thick, intensely fragrant rind with very little juice. One of the oldest cultivated fruits — used in ancient religious ceremonies across Asia and the Mediterranean, and the foundation of lemons and limes.",
    links: [
      { label: "UCR Citrus Variety Collection", url: "https://citrusvariety.ucr.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Citron" }
    ]
  },

  "Ichang Papeda": {
    scientificName: "Citrus cavaleriei",
    parents: [],
    category: "citrus",
    emoji: "🟡",
    description: "An ancient cold-hardy citrus from the mountains of southwest China and the Himalayas. Rarely eaten on its own but genetically important as a progenitor of Yuzu and several other East Asian citrus varieties that tolerate cold winters.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ichang_papeda" }
    ]
  },

  "Micrantha": {
    scientificName: "Citrus micrantha",
    parents: [],
    category: "citrus",
    emoji: "🟢",
    description: "A papeda species native to the Philippines with small white flowers and intensely aromatic fruit. Rarely used directly but critical as an ancestor of the key lime — one of the most commercially important limes in the world.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Citrus_micrantha" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CITRUS — Derived varieties
  // ══════════════════════════════════════════════════════════════════════════

  "Sweet Orange": {
    scientificName: "Citrus × sinensis",
    parents: ["Pomelo", "Mandarin"],
    category: "citrus",
    emoji: "🍊",
    description: "The world's most widely cultivated fruit — a natural hybrid of pomelo and mandarin that likely arose in southern China or Vietnam. Over 600 named cultivars exist, including Navel, Valencia, and Blood Orange. Source of the word 'orange' across many languages.",
    links: [
      { label: "UCR: Sweet Orange", url: "https://citrusvariety.ucr.edu/citrus/sweet-orange" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Orange_(fruit)" }
    ]
  },

  "Sour Orange": {
    scientificName: "Citrus × aurantium",
    parents: ["Pomelo", "Mandarin"],
    category: "citrus",
    emoji: "🟠",
    description: "Also called bitter orange. A pomelo–mandarin hybrid with a different genetic balance from the sweet orange — more pomelo influence gives it intensely bitter juice. Used in Seville marmalade, Grand Marnier and Cointreau liqueurs, and high-end perfumery. The trees are ornamental and cold-hardy.",
    links: [
      { label: "UCR Citrus Collection", url: "https://citrusvariety.ucr.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bitter_orange" }
    ]
  },

  "Lemon": {
    scientificName: "Citrus × limon",
    parents: ["Citron", "Sour Orange"],
    category: "citrus",
    emoji: "🍋",
    description: "A citron–sour orange hybrid that likely originated in northwest India or Pakistan between 1,000–2,000 years ago. The world's most widely used sour citrus — valued for juice, zest, and as a natural preservative. Introduced to Europe by Arab traders in the 10th century.",
    links: [
      { label: "UCR: Lemon", url: "https://citrusvariety.ucr.edu/citrus/lemon" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lemon" }
    ]
  },

  "Key Lime": {
    scientificName: "Citrus × aurantiifolia",
    parents: ["Citron", "Micrantha"],
    category: "citrus",
    emoji: "💚",
    description: "A cross of citron and the papeda micrantha, originating in Southeast Asia and reaching the Caribbean via Arab and Portuguese traders. Smaller, more aromatic, and more tart than the Persian lime. Famous for Key Lime pie and historically important in the Florida Keys.",
    links: [
      { label: "UCR: Key Lime", url: "https://citrusvariety.ucr.edu/citrus/lime" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Key_lime" }
    ]
  },

  "Yuzu": {
    scientificName: "Citrus × junos",
    parents: ["Ichang Papeda", "Mandarin"],
    category: "citrus",
    emoji: "🟡",
    description: "A cold-hardy hybrid of Ichang papeda and mandarin that has been cultivated in Japan and Korea for over 1,000 years. Prized almost exclusively for its intensely fragrant zest and tart juice rather than fresh eating. A cornerstone of East Asian cuisine and increasingly popular globally.",
    links: [
      { label: "UCR: Yuzu", url: "https://citrusvariety.ucr.edu/citrus/yuzu" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Yuzu" }
    ]
  },

  "Grapefruit": {
    scientificName: "Citrus × paradisi",
    parents: ["Sweet Orange", "Pomelo"],
    category: "citrus",
    emoji: "🍊",
    description: "A backcross of sweet orange with pomelo, first documented in Barbados in the 18th century. Named for the way fruits hang in clusters like bunches of grapes on the tree. Now one of the most consumed citrus fruits globally, with significant pharmaceutical interactions due to furanocoumarins.",
    links: [
      { label: "UCR: Grapefruit", url: "https://citrusvariety.ucr.edu/citrus/grapefruit" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grapefruit" }
    ]
  },

  "Clementine": {
    scientificName: "Citrus × clementina",
    parents: ["Sour Orange", "Mandarin"],
    category: "citrus",
    emoji: "🍊",
    description: "Believed to be a chance seedling discovered by Father Clément Rodier in Algeria around 1902, likely a natural cross between sour orange and mandarin. Seedless, easy to peel, and intensely sweet. Now one of the most commercially important mandarins worldwide.",
    links: [
      { label: "UCR: Clementine", url: "https://citrusvariety.ucr.edu/citrus/clementine" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clementine" }
    ]
  },

  "Blood Orange": {
    scientificName: "Citrus × sinensis (Blood group)",
    parents: ["Sweet Orange"],
    category: "citrus",
    emoji: "🔴",
    description: "A natural mutation of the sweet orange with deep crimson flesh caused by anthocyanin pigments, which develop in response to cold temperature swings during ripening. Originated in Sicily. The three main varieties — Moro, Tarocco, and Sanguinello — each have distinct flavour profiles. Tarocco is the sweetest.",
    links: [
      { label: "UCR: Blood Orange", url: "https://citrusvariety.ucr.edu/citrus/blood-orange" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Blood_orange" }
    ]
  },

  "Cara Cara Orange": {
    scientificName: "Citrus × sinensis 'Cara Cara'",
    parents: ["Sweet Orange"],
    category: "citrus",
    emoji: "🌸",
    description: "A bud mutation of the Washington Navel orange discovered in 1976 at the Hacienda Cara Cara in Venezuela. Has pinkish-red flesh due to lycopene (not anthocyanins like blood oranges) and a notably sweeter, berry-like flavour with lower acidity than standard navel oranges.",
    links: [
      { label: "UCR: Cara Cara", url: "https://citrusvariety.ucr.edu/crc3994" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cara_cara_navel" }
    ]
  },

  "Ponkan": {
    scientificName: "Citrus reticulata 'Ponkan'",
    parents: ["Mandarin"],
    category: "citrus",
    emoji: "🍊",
    description: "A large, loose-skinned mandarin variety widely grown in China, Taiwan, Japan, and Brazil. Easy to peel with a mild, honey-sweet flavour. One of the most produced mandarin cultivars in the world by volume, and an important parent of the Sumo / Dekopon citrus.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ponkan" }
    ]
  },

  "Kiyomi": {
    scientificName: "Citrus × kiyomi",
    parents: ["Mandarin", "Sweet Orange"],
    category: "citrus",
    emoji: "🍊",
    description: "A Japanese tangor — a mandarin–orange hybrid — developed at the Okitsu Branch of the National Citrus Research Station in 1949. First released commercially in Japan in 1979. Sweet, juicy, and easy-peel. Primarily important as a parent of the popular Sumo (Dekopon) citrus.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kiyomi_(citrus)" }
    ]
  },

  "Sumo Citrus": {
    scientificName: "Citrus × shiranui",
    parents: ["Kiyomi", "Ponkan"],
    category: "citrus",
    emoji: "🍊",
    description: "Also known as Dekopon in Japan — a seedless, easy-peel mandarin–orange hybrid developed in Japan in 1972 and released in 1972. Named for the characteristic bump on its crown. Now one of the most prized and expensive citrus varieties in the world for its extraordinary sweetness and low acidity.",
    links: [
      { label: "UCR: Shiranui", url: "https://citrusvariety.ucr.edu/crc4249" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dekopon" }
    ]
  },

  "Meyer Lemon": {
    scientificName: "Citrus × meyeri",
    parents: ["Lemon", "Mandarin"],
    category: "citrus",
    emoji: "🍋",
    description: "A sweeter, thin-skinned lemon hybrid thought to be a cross of lemon and mandarin orange. Brought to the United States from China by Frank Meyer in 1908. Prized by chefs for its floral aroma, deep yellow skin, and significantly lower acidity compared to Eureka or Lisbon lemons.",
    links: [
      { label: "UCR: Meyer Lemon", url: "https://citrusvariety.ucr.edu/citrus/lemon" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Meyer_lemon" }
    ]
  },

  "Persian Lime": {
    scientificName: "Citrus × latifolia",
    parents: ["Key Lime", "Lemon"],
    category: "citrus",
    emoji: "🍋",
    description: "The common supermarket lime — a triploid hybrid (three sets of chromosomes) of key lime and lemon. Seedless, thick-skinned, and less aromatic than key lime, which makes it ideal for long-distance shipping. Developed in Persia and brought to North America through California.",
    links: [
      { label: "UCR: Persian Lime", url: "https://citrusvariety.ucr.edu/citrus/lime" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Persian_lime" }
    ]
  },

  "Tangelo": {
    scientificName: "Citrus × tangelo",
    parents: ["Mandarin", "Grapefruit"],
    category: "citrus",
    emoji: "🍊",
    description: "A broad class of mandarin–grapefruit hybrids first created by the USDA in the 1890s. Juicy and easy to peel, with a flavour more complex than either parent. The Minneola Tangelo (Duncan Grapefruit × Dancy Mandarin, released 1931) is the most recognised variety, identifiable by its characteristic nipple-like stem end.",
    links: [
      { label: "UCR: Minneola Tangelo", url: "https://citrusvariety.ucr.edu/crc3340" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tangelo" }
    ]
  },

  "Oroblanco": {
    scientificName: "Citrus maxima × Citrus × paradisi",
    parents: ["Pomelo", "Grapefruit"],
    category: "citrus",
    emoji: "🍋",
    description: "A pomelo–grapefruit hybrid developed by H.B. Frost at UC Riverside's Citrus Research Center in 1958 and licensed to Sunkist in 1981 — one of the first patented citrus varieties in the United States. Marketed as 'Oroblanco' (Spanish for 'white gold') in the US and as 'Sweetie' in Israel and Europe. Nearly seedless with white flesh, very low naringin content, and essentially no bitterness — much sweeter and milder than grapefruit. Because grapefruit is itself a pomelo × sweet orange cross, Oroblanco back-crosses toward pomelo ancestry and carries roughly three-quarters pomelo genetics overall.",
    links: [
      { label: "UCR Citrus Variety Collection", url: "https://citrusvariety.ucr.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oroblanco" }
    ]
  },

  "Melogold": {
    scientificName: "Citrus maxima × Citrus × paradisi",
    parents: ["Pomelo", "Grapefruit"],
    category: "citrus",
    emoji: "🍋",
    description: "A sibling selection to Oroblanco from the same UC Riverside pomelo–grapefruit breeding programme, developed by H.B. Frost and licensed to Sunkist in 1986. Named to evoke honey ('melo') and gold. Produces larger fruit than Oroblanco with a thicker skin and slightly more grapefruit-like tartness, while remaining far less bitter than standard grapefruit. The two siblings represent the two main commercial outcomes of the UC Riverside programme; Oroblanco is the more internationally recognised name while Melogold is preferred in some specialty markets.",
    links: [
      { label: "UCR Citrus Variety Collection", url: "https://citrusvariety.ucr.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Melogold" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  APPLES — Fundamental species
  // ══════════════════════════════════════════════════════════════════════════

  "Wild Kazakh Apple": {
    scientificName: "Malus sieversii",
    parents: [],
    category: "apple",
    emoji: "🍎",
    description: "The primary wild ancestor of virtually all domestic apples, native to the mountains of Kazakhstan, Kyrgyzstan, and the Tian Shan range. Forests of this species still grow in Central Asia. Its seeds were spread westward by bears, birds, and traders along the Silk Road over thousands of years.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Malus_sieversii" },
      { label: "USDA Plant Profile", url: "https://plants.usda.gov/home/plantProfile?symbol=MASI2" }
    ]
  },

  "European Crab Apple": {
    scientificName: "Malus sylvestris",
    parents: [],
    category: "apple",
    emoji: "🍏",
    description: "A small, tart wild apple native to Europe that interbred with the domesticated Kazakh apple as it spread westward. Genetic studies show it contributed distinct traits — particularly cold hardiness and disease resistance — to modern European apple cultivars including Granny Smith.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Malus_sylvestris" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  APPLES — Base cultivars (origin unknown or chance seedlings)
  // ══════════════════════════════════════════════════════════════════════════

  "Golden Delicious": {
    scientificName: "Malus domestica 'Golden Delicious'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍏",
    description: "A chance seedling discovered around 1890 on the Mullins farm in Clay County, West Virginia. Yellow-green, mild, and sweet. One of the most genetically influential apple cultivars ever — it appears in the lineage of Gala, Honeygold, Pink Lady, Cosmic Crisp, Enterprise, and dozens of others worldwide.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Golden_Delicious" }
    ]
  },

  "Red Delicious": {
    scientificName: "Malus domestica 'Red Delicious'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    description: "A chance seedling discovered around 1880 on a farm in Peru, Iowa by Jesse Hiatt. Once the most commercially sold apple in the United States. Deep red and elongated with a mild flavour; fell from favour in the 2000s as consumers shifted toward tarter varieties. A foundational parent of Fuji and Kidd's Orange Red.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Red_Delicious" }
    ]
  },

  "McIntosh": {
    scientificName: "Malus domestica 'McIntosh'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    description: "Discovered as a chance seedling on a farm in Dundela, Ontario, Canada around 1811 by John McIntosh. Soft, juicy, and tart with a distinctive red-and-green striped skin. The national apple of Canada. A deeply influential cultivar — grandparent or great-grandparent of Gala, Honeycrisp, Empire, Cortland, and many more.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/McIntosh_(apple)" }
    ]
  },

  "Granny Smith": {
    scientificName: "Malus domestica 'Granny Smith'",
    parents: ["Wild Kazakh Apple", "European Crab Apple"],
    category: "apple",
    emoji: "🍏",
    description: "Discovered as a chance seedling by Maria Ann 'Granny' Smith in New South Wales, Australia around 1868. Intensely tart, with bright green skin and very firm, dense flesh. Exceptional for cooking and baking. One of the first Southern Hemisphere apples to achieve worldwide commercial success.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Granny_Smith" }
    ]
  },

  "Cox's Orange Pippin": {
    scientificName: "Malus domestica 'Cox's Orange Pippin'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    heritage: true,
    description: "Raised by nurseryman Richard Cox in Colnbrook, England around 1825. Complex, aromatic, and balanced — it is considered the benchmark for flavour in British apple growing and remains the most widely grown apple in the UK despite being challenging to cultivate. Parent of many English dessert apples.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cox%27s_Orange_Pippin" }
    ]
  },

  "Ralls Janet": {
    scientificName: "Malus domestica 'Ralls Janet'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    heritage: true,
    description: "An old American cultivar believed to have been introduced from France. Late ripening with a complex, wine-like flavour and tough skin that helped it resist cold storage. Thomas Jefferson reportedly grew it at Monticello. Its late-ripening genetics were specifically sought when breeding Fuji apple in Japan.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ralls_Janet" }
    ]
  },

  "Lady Williams": {
    scientificName: "Malus domestica 'Lady Williams'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    description: "An Australian cultivar discovered as a chance seedling in Western Australia around 1935. Very late season, firm, and tangy with a deep red skin. Selected as a parent of Pink Lady specifically for its structural qualities, firm flesh, and long storability.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cripps_Pink" }
    ]
  },

  "Jersey Black": {
    scientificName: "Malus domestica 'Jersey Black'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    heritage: true,
    description: "An old American cultivar from New Jersey, notable for its unusually deep dark-red to almost black skin and rich flavour. Primarily significant today as a parent of the Macoun apple. Rarely found in commercial orchards.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jersey_Black" }
    ]
  },

  "Haralson": {
    scientificName: "Malus domestica 'Haralson'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍏",
    description: "Developed at the University of Minnesota Horticultural Research Center, released in 1923 and named after orchardist Charles Haral. Exceptionally cold-hardy, surviving temperatures below −40°C. Tart and firm — excellent for cooking. One of the most popular apples in the upper Midwest and a parent of Honeygold.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Haralson_(apple)" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  APPLES — Hybrid cultivars (verified parentage)
  // ══════════════════════════════════════════════════════════════════════════

  "Kidd's Orange Red": {
    scientificName: "Malus domestica 'Kidd's Orange Red'",
    parents: ["Cox's Orange Pippin", "Red Delicious"],
    category: "apple",
    emoji: "🍎",
    description: "Bred by J.H. Kidd in New Zealand by crossing Cox's Orange Pippin with Red Delicious. Released in the 1920s. Fragrant, sweet, and complex — inheriting Cox's aromatics and Red Delicious's firm texture. Primarily significant as the parent that passed Cox's orange-spice character into the Gala lineage.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kidd%27s_Orange_Red" }
    ]
  },

  "Macoun": {
    scientificName: "Malus domestica 'Macoun'",
    parents: ["McIntosh", "Jersey Black"],
    category: "apple",
    emoji: "🍎",
    description: "Bred at the New York State Agricultural Experiment Station in Geneva, released in 1923 — a cross of McIntosh and Jersey Black named after horticulturist W.T. Macoun. Sweet, aromatic, and tender. A genuine cult favourite in New England for fresh eating, and a proven parent of Honeycrisp.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Macoun_(apple)" }
    ]
  },

  "Honeygold": {
    scientificName: "Malus domestica 'Honeygold'",
    parents: ["Golden Delicious", "Haralson"],
    category: "apple",
    emoji: "🍏",
    description: "Developed at the University of Minnesota Horticultural Research Center, released in 1969 as a cross of Golden Delicious and Haralson. Honey-sweet with a buttery texture, and sufficiently cold-hardy for upper Midwest climates where Golden Delicious cannot thrive. One of the two parents of Honeycrisp.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Honeygold" }
    ]
  },

  "Enterprise": {
    scientificName: "Malus domestica 'Enterprise'",
    parents: ["Golden Delicious", "McIntosh"],
    category: "apple",
    emoji: "🍎",
    description: "A disease-resistant cultivar developed collaboratively by Purdue, Rutgers, and Illinois universities (the 'PRI' program), released in 1994. Resistant to apple scab, powdery mildew, and fire blight — making it attractive for low-spray orchards. Selected as a parent of Cosmic Crisp for these disease-resistance traits.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Enterprise_(apple)" }
    ]
  },

  "Fuji": {
    scientificName: "Malus domestica 'Fuji'",
    parents: ["Red Delicious", "Ralls Janet"],
    category: "apple",
    emoji: "🍎",
    description: "Developed at the Tohoku Research Station in Fujisaki, Japan starting in the 1930s, officially released in 1962. A cross of Red Delicious and Ralls Janet that combines sweetness, crunch, and long shelf life. Now the most widely grown apple variety in the world by production volume, especially dominant in China.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fuji_(apple)" }
    ]
  },

  "Gala": {
    scientificName: "Malus domestica 'Gala'",
    parents: ["Kidd's Orange Red", "Golden Delicious"],
    category: "apple",
    emoji: "🍎",
    description: "Bred in New Zealand by J.H. Kidd by crossing Kidd's Orange Red with Golden Delicious, developed and released commercially by orchardist D.W. McKenzie in the 1970s. Mild, sweet, and reliably crisp. Now the most sold apple variety in both the United States and the United Kingdom by volume.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gala_(apple)" }
    ]
  },

  "Braeburn": {
    scientificName: "Malus domestica 'Braeburn'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    description: "A chance seedling discovered around 1952 in the Braeburn Orchards near Nelson, New Zealand. True parentage is unknown — confirmed only as a domesticated apple. Sweet-tart with a firm, dense flesh and distinctive red-orange flush. Excellent storage life up to a year. One of the parents of both Jazz and Envy apples.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Braeburn" }
    ]
  },

  "Honeycrisp": {
    scientificName: "Malus domestica 'Honeycrisp'",
    parents: ["Macoun", "Honeygold"],
    category: "apple",
    emoji: "🍎",
    description: "Developed at the University of Minnesota Horticultural Research Center, released in 1991 as a cross of Macoun and Honeygold. Famous for its explosive, almost effervescent crunch caused by unusually large cells that burst with juice when bitten. Now one of the top-selling and most expensive apples in North America.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Honeycrisp" }
    ]
  },

  "Zestar!": {
    scientificName: "Malus domestica 'Zestar!'",
    parents: ["Wild Kazakh Apple"],
    category: "apple",
    emoji: "🍎",
    description: "Developed at the University of Minnesota, released in 1999. An early-season apple with a sweet-tart flavour and lively effervescence, intended to provide a high-quality fresh apple in late summer. Notable primarily as one of the two parents of the SweeTango apple.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Zestar!_(apple)" }
    ]
  },

  "Pink Lady": {
    scientificName: "Malus domestica 'Cripps Pink'",
    parents: ["Golden Delicious", "Lady Williams"],
    category: "apple",
    emoji: "🍎",
    description: "Bred by John Cripps at the Western Australian Department of Agriculture in the 1970s by crossing Golden Delicious with Lady Williams. Distinctive pink-blushed skin, exceptionally firm and dense flesh, and a balanced sweet-tart flavour. 'Pink Lady' is a trademarked brand name for premium-grade Cripps Pink fruit.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cripps_Pink" }
    ]
  },

  "Jazz": {
    scientificName: "Malus domestica 'Scifresh'",
    parents: ["Gala", "Braeburn"],
    category: "apple",
    emoji: "🍎",
    description: "A Gala × Braeburn cross developed by plant breeder Mala Krishnamurthi in New Zealand in the 1980s and commercialized by ENZA under the 'Jazz' trademark in 2004. Firm, dense, and sweet with a refreshing pear-like note. One of the first modern apples to be aggressively marketed as a consumer brand. Sibling variety of Envy apple.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jazz_(apple)" }
    ]
  },

  "Envy": {
    scientificName: "Malus domestica 'Scilate'",
    parents: ["Gala", "Braeburn"],
    category: "apple",
    emoji: "🍎",
    description: "A Gala × Braeburn cross bred by Plant and Food Research New Zealand in 1985 and launched commercially by Scilate Ltd. in 2009. Sweet with very low acidity, crisp texture, and resistance to browning when cut — making it popular for foodservice. A sibling variety of Jazz apple, sharing identical parents.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Envy_(apple)" }
    ]
  },

  "SweeTango": {
    scientificName: "Malus domestica 'Minneiska'",
    parents: ["Honeycrisp", "Zestar!"],
    category: "apple",
    emoji: "🍎",
    description: "A Honeycrisp × Zestar! cross developed at the University of Minnesota, released in 2009 as 'SweeTango' (the trademarked name for variety Minneiska). Combines Honeycrisp's legendary crunch with Zestar!'s early-season harvest window and complex sweet-spicy flavour. One of the fastest-selling new apple introductions in recent memory.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/SweeTango" }
    ]
  },

  "Cosmic Crisp": {
    scientificName: "Malus domestica 'WA 38'",
    parents: ["Honeycrisp", "Enterprise"],
    category: "apple",
    emoji: "✨",
    description: "Developed over 20 years by Washington State University breeder Bruce Barritt, released exclusively to licensed Washington orchards in December 2019 in the largest apple launch in US history. A Honeycrisp × Enterprise cross with explosive juicy crunch, a balanced sweet-tart flavour, and an extraordinary 10–12 month refrigerated storage life.",
    links: [
      { label: "WSU Cosmic Crisp", url: "https://cosmiccrisp.com/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cosmic_Crisp" }
    ]
  },

  // ── Grapes ────────────────────────────────────────────────────────────────

  "Wild European Grape": {
    scientificName: "Vitis vinifera subsp. sylvestris",
    parents: [],
    category: "grape",
    emoji: "🍇",
    description: "The wild ancestor of all European wine grapes, growing natively across Europe and western Asia. DNA fingerprinting by UC Davis researchers revealed that virtually every major wine variety traces back to this single wild species domesticated roughly 8,000 years ago near the Caucasus Mountains.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vitis_vinifera" },
      { label: "Meredith et al. 1999 (UC Davis)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC17934/" }
    ]
  },

  "North American Fox Grape": {
    scientificName: "Vitis labrusca",
    parents: [],
    category: "grape",
    emoji: "🍇",
    description: "Native to eastern North America and parent of most American table and juice grape varieties. Named for its musky 'foxy' aroma due to the compound methyl anthranilate. Naturally resistant to phylloxera, the louse that devastated European vineyards in the 19th century.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vitis_labrusca" }
    ]
  },

  "Gouais Blanc": {
    scientificName: "Vitis vinifera 'Gouais Blanc'",
    parents: [],
    category: "grape",
    emoji: "🍇",
    description: "An ancient white grape variety once common across medieval Europe but largely forgotten today. DNA analysis by Bowers and Meredith (UC Davis, 1997) revealed it is a prolific parent of many elite wine grapes, including Chardonnay, Gamay, and Aligoté — a remarkable legacy for a grape long considered peasant wine.",
    links: [
      { label: "Bowers & Meredith 1997 (Nature Genetics)", url: "https://doi.org/10.1038/ng0597-84" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gouais_blanc" }
    ]
  },

  "Pinot Noir": {
    scientificName: "Vitis vinifera 'Pinot Noir'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍷",
    description: "One of the world's most celebrated red wine grapes, cultivated in Burgundy for over 2,000 years. Notoriously difficult to grow ('heartbreak grape'), it produces thin-skinned berries highly sensitive to climate. DNA work confirmed it is a likely natural selection from wild Vitis vinifera and is one parent of Chardonnay.",
    links: [
      { label: "Bowers & Meredith 1997 (Nature Genetics)", url: "https://doi.org/10.1038/ng0597-84" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pinot_noir" }
    ]
  },

  "Cabernet Franc": {
    scientificName: "Vitis vinifera 'Cabernet Franc'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍷",
    description: "An ancient Basque variety and one parent of both Cabernet Sauvignon and Merlot. DNA analysis by Meredith and Bowers (1999) confirmed the parentage. Produces wines with herbal, violet, and raspberry notes; widely planted in the Loire Valley and right-bank Bordeaux.",
    links: [
      { label: "Meredith & Bowers 1999 (American Journal of Enology)", url: "https://doi.org/10.5344/ajev.1999.50.3.249" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cabernet_Franc" }
    ]
  },

  "Sauvignon Blanc": {
    scientificName: "Vitis vinifera 'Sauvignon Blanc'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍷",
    description: "A crisp, aromatic white grape originating in southwestern France. Confirmed by DNA as one of the two parents of Cabernet Sauvignon (with Cabernet Franc). Thrives in the Loire Valley, Bordeaux, and New Zealand's Marlborough region, where it developed a signature grassy, passionfruit character.",
    links: [
      { label: "Meredith & Bowers 1999 (American Journal of Enology)", url: "https://doi.org/10.5344/ajev.1999.50.3.249" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sauvignon_blanc" }
    ]
  },

  "Magdeleine Noire des Charentes": {
    scientificName: "Vitis vinifera 'Magdeleine Noire des Charentes'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍇",
    description: "A rare, nearly extinct southwestern French grape rediscovered via DNA sleuthing. Boursiquot et al. (2009) confirmed it is the previously unknown second parent of Merlot — the other parent being Cabernet Franc. Now maintained in conservation vineyards to preserve its genetic legacy.",
    links: [
      { label: "Boursiquot et al. 2009 (Australian Journal of Grape and Wine Research)", url: "https://doi.org/10.1111/j.1755-0238.2009.00051.x" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Merlot#Parentage" }
    ]
  },

  "Dureza": {
    scientificName: "Vitis vinifera 'Dureza'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍇",
    description: "An obscure dark-skinned variety from the Ardèche region of France. DNA analysis confirmed it is one of the two parents of Syrah (the other being Mondeuse Blanche). Like Magdeleine Noire des Charentes, Dureza would be virtually unknown today were it not for its famous offspring.",
    links: [
      { label: "Bowers et al. 2000 (Journal of Enology & Viticulture)", url: "https://www.ajevonline.org/content/51/3/236" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Syrah#Origins" }
    ]
  },

  "Mondeuse Blanche": {
    scientificName: "Vitis vinifera 'Mondeuse Blanche'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍇",
    description: "A white grape from Savoie in the French Alps, and one of two parents of Syrah confirmed by UC Davis researchers. Rarely vinified on its own today, it is mainly of scientific interest as the white-grape parent of one of the world's most widely grown red wine varieties.",
    links: [
      { label: "Bowers et al. 2000 (Journal of Enology & Viticulture)", url: "https://www.ajevonline.org/content/51/3/236" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mondeuse_blanche" }
    ]
  },

  "Thompson Seedless": {
    scientificName: "Vitis vinifera 'Sultanina'",
    parents: ["Wild European Grape"],
    category: "grape",
    emoji: "🍇",
    description: "The world's most widely planted table and raisin grape, known as Sultana in much of the world. Introduced to California by William Thompson in 1872 from a Muscat family cutting. Its seedlessness results from a natural parthenocarpy mutation. Also widely used as the base grape for commercial raisins.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sultana_(grape)" }
    ]
  },

  "Chardonnay": {
    scientificName: "Vitis vinifera 'Chardonnay'",
    parents: ["Pinot Noir", "Gouais Blanc"],
    category: "grape",
    emoji: "🍷",
    description: "The world's most popular white wine grape. DNA analysis by Bowers and Meredith (UC Davis, 1997) confirmed it is a natural cross of Pinot Noir and Gouais Blanc — a result that surprised the wine world since Gouais Blanc was a despised peasant grape. Now grown in virtually every wine region on earth.",
    links: [
      { label: "Bowers & Meredith 1997 (Nature Genetics)", url: "https://doi.org/10.1038/ng0597-84" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chardonnay" }
    ]
  },

  "Gamay": {
    scientificName: "Vitis vinifera 'Gamay Noir'",
    parents: ["Pinot Noir", "Gouais Blanc"],
    category: "grape",
    emoji: "🍷",
    description: "The light-bodied red grape of Beaujolais — and a genetic sibling of Chardonnay. DNA fingerprinting by Bowers and Meredith (UC Davis, 1997) confirmed that Gamay shares the exact same parents as Chardonnay (Pinot Noir × Gouais Blanc), meaning the grape behind Beaujolais Nouveau and the world's most popular white wine variety arose from the same accidental medieval cross. Gamay was famously banned from Burgundy by Duke Philip the Bold in 1395, who declared it an 'evil and disloyal plant' — an edict that ironically forced it into the Beaujolais region where it thrived.",
    links: [
      { label: "Bowers & Meredith 1997 (Nature Genetics)", url: "https://doi.org/10.1038/ng0597-84" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gamay" }
    ]
  },

  "Cabernet Sauvignon": {
    scientificName: "Vitis vinifera 'Cabernet Sauvignon'",
    parents: ["Cabernet Franc", "Sauvignon Blanc"],
    category: "grape",
    emoji: "🍷",
    description: "The world's most planted wine grape variety. A spontaneous natural cross of Cabernet Franc and Sauvignon Blanc, confirmed by DNA fingerprinting in a landmark 1997 paper by Meredith and Bowers (Nature Genetics). Despite its modern dominance in Bordeaux and Napa Valley, the variety is only about 300–400 years old.",
    links: [
      { label: "Bowers & Meredith 1997 (Nature Genetics)", url: "https://doi.org/10.1038/ng1297-84" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cabernet_Sauvignon" }
    ]
  },

  "Merlot": {
    scientificName: "Vitis vinifera 'Merlot'",
    parents: ["Cabernet Franc", "Magdeleine Noire des Charentes"],
    category: "grape",
    emoji: "🍷",
    description: "The second most planted wine grape worldwide, famous for its soft tannins and plummy fruit. DNA work by Boursiquot et al. (2009) confirmed its parents as Cabernet Franc and the obscure Magdeleine Noire des Charentes, solving a mystery that had eluded viticulturalists for decades. Dominates right-bank Bordeaux (Pomerol, Saint-Émilion).",
    links: [
      { label: "Boursiquot et al. 2009 (AJGWR)", url: "https://doi.org/10.1111/j.1755-0238.2009.00051.x" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Merlot" }
    ]
  },

  "Syrah": {
    scientificName: "Vitis vinifera 'Syrah'",
    parents: ["Dureza", "Mondeuse Blanche"],
    category: "grape",
    emoji: "🍷",
    description: "A bold, dark red wine grape (called Shiraz in Australia). DNA analysis by Bowers et al. (2000) debunked the romantic myth that it originated in ancient Persia or Syracuse — it is in fact a Rhône Valley natural cross of two obscure French varieties, Dureza and Mondeuse Blanche. Now grown globally from Northern Rhône to Barossa Valley.",
    links: [
      { label: "Bowers et al. 2000 (AJEV)", url: "https://www.ajevonline.org/content/51/3/236" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Syrah" }
    ]
  },

  "Concord Grape": {
    scientificName: "Vitis labrusca 'Concord'",
    parents: ["North American Fox Grape"],
    category: "grape",
    emoji: "🍇",
    description: "Developed in 1849 by Ephraim Wales Bull in Concord, Massachusetts, by selecting seedlings from wild Vitis labrusca. The dominant flavor of American grape juice, jelly, and Kosher wine. Its distinctive sweet-musky 'foxy' taste comes from methyl anthranilate, a compound absent in European wine grapes.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Concord_grape" }
    ]
  },

  // ── Mangoes ───────────────────────────────────────────────────────────────

  "Wild Mango": {
    scientificName: "Mangifera indica",
    parents: [],
    category: "mango",
    emoji: "🥭",
    description: "The ancestral species behind every commercial mango cultivar, native to the Indo-Burmese region (present-day northeast India and Myanmar). Domesticated over 4,000 years ago, it has since been carried across Asia, Africa, and the Americas. All named mango varieties are selections or crosses within this single species.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mango" }
    ]
  },

  "Mulgoba": {
    scientificName: "Mangifera indica 'Mulgoba'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "An heirloom Indian mango variety brought to Florida in the 1880s by the USDA. Round, rich, and intensely flavorful, Mulgoba became the founding parent of Florida's commercial mango industry, giving rise to Haden and several other important cultivars through open-pollinated seedlings.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mulgoba" }
    ]
  },

  "Haden Mango": {
    scientificName: "Mangifera indica 'Haden'",
    parents: ["Mulgoba"],
    category: "mango",
    emoji: "🥭",
    description: "Raised from a Mulgoba seedling by Captain John J. Haden in Coconut Grove, Florida, around 1910. Haden was the dominant commercial mango of the 20th century and became the benchmark against which Florida cultivars were measured. Its brilliant red-yellow skin and rich flavour made it the progenitor of many subsequent varieties.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Haden_mango" }
    ]
  },

  "Tommy Atkins Mango": {
    scientificName: "Mangifera indica 'Tommy Atkins'",
    parents: ["Haden Mango"],
    category: "mango",
    emoji: "🥭",
    description: "The world's most exported mango, valued for its thick, fibrous flesh that survives long-distance shipping exceptionally well. A seedling of Haden selected in Florida. Though its flavour is mild compared to other varieties, its shelf life and visual appeal made it the backbone of international mango trade, dominating supermarkets worldwide.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tommy_Atkins_mango" }
    ]
  },

  "Brooks Mango": {
    scientificName: "Mangifera indica 'Brooks'",
    parents: ["Mulgoba"],
    category: "mango",
    emoji: "🥭",
    description: "A Mulgoba seedling selected in Homestead, Florida, in the early 20th century. Largely unknown to consumers, Brooks is a critical breeding parent: DNA studies (Campbell et al., 2006) confirmed it is the actual parent of both Kent and Keitt, overturning the earlier belief that Keitt descended from Mulgoba directly.",
    links: [
      { label: "Campbell et al. 2006 (Journal of ASHS)", url: "https://doi.org/10.21273/JASHS.131.2.214" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Keitt_mango" }
    ]
  },

  "Kent Mango": {
    scientificName: "Mangifera indica 'Kent'",
    parents: ["Brooks Mango"],
    category: "mango",
    emoji: "🥭",
    description: "Selected in the 1940s from a Brooks seedling by J.F. Kent in Coconut Grove, Florida. One of the most flavourful commercial mangoes: sweet, rich, and nearly fibre-free. Widely exported from Mexico, Peru, and Ecuador to European markets, where consumers prize its deep orange flesh and low fibre content.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kent_mango" }
    ]
  },

  "Keitt Mango": {
    scientificName: "Mangifera indica 'Keitt'",
    parents: ["Brooks Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A late-season Florida variety selected by Mrs. J.N. Keitt around 1939, traditionally believed to descend from Mulgoba. However, DNA microsatellite analysis by Campbell et al. (2006) revealed that Brooks is the actual parent — correcting a 70-year-old error in the historical record. Valued for its long season extension into October.",
    links: [
      { label: "Campbell et al. 2006 (Journal of ASHS)", url: "https://doi.org/10.21273/JASHS.131.2.214" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Keitt_mango" }
    ]
  },

  "Ataulfo Mango": {
    scientificName: "Mangifera indica 'Ataulfo'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A small, golden, fibre-free Mexican mango (also sold as 'Honey' or 'Champagne' mango) found by Ataulfo Morales Gordillo in Chiapas, Mexico in the 1960s. Widely regarded as one of the sweetest and creamiest varieties available in North American supermarkets. Its exact parentage is undocumented; it likely arose as a chance seedling of unknown Indian heritage.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ataulfo_mango" }
    ]
  },

  "Alphonso Mango": {
    scientificName: "Mangifera indica 'Alphonso'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "India's 'King of Mangoes,' cultivated in the Konkan region of Maharashtra since the 16th century. Named after Afonso de Albuquerque, the Portuguese viceroy of India (1509–1515), whose missionaries introduced grafting techniques in Goa to develop firmer, sweeter fruit for export to Europe. Known locally as Hapus. Parentage is undocumented — a chance seedling selection of the Portuguese colonial era.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alphonso_mango" }
    ]
  },

  "Dashehari Mango": {
    scientificName: "Mangifera indica 'Dashehari'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A prized North Indian mango originating as a chance seedling in Dashehari village near Kakori, Lucknow in the 18th century, said to have been discovered in a nobleman's orchard during the Nawab era. It gave rise to the 'Mango Belt' of Malihabad, Uttar Pradesh, which today produces the largest volumes. Known for its thin skin, sweet fibreless flesh, and distinctively mild aroma. Also spelled Dusari, Dussehri, or Dusehri. Parentage undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dasheri" }
    ]
  },

  "Langra Mango": {
    scientificName: "Mangifera indica 'Langra'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A historic variety from Varanasi (Benares), Uttar Pradesh, cultivated for over 250 years and named — according to local legend — after a disabled farmer who tended the original seedling tree near a Shiva temple. Distinctive for retaining green skin even when fully ripe. Widely grown across Uttar Pradesh, Haryana, and Punjab, and popular in Pakistan. Parentage undocumented; a traditional open-pollinated seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Langra" }
    ]
  },

  "Kesar Mango": {
    scientificName: "Mangifera indica 'Kesar'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A premium Gujarat mango first selected in 1931 on the slopes of the Girnar Hills near Junagadh and named 'Kesar' (saffron) in 1934 by Nawab Muhammad Mahabat Khan III for the saffron-orange colour of its flesh. Granted Geographical Indication status in 2011 — the first agricultural product to receive GI protection from Gujarat. Grown across 20,000 hectares in Junagadh and Amreli districts. Parentage undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gir_Kesar" }
    ]
  },

  "Totapuri Mango": {
    scientificName: "Mangifera indica 'Totapuri'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A large South Indian mango from Andhra Pradesh, recognisable by its distinctive elongated, parrot-beak shape (totapuri means 'parrot face' in Telugu). Widely grown across Andhra Pradesh, Karnataka, and Tamil Nadu and prized for processing into pickles, chutneys, and pulp. Exported to Florida in 1901 under the name Sandersha. Parentage undocumented; a traditional regional seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Totapuri" }
    ]
  },

  "Banganapalli Mango": {
    scientificName: "Mangifera indica 'Banganapalli'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A large, golden-yellow mango from Banganapalle village in Nandyal District, Andhra Pradesh, with sweet, virtually fibre-free flesh. Named the state fruit of Andhra Pradesh and granted Geographical Indication status on 3 May 2017. Also called Safeda. One of India's most commercially significant export varieties. Parentage undocumented; a long-established local seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Banganapalle_(mango)" }
    ]
  },

  "Chaunsa Mango": {
    scientificName: "Mangifera indica 'Chaunsa'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "Pakistan's most celebrated export mango, named after Chausa, Bihar to commemorate the Mughal victory at the Battle of Chausa (1539). Originally developed through grafting in Malihabad, India, saplings were brought to Sindh after Partition (1947), where the variety flourished. Known for its exceptionally sweet, creamy, and aromatic flesh. Pakistan exports large quantities to the Middle East and Europe annually. Parentage undocumented; a traditional seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chaunsa" }
    ]
  },

  "Sindhri Mango": {
    scientificName: "Mangifera indica 'Sindhri'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "Named after Sindhri town in Mirpur Khas District, Sindh, where it has been cultivated for generations. Pakistan's largest mango by size and one of its most commercially important varieties, grown across Sindh and southern Punjab. Valued for its sweet, golden flesh and pleasant aroma. A traditional open-pollinated seedling selection with undocumented parentage.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sindhri" }
    ]
  },

  "Anwar Ratol Mango": {
    scientificName: "Mangifera indica 'Anwar Ratol'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A small, intensely sweet Pakistani mango with roots in Rataul village, Baghpat, Uttar Pradesh. Saplings were brought to Multan after Partition (1947), where the variety became a national symbol prized for diplomatic gifting — Pakistan has sent Anwar Ratol as 'mango diplomacy' gifts since 1981. Its honey-like sweetness and aromatic fragrance make it one of the most sought-after varieties despite its small size and fragile shelf life. Parentage undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anwar_Ratol" }
    ]
  },

  "Fajri Mango": {
    scientificName: "Mangifera indica 'Fajri'",
    parents: ["Wild Mango"],
    category: "mango",
    emoji: "🥭",
    description: "A large Pakistani commercial mango cultivar valued for its size, attractive appearance, and good shelf life — qualities that make it popular for export and festive display. Has greenish-yellow skin and pale, mildly sweet flesh that is less intensely flavoured than Chaunsa or Anwar Ratol. Widely grown in Sindh and southern Punjab. Parentage undocumented; a traditional seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mango" }
    ]
  },

  // ── Stone Fruits ──────────────────────────────────────────────────────────

  "Peach": {
    scientificName: "Prunus persica",
    parents: [],
    category: "stone",
    emoji: "🍑",
    description: "Domesticated in China over 4,000 years ago from wild Prunus persica and introduced to Persia (giving it its Latin name) and the Mediterranean via the Silk Road. The genetic origin of the nectarine: a single recessive mutation of the gene controlling skin fuzz converts a peach into a smooth-skinned nectarine.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peach" }
    ]
  },

  "Japanese Plum": {
    scientificName: "Prunus salicina",
    parents: [],
    category: "stone",
    emoji: "🟣",
    description: "Native to China despite its common name; introduced to Japan centuries ago and later brought to California by Luther Burbank in 1870. The basis for most commercial fresh plums sold in the US and the parent used by Burbank and others to create a series of interspecific hybrids with apricots, including plumcots and pluots.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prunus_salicina" }
    ]
  },

  "Apricot": {
    scientificName: "Prunus armeniaca",
    parents: [],
    category: "stone",
    emoji: "🧡",
    description: "One of the oldest cultivated stone fruits, likely domesticated in China over 4,000 years ago though named 'Armenian' because Armenian traders spread it westward. Closely related to plums and peaches; capable of hybridising with Japanese Plum to produce the plumcot and aprium, and with the pluot lineage.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Apricot" }
    ]
  },

  "Sweet Cherry": {
    scientificName: "Prunus avium",
    parents: [],
    category: "stone",
    emoji: "🍒",
    description: "The wild mazzard or gean cherry, native to Europe and western Asia, and the ancestor of virtually all cultivated sweet cherry varieties. Brought to North America by early European settlers. Its name 'avium' (of the birds) reflects how birds spread it across Europe. Most named varieties arose as chance seedlings or deliberate crosses in the 19th–20th centuries.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prunus_avium" }
    ]
  },

  "Nectarine": {
    scientificName: "Prunus persica var. nucipersica",
    parents: ["Peach"],
    category: "stone",
    emoji: "🍑",
    description: "Genetically identical to peach except for a single recessive allele at the G locus that controls skin fuzz. Contrary to popular myth, nectarines are NOT a peach × plum hybrid — they arise spontaneously from peach trees via mutation and have appeared throughout recorded history. A peach seed can grow a nectarine tree and vice versa.",
    links: [
      { label: "Leida et al. 2012 (BMC Plant Biology)", url: "https://doi.org/10.1186/1471-2229-12-168" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nectarine" }
    ]
  },

  "Santa Rosa Plum": {
    scientificName: "Prunus salicina 'Santa Rosa'",
    parents: ["Japanese Plum"],
    category: "stone",
    emoji: "🟣",
    description: "Developed by Luther Burbank in Santa Rosa, California and introduced in 1906. One of the most important commercial plum varieties in the US, valued for its crimson skin, amber-red flesh, and complex sweet-tart flavour. Burbank developed it from Japanese Plum (Prunus salicina) introductions, likely with some wild plum influence.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Santa_Rosa_plum" }
    ]
  },

  "Plumcot": {
    scientificName: "Prunus ×domestica (salicina × armeniaca)",
    parents: ["Japanese Plum", "Apricot"],
    category: "stone",
    emoji: "🟣",
    description: "The original interspecific hybrid between Japanese Plum and Apricot, created by Luther Burbank in the late 19th century. A 50/50 blend of each species. Burbank coined the name 'plumcot'. The fruit has a smooth plum skin with apricot-like flesh; it later inspired Floyd Zaiger to develop the more complex pluot and aprium hybrids.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Plumcot" }
    ]
  },

  "Pluot": {
    scientificName: "Prunus ×domestica (salicina dominant)",
    parents: ["Japanese Plum", "Apricot"],
    category: "stone",
    emoji: "🟣",
    description: "Developed by Floyd Zaiger of Zaiger Genetics in the 1980s as a multi-generation hybrid that is approximately 75% Japanese Plum and 25% Apricot (more plum-dominant than the plumcot). Commercially trademarked; noted for extraordinarily high sugar content, complex flavour, and smooth, speckled skin in varieties such as Dapple Dandy and Dinosaur Egg.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pluot" }
    ]
  },

  "Aprium": {
    scientificName: "Prunus ×domestica (armeniaca dominant)",
    parents: ["Apricot", "Japanese Plum"],
    category: "stone",
    emoji: "🧡",
    description: "Also developed by Floyd Zaiger of Zaiger Genetics; the apricot-dominant counterpart to the pluot, being approximately 75% Apricot and 25% Japanese Plum. The fuzzy skin, golden colour, and apricot fragrance dominate, but the plum genetics contribute added sweetness and a longer shelf life than pure apricots.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Aprium" }
    ]
  },

  "Peacotum": {
    scientificName: "Prunus persica × armeniaca × salicina",
    parents: ["Peach", "Apricot", "Japanese Plum"],
    category: "stone",
    emoji: "🍑",
    description: "A trademarked three-way interspecific hybrid developed by Floyd Zaiger at Zaiger Genetics (the same breeder behind the pluot and aprium) by crossing Peach, Apricot, and Japanese Plum genetics across multiple breeding generations. The name combines all three species: 'pea' (peach), 'co' (apricot), 'tum' (plum). Produces round, fuzzy-skinned fruit with golden-orange flesh, combining peach's aromatic fragrance, apricot's colour and sweetness, and plum's firmer texture and complex flavour. Where the pluot and aprium each blend two species, Peacotum is the only commercially sold three-species Prunus hybrid.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peacotum" }
    ]
  },

  "Black Republican Cherry": {
    scientificName: "Prunus avium 'Black Republican'",
    parents: ["Sweet Cherry"],
    category: "stone",
    emoji: "🍒",
    description: "One of the oldest commercial sweet cherry varieties in the Pacific Northwest, introduced around 1860 by Seth Lewelling's orchard in Oregon. Dark-skinned, firm, and somewhat bitter. Its main importance today is as a founding parent of the Bing cherry, the most commercially significant sweet cherry in North America.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Black_Republican_cherry" }
    ]
  },

  "Royal Ann Cherry": {
    scientificName: "Prunus avium 'Royal Ann'",
    parents: ["Sweet Cherry"],
    category: "stone",
    emoji: "🍒",
    description: "An old European variety (also called Napoleon) brought to the Pacific Northwest in the mid-19th century. Yellow-pink skinned with sweet, firm flesh; widely used for maraschino cherries. One of the two parent varieties of Rainier Cherry, contributing its golden colour and sweetness.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Royal_Ann_cherry" }
    ]
  },

  "Bing Cherry": {
    scientificName: "Prunus avium 'Bing'",
    parents: ["Black Republican Cherry"],
    category: "stone",
    emoji: "🍒",
    description: "The most commercially important sweet cherry in North America, developed by Seth Lewelling in 1875 in Milwaukee, Oregon, and named after his Manchurian foreman Ah Bing. A seedling of Black Republican, it produces large, heart-shaped, very dark red fruit with rich, sweet flavour. The dominant cherry in US supermarkets and parent of the Rainier.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bing_cherry" }
    ]
  },

  "Rainier Cherry": {
    scientificName: "Prunus avium 'Rainier'",
    parents: ["Bing Cherry", "Royal Ann Cherry"],
    category: "stone",
    emoji: "🍒",
    description: "Developed in 1952 by Harold Fogle at Washington State University by crossing Bing and Royal Ann. Named after Mount Rainier. Its distinctive yellow-pink blush and exceptional sweetness (Brix sugar content often exceeding 20°) make it among the most prized — and most expensive — cherries in the world. Birds eat them before harvest, adding to scarcity.",
    links: [
      { label: "WSU Tree Fruit Research", url: "https://treefruit.wsu.edu/crop-resource/cherry-varieties/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rainier_cherry" }
    ]
  },

  // ── Berries ───────────────────────────────────────────────────────────────

  "Virginia Strawberry": {
    scientificName: "Fragaria virginiana",
    parents: [],
    category: "berry",
    emoji: "🍓",
    description: "A wild strawberry native to eastern North America. Valued by colonists and Native Americans for its intense flavour, it was shipped to Europe in the early 1600s. Along with the Chilean Strawberry, it is one of the two wild parents of the modern Garden Strawberry. Contributes flavour intensity and cold hardiness to its descendants.",
    links: [
      { label: "Darrow 1966 — The Strawberry (USDA history)", url: "https://www.nal.usda.gov/collections/dietary-guidance/strawberry" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fragaria_virginiana" }
    ]
  },

  "Chilean Strawberry": {
    scientificName: "Fragaria chiloensis",
    parents: [],
    category: "berry",
    emoji: "🍓",
    description: "A large-fruited wild strawberry native to coastal Chile and the Pacific Coast of North America. Collected by French spy-botanist Amédée-François Frézier in 1714 and brought to France, where it accidentally crossed with Virginia Strawberry plants to create the Garden Strawberry. Contributes large fruit size and flavour to modern cultivars.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fragaria_chiloensis" }
    ]
  },

  "Red Raspberry": {
    scientificName: "Rubus idaeus",
    parents: [],
    category: "berry",
    emoji: "🫐",
    description: "The wild European and Asian red raspberry, cultivated since at least the 4th century AD and the parent of most commercial raspberry varieties. Also one of two wild parents of the Loganberry and Tayberry through hybridisation with Pacific Blackberry (Rubus ursinus). Contributes its characteristic intense raspberry flavour to all hybrid descendants.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rubus_idaeus" }
    ]
  },

  "Pacific Blackberry": {
    scientificName: "Rubus ursinus",
    parents: [],
    category: "berry",
    emoji: "🫐",
    description: "The native trailing blackberry of the Pacific Coast of North America, growing wild from British Columbia to California. The wild parent of the Loganberry, Boysenberry, and Tayberry through crosses with Red Raspberry. Despite its small, seedy fruit, its genetics underpin a large portion of the commercially important hybrid berry industry.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rubus_ursinus" }
    ]
  },

  "European Blackberry": {
    scientificName: "Rubus fruticosus",
    parents: [],
    category: "berry",
    emoji: "🫐",
    description: "A complex aggregate of wild blackberry species native to Europe, one of the most widely eaten wild berries in the world. One parent of the Boysenberry, contributing large fruit size and blackberry flavour alongside the Loganberry. The 'fruticosus' designation actually covers hundreds of microspecies (a polyploid aggregate).",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rubus_fruticosus" }
    ]
  },

  "Garden Strawberry": {
    scientificName: "Fragaria ×ananassa",
    parents: ["Virginia Strawberry", "Chilean Strawberry"],
    category: "berry",
    emoji: "🍓",
    description: "Every supermarket strawberry in the world is this hybrid, which arose accidentally in a French botanical garden in the 1740s when plants of Fragaria virginiana and Fragaria chiloensis were grown side by side. It combines the intense flavour of the Virginia species with the large fruit size of the Chilean species. All modern cultivars (Albion, Driscoll's, Seascape) are selections within this hybrid species.",
    links: [
      { label: "Darrow 1966 — The Strawberry", url: "https://en.wikipedia.org/wiki/Garden_strawberry" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Garden_strawberry" }
    ]
  },

  "Loganberry": {
    scientificName: "Rubus ×loganobaccus",
    parents: ["Red Raspberry", "Pacific Blackberry"],
    category: "berry",
    emoji: "🫐",
    description: "Discovered by California judge and horticulturist James Harvey Logan in his Santa Cruz garden in 1881. Logan found it growing spontaneously among his raspberry and blackberry plants — a natural cross of Rubus idaeus (Red Raspberry) and the native Pacific Blackberry (Rubus ursinus). Produces large, dark red, tart berries widely used in jams and juices.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Loganberry" }
    ]
  },

  "Boysenberry": {
    scientificName: "Rubus ×ursinus (Loganberry × European Blackberry hybrid)",
    parents: ["Loganberry", "European Blackberry"],
    category: "berry",
    emoji: "🫐",
    description: "A complex hybrid developed by Rudolph Boysen in the 1920s in Napa, California, and rescued from abandonment by Walter Knott (of Knott's Berry Farm) in 1932. Combines Loganberry and European Blackberry genetics; some accounts also include Red Raspberry. Its large, dark maroon berries have an intense, wine-like flavour and became synonymous with Knott's Berry Farm jams.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Boysenberry" }
    ]
  },

  "Tayberry": {
    scientificName: "Rubus ×tayberry",
    parents: ["Red Raspberry", "Pacific Blackberry"],
    category: "berry",
    emoji: "🫐",
    description: "Bred at the Scottish Crop Research Institute (Dundee) by Derek Jennings and released in 1979, named after the River Tay. A cross of Red Raspberry and the American hybrid blackberry (Pacific Blackberry lineage). Produces large, conical, dark red berries with an intense, aromatic flavour considered superior to Loganberry. Popular for home gardens in the UK.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tayberry" }
    ]
  },

  // ── Bananas ───────────────────────────────────────────────────────────────

  "Musa acuminata": {
    scientificName: "Musa acuminata",
    parents: [],
    category: "banana",
    emoji: "🍌",
    description: "The primary wild ancestor of modern edible bananas, native to Southeast Asia (particularly the Malay Archipelago). Through thousands of years of selection by farmers, triploid seedless mutations of this species — and its hybrids with Musa balbisiana — gave rise to almost all the bananas eaten today. Its genome was fully sequenced in 2012, revealing a complex history of polyploidy.",
    links: [
      { label: "D'Hont et al. 2012 (Nature)", url: "https://doi.org/10.1038/nature11241" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Musa_acuminata" }
    ]
  },

  "Musa balbisiana": {
    scientificName: "Musa balbisiana",
    parents: [],
    category: "banana",
    emoji: "🍌",
    description: "The second wild ancestor of modern bananas, native to South and Southeast Asia. Hardier and more disease-resistant than Musa acuminata, it contributed its genome (B genome) to many hybrid banana cultivars including the Cavendish (AAB or AAA types incorporate its genetics). Its contribution explains the starchy, cooking-banana character of plantains and many Asian varieties.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Musa_balbisiana" }
    ]
  },

  "Gros Michel Banana": {
    scientificName: "Musa acuminata 'Gros Michel'",
    parents: ["Musa acuminata"],
    category: "banana",
    extinct: true,
    emoji: "🍌",
    description: "The dominant commercial banana before the 1950s — richer, creamier, and more flavourful than the Cavendish. Wiped out commercially by Fusarium wilt (Panama disease, Race 1) caused by the soil fungus Fusarium oxysporum f. sp. cubense, which swept through monoculture plantations worldwide. The artificial banana flavour in candy is modelled on the Gros Michel, not the Cavendish. A few plants survive in botanical gardens.",
    links: [
      { label: "Ploetz 2005 (Phytopathology) — Panama disease", url: "https://doi.org/10.1094/PHYTO-95-0648" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gros_Michel_banana" }
    ]
  },

  "Cavendish Banana": {
    scientificName: "Musa acuminata 'Cavendish'",
    parents: ["Musa acuminata", "Musa balbisiana"],
    category: "banana",
    emoji: "🍌",
    description: "The banana on every supermarket shelf globally since the 1960s, when it replaced the extinct Gros Michel. A sterile triploid clone (AAA genome group) — every Cavendish plant worldwide is genetically identical, propagated via suckers. Named after William Cavendish, 6th Duke of Devonshire, in whose greenhouse it was grown in 1836. Now threatened by Tropical Race 4 (TR4) of Panama disease.",
    links: [
      { label: "Ploetz 2015 (Phytopathology) — TR4 threat", url: "https://doi.org/10.1094/PHYTO-01-15-0003-FI" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cavendish_banana" }
    ]
  },

  "Plantain": {
    scientificName: "Musa × paradisiaca (ABB/AAB genome group)",
    parents: ["Musa acuminata", "Musa balbisiana"],
    category: "banana",
    emoji: "🍌",
    description: "A group of cooking bananas whose genome combines Musa acuminata (A) and Musa balbisiana (B) — genetically distinct from the Cavendish, which is a pure AAA (acuminata-only) triploid. The most common plantains carry two B genomes (ABB), giving them high starch, low sugar, and a starchy texture that makes them entirely unsuitable for raw eating. A dietary staple for over 500 million people across tropical West Africa, the Caribbean, and Central and South America, where plantains are consumed fried, boiled, baked, and dried at every stage of ripeness from green to black.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cooking_banana" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  POMEGRANATES
  // ══════════════════════════════════════════════════════════════════════════

  "Wild Pomegranate": {
    scientificName: "Punica granatum (wild)",
    parents: [],
    category: "pomegranate",
    emoji: "🔴",
    description: "The wild ancestor of all cultivated pomegranates, native to a belt stretching from Iran and the Caucasus through Central Asia to the Himalayas. Domesticated over 4,000 years ago — the fruit is referenced in ancient Egyptian records, the Old Testament, the Quran, and Greek mythology. Wild plants produce small, seedy, and tart fruit far removed from modern commercial varieties, which have been selected over millennia for larger arils, sweeter juice, and thinner skins.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate" }
    ]
  },

  "Punica protopunica": {
    scientificName: "Punica protopunica",
    parents: [],
    category: "pomegranate",
    emoji: "🔴",
    description: "A relict wild species endemic to the island of Socotra (Yemen) — the only other species in genus Punica besides the cultivated pomegranate. Produces smaller fruit with pink flowers, dry arils, and a flavour quite unlike modern cultivars. Phylogenetically important as the closest living relative of Punica granatum, it is not a direct ancestor of any known cultivar but helps reconstruct the evolutionary history of the genus.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Punica_protopunica" }
    ]
  },

  "Wonderful": {
    scientificName: "Punica granatum 'Wonderful'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "The dominant commercial pomegranate in the United States, accounting for the majority of California's pomegranate acreage. Introduced from Europe to Florida around 1896 and subsequently brought to California's San Joaquin Valley, where it became the industry standard. Prized for its large size, deep red arils, rich sweet-tart juice, and thick skin suited to commercial handling. POM Wonderful, the leading US pomegranate brand, takes its name from this variety. Parentage is undocumented; an open-pollinated selection from wild Punica granatum stock.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wonderful_(pomegranate)" }
    ]
  },

  "Granada": {
    scientificName: "Punica granatum 'Granada'",
    parents: ["Wonderful"],
    category: "pomegranate",
    emoji: "🔴",
    description: "A bud sport (spontaneous branch mutation) of Wonderful, discovered in California and documented in pomological literature. Ripens two to three weeks earlier than Wonderful, giving growers an important commercial advantage in extending the harvest window. Fruit and flavour are nearly identical to Wonderful but with slightly softer arils. One of the few pomegranate varieties with a clearly documented parent.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Early Wonderful": {
    scientificName: "Punica granatum 'Early Wonderful'",
    parents: ["Wonderful"],
    category: "pomegranate",
    emoji: "🔴",
    description: "An early-ripening variant of Wonderful, likely a sport or open-pollinated seedling, widely planted in California as a companion to the standard Wonderful to extend the picking season. Produces fruit 1–2 weeks ahead of Wonderful with similar size and flavour characteristics. Exact parentage is undocumented, but horticultural records consistently treat it as a selection from Wonderful.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Angel Red": {
    scientificName: "Punica granatum 'Angel Red'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "A California-selected cultivar notable for its soft, virtually chewy arils (seed coats), which make it pleasant to eat whole without the tough crunch typical of most pomegranates. Produces very high juice yields with a deep ruby colour and sweet, slightly tart flavour. Evaluated by USDA-ARS and recommended for fresh-market consumption. Parentage undocumented; an open-pollinated seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Parfianka": {
    scientificName: "Punica granatum 'Parfianka'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "A Central Asian cultivar from the Turkmenistan–Uzbekistan region, introduced to the United States via USDA plant exploration in the 1980s. Regarded by many pomologists as one of the world's finest eating pomegranates: thin-skinned, with intensely flavoured, raspberry-like arils and very soft seeds. Its exceptional eating quality has made it popular among artisan growers and at premium farmers' markets, though its delicate skin limits commercial shelf life. Parentage undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Salavatski": {
    scientificName: "Punica granatum 'Salavatski'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "A cold-hardy pomegranate from the Salavatsky region of Bashkortostan, Russia, capable of surviving temperatures down to −15 °C (5 °F) — remarkable for a subtropical fruit. Large, deep-red fruit with sweet, richly flavoured juice. Widely grown across Russia and Eastern Europe where winters are too severe for most other pomegranate varieties. Parentage undocumented; a traditional open-pollinated selection from Central Asian/Caucasian stock.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Haku Botan": {
    scientificName: "Punica granatum 'Haku Botan'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "A Japanese white-fruited pomegranate whose name translates to 'white peony' in Japanese. Produces pale yellow-green skin and translucent, soft, pink-tinged arils with a sweet, low-acid flavour distinctly different from the tangy red varieties. Valued in Japan both as an ornamental for its white flowers and as an edible fruit. One of the few white-fleshed pomegranate cultivars in commercial cultivation. Parentage undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Mollar de Elche": {
    scientificName: "Punica granatum 'Mollar de Elche'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "Spain's most celebrated pomegranate cultivar, grown in and around the city of Elche, Alicante, in the Valencia region. Granted EU Protected Designation of Origin (PDO) status in 2009, making it one of the few pomegranate varieties with legal geographic protection. Known for very large, brilliantly coloured fruit, soft edible seeds, and a sweet flavour with low acidity. Its cultivation in this region dates back over a thousand years, with Moorish agricultural traditions credited for its development.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mollar_de_Elche" }
    ]
  },

  "Ganesh Pomegranate": {
    scientificName: "Punica granatum 'Ganesh'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "One of India's most widely cultivated commercial pomegranate varieties, developed in Maharashtra and named after the Hindu deity Ganesha. Large, pinkish-red fruit with sweet, deep red arils and good shelf life suited to domestic and export markets. Extensively grown across Maharashtra, Karnataka, and Andhra Pradesh. One of the documented parents of the Bhagwa variety, making it a significant node in India's pomegranate breeding history. Parentage otherwise undocumented; a traditional seedling selection.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate#Cultivars" }
    ]
  },

  "Gul Shah Red": {
    scientificName: "Punica granatum 'Gul Shah Red'",
    parents: ["Wild Pomegranate"],
    category: "pomegranate",
    emoji: "🔴",
    description: "A traditional pomegranate variety from the Afghanistan–North India region, valued for its deep red colour and high juice content. Used as a parent in the Maharashtra State Horticulture breeding programme that produced Bhagwa. Its contribution to Bhagwa's vivid orange-red colouration and intense sweetness has been noted by breeders. Parentage otherwise undocumented; a landhrace variety from the historical pomegranate heartland of South Asia.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pomegranate" }
    ]
  },

  "Bhagwa": {
    scientificName: "Punica granatum 'Bhagwa'",
    parents: ["Ganesh Pomegranate", "Gul Shah Red"],
    category: "pomegranate",
    emoji: "🔴",
    description: "India's most commercially important export pomegranate, developed by deliberate cross-breeding at Mahatma Phule Krishi Vidyapeeth (MPKV), Rahuri, Maharashtra, as a cross of Ganesh and Gul Shah Red. The name means 'saffron-coloured' in Marathi, describing its vivid deep orange-red arils. Notable for large, uniform fruit, very sweet juice (16–17 °Brix), soft seeds, and excellent shelf life — qualities that have made it the dominant variety in Indian pomegranate export to Europe and the Middle East. Maharashtra's pomegranate industry, centred in Nasik and Solapur districts, relies primarily on Bhagwa.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bhagwa_(pomegranate)" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEPPERS — Fundamental species
  // ══════════════════════════════════════════════════════════════════════════

  "Capsicum annuum": {
    scientificName: "Capsicum annuum",
    parents: [],
    category: "pepper",
    emoji: "🌶️",
    description: "The most widely cultivated pepper species and ancestor of most common culinary peppers — bell peppers, jalapeños, poblanos, serranos, and cayenne. Domesticated in Mexico from the wild bird pepper (Capsicum annuum var. glabriusculum), with archaeological evidence of consumption dating to at least 5,000 BCE. Remarkable for its morphological diversity, spanning large sweet bells to tiny, fiery varieties across thousands of named cultivars.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Capsicum_annuum" }
    ]
  },

  "Capsicum chinense": {
    scientificName: "Capsicum chinense",
    parents: [],
    category: "pepper",
    emoji: "🌶️",
    description: "The species behind the world's hottest peppers, including habanero, Scotch bonnet, ghost pepper, and Carolina Reaper. Despite the name suggesting Chinese origin — an 18th-century taxonomic error — it is native to the tropical Amazon basin and the Caribbean. Characterised by higher capsaicinoid content and more complex fruity, floral flavour profiles than other Capsicum species.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Capsicum_chinense" }
    ]
  },

  "Capsicum frutescens": {
    scientificName: "Capsicum frutescens",
    parents: [],
    category: "pepper",
    emoji: "🌶️",
    description: "A hot pepper species likely originating in Panama or southern Mexico, cultivated for centuries across Central America, the Caribbean, and eventually Southeast Asia. Best known as the species behind the Tabasco pepper and African bird's eye chilli. Closely related to C. chinense — the two hybridise in the wild, which is why the ghost pepper sits at their boundary.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Capsicum_frutescens" }
    ]
  },

  "Capsicum baccatum": {
    scientificName: "Capsicum baccatum",
    parents: [],
    category: "pepper",
    emoji: "🌶️",
    description: "A South American pepper species domesticated in the Andes of Peru and Bolivia, with archaeological evidence at Huaca Prieta dating cultivation back over 4,000 years. The species behind the ají peppers central to Andean and Peruvian cuisine, most notably ají amarillo. Distinguished by distinctive white flower spots and fruity, raisin-like flavour notes absent in other Capsicum species.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Capsicum_baccatum" }
    ]
  },

  "Capsicum pubescens": {
    scientificName: "Capsicum pubescens",
    parents: [],
    category: "pepper",
    emoji: "🌶️",
    description: "The most genetically distinct domesticated Capsicum species, native to the Central Andes of Peru and Bolivia, with consumption evidence from Guitarrero Cave dating 8,000–10,000 years ago. Distinguished by hairy (pubescent) leaves, purple flowers, and black seeds — traits absent in all other cultivated Capsicum. Genetically incompatible with other domesticated Capsicum species, preventing any crossbreeding.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Capsicum_pubescens" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEPPERS — Cultivars
  // ══════════════════════════════════════════════════════════════════════════

  "Bell Pepper": {
    scientificName: "Capsicum annuum 'Bell'",
    parents: ["Capsicum annuum"],
    category: "pepper",
    emoji: "🫑",
    description: "The world's most consumed pepper cultivar group, selected over centuries for complete loss of pungency (due to a recessive mutation in the capsaicin-producing pun1 gene), thick walls, and large blocky fruit. The green, red, yellow, and orange forms are the same cultivars at different ripeness stages rather than distinct varieties. A dietary staple eaten raw, roasted, or stuffed across most global cuisines.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bell_pepper" }
    ]
  },

  "Jalapeño": {
    scientificName: "Capsicum annuum 'Jalapeño'",
    parents: ["Capsicum annuum"],
    category: "pepper",
    emoji: "🌶️",
    description: "A medium-heat Capsicum annuum landrace (2,500–8,000 SHU) named for Xalapa (Jalapa), capital of Veracruz, Mexico, which was historically a major trading centre for this variety. One of the most commercially important hot peppers in the world, used fresh, pickled, smoked as chipotle, and in hot sauces. When smoked and dried, the resulting chipotle is a distinct culinary product in its own right.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jalapeño" }
    ]
  },

  "Serrano": {
    scientificName: "Capsicum annuum 'Serrano'",
    parents: ["Capsicum annuum"],
    category: "pepper",
    emoji: "🌶️",
    description: "A traditional Capsicum annuum cultivar originating in the mountains (sierra) of Puebla and Hidalgo, Mexico, giving it its name. Hotter than jalapeño at 10,000–23,000 SHU, with a bright, crisp bite and thin walls that make it ideal for fresh salsas rather than stuffing. One of the most common fresh hot peppers in Mexican cooking, often used raw in pico de gallo.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Serrano_pepper" }
    ]
  },

  "Poblano": {
    scientificName: "Capsicum annuum 'Poblano'",
    parents: ["Capsicum annuum"],
    category: "pepper",
    emoji: "🫑",
    description: "A large, mild Capsicum annuum cultivar (1,000–2,000 SHU) named for Puebla, Mexico, where it has been cultivated for centuries. Its thick, dark green walls make it the canonical pepper for chiles rellenos (stuffed peppers). When dried, the poblano is called ancho chile — a key ingredient in mole sauces — with both names referring to the same variety at different stages.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Poblano" }
    ]
  },

  "Cayenne": {
    scientificName: "Capsicum annuum 'Cayenne'",
    parents: ["Capsicum annuum"],
    category: "pepper",
    emoji: "🌶️",
    description: "A hot, thin-walled Capsicum annuum cultivar (30,000–50,000 SHU) associated with Cayenne, French Guiana, though it was cultivated across South America long before European contact. One of the most globally distributed hot peppers, disseminated by Spanish and Portuguese traders in the 16th century to Africa, Asia, and Europe. Used almost exclusively dried and ground, cayenne powder is among the world's most ubiquitous spices.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cayenne_pepper" }
    ]
  },

  "Tabasco": {
    scientificName: "Capsicum frutescens 'Tabasco'",
    parents: ["Capsicum frutescens"],
    category: "pepper",
    emoji: "🌶️",
    description: "A Capsicum frutescens landrace native to the Tabasco region of Mexico, notable for its erect, upward-pointing fruit growth habit and small, thin-walled, intensely hot pods. Brought to Louisiana in 1848 by Colonel Maunsell White and used by Edmund McIlhenny to create the Tabasco sauce brand (est. 1868), one of the world's oldest and best-known hot sauces. Commercial seed stock is exclusively maintained on Avery Island, Louisiana.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tabasco_pepper" }
    ]
  },

  "Habanero": {
    scientificName: "Capsicum chinense 'Habanero'",
    parents: ["Capsicum chinense"],
    category: "pepper",
    emoji: "🌶️",
    description: "A Capsicum chinense cultivar (100,000–350,000 SHU) originating in the Amazon and spread to the Caribbean, where Havana (La Habana) became a major trade hub — giving the pepper its name. 18th-century botanists mistakenly thought the species came from China based on Caribbean trade routes, producing the misleading species name C. chinense. Its fruity, floral heat made it the world's hottest commercial pepper for decades and a direct ancestor of many superhot cultivars.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Habanero" }
    ]
  },

  "Scotch Bonnet": {
    scientificName: "Capsicum chinense 'Scotch Bonnet'",
    parents: ["Capsicum chinense"],
    category: "pepper",
    emoji: "🌶️",
    description: "A Capsicum chinense cultivar (100,000–350,000 SHU) native to Jamaica and the English-speaking Caribbean, named for its distinctive ridged, bonnet-like shape resembling a Scottish tam o' shanter hat. Genetically close to habanero but with a noticeably sweeter flavour profile and higher sugar content, making it the defining pepper of Caribbean cooking — jerk seasoning, pepper sauces, and stews.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Scotch_bonnet_(pepper)" }
    ]
  },

  "Ghost Pepper": {
    scientificName: "Capsicum chinense × C. frutescens",
    parents: ["Capsicum chinense", "Capsicum frutescens"],
    category: "pepper",
    emoji: "🌶️",
    description: "Indigenous to Assam, India, where it is known as Bhut jolokia ('ghost pepper' in Assamese). RAPD molecular analysis confirmed it is a natural interspecific hybrid carrying genetic material from both Capsicum chinense (primary parent) and C. frutescens (minor introgression). Certified by Guinness World Records as the world's hottest pepper in 2007 at over 1,000,000 SHU — until surpassed by cultivars bred specifically for maximum heat.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ghost_pepper" },
      { label: "Bosland & Baral 2007 (HortScience)", url: "https://doi.org/10.21273/HORTSCI.42.2.222" }
    ]
  },

  "Trinidad Moruga Scorpion": {
    scientificName: "Capsicum chinense 'Trinidad Moruga Scorpion'",
    parents: ["Capsicum chinense"],
    category: "pepper",
    emoji: "🌶️",
    description: "A Capsicum chinense landrace cultivated for generations by farmers in Moruga, Trinidad, characterised by a curved 'stinger' tail and exceptionally high capsaicinoid content averaging over 1.2 million SHU, with some specimens exceeding 2 million. Measured as the world's hottest pepper by New Mexico State University in 2012. Represents an extreme in naturally selected pungency within C. chinense rather than a deliberately engineered modern hybrid.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trinidad_Moruga_scorpion" },
      { label: "Reyes et al. 2012 (HortTechnology)", url: "https://doi.org/10.21273/HORTTECH.22.4.534" }
    ]
  },

  "Carolina Reaper": {
    scientificName: "Capsicum chinense 'HP22B'",
    parents: ["Ghost Pepper", "Habanero"],
    category: "pepper",
    emoji: "🌶️",
    description: "Developed by Ed Currie at PuckerButt Pepper Company (Fort Mill, South Carolina) beginning around 2001, crossing a Pakistan Naga pepper with a La Soufrière habanero from Saint Vincent; designated HP22B during development and refined over multiple generations. Certified by Guinness World Records as the world's hottest pepper in 2013 at an average of 1,641,183 SHU, a record it held until 2023. Its wrinkled skin and scorpion-like tail are signature morphological traits.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Carolina_Reaper" }
    ]
  },

  "Ají Amarillo": {
    scientificName: "Capsicum baccatum var. pendulum 'Ají Amarillo'",
    parents: ["Capsicum baccatum"],
    category: "pepper",
    emoji: "🌶️",
    description: "The signature yellow-orange pepper of Peru, literally meaning 'yellow chilli,' with archaeological evidence of cultivation at Huaca Prieta dating back over 4,000 years. One of the 'holy trinity' of Peruvian cooking alongside red onion and garlic, used in ceviche, ají de gallina, and causa. Its flavour is distinctive — fruity and berry-like with moderate heat (30,000–50,000 SHU) — making it irreplaceable in Andean cuisine rather than simply a source of heat.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Aji_amarillo" }
    ]
  },

  "Pepper X": {
    scientificName: "Capsicum chinense 'Pepper X'",
    parents: ["Carolina Reaper"],
    category: "pepper",
    emoji: "🌶️",
    description: "Developed by Ed Currie at PuckerButt Pepper Company as a cross between a Carolina Reaper and an undisclosed pepper sent to Currie by a friend — the second parent has not been publicly revealed. Certified by Guinness World Records in 2023 as the world's hottest pepper at an average of 2,693,000 SHU, surpassing the Carolina Reaper's long-held record. Currie noted that Pepper X's distinctive curves and ridges create extra surface area for the capsaicin-rich placental tissue to develop.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pepper_X" }
    ]
  },

  "Rocoto": {
    scientificName: "Capsicum pubescens 'Rocoto'",
    parents: ["Capsicum pubescens"],
    category: "pepper",
    emoji: "🌶️",
    description: "The primary cultivar of Capsicum pubescens, native to the Peruvian and Bolivian Andes with consumption evidence from Guitarrero Cave dating 8,000–10,000 years ago — among the earliest known pepper consumption records anywhere. Looks deceptively like a small apple or tomato but delivers serious heat (30,000–100,000 SHU). Its distinctive black seeds and genetic isolation from all other Capsicum species mean rocoto cannot be crossbred with any other domesticated pepper.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rocoto_pepper" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  TOMATOES — Wild ancestor
  // ══════════════════════════════════════════════════════════════════════════

  "Solanum pimpinellifolium": {
    scientificName: "Solanum pimpinellifolium",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "The wild currant tomato native to coastal Peru and Ecuador — the direct ancestor of all cultivated tomatoes. Tiny, pea-sized red fruits borne in clusters, intensely flavoured but with robust disease resistance that was lost during domestication. DNA evidence confirms that cultivated tomatoes (Solanum lycopersicum) were domesticated from this species in Mexico, and breeders have repeatedly crossed back to it to recover disease resistance — most notably in developing Pan America.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Solanum_pimpinellifolium" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  TOMATOES — Foundational cultivars (parentage undocumented)
  // ══════════════════════════════════════════════════════════════════════════

  "Marvel": {
    scientificName: "Solanum lycopersicum 'Marvel'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "An early-20th-century American tomato cultivar developed at USDA's Arlington Experiment Farm and selected for disease resistance and firm, uniform fruit suited to canning. One of the two direct parents of Marglobe — the most influential processing tomato of the mid-20th century — making Marvel a foundational node in American tomato breeding. Its own parentage is undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marglobe" }
    ]
  },

  "Globe": {
    scientificName: "Solanum lycopersicum 'Globe'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "An early American tomato cultivar used by USDA breeders at the Arlington Experiment Farm alongside Marvel to develop Marglobe. Selected for its large, globe-shaped fruit and good flavour — traits it contributed to its offspring. Its own parentage is undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marglobe" }
    ]
  },

  "J.T.D.": {
    scientificName: "Solanum lycopersicum 'J.T.D.'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "An early American tomato cultivar used by Lyman G. Schermerhorn at Rutgers University as the disease-resistant parent crossed with Marglobe to produce the Rutgers tomato. The cultivar name's origin is unclear and it is not independently described in the literature beyond its role in Rutgers' parentage.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rutgers_tomato" }
    ]
  },

  "San Marzano": {
    scientificName: "Solanum lycopersicum 'San Marzano'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "An Italian heirloom plum tomato originating near Naples, with records dating to the 1770s when seeds were reportedly a gift from the Kingdom of Peru to the Kingdom of Naples. Prized for its thick, dry flesh, few seeds, and balanced sweet-acid flavour — the defining ingredient for authentic Neapolitan pizza sauce. Holds DOP (Protected Designation of Origin) status and is the direct ancestor of the Roma tomato.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/San_Marzano_tomato" }
    ]
  },

  "German Johnson": {
    scientificName: "Solanum lycopersicum 'German Johnson'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "A large, pink-red heirloom tomato from West Virginia with origins in the late 1800s, known for meaty, low-acid flesh and potato-leaf foliage. Used by M.C. Byles ('Radiator Charlie') as the primary crossing parent in developing the Mortgage Lifter across the 1930s–40s. Genetically closely related to Brandywine and representative of the Appalachian heirloom tradition.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mortgage_Lifter" }
    ]
  },

  "Beefsteak": {
    scientificName: "Solanum lycopersicum 'Beefsteak'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "One of the oldest and largest American heirloom tomato types, first listed in Landreth's seed catalogue in 1890 though likely grown earlier. Characterised by very large, meaty, deeply ribbed fruit with few seeds. The original cultivar was one of the crossing parents Radiator Charlie used to develop Mortgage Lifter; today 'beefsteak' has become a generic descriptor for any large-fruited slicing tomato.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beefsteak_tomato" }
    ]
  },

  "Brandywine": {
    scientificName: "Solanum lycopersicum 'Brandywine'",
    parents: [],
    category: "tomato",
    emoji: "🍅",
    description: "America's most celebrated heirloom tomato, traced to Amish farmers in Chester County, Pennsylvania, with records in seed catalogues dating to 1889. Famous for its exceptionally rich, complex flavour — routinely rated the best-tasting tomato — at the cost of yield, uniformity, and disease susceptibility. Exact parentage is undocumented, but it shares characteristic potato-leaf foliage with German Johnson, suggesting common heritage.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brandywine_(tomato)" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  TOMATOES — Documented crosses
  // ══════════════════════════════════════════════════════════════════════════

  "Marglobe": {
    scientificName: "Solanum lycopersicum 'Marglobe'",
    parents: ["Marvel", "Globe"],
    category: "tomato",
    emoji: "🍅",
    description: "Developed by Frederick John Pritchard at USDA's Arlington Experiment Farm as a cross of Marvel and Globe, released in 1925. The first widely grown disease-resistant processing tomato, combining resistance to fusarium wilt and nail-head spot with reliable, uniform fruit — qualities that transformed commercial tomato growing across the eastern United States. Became the direct parent of Rutgers and Pan America, shaping decades of subsequent breeding.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marglobe" }
    ]
  },

  "Rutgers": {
    scientificName: "Solanum lycopersicum 'Rutgers'",
    parents: ["J.T.D.", "Marglobe"],
    category: "tomato",
    emoji: "🍅",
    description: "Developed by Lyman G. Schermerhorn at Rutgers University in partnership with Campbell Soup Company and released in 1934 as a cross of J.T.D. and Marglobe. Perfectly balanced for canning — high solids, deep red colour, and a precise acid-sugar ratio — it became Campbell's primary processing tomato for decades and dominated New Jersey agriculture. Recreated from archival seed stock in 2016 as 'Rutgers 250' to mark the university's 250th anniversary.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rutgers_tomato" }
    ]
  },

  "Pan America": {
    scientificName: "Solanum lycopersicum 'Pan America'",
    parents: ["Marglobe", "Solanum pimpinellifolium"],
    category: "tomato",
    emoji: "🍅",
    description: "Developed by William S. Porte at USDA's Beltsville Agricultural Research Center and released in 1941 as a deliberate cross between Marglobe and the wild currant tomato (Solanum pimpinellifolium). One of the earliest commercial cultivars to use wild-species introgression to recover disease resistance lost during domestication. Its genetics carried forward into the Roma tomato, bridging the wild ancestor and the modern processing tomato.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tomato" }
    ]
  },

  "Roma": {
    scientificName: "Solanum lycopersicum 'Roma'",
    parents: ["San Marzano", "Pan America"],
    category: "tomato",
    emoji: "🍅",
    description: "Developed by USDA Beltsville and released in 1955 by crossing San Marzano's plum-tomato shape and flavour with the disease resistance in Pan America's lineage (via an intermediate breeding line). The most commercially successful paste tomato in the United States — compact, determinate, with meaty flesh and low moisture ideal for sauces and canning. The global reference standard for plum tomatoes, widely grown across five continents.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Roma_tomato" }
    ]
  },

  "Mortgage Lifter": {
    scientificName: "Solanum lycopersicum 'Radiator Charlie's Mortgage Lifter'",
    parents: ["German Johnson", "Beefsteak"],
    category: "tomato",
    emoji: "🍅",
    description: "Developed by M.C. Byles ('Radiator Charlie') of Logan, West Virginia across the 1930s–40s by planting German Johnson and cross-pollinating with pollen from Beefsteak, an Italian variety, and an English variety over six seasons of selection. Byles sold the resulting plants for $1 each, paying off his $6,000 mortgage in six years — hence the name. Produces extremely large fruits (up to 2.3 kg) with rich, meaty flavour and remains one of America's most beloved heirloom tomatoes.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mortgage_Lifter" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEARS — Wild species
  // ══════════════════════════════════════════════════════════════════════════

  "Pyrus communis": {
    scientificName: "Pyrus communis",
    parents: [],
    category: "pear",
    emoji: "🍐",
    description: "The European wild pear, native to central Asia and the Caucasus region, and the ancestral species of all European pear cultivars. Cultivated for at least 3,000 years — Homer described it as a 'gift of the gods' in the Odyssey — and dispersed westward by the Romans. White Doyenne, Bosc, Comice, Bartlett, and virtually every European commercial pear ultimately traces back to this species.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pyrus_communis" }
    ]
  },

  "Pyrus pyrifolia": {
    scientificName: "Pyrus pyrifolia",
    parents: [],
    category: "pear",
    emoji: "🍐",
    description: "The Asian or Nashi pear species native to China, Japan, and Korea, domesticated independently from the European pear tradition. Characterised by round, apple-like shape, crisp texture, and high water content — quite different from the soft, buttery European style. The parent species of Chojuro, Nijisseiki, and the other foundational Japanese cultivars that underpin modern Asian pear breeding.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pyrus_pyrifolia" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEARS — European foundational cultivars (chance seedlings / ancient selections)
  // ══════════════════════════════════════════════════════════════════════════

  "White Doyenne": {
    scientificName: "Pyrus communis 'Doyenné Blanc'",
    parents: ["Pyrus communis"],
    category: "pear",
    emoji: "🍐",
    description: "An ancient European pear cultivar recorded in cultivation since the 16th century, originally known as Doyenné Blanc. Molecular pedigree analysis by USDA researchers identified it as the single most influential parent in European pear history — ancestor of Bartlett, Anjou, Seckel, and many USDA-bred cultivars. Despite its pivotal genetic role, it is now rarely grown commercially due to its small fruit size.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/White_Doyenne_pear" }
    ]
  },

  "Rousselet de Reims": {
    scientificName: "Pyrus communis 'Rousselet de Reims'",
    parents: ["Pyrus communis"],
    category: "pear",
    emoji: "🍐",
    description: "A very old French pear cultivar known since at least the 17th century, small and russet-skinned with an intense, spiced flavour profile. Best known as the documented parent of the Seckel pear — one of the most important American pear cultivars — as confirmed by USDA molecular parentage analysis. Rarely grown today outside historical collections.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pear" }
    ]
  },

  "Flemish Beauty": {
    scientificName: "Pyrus communis 'Flemish Beauty'",
    parents: ["Pyrus communis"],
    category: "pear",
    emoji: "🍐",
    description: "A Belgian chance seedling discovered around 1800, grown commercially throughout the 19th century for its large, handsome fruit and reliable cropping in cold climates. Used by American horticulturalist Thaddeus Clapp as one of the two documented parents of Clapp's Favourite — a cross with Bartlett. While somewhat superseded in commerce, it remains relevant as a cold-hardy rootstock and breeding parent.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flemish_Beauty_pear" }
    ]
  },

  "Comice": {
    scientificName: "Pyrus communis 'Doyenné du Comice'",
    parents: ["Pyrus communis"],
    category: "pear",
    emoji: "🍐",
    description: "A chance seedling discovered in 1849 at the Comice Horticole de Maine-et-Loire nursery in Angers, France, with unknown parentage. Widely regarded as the finest-flavoured European pear — buttery, sweet, and exceptionally juicy — and the cultivar most associated with luxury pear gifts. Used by USDA breeders as a parent of the fire-blight-resistant Magness pear (1968).",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Comice_pear" }
    ]
  },

  "Bosc": {
    scientificName: "Pyrus communis 'Beurré Bosc'",
    parents: ["Pyrus communis"],
    category: "pear",
    emoji: "🍐",
    description: "A Belgian or French chance seedling first described in 1807 and named after the Belgian naturalist Louis Bosc. Recognised immediately by its distinctive elongated neck, cinnamon-brown russeted skin, and dense, crisp flesh that holds its shape when cooked — making it the preferred pear for poaching and baking. Despite extensive pedigree research, its parents remain unknown.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bosc_pear" }
    ]
  },

  "Sucre Verte": {
    scientificName: "Pyrus communis 'Sucre Verte'",
    parents: ["Pyrus communis"],
    category: "pear",
    emoji: "🍐",
    description: "An old French pear cultivar known for its sweet, green-skinned fruit. Identified by USDA molecular pedigree analysis as one of the two parents of the Anjou pear alongside White Doyenne. Now rarely grown in its own right but preserved in germplasm collections for its role in the ancestry of one of North America's most commercially important pears.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anjou_pear" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEARS — European derived cultivars
  // ══════════════════════════════════════════════════════════════════════════

  "Bartlett": {
    scientificName: "Pyrus communis 'Williams' Bon Chrétien'",
    parents: ["White Doyenne"],
    category: "pear",
    emoji: "🍐",
    description: "Discovered as a chance seedling in Aldermaston, England around 1770 by schoolmaster John Stair and later popularised by nurseryman Williams — giving it the British name Williams Bon Chrétien. USDA molecular analysis identified White Doyenne as one parent; the second is unknown. The most commercially important pear in the United States, where it was renamed after Enoch Bartlett of Massachusetts who distributed it widely from 1817.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bartlett_pear" }
    ]
  },

  "Seckel": {
    scientificName: "Pyrus communis 'Seckel'",
    parents: ["Rousselet de Reims", "White Doyenne"],
    category: "pear",
    emoji: "🍐",
    description: "A small, exceptionally sweet American pear discovered as a chance seedling near Philadelphia around 1790 by farmer Jacob Seckel. USDA molecular pedigree analysis confirmed its parents as Rousselet de Reims and White Doyenne. Known as the 'sugar pear' for its intensely sweet, spiced flavour, it became a direct parent of the USDA's Magness cultivar and remains prized by connoisseurs despite its diminutive size.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Seckel_pear" }
    ]
  },

  "Anjou": {
    scientificName: "Pyrus communis 'Beurré d'Anjou'",
    parents: ["White Doyenne", "Sucre Verte"],
    category: "pear",
    emoji: "🍐",
    description: "A Belgian or French pear first described in the early 1800s and named for the Anjou region of France. USDA molecular pedigree analysis confirmed its parents as White Doyenne and Sucre Verte. The second most commercially important pear in the United States after Bartlett — mild, juicy, and available in both green and red strains — with a notably long storage life that makes it ideal for the fresh market.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anjou_pear" }
    ]
  },

  "Clapp's Favourite": {
    scientificName: "Pyrus communis 'Clapp's Favourite'",
    parents: ["Bartlett", "Flemish Beauty"],
    category: "pear",
    emoji: "🍐",
    description: "A deliberately bred cross of Bartlett and Flemish Beauty developed by Thaddeus Clapp of Dorchester, Massachusetts and introduced around 1860 — one of the earliest documented intentional pear crosses in North America. Resembles Bartlett but ripens earlier and is more cold-hardy, making it valuable in shorter-season climates. Its mutation sport, Starkrimson, produced a distinctive red-skinned variant that became commercially popular.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clapp%27s_Favourite_pear" }
    ]
  },

  "Magness": {
    scientificName: "Pyrus communis 'Magness'",
    parents: ["Seckel", "Comice"],
    category: "pear",
    emoji: "🍐",
    description: "Developed by USDA breeders at Beltsville, Maryland as a cross of Seckel and Comice and released in 1968, named after USDA horticulturalist John Richard Magness. Combines the rich flavour of both parents with strong resistance to fire blight (Erwinia amylovora) — a devastating bacterial disease that limits pear growing in humid climates. Its pollen is sterile, preventing it from being used for further crossing.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Magness_pear" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEARS — Asian foundational cultivars (chance seedlings)
  // ══════════════════════════════════════════════════════════════════════════

  "Chojuro": {
    scientificName: "Pyrus pyrifolia 'Chōjūrō'",
    parents: ["Pyrus pyrifolia"],
    category: "pear",
    emoji: "🍐",
    description: "A Japanese Asian pear cultivar discovered as a chance seedling around 1890 and released in 1915, one of the oldest and most widely grown Asian pear varieties in Japan. Brown-skinned with a slightly coarse but very juicy flesh and a distinctive rich, butterscotch-like flavour unusual among Asian pears. A foundational parent in Japanese pear breeding — involved in producing Niitaka, Shinseiki, and many other cultivars.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chōjūrō" }
    ]
  },

  "Nijisseiki": {
    scientificName: "Pyrus pyrifolia 'Nijisseiki'",
    parents: ["Pyrus pyrifolia"],
    category: "pear",
    emoji: "🍐",
    description: "The 'Twentieth Century' pear, discovered as a chance seedling in Matsudo, Japan in 1888 and released commercially in 1904. Thin, yellow-green skin over crisp, very juicy, mildly sweet flesh — the definitive modern Asian pear type. One of the most influential parents in Japanese pear breeding, contributing to Shinseiki, Shinko, and indirectly to many further cultivars through its descendants.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nijisseiki_pear" }
    ]
  },

  "Amanogawa": {
    scientificName: "Pyrus pyrifolia 'Amanogawa'",
    parents: ["Pyrus pyrifolia"],
    category: "pear",
    emoji: "🍐",
    description: "A Japanese Asian pear cultivar ('Milky Way') used extensively as a crossing parent in 20th-century Japanese breeding programmes. Parentage of Amanogawa itself is undocumented — it is treated as a foundational cultivar in the breeding records. It appears as a parent in both Niitaka (with Chojuro) and Shinko (with Nijisseiki), making it a key connector in the Japanese pear family tree.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Asian_pear" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  PEARS — Asian derived cultivars
  // ══════════════════════════════════════════════════════════════════════════

  "Shinseiki": {
    scientificName: "Pyrus pyrifolia 'Shinseiki'",
    parents: ["Nijisseiki", "Chojuro"],
    category: "pear",
    emoji: "🍐",
    description: "A Japanese Asian pear bred at the Aichi Horticultural Experiment Station as a cross of Nijisseiki and Chojuro, released in 1945. The name means 'New Century' in Japanese, echoing its parent Nijisseiki ('Twentieth Century'). Early-ripening, with smooth yellow skin and crisp, mild, very juicy flesh — more disease-resistant than Nijisseiki, making it widely grown in Japan and exported to global markets.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Shinseiki_pear" }
    ]
  },

  "Niitaka": {
    scientificName: "Pyrus pyrifolia 'Niitaka'",
    parents: ["Amanogawa", "Chojuro"],
    category: "pear",
    emoji: "🍐",
    description: "A large Japanese Asian pear bred as a cross of Amanogawa and Chojuro at the Aichi Horticultural Experiment Station and released in 1937. Parentage was disputed for decades but confirmed by SSR molecular marker analysis. Produces very large, russet-brown fruit with coarse but extremely juicy flesh — one of the dominant commercial cultivars in South Korea and widely grown in Japan and Taiwan.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Asian_pear" }
    ]
  },

  "Shinko": {
    scientificName: "Pyrus pyrifolia 'Shinko'",
    parents: ["Nijisseiki", "Amanogawa"],
    category: "pear",
    emoji: "🍐",
    description: "A Japanese Asian pear bred as a cross of Nijisseiki and Amanogawa at the National Institute of Fruit Tree Science, Japan, and released in 1941. Paternal parentage was corrected via SSR molecular marker analysis, which overturned earlier records. Notable for excellent storage life and strong resistance to black spot disease — qualities that made it commercially important despite ripening later than most Japanese cultivars.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Asian_pear" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  STRAWBERRIES — Wild species
  // ══════════════════════════════════════════════════════════════════════════

  "Woodland Strawberry": {
    scientificName: "Fragaria vesca",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "The woodland or alpine strawberry, native to Europe and Asia and the most widely distributed diploid Fragaria species. Cultivated since antiquity for its small but intensely flavoured fruit and still eaten fresh across Europe. A key model organism in fruit genetics research due to its small genome and ease of transformation, helping scientists understand the octoploid genome of the modern garden strawberry.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fragaria_vesca" }
    ]
  },

  "Virginia Strawberry": {
    scientificName: "Fragaria virginiana",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "A wild octoploid strawberry native to eastern North America, prized by colonists and Native Americans for its exceptional sweetness and intense flavour despite small fruit size. Shipped to Europe from the early 1600s, where it was grown in botanical gardens — and ultimately hybridised with the Chilean Strawberry around 1750 to produce the modern garden strawberry. Contributes intense flavour and cold hardiness to all its descendants.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fragaria_virginiana" }
    ]
  },

  "Chilean Strawberry": {
    scientificName: "Fragaria chiloensis",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "A large-fruited wild octoploid strawberry native to coastal Chile and the Pacific shores of North America, with dense, thick leaves adapted to salty sea air. Collected by the French spy-botanist Amédée-François Frézier in 1714 and brought to France, where it accidentally cross-pollinated with Virginia Strawberry — the event that created the modern garden strawberry. Contributes the large fruit size found in all commercial cultivars today.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fragaria_chiloensis" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  STRAWBERRIES — Garden strawberry and cultivars
  // ══════════════════════════════════════════════════════════════════════════

  "Garden Strawberry": {
    scientificName: "Fragaria × ananassa",
    parents: ["Virginia Strawberry", "Chilean Strawberry"],
    category: "strawberry",
    emoji: "🍓",
    description: "The modern cultivated strawberry — an octoploid hybrid (2n = 8x = 56) created around 1750 in Brittany, France when Virginia and Chilean strawberry plants grown in proximity spontaneously cross-pollinated. Botanist Antoine Nicolas Duchesne documented its hybrid origin and distinctive pineapple-like scent in 1766, naming it ananassa ('pineapple-scented'). Every commercial strawberry in the world is either Fragaria × ananassa or a cultivar derived from it.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Garden_strawberry" }
    ]
  },

  "Mulberry Strawberry": {
    scientificName: "Fragaria × ananassa 'Mulberry'",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    heritage: true,
    description: "An early European garden strawberry cultivar grown in the 1830s, named for its dark, mulberry-like colouration. Used by Charles Mason Hovey of Cambridge, Massachusetts as one of the two parents in his 1836 cross that produced the Hovey strawberry — the first American fruit cultivar produced by deliberate artificial hybridisation. Its own parentage is undocumented.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Charles_Mason_Hovey" }
    ]
  },

  "Hovey": {
    scientificName: "Fragaria × ananassa 'Hovey'",
    parents: ["Mulberry Strawberry", "Virginia Strawberry"],
    category: "strawberry",
    emoji: "🍓",
    heritage: true,
    extinct: true,
    description: "Created in 1836 by Charles Mason Hovey of Cambridge, Massachusetts as a cross of the European 'Mulberry' cultivar with a Virginia Strawberry clone — the first fruit cultivar in America produced from deliberate artificial cross-breeding. Larger and hardier than contemporary varieties, it founded the New England strawberry industry and was grown commercially until around 1890. Hovey published his breeding methods in his 1837 Magazine of Horticulture.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Charles_Mason_Hovey" }
    ]
  },

  "Royal Sovereign": {
    scientificName: "Fragaria × ananassa 'Royal Sovereign'",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    heritage: true,
    description: "Developed by Thomas Laxton of the Laxton Brothers nursery in Bedford, England in 1892 as a cross of 'Noble' and 'King of the Earlies' — two now-obscure historical cultivars. Received a First Class Certificate from the Royal Horticultural Society on release and became enormously successful in English cultivation, combining European flavour with American robustness. A foundational cultivar for 20th-century European breeding programmes.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Royal_Sovereign_strawberry" }
    ]
  },

  "Gorella": {
    scientificName: "Fragaria × ananassa 'Gorella'",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "A Dutch strawberry cultivar released in 1960 from the CPRO-DLO breeding programme (Centre for Plant Breeding and Reproduction Research, Netherlands). Notable for large size, bright red glossy skin, and red flesh. One of the most commercially important Dutch cultivars of the mid-20th century and a direct parent of Elsanta — the variety that came to dominate European fresh markets in the 1980s–90s.",
    links: [
      { label: "ISHS 1999", url: "https://ishs.org/ishs-article/439_12/" }
    ]
  },

  "Holiday": {
    scientificName: "Fragaria × ananassa 'Holiday'",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "A Dutch strawberry cultivar used extensively in breeding programmes and QTL mapping studies. Its own parentage is undocumented in the scientific literature. Primarily known through its role as one parent of Elsanta (Holiday × Gorella, released 1981), which became the dominant commercial strawberry in Europe — making Holiday's genetics foundational to modern European production despite the variety itself being little grown.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_strawberry_cultivars" }
    ]
  },

  "Elsanta": {
    scientificName: "Fragaria × ananassa 'Elsanta'",
    parents: ["Holiday", "Gorella"],
    category: "strawberry",
    emoji: "🍓",
    description: "A major commercial strawberry developed in the Netherlands by crossing Holiday and Gorella, selected in 1975 and released in 1981. Mid-season, with excellent flavour, firm flesh, and outstanding keeping quality that made it ideal for long-distance export — qualities that made it the dominant variety across European supermarkets through the 1990s and 2000s. Widely used as a parent in subsequent breeding programmes worldwide.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_strawberry_cultivars" }
    ]
  },

  "Douglas": {
    scientificName: "Fragaria × ananassa 'Douglas'",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "A UC Davis strawberry cultivar released in 1979, bred as part of the California winter strawberry programme. Dominated the California fresh market in the early 1980s before Chandler took over. Critically, Douglas became a shared parent of both Chandler (1983) and Seascape (1991) — two of the most important UC Davis cultivars of the era — making it a key hub in Californian strawberry genealogy.",
    links: [
      { label: "UC Davis Strawberry Breeding", url: "https://strawberry.ucdavis.edu/" }
    ]
  },

  "Selva": {
    scientificName: "Fragaria × ananassa 'Selva'",
    parents: [],
    category: "strawberry",
    emoji: "🍓",
    description: "A UC Davis day-neutral (everbearing) strawberry released in 1983, one of the first commercially successful day-neutral cultivars capable of producing fruit across multiple seasons rather than only in spring. Its continuous-production habit made it revolutionary for California's year-round market supply. Used as one parent of Seascape (1991), which inherited and improved on Selva's everbearing trait.",
    links: [
      { label: "UC Davis Strawberry Breeding", url: "https://strawberry.ucdavis.edu/" }
    ]
  },

  "Chandler": {
    scientificName: "Fragaria × ananassa 'Chandler'",
    parents: ["Douglas"],
    category: "strawberry",
    emoji: "🍓",
    description: "A high-quality short-day cultivar developed at UC Davis from a 1977 cross of Douglas with an unregistered UC Davis breeding selection (Cal 72.361-105). Released commercially in 1983 and patented (USPP5262P), it dominated the California winter and spring market through the 1980s and into the mid-1990s with its large fruit size, excellent flavour, and high productivity. One of the most commercially successful UC Davis strawberry releases.",
    links: [
      { label: "UC Davis Strawberry Breeding", url: "https://strawberry.ucdavis.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_strawberry_cultivars" }
    ]
  },

  "Seascape": {
    scientificName: "Fragaria × ananassa 'Seascape'",
    parents: ["Selva", "Douglas"],
    category: "strawberry",
    emoji: "🍓",
    description: "A day-neutral strawberry developed at UC Davis from a 1983 cross of Selva and Douglas, first fruited in 1984 and released in 1991–92. Reliable and productive across spring through autumn, it improved on Selva's everbearing habit while combining Douglas's fruit quality. Widely used as a parent in subsequent UC Davis breeding and remains commercially grown in coastal California for premium fresh markets.",
    links: [
      { label: "UC Davis Strawberry Breeding", url: "https://strawberry.ucdavis.edu/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_strawberry_cultivars" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BRASSICA — Wild progenitor species (Triangle of U)
  // ══════════════════════════════════════════════════════════════════════════

  "Wild Cabbage": {
    scientificName: "Brassica oleracea",
    parents: [],
    category: "brassica",
    emoji: "🌿",
    description: "The wild ancestor of almost all cultivated brassica vegetables, still found growing naturally on coastal limestone sea cliffs from Spain to the British Isles. First cultivated by ancient Greeks and Romans, this single species underwent directed selection for different plant parts — leaves, stems, flowers, buds — eventually yielding kale, cabbage, kohlrabi, Brussels sprouts, broccoli, and cauliflower, among others. One of the most morphologically plastic crop species in the world.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brassica_oleracea" }
    ]
  },

  "Brassica rapa": {
    scientificName: "Brassica rapa",
    parents: [],
    category: "brassica",
    emoji: "🌱",
    description: "A diploid Brassica species (genome AA) native to temperate Asia and one of three founding species in the Triangle of U — the genomic model of Brassica crop evolution. Domesticated independently into turnips and Asian leafy greens (bok choy, napa cabbage, mizuna). Serves as one parent genome in the allopolyploid species Brassica napus (rapeseed/canola) and Brassica juncea (brown mustard).",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brassica_rapa" }
    ]
  },

  "Brassica nigra": {
    scientificName: "Brassica nigra",
    parents: [],
    category: "brassica",
    emoji: "🌱",
    description: "A diploid Brassica species (genome BB) native to the Mediterranean and tropical Africa, cultivated for its pungent black mustard seeds used in condiments and cooking. One of three founding species in the Triangle of U. Contributed its BB genome to the allopolyploid crops Brassica juncea (Indian mustard) and Brassica carinata (Ethiopian mustard) through ancient natural hybridisation events.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brassica_nigra" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BRASSICA — Cultivar groups (direct selections from Wild Cabbage)
  // ══════════════════════════════════════════════════════════════════════════

  "Kale": {
    scientificName: "Brassica oleracea var. sabellica",
    parents: ["Wild Cabbage"],
    category: "brassica",
    emoji: "🥬",
    description: "The oldest cultivated form of Brassica oleracea, grown since at least the 5th century BC and the cultivar group closest to the wild ancestor in appearance. Selected for enlarged, frilly or flat leaves rather than head formation. Genomic studies confirm kale's position as one of the most genetically diverse and primitive cultivar groups — effectively a direct continuation of early Mediterranean domestication without the dramatic morphological reorganisation seen in cabbage or cauliflower.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kale" }
    ]
  },

  "Cabbage": {
    scientificName: "Brassica oleracea var. capitata",
    parents: ["Wild Cabbage"],
    category: "brassica",
    emoji: "🥬",
    description: "Selected from wild cabbage for the formation of a dense, overlapping leafy head — a trait that arose through directed selection for terminal bud enlargement. First described as a distinct cultivar in the 1st century AD and adopted across Europe as a winter staple. The heading habit is genomically distinct from the flowering-arrest trait that produces broccoli and cauliflower, representing an independent domestication pathway within B. oleracea.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cabbage" }
    ]
  },

  "Savoy Cabbage": {
    scientificName: "Brassica oleracea var. sabauda",
    parents: ["Cabbage"],
    category: "brassica",
    emoji: "🥬",
    description: "A crinkled-leaf variant that emerged within the heading cabbage lineage through regional selection in Savoy, France, producing its distinctive deeply veined, rumpled foliage. The savoyed texture increases surface area and creates a milder, more complex flavour than smooth-leaf cabbage when cooked. Represents a secondary divergence within the capitata cultivar group rather than an independent selection from the wild ancestor.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Savoy_cabbage" }
    ]
  },

  "Kohlrabi": {
    scientificName: "Brassica oleracea var. gongylodes",
    parents: ["Wild Cabbage"],
    category: "brassica",
    emoji: "🥬",
    description: "Selected for lateral meristem growth producing a swollen, globe-shaped stem — unique among B. oleracea cultivars in being selected for stem tissue rather than leaves, flowers, or buds. First recorded in northern European cultivation in 1554, likely descended from marrow-stemmed kale varieties known in ancient Rome. The swollen stem contains the same nutrients as other brassicas but in a crunchy, water-rich form that remains distinctive in global cuisines.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kohlrabi" }
    ]
  },

  "Brussels Sprouts": {
    scientificName: "Brassica oleracea var. gemmifera",
    parents: ["Wild Cabbage"],
    category: "brassica",
    emoji: "🫛",
    description: "Selected for the enlargement of axillary (side) buds along the main stem, producing miniature cabbage-like heads at each leaf node rather than a terminal head. Named for Brussels, Belgium, where cultivation intensified from the 13th century onward, though the mutation may have arisen earlier. The most recently developed major Brassica cultivar group and the one requiring the most specific developmental redirection from the wild type.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brussels_sprout" }
    ]
  },

  "Broccoli": {
    scientificName: "Brassica oleracea var. italica",
    parents: ["Wild Cabbage"],
    category: "brassica",
    emoji: "🥦",
    description: "An Italian selection dating to ancient Roman cultivation, developed by arresting the plant's flowering process to retain tender, edible immature flower heads. Part of the 'arrested inflorescence' domestication pathway — selecting for plants that delay opening their flowers as long as possible. A 2024 Nature Genetics genomic study confirmed that broccoli is the direct ancestor of cauliflower, which arose through secondary selection for curd formation within the broccoli lineage.",
    links: [
      { label: "Nature Genetics 2024", url: "https://www.nature.com/articles/s41588-024-01744-4" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Broccoli" }
    ]
  },

  "Cauliflower": {
    scientificName: "Brassica oleracea var. botrytis",
    parents: ["Broccoli"],
    category: "brassica",
    emoji: "🥦",
    description: "A secondary selection from within the broccoli lineage, confirmed by 2024 Nature Genetics genomic sequencing to have evolved from broccoli through stepwise domestication. Selected for mutations in the CAULIFLOWER1 and FRUITFULL genes that redirect the inflorescence into a dense, compact white curd. Reached Europe from Cyprus around the 16th century and became one of the most commercially important brassica vegetables globally, prized for its mild flavour and versatile cooking properties.",
    links: [
      { label: "Nature Genetics 2024", url: "https://www.nature.com/articles/s41588-024-01744-4" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cauliflower" }
    ]
  },

  "Romanesco": {
    scientificName: "Brassica oleracea var. botrytis (Romanesco)",
    parents: ["Cauliflower"],
    category: "brassica",
    emoji: "🥦",
    description: "An Italian cultivar of the botrytis group, closely related to cauliflower, selected for lime-green colouration and its mathematically striking self-similar fractal spiral florets — each smaller bud replicates the shape of the whole head. Emerged in Italy during the 18th–19th century, likely through selection within cauliflower cultivation. The fractal geometry arises from the same arrested-inflorescence genetics as cauliflower but with incomplete developmental arrest producing the distinctive spiralling pattern.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Romanesco_broccoli" }
    ]
  },

  "Chinese Broccoli": {
    scientificName: "Brassica oleracea var. alboglabra",
    parents: ["Wild Cabbage"],
    category: "brassica",
    emoji: "🥦",
    description: "Also called gai lan, this Asian selection of B. oleracea arose around the 7th century AD after Mediterranean wild cabbage reached China via the Silk Road, with the earliest records appearing in 7th-century Buddhist texts. Selected independently in southern China (Guangdong Province) for tender flowering shoots and smooth, glossy leaves — a parallel domestication pathway to Italian broccoli from the same wild ancestor. Now fundamental to Cantonese and Southeast Asian cuisines.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gai_lan" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BRASSICA — Intraspecific cultivar hybrids (B. oleracea × B. oleracea)
  // ══════════════════════════════════════════════════════════════════════════

  "Broccolini": {
    scientificName: "Brassica oleracea var. italica × alboglabra",
    parents: ["Broccoli", "Chinese Broccoli"],
    category: "brassica",
    emoji: "🥦",
    description: "Developed by Sakata Seed Company of Japan in 1993 as a deliberate F1 cross between broccoli (var. italica) and Chinese broccoli / gai lan (var. alboglabra) — both varieties of the same species, making this an intraspecific hybrid. First sold under the Japanese brand name 'Aspabroc'; later trademarked as 'Broccolini' in the United States by Mann Packing Company and also marketed as 'Baby Broccoli'. The Chinese broccoli parent contributes long, slender edible stems and a milder, slightly sweet flavour, while the broccoli parent provides the loose floret structure; the combined result cooks faster and tastes less bitter than standard broccoli.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Broccolini" }
    ]
  },

  "Kalette": {
    scientificName: "Brassica oleracea var. gemmifera × sabellica",
    parents: ["Brussels Sprouts", "Kale"],
    category: "brassica",
    emoji: "🌿",
    description: "A deliberate F1 hybrid between Brussels sprouts (var. gemmifera) and kale (var. sabellica), developed by Tozer Seeds Ltd (UK) over roughly 15 years beginning in 2000 and first released commercially around 2010–2012. Marketed as 'Flower Sprouts' in the UK and as 'Kalettes' in North America. Rather than forming the tight compact head of Brussels sprouts, the hybrid produces open, frilly rosette-like sprouts with the curled kale-like leaf margins of its other parent — combining Brussels sprouts' sweet nuttiness with kale's robustness, and edible both raw and roasted.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kalette" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BRASSICA — Triangle of U interspecific hybrids
  // ══════════════════════════════════════════════════════════════════════════

  "Brassica napus": {
    scientificName: "Brassica napus (AACC)",
    parents: ["Wild Cabbage", "Brassica rapa"],
    category: "brassica",
    emoji: "🌾",
    description: "An allotetraploid (AACC genome) that arose through ancient natural hybridisation between Wild Cabbage (CC) and Brassica rapa (AA). Domesticated into both rapeseed/canola (one of the world's most important oilseed crops, used for cooking oil and biofuel) and rutabaga/swede (a root vegetable). The Triangle of U model, proposed by Japanese botanist Woo Jang-choon in 1935, predicted this hybrid relationship decades before genomic confirmation.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brassica_napus" }
    ]
  },

  "Brassica juncea": {
    scientificName: "Brassica juncea (AABB)",
    parents: ["Brassica rapa", "Brassica nigra"],
    category: "brassica",
    emoji: "🌿",
    description: "An allotetraploid (AABB genome) arising from hybridisation of Brassica rapa (AA) and Brassica nigra (BB), with the rapa genome providing the maternal origin. Also called Indian mustard or brown mustard, cultivated widely across South Asia and China for its pungent seeds (used in condiments and cooking oils) and tender young leaves. Its combination of rapa's cold-hardiness with nigra's pungency made it the dominant mustard crop of South and East Asia.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brassica_juncea" }
    ]
  },

  "Brassica carinata": {
    scientificName: "Brassica carinata (BBCC)",
    parents: ["Brassica nigra", "Wild Cabbage"],
    category: "brassica",
    emoji: "🌱",
    description: "An allotetraploid (BBCC genome) arising from hybridisation of Brassica nigra (BB) and Wild Cabbage (CC), completing the three-vertex Triangle of U. Also called Ethiopian mustard, cultivated in Ethiopia and India for its oil-rich seeds and used as a leafy vegetable. The least commercially widespread of the three Triangle of U hybrid species, though gaining interest as a biofuel crop due to its high erucic acid content and drought tolerance.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brassica_carinata" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  COFFEE — Wild species
  // ══════════════════════════════════════════════════════════════════════════

  "Coffea canephora": {
    scientificName: "Coffea canephora",
    parents: [],
    category: "coffee",
    emoji: "☕",
    description: "Also known as Robusta — one of two wild diploid species (2n = 22) whose ancient hybridisation created Arabica coffee. Native to central Africa, with about 40% of global coffee production today. High caffeine content and natural disease resistance make it valuable for espresso blends and instant coffee, though its cup quality is considered lower than Arabica. It also appears as a second-time parent in the Timor Hybrid, where it introgressed back into the Arabica gene pool.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Robusta_coffee" }
    ]
  },

  "Coffea eugenioides": {
    scientificName: "Coffea eugenioides",
    parents: [],
    category: "coffee",
    emoji: "☕",
    description: "The maternal diploid parent (2n = 22) of Arabica coffee — a wild species native to central Africa with smaller beans and a delicate, low-caffeine flavour profile. A 2024 Nature Genetics study confirmed it as the cytoplasmic (maternal) contributor in the natural allopolyploidy event that created Arabica coffee approximately 350,000–610,000 years ago. Rarely used commercially, but gaining interest among specialty roasters for its inherently low caffeine and unusual sweetness.",
    links: [
      { label: "Nature Genetics 2024", url: "https://www.nature.com/articles/s41588-024-01695-w" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coffea_eugenioides" }
    ]
  },

  "Coffea liberica": {
    scientificName: "Coffea liberica",
    parents: [],
    category: "coffee",
    emoji: "☕",
    description: "A distinct coffee species native to western and central Africa, comprising a complex of genetically distinct types (including the Excelsa variant). Under 2% of global commercial coffee production, but growing in importance as a climate-resilient alternative: it thrives in waterlogged peat soils and high heat where Arabica and Robusta cannot survive. Produces distinctively large, asymmetric beans with a smoky, woody, sometimes jackfruit-like flavour profile unlike any Arabica.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coffea_liberica" }
    ]
  },

  "Coffea arabica": {
    scientificName: "Coffea arabica",
    parents: ["Coffea canephora", "Coffea eugenioides"],
    category: "coffee",
    emoji: "☕",
    description: "The world's most cultivated coffee species — a natural allotetraploid (2n = 44) that arose spontaneously in the Ethiopian highlands through a single hybridisation event between Coffea canephora and Coffea eugenioides approximately 350,000–610,000 years ago. Accounts for 60–65% of global production with superior cup quality and aromatic complexity compared to Robusta. All Arabica cultivars descend from this single founding event, resulting in remarkably narrow genetic diversity across the entire species.",
    links: [
      { label: "Nature Genetics 2024", url: "https://www.nature.com/articles/s41588-024-01695-w" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coffea_arabica" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  COFFEE — Foundational cultivars and landraces
  // ══════════════════════════════════════════════════════════════════════════

  "Typica": {
    scientificName: "Coffea arabica 'Typica'",
    parents: ["Coffea arabica"],
    category: "coffee",
    emoji: "☕",
    description: "The original Arabica cultivar that spread globally — first collected from Yemen, then propagated through India, Java, Amsterdam, and the Caribbean before reaching the Americas. All early Western coffee traces through Typica, making it the founding cultivar of the global coffee industry. Parent (through mutation or crossing) of Bourbon, Maragogipe, Mundo Novo, and countless regional varieties; essentially the Adam of the Arabica family tree.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/typica" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Typica_(coffee)" }
    ]
  },

  "Geisha": {
    scientificName: "Coffea arabica 'Geisha'",
    parents: ["Coffea arabica"],
    category: "coffee",
    emoji: "☕",
    description: "An Ethiopian landrace collected from wild Arabica populations near the village of Gesha in southwestern Ethiopia in the 1930s, genetically distinct from the Typica/Bourbon lineage that dominates commercial coffee. Introduced to Central America via FAO and CATIE for disease resistance screening, largely forgotten for decades. Rose to global fame in 2004 when Hacienda La Esmeralda's Panama Geisha won international competitions, now routinely commanding the highest auction prices of any coffee variety.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geisha_(coffee)" }
    ]
  },

  "Bourbon": {
    scientificName: "Coffea arabica 'Bourbon'",
    parents: ["Typica"],
    category: "coffee",
    emoji: "☕",
    description: "A natural single-gene mutation of Typica that arose spontaneously on Réunion Island (formerly Bourbon Island) around 1708 after French traders introduced Typica plants. The mutation produces more compact growth and higher yields than Typica, with burgundy-coloured cherries and a sweeter, more complex cup. Bourbon is the second trunk of the Arabica family tree — parent of Caturra, Mundo Novo (with Typica), SL28, SL34, and numerous modern cultivars.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/bourbon" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bourbon_coffee" }
    ]
  },

  "Maragogipe": {
    scientificName: "Coffea arabica 'Maragogipe'",
    parents: ["Typica"],
    category: "coffee",
    emoji: "☕",
    description: "A natural dominant mutation of Typica discovered in 1870 near the town of Maragogipe in Bahia, Brazil, producing giant 'elephant beans' more than twice the size of standard Arabica. Enlarged leaves and internodes accompany the giant fruit, creating a visually distinctive plant. Despite its unusual appearance and intriguing cup profile, Maragogipe suffers from very low yields. Distributed across Central and South America and used as a parent in the Pacamara cultivar.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/maragogipe" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maragogipe_coffee" }
    ]
  },

  "SL28": {
    scientificName: "Coffea arabica 'SL28'",
    parents: ["Bourbon"],
    category: "coffee",
    emoji: "☕",
    description: "Selected in 1935 at Scott Agricultural Laboratories in Kabete, Kenya from a single tree in a population called Tanganyika Drought Resistant, sourced from Tanzania in 1931. Genetic testing confirms a Bourbon lineage with some additional genetic diversity of unclear origin. Prized for extraordinary cup complexity — blackcurrant, citrus, and tropical fruit notes — it became the flagship of Kenyan specialty coffee and one of the most celebrated varieties in the specialty world.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/sl28" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/SL28" }
    ]
  },

  "SL34": {
    scientificName: "Coffea arabica 'SL34'",
    parents: ["Bourbon"],
    category: "coffee",
    emoji: "☕",
    description: "Selected in the late 1930s from a single tree on the Loresho Estate in Kabete, Kenya, labelled 'French Mission' — indicating it originated from Bourbon seeds brought to East Africa by French missionaries. The French Mission designation confirms Bourbon lineage, distinguishing SL34 from SL28. Produces a rich, full-bodied cup with wine-like complexity; the second most celebrated Kenyan specialty variety and a core component of top Kenyan auction lots.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/sl34" }
    ]
  },

  "Caturra": {
    scientificName: "Coffea arabica 'Caturra'",
    parents: ["Bourbon"],
    category: "coffee",
    emoji: "☕",
    description: "A single-gene dwarf mutation of Red Bourbon discovered on a farm in Minas Gerais, Brazil between 1915–1918 and officially classified in 1937. The 'compactism' mutation produces unusually short, bushy plants that can be planted at double the density of Bourbon, dramatically increasing yield per hectare. Became the dominant variety in Central American coffee production from the 1960s onward and a parent of Catuai and the disease-resistant Catimor hybrid.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/caturra" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caturra_coffee" }
    ]
  },

  "Mundo Novo": {
    scientificName: "Coffea arabica 'Mundo Novo'",
    parents: ["Typica", "Bourbon"],
    category: "coffee",
    emoji: "☕",
    description: "A natural hybrid of Typica and Bourbon discovered in 1943 in Mineiros do Tietê, São Paulo, Brazil. Selected and stabilised by Instituto Agronômico de Campinas (IAC) from 1943–1952, then distributed widely as a standard Brazilian variety. Combines vigorous growth, high yields, and climate adaptability, accounting for roughly 40% of Brazilian coffee production at its peak. The cross of two founding lineages makes it a key parent of Catuai.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/mundo-novo" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mundo_Novo_coffee" }
    ]
  },

  "Catuai": {
    scientificName: "Coffea arabica 'Catuai'",
    parents: ["Mundo Novo", "Caturra"],
    category: "coffee",
    emoji: "☕",
    description: "A deliberate cross of Mundo Novo (female) and Caturra Amarelo (male) created in 1949 by Instituto Agronômico de Campinas in Brazil, officially introduced in 1972 after extensive selection. Combines Caturra's compact, high-density growth with Mundo Novo's vigour and productivity — inheriting both founding lineages of Arabica in a single cultivar. Available in red and yellow berry variants; now one of the most widely planted Arabica cultivars across Central and South America.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/catuai" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Catuaí" }
    ]
  },

  "Timor Hybrid": {
    scientificName: "Coffea arabica × Coffea canephora",
    parents: ["Coffea arabica", "Coffea canephora"],
    category: "coffee",
    emoji: "☕",
    description: "A remarkable natural hybrid of Arabica and Robusta discovered in 1927 in an East Timor Typica plantation established in 1917 — a cross that should be nearly impossible given the different ploidy levels of the two species. Combines Arabica's cup quality with Robusta's resistance to coffee leaf rust (Hemileia vastatrix). Widely distributed to coffee institutes worldwide from the 1950s onward and became the foundational parent of all rust-resistant Catimor and Sarchimor breeding programmes.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/t8667" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Híbrido_de_Timor" }
    ]
  },

  "Catimor": {
    scientificName: "Coffea arabica 'Catimor'",
    parents: ["Timor Hybrid", "Caturra"],
    category: "coffee",
    emoji: "☕",
    description: "A hybrid of Timor Hybrid and Red Caturra created in Portugal in 1959 and extensively developed from 1967 onward. A complex family of sub-varieties (including Costa Rica 95, Anacafe 14, and T8667) developed for specific regional conditions across Asia, Africa, and the Americas. Combines the Timor Hybrid's robust coffee leaf rust resistance with Caturra's dwarf, high-yield stature — making it the primary tool for rust-resistant coffee production in climate-challenged growing regions.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/catimor-129" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Catimor" }
    ]
  },

  "Villa Sarchi": {
    scientificName: "Coffea arabica 'Villa Sarchi'",
    parents: ["Bourbon"],
    category: "coffee",
    emoji: "☕",
    description: "A natural dwarf mutation of Bourbon discovered in the early 1960s at a farm in Villa Sarchi de Naranjo, Alajuela, Costa Rica — a compact dwarf mutation analogous to Caturra but arising independently from a different gene. Grows as a dense, high-yielding, wind-resistant bush well-adapted to the high-altitude volcanic soils of Costa Rica and Central America. Produces a clean, sweet cup with good complexity typical of Bourbon-lineage varieties. Primarily significant today as the foundational parent of Sarchimor, the rust-resistant hybrid that bears its name.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/villa-sarchi" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Villa_Sarchi_(coffee)" }
    ]
  },

  "Sarchimor": {
    scientificName: "Coffea arabica 'Sarchimor (T5296)'",
    parents: ["Villa Sarchi", "Timor Hybrid"],
    category: "coffee",
    emoji: "☕",
    description: "Created at CIRAD's research station in Portugal in the 1970s by crossing Villa Sarchi with Timor Hybrid — the companion programme to Catimor (Caturra × Timor Hybrid), using the Costa Rican Bourbon dwarf in place of the Brazilian Bourbon dwarf. Inherits strong coffee leaf rust resistance from the Timor Hybrid parent while pairing it with Villa Sarchi's Bourbon-lineage cup quality and compact stature. Distributed globally and developed into numerous named sub-varieties including Cauvery (India), Marsellesa (Central America), and Obatã (Brazil), making Sarchimor alongside Catimor one of the two pillars of rust-resistant Arabica breeding worldwide.",
    links: [
      { label: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/sarchimor" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sarchimor" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  AVOCADO — Wild species and ecological races
  // ══════════════════════════════════════════════════════════════════════════

  "Persea americana": {
    scientificName: "Persea americana",
    parents: [],
    category: "avocado",
    emoji: "🥑",
    description: "The cultivated avocado species, domesticated in south-central Mexico at least 5,000 years ago from wild Persea relatives native to highland forests. Exists in three ecologically distinct races — Mexican, Guatemalan, and West Indian — that interbreed freely, with all modern commercial cultivars derived from crosses among them. Archaeological evidence from the Tehuacan Valley shows avocado consumption in Mexico dating back 10,000 years.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado" }
    ]
  },

  "Mexican Race": {
    scientificName: "Persea americana var. drymifolia",
    parents: ["Persea americana"],
    category: "avocado",
    emoji: "🥑",
    description: "The highland Mexican race, originating in the mountains of south-central and western Mexico. Characterised by small elongated fruits (75–300 g) with thin smooth skin, anise-scented leaves (from the presence of estragole), very high oil content (10–30%), and exceptional cold hardiness down to −6°C — making it the most cold-tolerant race. The most genetically diverse of the three races and the ancestral source of cold-hardiness in modern hybrids.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "Guatemalan Race": {
    scientificName: "Persea americana var. guatemalensis",
    parents: ["Persea americana"],
    category: "avocado",
    emoji: "🥑",
    description: "The highland Guatemalan race, native to the mountains of Guatemala and southern Mexico. Produces round, thick-skinned, slow-ripening fruits of medium size with intermediate oil content (10–20%). The dominant genetic contributor to most modern commercial cultivars including Hass (~39% Guatemalan), Reed (~90%), and Pinkerton (~98%). Thrives in subtropical climates and contributes the thick skin that gives Hass its characteristic shelf life.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "West Indian Race": {
    scientificName: "Persea americana var. americana",
    parents: ["Persea americana"],
    category: "avocado",
    emoji: "🥑",
    description: "The lowland tropical race, native to warm coastal regions and the Caribbean. Produces the largest avocado fruits with thin, smooth skin and lower oil content (3–10%), making them less rich than Mexican or Guatemalan types. The least cold-hardy race, thriving only in frost-free tropical conditions. Historically important in Caribbean and Central American commerce but largely displaced by Mexican–Guatemalan hybrids in modern global production.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  AVOCADO — Key cultivars
  // ══════════════════════════════════════════════════════════════════════════

  "Fuerte": {
    scientificName: "Persea americana 'Fuerte'",
    parents: ["Mexican Race", "Guatemalan Race"],
    category: "avocado",
    emoji: "🥑",
    description: "A Mexican × Guatemalan hybrid discovered as a chance seedling in Atlixco, Mexico — a region where the two races had already been interbreeding for generations — and introduced to California in 1911 by plant explorer Carl Schmidt. 'Fuerte' means 'strong' in Spanish, named for its survival of the great California freeze of 1913 while other varieties died. The dominant commercial avocado worldwide before Hass overtook it in the 1970s and a foundational influence on California's avocado industry.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fuerte_avocado" }
    ]
  },

  "Hass": {
    scientificName: "Persea americana 'Hass'",
    parents: ["Mexican Race", "Guatemalan Race"],
    category: "avocado",
    emoji: "🥑",
    description: "A chance seedling discovered by mail carrier Rudolph Hass in his Whittier, California orchard in 1926 and patented in 1935. A 2019 PNAS whole-genome study confirmed Hass is approximately 61% Mexican and 39% Guatemalan, with distinct chromosomal blocks from each parent race. Now represents over 80% of global commercial avocado production — its pebbly, purpling skin, rich buttery flavour, and long shelf life made it the variety that transformed avocado from a regional curiosity into a global commodity.",
    links: [
      { label: "Herrera-Estrella et al. 2019 (PNAS)", url: "https://www.pnas.org/doi/10.1073/pnas.1822129116" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hass_avocado" }
    ]
  },

  "Zutano": {
    scientificName: "Persea americana 'Zutano'",
    parents: ["Mexican Race"],
    category: "avocado",
    emoji: "🥑",
    description: "A predominantly Mexican-type seedling selected in Fallbrook, California in 1926 and introduced commercially in 1941. Named after Juan Zutano, a friend of the original grower. Produces thin-skinned, shiny, pear-shaped fruit with a mild flavour and low oil content compared to Hass. Rarely eaten fresh today, but its Type-B flowering pattern (flowers open as female in the morning and male in the afternoon on alternating days) makes it widely planted as a pollinator companion for Type-A cultivars like Hass.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "Bacon": {
    scientificName: "Persea americana 'Bacon'",
    parents: ["Mexican Race", "Guatemalan Race"],
    category: "avocado",
    emoji: "🥑",
    description: "A Mexican × Guatemalan hybrid selected by James Bacon in Buena Park, California in 1954. Predominantly Mexican in ancestry (~70–80%), giving it the most cold hardiness of the major hybrid cultivars — tolerating brief frosts down to −4°C. Produces medium-sized, smooth-skinned green fruit with mild flavour and lower oil than Hass. Widely planted as a frost-tolerant pollinator (Type-B flower) alongside Hass in cooler California growing regions.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "Reed": {
    scientificName: "Persea americana 'Reed'",
    parents: ["Guatemalan Race"],
    category: "avocado",
    emoji: "🥑",
    description: "A predominantly Guatemalan seedling (~80–90% Guatemalan ancestry) selected by James S. Reed in Carlsbad, California in 1948 and patented in 1960. Produces very large, round fruit (up to 450 g) with thick skin, a small seed, and rich, nutty flavour that ripens in summer months. Remains on the tree for an extended period after maturity without deteriorating — a trait that allows growers to use the tree as a living storage facility and harvest on demand.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "Pinkerton": {
    scientificName: "Persea americana 'Pinkerton'",
    parents: ["Guatemalan Race", "Hass"],
    category: "avocado",
    emoji: "🥑",
    description: "Documented as a Rincon × Hass cross discovered as a chance seedling by J. Pinkerton in Saticoy, California in the 1960s and patented in 1975. DNA analysis confirms Pinkerton is approximately 98% Guatemalan — the near-pure Guatemalan Rincon parent overwhelmed Hass's mixed ancestry. Produces large elongated fruit with a small seed (high flesh-to-seed ratio), pebbly green skin, and superior flavour. Prized for its very high flesh yield and becoming increasingly common in Israeli and South African export markets.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "Wurtz": {
    scientificName: "Persea americana 'Wurtz'",
    parents: ["Mexican Race", "Guatemalan Race"],
    category: "avocado",
    emoji: "🥑",
    description: "A Mexican × Guatemalan dwarf hybrid discovered as a chance seedling in Encinitas, California around 1935 and introduced commercially in 1948, marketed as 'Little Cado.' The only widely available dwarf avocado cultivar, with a distinctive weeping growth habit that keeps the tree small enough for home garden or container growing. Despite its compact size, it produces full-sized fruit with good flavour — making it the choice for domestic gardeners across subtropical and Mediterranean-climate zones.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "Lamb Hass": {
    scientificName: "Persea americana 'Lamb Hass'",
    parents: ["Hass"],
    category: "avocado",
    emoji: "🥑",
    description: "An open-pollinated Hass-descended seedling (through the intermediate cultivar Gwen, itself a Hass grandchild) developed through UC Riverside's breeding programme and selected from 10,000 seedlings at the Bob Lamb Ranch, Camarillo in the late 1980s. Patented in 1996 (USPP9753). Produces larger fruit than Hass with excellent flavour and a later harvest window extending into late summer — filling a seasonal gap in the Hass supply calendar for California growers.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Avocado#Varieties" }
    ]
  },

  "GEM": {
    scientificName: "Persea americana 'GEM'",
    parents: ["Hass"],
    category: "avocado",
    emoji: "🥑",
    description: "Released by UC Riverside in 2003 (designated '3-29-5'), GEM is descended from Hass through the intermediate cultivar Gwen, making it a Hass great-grandchild. Named to honour researcher Grey E. Martin. Produces attractive, high-quality fruit with flavour comparable to Hass but with a later harvest season extending into August and early September in California — allowing growers to spread production across a longer window and reduce price pressure during the Hass glut.",
    links: [
      { label: "UC Riverside", url: "https://avocado.ucr.edu/avocado-varieties" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BLUEBERRY — Wild species
  // ══════════════════════════════════════════════════════════════════════════

  "Vaccinium corymbosum": {
    scientificName: "Vaccinium corymbosum",
    parents: [],
    category: "blueberry",
    emoji: "🫐",
    description: "The highbush blueberry, native to eastern North America from Nova Scotia to Florida and the primary wild ancestor of virtually all commercial blueberry cultivars. Domestication began in 1908 when Elizabeth Coleman White and USDA botanist Frederick Coville launched a systematic programme at Whitesbog, New Jersey to select superior wild bushes for fruit size and quality — transforming an uncultivated woodland fruit into one of North America's most important berry crops.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vaccinium_corymbosum" }
    ]
  },

  "Vaccinium darrowii": {
    scientificName: "Vaccinium darrowii",
    parents: [],
    category: "blueberry",
    emoji: "🫐",
    description: "A warm-climate, evergreen blueberry species native to Florida's woods and swamps. Contributes reduced chilling hour requirements and heat tolerance to Southern highbush hybrids — enabling blueberry cultivation across the Deep South and Mediterranean climates where Northern highbush cultivars cannot fruit adequately. Used extensively in University of Florida and USDA breeding programmes from the 1960s onward to create cultivars suited to hot, humid Southern conditions.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vaccinium_darrowii" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BLUEBERRY — Foundational wild selections
  // ══════════════════════════════════════════════════════════════════════════

  "Brooks": {
    scientificName: "Vaccinium corymbosum 'Brooks'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "A superior wild highbush selection discovered in July 1908 near the farm of Fred Brooks in Burlington County, New Jersey — one of the first plants identified in Elizabeth White and Frederick Coville's systematic wild selection programme. Selected using White's 'blueberry gage' screening tool for berries over 0.5 inches in diameter. Brooks appears in the parentage of 13 of the first 15 USDA blueberry releases, making it the single most influential genotype in the domestication of the blueberry.",
    links: [
      { label: "Arnold Arboretum", url: "https://arboretum.harvard.edu/stories/whitesbog-blues/" }
    ]
  },

  "Rubel": {
    scientificName: "Vaccinium corymbosum 'Rubel'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "A wild highbush selection discovered in 1912 in the New Jersey Pinelands by Rube Leek, named by Elizabeth White and Coville by changing the final 'n' to 'l.' One of the most productive wild selections, with small-to-medium sweet-tart berries and vigorous growth. Still grown as a heritage variety today. Became a direct parent of both Rancocas and Jersey, and through Jersey, influenced Bluecrop and most subsequent Northern highbush genetics.",
    links: [
      { label: "Arnold Arboretum", url: "https://arboretum.harvard.edu/stories/whitesbog-blues/" }
    ]
  },

  "Grover": {
    scientificName: "Vaccinium corymbosum 'Grover'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "A wild highbush selection named for Russell Grover, used by Frederick Coville in the first systematic blueberry crossing experiments starting in 1911–1913. One of the foundational cultivars whose crosses generated thousands of hybrid seedlings that formed the basis of the first named blueberry releases. Its most prominent offspring is Jersey (Rubel × Grover), one of the oldest cultivars still commercially grown today.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Sooy": {
    scientificName: "Vaccinium corymbosum 'Sooy'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "A wild highbush selection from the New Jersey Pinelands, one of the foundational plants in Coville and White's early breeding programme. Used by Coville as the second parent in the 1920 Pioneer release (Brooks × Sooy) — one of the first named hybrid blueberry cultivars. Like Brooks and Rubel, Sooy represents the small group of wild plants whose genetics underpin the entire modern commercial blueberry.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Stanley": {
    scientificName: "Vaccinium corymbosum 'Stanley'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released in 1930 by Frederick Coville and named for his son, developed from New Jersey Pinelands wild material. Mid-to-late season with good yields of large, firm berries with excellent shipping qualities. Stanley became a critical parent in both Berkeley (1949) and Blueray (1955), contributing its firm-fruit and late-ripening traits to two of the mid-20th century's most important commercial cultivars.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Earliblue": {
    scientificName: "Vaccinium corymbosum 'Earliblue'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "Developed by Frederick Coville and released in 1952, one of the first truly early-ripening Northern highbush cultivars. Earliblue's most lasting contribution is as a parent of Duke (1987) — now the world's most commercially important early-season blueberry — in which Earliblue's early-ripening trait was successfully transferred into a high-yield, firm-fruited package suited to global export.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Ivanhoe": {
    scientificName: "Vaccinium corymbosum 'Ivanhoe'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "Introduced in 1952, a mid-season highbush cultivar with productive yields and good berry size. Ivanhoe's lasting significance is as one of the two parents of Duke (1987) — where it contributed vigour and productivity to complement Earliblue's early-ripening trait — making it an indirect ancestor of the most commercially dominant early-season blueberry in the world today.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Elizabeth": {
    scientificName: "Vaccinium corymbosum 'Elizabeth'",
    parents: ["Vaccinium corymbosum"],
    category: "blueberry",
    emoji: "🫐",
    description: "A Northern highbush cultivar named in honour of Elizabeth Coleman White, the New Jersey cranberry farmer who co-founded the blueberry domestication programme with Coville in 1908. Produces high-quality, flavourful berries and was used by USDA breeders as one parent of the Legacy cultivar (1993) — a bridge variety combining Northern highbush quality with the reduced chilling requirements needed for warmer growing regions.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  BLUEBERRY — Documented cultivar crosses
  // ══════════════════════════════════════════════════════════════════════════

  "Pioneer": {
    scientificName: "Vaccinium corymbosum 'Pioneer'",
    parents: ["Brooks", "Sooy"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released in 1920 by Frederick Coville as a cross of Brooks and Sooy — one of the very first named hybrid blueberry cultivars, representing the moment the blueberry crossed from wild selection into deliberate breeding. Pioneer's early ripening and productive habit made it a standard for commercial orchards in the Northeast and a critical parent of Bluecrop, the mid-century cultivar that shaped the modern blueberry industry.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Jersey": {
    scientificName: "Vaccinium corymbosum 'Jersey'",
    parents: ["Rubel", "Grover"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released in 1928 by Frederick Coville as a Rubel × Grover cross, one of the oldest Northern highbush cultivars still commercially grown today. Mid-season, with large, firm berries and excellent flavour. Jersey appears in the parentage of both Bluecrop (1952) and Blueray (1955) — making it doubly influential in the genetics of mid-20th century commercial blueberry production and one of the most consequential cultivars in blueberry history.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vaccinium_corymbosum" }
    ]
  },

  "Bluecrop": {
    scientificName: "Vaccinium corymbosum 'Bluecrop'",
    parents: ["Jersey", "Pioneer", "Stanley"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released jointly by the USDA and Rutgers in 1952 from a 1934 cross combining Jersey and Pioneer (via the intermediate GM-37 line) with Stanley and June (via the intermediate CU-5 line). One of the most commercially successful highbush cultivars ever bred — mid-season, very productive, with large firm berries and excellent shelf life. Bluecrop shaped the modern commercial blueberry industry and remains one of the most widely planted varieties globally, particularly in Northern Europe.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bluecrop" }
    ]
  },

  "Duke": {
    scientificName: "Vaccinium corymbosum 'Duke'",
    parents: ["Ivanhoe", "Earliblue"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released in 1987 by the USDA as an Ivanhoe × Earliblue cross, with a small contribution (about 4%) of Vaccinium angustifolium (lowbush blueberry) genetics providing cold hardiness. The first commercial variety to market each season — its very early ripening, combined with large firm berries and outstanding post-harvest shelf life, made it revolutionary for global fresh market export. Now the most commercially important early-season highbush cultivar worldwide, dominant in Southern Hemisphere production.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Duke_blueberry" }
    ]
  },

  "Draper": {
    scientificName: "Vaccinium corymbosum 'Draper'",
    parents: ["Duke"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released in 2004 from the Michigan State University breeding programme as a cross of Duke with an elite USDA selection (G751), patented by Fall Creek Nurseries. Transfers G751's exceptionally firm, long-lasting post-harvest quality into Duke's early-season background. Now one of the fastest-growing commercial blueberry varieties globally, prized by exporters for the combination of early season, superior firmness, and attractive large berry size.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Blueberry" }
    ]
  },

  "US 75": {
    scientificName: "Vaccinium darrowii × V. corymbosum 'US 75'",
    parents: ["Vaccinium darrowii", "Bluecrop"],
    category: "blueberry",
    emoji: "🫐",
    description: "A USDA breeding line created by crossing Vaccinium darrowii (the Southern evergreen blueberry) with Bluecrop, bridging Northern and Southern highbush genetics. Not grown commercially in its own right, but used by USDA breeders to transfer V. darrowii's reduced chilling hour requirement into the Northern highbush gene pool. Served as one parent of Legacy (1993), creating a cultivar that combines Northern highbush fruit quality with enough Southern adaptability to extend commercial production into warmer regions.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "Legacy": {
    scientificName: "Vaccinium corymbosum 'Legacy'",
    parents: ["Elizabeth", "US 75"],
    category: "blueberry",
    emoji: "🫐",
    description: "Released in 1993 by the USDA and Rutgers as an Elizabeth × US 75 cross, where US 75 carries Vaccinium darrowii genetics through Bluecrop. Legacy bridges Northern and Southern highbush heritage — retaining large fruit size and excellent flavour from Elizabeth while reducing chilling requirements through the V. darrowii influence in US 75. Exhibits a semi-evergreen habit in mild climates and extended harvest season, making it valuable for fresh market production across transitional growing zones.",
    links: [
      { label: "Rutgers Blueberry History", url: "https://breeding.rutgers.edu/blueberry-history/" }
    ]
  },

  "O'Neal": {
    scientificName: "Vaccinium corymbosum × V. darrowii 'O'Neal'",
    parents: ["Vaccinium corymbosum", "Vaccinium darrowii"],
    category: "blueberry",
    emoji: "🫐",
    description: "A Southern highbush hybrid combining Vaccinium corymbosum and V. darrowii genetics for very low chilling hour requirements (under 200 hours), enabling commercial blueberry production across Florida, Georgia, and other Southeastern states. Early blooming and early ripening, with large, sweet, firm berries. One of the most widely planted Southern highbush cultivars and a benchmark for the category — proving that high-quality blueberries could be grown commercially in warm climates previously considered unsuitable.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Blueberry" }
    ]
  },

  "Star": {
    scientificName: "Vaccinium corymbosum × V. darrowii 'Star'",
    parents: ["Vaccinium corymbosum", "Vaccinium darrowii"],
    category: "blueberry",
    emoji: "🫐",
    description: "A Southern highbush hybrid combining Vaccinium corymbosum and V. darrowii genetics, developed at the University of Florida for warm, humid climates with minimal winter chill. Alongside O'Neal, Emerald, and Jewel, Star formed the backbone of commercial Florida blueberry production for over a decade. Produces large, high-quality berries with excellent flavour and adapts well to the subtropical conditions of the Southeastern US.",
    links: [
      { label: "University of Florida EDIS", url: "https://edis.ifas.ufl.edu/publication/HS1245" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  KIWIFRUIT — Wild species
  // ══════════════════════════════════════════════════════════════════════════

  "Fuzzy Kiwifruit": {
    scientificName: "Actinidia deliciosa",
    parents: [],
    category: "kiwi",
    emoji: "🥝",
    description: "A hexaploid wild species (2n = 6x = 174) native to the Yangtze River valley of central China, first known to Europeans as 'Chinese Gooseberry.' Seeds were brought to New Zealand in 1904 by Isabel Fraser from a mission station in Yichang, and the resulting seedling plants became the genetic foundation of the entire modern kiwifruit industry. Renamed 'kiwifruit' by New Zealand marketers in 1959 to avoid the word 'Chinese' during Cold War export marketing.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Actinidia_deliciosa" }
    ]
  },

  "Golden Kiwi": {
    scientificName: "Actinidia chinensis",
    parents: [],
    category: "kiwi",
    emoji: "🥝",
    description: "A diploid wild species (2n = 2x = 58) native to south-central China with golden-yellow flesh and a distinctive tropical sweetness less acidic than the fuzzy kiwifruit. Historically less favoured for cultivation, it became commercially important in the 1990s when HortResearch New Zealand developed the first commercial golden cultivar (Hort16A). The diploid genome makes it simpler than the hexaploid fuzzy kiwifruit for controlled breeding programmes.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Actinidia_chinensis" }
    ]
  },

  "Hardy Kiwi": {
    scientificName: "Actinidia arguta",
    parents: [],
    category: "kiwi",
    emoji: "🥝",
    description: "A cold-tolerant wild kiwifruit species native to cool regions of East Asia, producing smooth-skinned, grape-sized fruits (2–3 cm) that can be eaten whole without peeling. Extremely vigorous vines that withstand temperatures below −20°C — far more cold-hardy than Actinidia deliciosa. The species remains largely unevaluated commercially compared to fuzzy kiwifruit, with Issai and Ken's Red among the earliest named selections for horticulture.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Actinidia_arguta" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  KIWIFRUIT — Fuzzy kiwi cultivars (Actinidia deliciosa)
  // ══════════════════════════════════════════════════════════════════════════

  "Hayward": {
    scientificName: "Actinidia deliciosa 'Hayward'",
    parents: ["Fuzzy Kiwifruit"],
    category: "kiwi",
    emoji: "🥝",
    description: "Selected by Hayward Wright in Avondale, Auckland around 1924 from seedling plants descended from Isabel Fraser's 1904 Chinese seed introduction. Large, oval fruit with excellent storage life (up to 8 months refrigerated) and a balanced sweet-tart flavour that set the commercial standard. First exported in 1952 and by 1975 had become the sole New Zealand export cultivar — a dominance it still holds today, with Hayward representing the vast majority of global fuzzy kiwifruit production.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kiwifruit" },
      { label: "Te Ara NZ Encyclopedia", url: "https://teara.govt.nz/en/kiwifruit" }
    ]
  },

  "Bruno": {
    scientificName: "Actinidia deliciosa 'Bruno'",
    parents: ["Fuzzy Kiwifruit"],
    category: "kiwi",
    emoji: "🥝",
    description: "An early New Zealand selection from the original 1904 Chinese seed material, predating Hayward's formal selection. Produces large, elongated cylindrical fruits with dark green flesh and a strong kiwifruit flavour, ripening earlier than Hayward. One of six cultivars standardised by New Zealand's Fruit Research Division in the early 1950s. Now a minor commercial variety, primarily of historical significance as one of the pioneer selections that proved the Yangtze Valley material could produce commercially viable fruit in New Zealand.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kiwifruit" }
    ]
  },

  "Abbott": {
    scientificName: "Actinidia deliciosa 'Abbott'",
    parents: ["Fuzzy Kiwifruit"],
    category: "kiwi",
    emoji: "🥝",
    description: "An early-ripening selection from Isabel Fraser's 1904 Chinese introduction, one of six cultivars standardised by the New Zealand Fruit Research Division in the early 1950s for commercial assessment. Produces medium-sized fruits with juicy, sweet flesh and mild flavour, ripening earlier than Hayward but with shorter storage life. Remains in cultivation in New Zealand and parts of Asia, largely overshadowed commercially by Hayward's superior storage and uniformity.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kiwifruit" }
    ]
  },

  "Allison": {
    scientificName: "Actinidia deliciosa 'Allison'",
    parents: ["Fuzzy Kiwifruit"],
    category: "kiwi",
    emoji: "🥝",
    description: "A selection named after Alexander Allison, one of the brothers who first cultivated Isabel Fraser's 1904 Chinese seeds in Wanganui — the Allison family's original three plants (two female, one male) were the founding stock from which all New Zealand commercial cultivars were subsequently selected. The Allison variety produces oval fruits with smooth green interior and a refreshing, mild flavour. Historically important as part of the founding population that proved kiwifruit could succeed in New Zealand.",
    links: [
      { label: "Te Ara NZ Encyclopedia", url: "https://teara.govt.nz/en/kiwifruit" }
    ]
  },

  "Monty": {
    scientificName: "Actinidia deliciosa 'Monty'",
    parents: ["Fuzzy Kiwifruit"],
    category: "kiwi",
    emoji: "🥝",
    description: "A productive selection from the original 1904 Chinese seed introduction, one of six cultivars classified in the New Zealand Fruit Research Division's standardisation work in the early 1950s. Produces medium-sized fruits with pleasant sweetness and good adaptability to diverse growing climates. Now a minor commercial cultivar, primarily of historical significance in documenting the range of variation present in the original New Zealand founding population.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kiwifruit" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  KIWIFRUIT — Golden kiwi cultivars (Actinidia chinensis)
  // ══════════════════════════════════════════════════════════════════════════

  "Hort16A": {
    scientificName: "Actinidia chinensis 'Hort16A'",
    parents: ["Golden Kiwi"],
    category: "kiwi",
    emoji: "🥝",
    description: "The first commercially successful golden kiwifruit, developed through a planned breeding programme at HortResearch Auckland by crossing two A. chinensis selections from Chinese seed imports (1978 and 1981). Selected in 1991–92 and first marketed internationally by Zespri in 1997 as 'Zespri Gold.' Achieved premium prices for its tropical sweetness and distinctive golden flesh. Devastated after 2010 when Pseudomonas syringae pv. actinidiae (Psa bacterial canker) swept through plantings worldwide, necessitating its replacement.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gold_kiwifruit" }
    ]
  },

  "Zespri SunGold": {
    scientificName: "Actinidia chinensis 'Zesy002'",
    parents: ["Golden Kiwi"],
    category: "kiwi",
    emoji: "🥝",
    description: "A PSA-resistant golden kiwi cultivar developed by Plant & Food Research New Zealand and released around 2010–12 to replace the Psa-susceptible Hort16A. Bred from controlled crosses of A. chinensis cultivars selected for disease tolerance while maintaining the premium tropical sweetness and golden flesh of its predecessor. Marketed by Zespri as 'SunGold', it has become the fastest-growing kiwifruit product globally, commanding consistent premium pricing for its distinctive flavour profile.",
    links: [
      { label: "Zespri", url: "https://www.zespri.com/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gold_kiwifruit" }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  KIWIFRUIT — Hardy kiwi cultivars (Actinidia arguta)
  // ══════════════════════════════════════════════════════════════════════════

  "Issai": {
    scientificName: "Actinidia arguta 'Issai'",
    parents: ["Hardy Kiwi"],
    category: "kiwi",
    emoji: "🥝",
    description: "A self-fertile hardy kiwi cultivar of Japanese origin — one of the first named selections made from Actinidia arguta for commercial horticulture. Unique in that female flowers possess functional male organs, allowing a single vine to set fruit without a separate male pollinator (though cross-pollination improves yield). Produces sweet, grape-sized fruits with smooth green skin and mild complex flavour. Hardy to at least −20°C, making it viable in cool temperate zones where standard fuzzy kiwifruit cannot survive winter.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Actinidia_arguta" }
    ]
  },

  "Ken's Red": {
    scientificName: "Actinidia melanandra × A. arguta 'Ken's Red'",
    parents: ["Hardy Kiwi"],
    category: "kiwi",
    emoji: "🥝",
    description: "A red-fleshed hardy kiwi interspecific hybrid developed in New Zealand by crossing Actinidia arguta with A. melanandra (or A. purpurea), producing a distinctive reddish-purple flesh colour from anthocyanin pigments absent in standard hardy kiwifruit. Produces grape-sized fruits with a sweet-tart flavour profile with pronounced aromatic notes. Extremely cold-hardy (to −40°C and below) and valued for both fresh eating and ornamental garden cultivation in cool climates.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Actinidia_arguta" }
    ]
  }
};
