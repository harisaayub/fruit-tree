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
  }
};
