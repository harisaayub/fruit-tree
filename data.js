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

  "Black Republican Cherry": {
    scientificName: "Prunus avium 'Black Republican'",
    parents: ["Sweet Cherry"],
    category: "stone",
    emoji: "🍒",
    description: "One of the oldest commercial sweet cherry varieties in the Pacific Northwest, introduced around 1860 by Seth Lewelling's orchard in Oregon. Dark-skinned, firm, and somewhat bitter. Its main importance today is as a founding parent of the Bing cherry, the most commercially significant sweet cherry in North America.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bing_cherry#History" }
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
  }
};
