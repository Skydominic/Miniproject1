const products = [
  {
    name: 'Rejuvenating Plus Set',
    src: 'imgs/product img/rejuv.png',
    msds: 'imgs/msds/msds-rejuv-set.pdf',
    fda: 'imgs/fda/rejuv-set-fda.pdf',
    info: 'Rejuvenates your skin, revealing your fairer, younger, healthier skin',
    ingredients: `<div class='pop-ing-text'><h4>KOJIC SOAP</h4>
    <span>Sodium Hydroxide, Cocos Nucifera Oil, Aqua, Sodium Silicate Glycerine, Cocamide dea, Kojic Acid Dipalmitate, Orangette Fragrance, C.I.# 15510 (Orange)</span></div>
      <br>
    <div class='pop-ing-text'><h4>REJUVENATING PLUS CREAM:</h4>
      Deionized water, Stearic Acid, Cetyl Stearyl Alcohol, Glyceryl monosterate, Glycerin,Niacinamide, Morus Alba Bark Extract, Glycolic acid, Fragrance, Phenoxyethanol, Acrylates/C10-30 alkyl acrylate crosspolymer, Triethanolamine
      </div>
      <br>
      <div class='pop-ing-text'><h4>SUNSCREEN GEL CREAM SPF30:</h4>
      Deionized water, Glycerin, Dimethicone,Benzophenone-3, Phenylbenzimdazole Sulfonic acid, Octocrylene, Phenoxyethanol, Fragrance, Acrylate/C-10 alkyl acrylates crosspolymer,Triethanolamine
      </div>
      <br>
      <div class='pop-ing-text'><h4>REJUVENATING PLUS TONER:</h4>
      Deionized water, Fruit extract Distillates, Glycolic acid, Niacinamide, Aloe barbadensis(Aloe vera)
      extract, Phenoxyethanol,
      Fragrance</div>`,
    srp: 300,
  },
  {
    name: 'Whitening Facial Set',
    src: 'imgs/product img/white.png',
    msds: 'imgs/msds/msds-whitening-set.pdf',
    fda: 'imgs/fda/whitening-set-fda.pdf',
    info: 'Maintainance after using Rejuvenating Plus set, Whitens your skin in a milder way.',
    ingredients: `<div class='pop-ing-text'><h4>KOJIC SOAP</h4>
    <span>Sodium Hydroxide, Cocos Nucifera Oil, Aqua, Sodium Silicate Glycerine, Cocamide dea, Kojic Acid Dipalmitate, Orangette Fragrance, C.I.# 15510 (Orange)
    </span></div>
    <br>
    
    <div class='pop-ing-text'><h4>WHITENING FACIAL CREAM:</h4>
    <span>Water (aqua), Stearic acid, Cetearyl alcohol, Ceteareth 20, Dimethicone, Glyceryl stearate, Glycerine, Carica papaya (papaya) fruit extract, Polysorbate 20, DMDM Hydantoin, Xanthan gum, BHT, Tetrasodium Edta
    </span></div>
    <br>

    <div class='pop-ing-text'><h4>SUNSCREEN GEL CREAM Spf 30:</h4>
    <span>Deionized water, Glycerin, Dimethicone,Benzophenone-3, Phenylbenzimdazole Sulfonic acid, Octocrylene, Phenoxyethanol, Fragrance, Acrylate/C-10 alkyl acrylates crosspolymer,Triethanolamine
    </span></div>
    <br>

    <div class='pop-ing-text'><h4>WHITENING FACIAL TONER:</h4>
    <span>Water (aqua), Fruit extract Distillates, Polysorbate 20, Carica Papaya (papaya) Fruit extract, DMDM Hydantoin, Lactic Acid, Tetrasodium edta.}   </span></div>`,
    srp: 300,
  },
  {
    name: 'Luxury Lotion',
    src: 'imgs/product img/lux.png',
    msds: 'imgs/msds/msds-luxury lotion.pdf',
    info: 'Reveal the beauty you deserve as we give the best reward that your skin truly needs. Introducing Prestige Luxury Whitening Lotion.',
    ingredients:
      'Deionized water, Stearic acid, Cetyl Stearyl Alcohol, Dimethicone, Titanium Dioxide, Butyl Methoxydibenzoylmethane, Octocrylene, Phenylbenzimdazole Sulfonic acid, Isopropyl Myristate, Glutathione,Niacinamide,Arbutin, DMDM hydantoin, Fragrance, CI 16035',
    fda: 'imgs/fda/lux-fda.png',

    srp: 250,
  },
  {
    name: 'Sunscreen Gel Cream',
    src: 'imgs/product img/sunscreen.png',
    msds: 'imgs/msds/sunscreen.pdf',
    fda: 'imgs/fda/sunscreen-gel-cream.jpg',
    info: 'Protect your skin from sun damages this summer. Introducing our new Sunscreen Gel Cream with Spf 30.',
    ingredients:
      'Deionized water, Glycerin, Dimethicone, Benzophenone-3, Phenylbenzimdazole Sulfonic acid, Octocrylene, Phenoxyethanol,Fragrance,Acrylate/C-10 alkyl acrylates crosspolymer,Triethanolamine',

    srp: 200,
  },
  {
    name: 'Miracle glow Serum',
    src: 'imgs/product img/serum.png',
    msds: 'imgs/msds/miracle-serum.pdf',
    fda: 'imgs/fda/miracle-serum-fda.png',
    info: 'This Prestige Miracle Glow Repair Serum is formulated to help you achieve a healthier skin that comes with Niacinamide that helps build keratin to keep your skin firm and healthy. It also has Hyaluronic Acid that would help you fight signs of aging such as wrinkles and fine lines, Arbutin that lightens dark spots, and Snail Extract for smoothing out wrinkles, blemishes and acne.',
    ingredients:
      'Deionized water, Hydroxy Methyl Cellulose, Schizandra Chinensis Fruit Extract, Butylene Glycol, Coenzyme Q10, arbutin, snail extract, hyaluronic acid,Grape Seed extract, Niacinamide, Phenoxyethanol, Fragrance',
    srp: 200,
  },
  {
    name: 'Glutamansi Lotion',
    src: 'imgs/product img/gluta.png',
    msds: 'imgs/msds/Glutamansi with bakind soda lotion.pdf',
    fda: 'imgs/fda/gluta-fda.png',
    info: 'Instantly whitens and protects your skin.',
    ingredients:
      'Deionized water, Stearic acid, Cetyl Stearyl Alcohol, Dimethicone, Titanium Dioxide, Butyl Methoxydibenzoylmethane, Octocrylene, Phenylbenzimdazole Sulfonic acid, Isopropyl Myristate,  Glutathione, Baking soda, Niacinamide, DMDM hydantoin, Fragrance.',
    srp: 200,
  },
  {
    name: 'Luxury Kojic Soap',
    src: 'imgs/product img/kojicsoap.png',
    msds: 'imgs/msds/msds kojic soap.pdf',
    fda: 'imgs/fda/fda-kojic-soap.jpg',
    info: `Prestige Kojic Whitening Soap has the best formula that blends effective whitening ingredients with nourishing, moisturizing properties, and a fresh long-lasting
    orange fragrance.`,
    ingredients: `Sodium Hydroxide, Cocos Nucifera Oil, Aqua, Sodium Silicate Glycerine, Cocamide dea,
    Kojic Acid Dipalmitate, Orangette Fragrance, C.I.#15510(Orange)`,
    srp: 100,
  },
  {
    name: 'Intensive Underarm Whitening Cream',
    src: 'imgs/product img/uacream.png',
    msds: 'imgs/msds/uacream.pdf',
    info: `The Intensive Underarm Whitening Cream contains giga white formula that is suitable for the underarms, elbows, nape, inner thighs and knees.  It is expertly formulated with the best and effective whitening properties that reduce hyperpigmentation and evens out skin tone that leaves you a fresh and brighter skin! 
    `,
    ingredients: `Water (aqua), Stearic acid, Cetearyl alcohol, Ceteareth 20, Dimethicone, Glyceryl stearate, Glycerine, Carica papaya (papaya) fruit extract, Polysorbate 20 , niacinamide, arbutin, Xanthan gum,titanium dioxide,Schizandra Chinensis Fruit Extract, Butylene Glycol,Phenoxyethanol, Tetrasodium Edta, Fragrance`,
    fda: 'imgs/fda/intensive-whitening-cream.jpg',
    srp: 350,
  },
  {
    name: 'Keratin Blowout',
    src: 'imgs/product img/keratin.png',
    msds: 'imgs/msds/Keratin Blowout.pdf',
    fda: 'imgs/fda/prestige-keratin-blowoutnotif.pdf',
    info: `Prestige Keratin Blowout smoothens, nourishes and
    straightens your hair.`,
    ingredients: `Aqua, Cetearyl Alcohol, Cetriminium Chloride, Steartrimonium Chloride, 
    Amodimethicone and Trideceth-12 Anocetrimonium Chloride, Kerasol,
    Phenoxyethanol, Parfum`,
    srp: 150,
  },
  {
    name: 'Underarm Spray',
    src: 'imgs/product img/uaspray.png',
    msds: 'imgs/msds/Underarm Whitening DeoSpray.pdf',
    fda: 'imgs/fda/FDA-DEO.png',
    info: `Prestige's Underarm Whitening Deodorant Spray gives you a 24 - 48 hours protection with immense whitening effect. The product is enhanced with 2x more whitening ingredients and skin nutrients, it provides nourishment and smoothens dark
    underarms making it dry and fresh all day.`,
    ingredients: `Deionized water, Aluminum chloride, Papaya extract,
    Calamansi extract, Lactic Acid, Phenoxyethanol, Fragrance`,
    srp: 250,
  },
  {
    name: 'Korean Bleaching Scrub',
    src: 'imgs/product img/korean.png',
    msds: 'imgs/msds/msds Korean Bleaching Scrub.pdf',
    fda: 'imgs/fda/korean-fda.png',
    info: `Bleaching Scrub is one way to exfoliate dead skin. It also make our skin healthy because of the infuse active ingredients like
    papaya extract, arbutin and glutathione for whiter and smoother skin.`,
    ingredients: `Deionized water, Stearic acid, Cetyl Stearyl Alcohol, Dimethicone, Titanium Dioxide,Papaya extract,Glutathione,Niacinamide,Arbutin, DMDM hydantoin, Puenscrub,Fragrance`,
    srp: 200,
  },
  {
    name: 'Instabright Whitening Lotion',
    src: 'imgs/product img/madamk.png',
    msds: 'imgs/msds/instabright madam k msds.pdf',
    fda: 'imgs/fda/madam-k-fda.png',
    info: `Instabright whitening lotion is a perfect lotion for everyone. It has a long term whitening effect that can help you achieve the milky skin. This lotion can give you a various benefits, it has SPF 50 that provides extra protection on your skin and it will give your skin a bright, soft, and moisturized skin.
    `,
    ingredients: `Deionized water, Stearic acid, Cetyl Stearyl Alcohol, Dimethicone, Titanium Dioxide, Butyl Methoxydibenzoylmethane, Octocrylene, Phenylbenzimdazole Sulfonic acid, Isopropyl Myristate, Alpha arbutin, Shea butter, Zinc oxide, Niacinamide, DMDM  hydantoin, Fragrance, CI 16035`,
    srp: 299,
  },
  {
    name: 'Kojic Papaya Soap Family Pack',
    src: 'imgs/product img/family.png',
    msds: 'imgs/msds/Kojic Papaya Soap Family Pack.pdf',
    fda: 'imgs/fda/Family-Pack.jpg',
    info: `Prestige Kojic Whitening Soap has the best formula that blends effective whitening ingredients with nourishing, moisturizing properties and a fresh long-lasting orange fragrance.`,
    ingredients: `Sodium Hydroxide, Cocos Nucifera Oil, Aqua,
    Sodium Silicate Glycerine, Cocamide dea, Papaya
    Extract, Kojic Acid Dipalmitate, Orangette Fragrance,
    C.I#15510(Orange)`,
    srp: 500,
  },
  {
    name: 'Kojic with papaya Puree foam wash',
    src: 'imgs/product img/kojicfoam.png',
    msds: 'imgs/msds/msds Kojic with Papaya Puree Foam Wash.pdf',
    info: `Prestige's Kojic Puree Foam Wash is a Natural lightening and nourishing
    Foam wash. It is delicately formulated to make your regimen
    effortless through the combination of Kojic and Papaya Extract.`,
    ingredients: `Water, Kojic Acid, Papaya Puree, L-glutathione, Aloe Barbadensis leaf, Juice Catica papaya leaf extract, Glycerin, Sodium lactate, Propylene glycol, Hamamelis Virginiana (with hazel extract) VItamin B3, Phenoxyethanol fragrance CI 16035`,
    fda: 'imgs/fda/fda foam wash.jpg',
    srp: 250,
  },
  {
    name: 'Miracle GLow Foam Wash',
    src: 'imgs/product img/glowfoam.png',
    msds: 'imgs/msds/msds miracle Foam Wash.pdf',
    fda: 'imgs/fda/miracle-glow-foam-wash.png',
    info: `Prestige Miracle Glow Repair Foamwash is formulated especially for you to help you achieve your dream glass skin and hydrated skin. It comes with Niacinamide that would keep your skin firm, Arbutin to remove dark spots and Hyaluronic Acid that is good for eradicating signs of aging such as wrinkles and fine lines.`,
    ingredients: `Deionized water, sodium lauryl ether sulfate ,Aloe Barbadensis leaf, Juice Catica papaya leaf extract, Glycerin, Sodium lactate, Propylene glycol, Arbutin, Snail extract, Hyaluronic acid,Niacinamide, Phenoxyethanol,fragrance`,
    srp: 200,
  },
  {
    name: 'Glow Lipo',
    src: 'imgs/product img/glowlipo.png',
    msds: './notavailable.html',
    fda: './notavailable.html',
    info: `Get healthier body and skin with Glow Lipo, it burns fat and detoxifies your skin`,
    ingredients: `Lemon Extract, Cucumber Extract, Garcinia Cambogia, Gluthathione,
    Green Tea, Collagen, Psyllium Husk, L-Carnitine, Moringa, Aloe Vera,
    Stevia, Ginseng`,
    srp: 300,
  },
  {
    name: 'Keratin Collagen Hair Treatment',
    src: 'imgs/product img/keratincollagen.png',
    msds: './notavailable.html',
    fda: './notavailable.html',
    info: `Prestige Keratin Hair Treatment with Collagen can actually change your hair appearance. 
    Collagen is known for increasing the body's hair building proteins, which can bring about longer, thicker hair. Collagen and keratin potentially share amino acids.
    Keratin smooths down the overlapping cells that make up your hair strands. The hair cuticle absorbs keratin, giving hair a full, glossy appearance.`,
    ingredients: `Cetearyl Alcohol, Cyclomethicone,Polyquaternium-37, Cetrimonium Chloride, Amodimethicone, Hydroxyethylcellulose, Glyceryl Stearate, Peg-100 Stearate, Disodium Edta, Keratin,Collagen, Phenoxyethanol, Fragrance`,
    srp: 300,
  },
  {
    name: 'Gugo Shampoo',
    src: 'imgs/product img/gugo.png',
    msds: 'imgs/msds/msds Gugo Strengthening Shampoo.pdf',
    fda: 'imgs/fda/fda gugo.jpg',
    info: `Gugo Strengthening Shampoo is made with all-natural 
    ingredients. It strengthens hair and promotes hair growth with gugo leaving your hair  thicker, fuller and more beautiful with regular use.`,
    ingredients: `Water, Gugo, Cocamidopropyl
    Betaine, Cocamide MEA, Coco Diethanolamide,
    Entada phaseoloides bark/seed (Gugo) Extract, Glycerin, Entada Phaseoloides, Phenoxyethanol, Malaleuca
    Alternifolia Leaf Oil, Eucalyptus Globulus Leaf Oil`,
    srp: 'P3672/Box',
  },
  {
    name: 'Rejuvenating Plus Cream',
    src: 'imgs/product img/rejuv-cream.png',
    msds: 'imgs/msds/msds rejuv cream.pdf',
    fda: 'imgs/fda/Prestige-Rejuvenating-plus--cream.jpg',
    info: `Rejuvenates your, whitens and tightens`,
    ingredients: `Deionized water, Stearic acid, Cetyl Stearyl Alcohol, Glyceryl Mono stearate, Glycerin, Niacinamide, Morus alba bark extract, Glycolic acid, Fragrance, Phenoxyethanol, Acrylate/C-10 alkyl acrylates  crosspolymer, Triethanolamine`,
    srp: 100,
  },
  {
    name: 'Rejuvenating Plus Toner',
    src: 'imgs/product img/rejuv-toner.png',
    msds: 'imgs/msds/rejuv-toner.pdf',
    fda: 'imgs/fda/Prestige-Toner.jpg',
    info: `Rejuvenates your, whitens and tightens`,
    ingredients: `Deionized water, Fruit extract Distillates, 
    Glycolic acid, Niacinamide, Aloe barbadensis (Aloe vera) extract, Phenoxyethanol,
    Fragrance`,
    srp: 100,
  },
  {
    name: 'Sunscreen Gel Cream',
    src: 'imgs/product img/sunscreen2.png',
    msds: 'imgs/msds/sunscreen.pdf',
    fda: 'imgs/fda/sunscreen-gel-cream.jpg',
    info: `Protect your skin from sun damages this summer. Introducing our new Sunscreen Gel Cream with Spf 30.`,
    ingredients: `Deionized water, Glycerin, Dimethicone, Benzophenone-3, Phenylbenzimdazole Sulfonic acid, Octocrylene, Phenoxyethanol,Fragrance,Acrylate/C-10 alkyl acrylates crosspolymer,Triethanolamine`,
    srp: 100,
  },
  {
    name: 'Whitening Facial Cream',
    src: 'imgs/product img/whitecream.png',
    msds: 'imgs/msds/msds whitening facial cream.pdf',
    fda: 'imgs/fda/whitening facial cream.jpg',
    info: `Get whiter, fairer and younger skin, with whitening facial cream`,
    ingredients: `Water (aqua), Stearic acid, Cetearyl alcohol, Ceteareth 20, Dimethicone, Glyceryl stearate, Glycerine, Carica papaya (papaya) fruit extract, Polysorbate 20, DMDM Hydantoin, Xanthan gum, BHT, Tetrasodium Edta`,
    srp: 100,
  },
  {
    name: 'Whitening Facial Toner',
    src: 'imgs/product img/white-toner.png',
    msds: 'imgs/msds/msds whitening facial toner.pdf',
    fda: 'imgs/fda/whitening toner.jpg',
    info: `Get whiter, fairer and younger skin, with whitening facial cream`,
    ingredients: `Water (aqua), Fruit extract Distillates, Polysorbate 20, Carica Papaya (papaya) Fruit extract, DMDM Hydantoin, Lactic Acid, Tetrasodium edta.`,
    srp: 100,
  },
  {
    name: 'Rejuvenating Plus Toner 100ml',
    src: 'imgs/product img/tonerbig.png',
    msds: 'imgs/msds/rejuv-toner.pdf',
    fda: 'imgs/fda/rejuv-toner-fda.png',
    info: `Rejuvenates your, whitens and tightens`,
    ingredients: `Deionized water, Fruit extract Distillates, 
    Glycolic acid, Niacinamide, Aloe barbadensis (Aloe vera) extract, Phenoxyethanol,
    Fragrance`,
    srp: 150,
  },
];
