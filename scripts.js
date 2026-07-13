const recipes = [
    {
        id: 1,
        title: "Smoked Salmon Benedict",
        category: "Breakfast",
        difficulty: "Hard",
        intro: "My favorite breakfast in the world. Features a silky hollandaise and a perfect poached egg technique.",
        ingredients: ["2 sticks Butter", "8 Egg Yolks", "2 tbsp Lemon Juice", "English Muffins", "Smoked Salmon", "Chives", "Vinegar", "Smoked Paprika"],
        steps: [
            "Poach eggs by cleaning them in a strainer first to remove loose whites.",
            "Create a vortex in simmering water with vinegar and poach for 3-4 minutes.",
            "Melt 2 sticks of butter for the hollandaise.",
            "Whisk 8 yolks and lemon juice over a double boiler until ribbon-like consistency.",
            "Slowly pour melted butter into yolks while whisking fast to emulsify.",
            "Toast English Muffins (split with a fork for crags) in heavy butter.",
            "Assemble: Muffin, salmon, dried poached egg, and a massive pour of hollandaise. Finish with paprika and chives."
        ],
        secret: "The fork-split muffin: Never use a knife. Splitting with a fork creates craggly bits that become extra crispy when toasted in butter."
    },
    {
        id: 2,
        title: "Chocolate Lava Cake",
        category: "Dessert",
        difficulty: "Easy",
        intro: "Looks complicated, but one of the easiest home desserts. The key is acidity to cut the richness.",
        ingredients: ["Dark Chocolate", "Cubed Butter", "Espresso Powder", "3 Eggs + 1 Yolk", "Sugar", "Flour", "Raspberries", "Lemon Juice/Zest"],
        steps: [
            "Simmer raspberries with water, sugar, and lemon; strain for a coulis.",
            "Prepare ramekins: Brush with softened butter and coat with cocoa powder.",
            "Melt chocolate and butter with espresso powder (brings out chocolate flavor) over a double boiler.",
            "Whisk eggs, sugar, and salt for 4-5 mins until pale and fluffy.",
            "Gently fold flour and chocolate mixture into the eggs.",
            "Bake at 450°F for 9 minutes.",
            "Flip onto a plate, dust with powdered sugar, and serve with coulis and whipped cream."
        ],
        secret: "Cocoa powder lining: Using cocoa powder in the ramekins instead of flour prevents white streaks on your dark chocolate cake."
    },
    {
        id: 3,
        title: "Thai Green Curry",
        category: "Main",
        difficulty: "Hard",
        intro: "A technique-heavy dish starting with a mortar-and-pestle paste made from scratch.",
        ingredients: ["Tofu", "Thai Eggplant", "Cumin/Coriander seeds", "Serrano & Thai Green Chilies", "Thai Basil", "Makrut Lime Leaf", "Galangal", "Lemongrass", "Coconut Milk", "Palm Sugar"],
        steps: [
            "Press tofu to remove moisture, then sear in oil until golden brown.",
            "Brine Thai eggplants in salt and boiling water to cut bitterness.",
            "Dry toast cumin and coriander; grind with chilies (gloves on!), galangal, lemongrass, and miso into a paste.",
            "Simmer the thick top-third of coconut milk until the fat separates.",
            "Fry the green paste in that coconut oil for 2-3 minutes.",
            "Add eggplant, coconut milk, tofu, and red bell peppers.",
            "Season with palm sugar and fish sauce. Finish with Thai basil leaves."
        ],
        secret: "The Coconut Split: Don't shake the can! Simmering the cream until it splits into fat allows you to cook the paste in natural coconut oil."
    },
    {
        id: 4,
        title: "Crème Brulée French Toast",
        category: "Breakfast",
        difficulty: "Medium",
        intro: "A legendary version of the classic. Uses a ruler for precision and a hard-cracked sugar topping.",
        ingredients: ["Brioche", "Milk", "Star Anise/Cardamom/Cinnamon/Cloves", "Vanilla Paste", "Orange Zest", "6 Egg Yolks", "Sugar", "Clarified Butter"],
        steps: [
            "Cut Brioche into 1.25-inch slices using a ruler for timing precision.",
            "Dry bread in 285°F oven for 10 mins per side (creates a sponge-like texture).",
            "Infuse milk with spices and orange zest; heat to 190°F.",
            "Whisk yolks and sugar until fluffy; temper in the hot milk to make custard.",
            "Soak bread for 30 seconds per side. It should be noticeably heavier.",
            "Sprinkle sugar on the bread and sear in clarified butter until a hard shell forms.",
            "Bake at 300°F for 10 mins to set the center custard.",
            "Top with maple syrup, berries, and orange-zest whipped cream."
        ],
        secret: "The Oven Dry: Drying the bread at a low temp makes it act like a sponge, soaking up custard while maintaining structural integrity."
    },
    {
        id: 5,
        title: "Handmade Soup Dumplings (XLB)",
        category: "Main",
        difficulty: "Hard",
        intro: "The secret to how the soup gets inside? It starts as a high-collagen gelatin jelly.",
        ingredients: ["Pork Skin & Bones", "Jinhua Ham", "Shaoxing Wine", "Ginger", "Ground Pork", "Dumpling Flour", "Sichuan Peppercorn", "Black Vinegar"],
        steps: [
            "Boil pork skin and bones; clean bones of impurities.",
            "Simmer bones, ham, ginger, and wine for 3 hours; chill broth into a jelly.",
            "Mix ground pork with soy, sesame oil, and seasonings. Push jelly through a potato ricer into the meat.",
            "Make a shaggy dough (flour + warm water); knead until smooth; rest.",
            "Roll wrappers with thin edges and a thicker center.",
            "Pleat dumplings (aim for 14-18 folds).",
            "Steam for 6 minutes. Serve with black vinegar and ginger."
        ],
        secret: "Pork Skin Gelatin: The high gelatin content in pork skin is what allows the soup to be solid at room temperature and liquid when hot."
    },
    {
        id: 6,
        title: "The Ultimate Grain Bowl",
        category: "Main",
        difficulty: "Medium",
        intro: "A balance of flavor, color, texture, and temperature. Featuring salmon and farro.",
        ingredients: ["Salmon Fillets", "Farro", "Sumac & Za'atar", "Honey", "Citrus", "Greek Yogurt", "Dill/Mint/Parsley", "Pomegranate Seeds", "Feta", "Cucumber"],
        steps: [
            "Marinate salmon in citrus zest, sumac, za’atar, honey, and oil for 30 mins.",
            "Boil farro in chicken stock with thyme and bay leaves.",
            "Pat half of the farro dry and roast at 425°F until crispy; keep other half chewy.",
            "Make herby yogurt base with lemon and fresh herbs.",
            "Roast salmon at 425°F (135°F internal).",
            "Score and whack a pomegranate to get the 'rubies'.",
            "Plate: Yogurt base, 50/50 farro blend, salmon, and remaining toppings."
        ],
        secret: "Double-Texture Grain: Mixing roasted crispy farro with boiled chewy farro adds a restaurant-quality layer of complexity."
    },
    {
        id: 7,
        title: "Handmade Artisan Pizza",
        category: "Main",
        difficulty: "Hard",
        intro: "A three-day fermentation process for the perfect 'leopard-spotted' crust.",
        ingredients: ["Bread Flour", "Instant Yeast", "Low-moisture Mozzarella", "Fontina", "Whole Peeled Tomatoes", "Oregano", "Brown Butter"],
        steps: [
            "Mix dough and proof at room temp for 24h, then 48h in the fridge.",
            "Portion into 300g balls and let reach room temp.",
            "Make sauce: Hand-crush tomatoes; add dried oregano (on stem) and garlic powder.",
            "Stretch dough using gravity; don't pop the air bubbles.",
            "Bake on steels/stones at 550°F (highest oven temp).",
            "Rotate frequently to avoid hot spots.",
            "Finish by painting the crust with melted brown butter."
        ],
        secret: "Brown Butter Crust: Painting the crust with brown butter right out of the oven makes it the best slice anyone has ever had."
    },
    {
        id: 8,
        title: "Steak Frites",
        category: "Main",
        difficulty: "Medium",
        intro: "Featuring a Parisian bistro-style green sauce and baking-soda-crusted fries.",
        ingredients: ["Ribeye Steaks", "Russet Potatoes", "Baking Soda", "Peanut Oil", "Mayo/Sour Cream", "Dijon Mustard", "Tarragon/Chives/Parsley", "Butter/Garlic/Thyme"],
        steps: [
            "Salt steaks and brine in fridge overnight.",
            "Cut fries (1/4 inch); boil in water with salt and baking soda for 3 mins.",
            "Chill fries overnight. Double fry: 320°F first, then 400°F second.",
            "Make sauce: Blend mayo, mustard, garlic, and fresh herbs.",
            "Sear steaks in ripping hot cast iron. Butter baste with thyme and garlic.",
            "Plate: Sliced medium steak, a pile of fries, and the green sauce."
        ],
        secret: "Baking Soda Trick: Boiling the fries in baking soda water creates a rough, chalky surface that becomes shatter-crisp when fried."
    },
    {
        id: 9,
        title: "Authentic Pad Thai",
        category: "Main",
        difficulty: "Medium",
        intro: "Focuses on the toffee-like flavor of caramelized palm sugar.",
        ingredients: ["Rice Noodles", "Palm Sugar", "Tamarind Paste", "Fish Sauce", "Tofu", "Shrimp", "Dried Shrimp", "Garlic Chives", "Bean Sprouts", "Peanuts"],
        steps: [
            "Soak noodles in room temp water for 1 hour.",
            "Caramelize palm sugar in a skillet; add tamarind and fish sauce.",
            "Sear shrimp and remove. Sauté shallots, garlic, and tofu.",
            "Toss in noodles and sauce; cook until moisture is gone.",
            "Push noodles aside; scramble eggs and cover with noodles for 45s (steams/crisps).",
            "Add sprouts, chives, and peanuts. Finish with lime."
        ],
        secret: "The Noodle Seal: Covering the eggs with noodles while they scramble creates a seal that steams them to fluffy perfection."
    },
    {
        id: 10,
        title: "Master Chocolate Chip Cookies",
        category: "Dessert",
        difficulty: "Easy",
        intro: "Uses brown butter and a mix of flours for a rich, nutty, and chewy finish.",
        ingredients: ["Butter", "Dark & Bittersweet Chocolate", "AP Flour", "Bread Flour", "Vanilla Paste", "1 Egg Yolk + 2 Eggs", "Brown Sugar", "Flaky Salt"],
        steps: [
            "Brown the butter until nutty; chill until smooth.",
            "Hand-chop dark chocolate into chunks and shards.",
            "Whisk sugars, butter, eggs, and vanilla paste.",
            "Fold in dry ingredients (AP + Bread Flour for chew) and chocolate.",
            "Chill dough 24-72 hours. Portion into 140g balls.",
            "Bake at 350°F for 15 mins. Pan-bang the tray 3 times mid-bake.",
            "Finish with flaky salt. Serve hot with vanilla ice cream."
        ],
        secret: "Pan-Banging: Dropping the baking sheet against the counter mid-bake creates ripples in the dough and pushes the chocolate to the top."
    },
    {
        id: 11,
        title: "Sourdough Bread (Crustopher)",
        category: "Main",
        difficulty: "Hard",
        intro: "A 14-day journey to make the best bread on earth using only 3 ingredients.",
        ingredients: ["Bread Flour", "Whole Wheat Flour", "Sea Salt", "Warm Water", "Rice Flour"],
        steps: [
            "Maintain a 'Crustopher' starter for 14 days (daily feedings).",
            "Build a Levain (19g starter + flours + water); rest 3h.",
            "Autolyse: Mix flour and water; rest 1h to hydrate.",
            "Bulk Fermentation: Mix levain into dough with salt. Squeeze and fold.",
            "Perform 3 sets of folds every 30 mins.",
            "Pre-shape for tension; final shape into a 'burrito'.",
            "Cold proof in rice-floured basket for 16h.",
            "Score with lame; bake in 500°F Dutch oven (20m lid on/20m lid off)."
        ],
        secret: "Rice Flour: Use it to flour the proofing basket. It doesn't stick and doesn't burn, ensuring a clean release and professional crust."
    },
    {
        id: 12,
        title: "Pork Tonkotsu Ramen",
        category: "Main",
        difficulty: "Hard",
        intro: "Creamy broth from collagen, not cream. A 12-hour commitment.",
        ingredients: ["Pork Bones & Pig's Foot", "Pork Belly", "Alkaline Water", "Soy Sauce", "Mirin", "Sake", "Eggs", "Kombu", "Mushrooms"],
        steps: [
            "Blanch bones for 10m; scrub every bit of 'nastiness' off in cold water.",
            "Simmer clean bones, foot, mushrooms, and aromatics for 12 hours. Skim fat.",
            "Chashu: Roll pork belly tight; sear all sides; braise 2 hours.",
            "Ramen Eggs: Boil 6.5m exactly; ice bath; marinate in soy/mirin/sake overnight.",
            "Noodles: Flour + alkaline water. Knead, rest, and roll through pasta maker (Level 6).",
            "Assemble: Hot milky broth, noodles, torched chashu, and marinated egg."
        ],
        secret: "The Pig's Foot: Hidden in the broth, the pig's foot provides the essential collagen that makes the broth milky and lip-smacking."
    },
    {
        id: 13,
        title: "Classic Chicken Parm",
        category: "Main",
        difficulty: "Medium",
        intro: "Features a hand-crushed tomato sauce and a lemon-zest breading.",
        ingredients: ["Chicken Breasts", "Canned Peeled Tomatoes", "Onion/Garlic", "Parmesan/Mozzarella", "Panko", "Lemon Zest", "Fennel Seeds", "Basil"],
        steps: [
            "Sauté onions/garlic; hand-crush tomatoes. Simmer with a Parmesan rind.",
            "Butterfly chicken and whack to 1/3 inch thickness.",
            "Dredge: Flour, Egg, then Panko/Parm/Lemon Zest/Garlic mix.",
            "Shallow fry in oil (halfway up the chicken) until golden brown.",
            "Layer chicken, sauce, mozzarella, and Parm. Broil until bubbly.",
            "Serve over salted spaghetti tossed in oil and Parm."
        ],
        secret: "The Halfway Fry: Using enough oil to reach exactly halfway up the chicken ensures the breading gets craggly and crisp without steaming."
    },
    {
        id: 14,
        title: "Craggly Fried Chicken",
        category: "Main",
        difficulty: "Medium",
        intro: "Technique for those 'craggly' bits leaping off the edges.",
        ingredients: ["Chicken Thighs/Drums", "Buttermilk", "Cornstarch", "Baking Powder", "Peanut Oil", "Chicken Bouillon Powder", "Paprika/Spices"],
        steps: [
            "Marinate chicken in buttermilk (2-6 hours).",
            "Create 'crags': Drip buttermilk into dry seasoned flour and mix with hands to form clumps.",
            "Dredge chicken: Press and squeeze into the clumpy flour.",
            "First fry at 320°F (the cooking stage).",
            "Finish in oven at 350°F to ensure doneness.",
            "Second fry (optional) at 400°F for maximum shatter. Salt immediately."
        ],
        secret: "The Drip Method: Dripping wet marinade into your dry dredge before you start is how you get those massive crispy flakes found in fast food."
    },
    {
        id: 15,
        title: "Authentic Carbonara",
        category: "Main",
        difficulty: "Hard",
        intro: "Zero cream. An emulsion of fat, water, and yolk.",
        ingredients: ["Guanciale", "Pecorino Romano", "2 Whole Eggs + 2 Yolks", "Black Pepper", "00 Flour/Semolina", "Breadcrumbs"],
        steps: [
            "Make fresh pasta dough; cut using a 'chitarra' (guitar tool) for square strands.",
            "Make 'Pan Cortado': Toast breadcrumbs with Pecorino.",
            "Crisp guanciale in a cold pan to render fat slowly (10 mins).",
            "Whisk eggs and lots of fresh pepper; add grated Pecorino.",
            "Toss boiled pasta in guanciale fat (off heat!).",
            "Gradually temper in egg mixture with hot pasta water, mixing constantly until silky.",
            "Top with Pan Cortado."
        ],
        secret: "The Cold Pan: Start guanciale in a cold pan. It forces the fat to melt out into 'liquid gold' before the meat gets too crispy."
    },
    {
        id: 16,
        title: "Chicken Dum Biryani",
        category: "Main",
        difficulty: "Hard",
        intro: "An approved recipe from India's top chefs. Uses the traditional 'Dum' sealing method.",
        ingredients: ["Bone-in Chicken", "Aged Basmati Rice", "Yogurt", "Kashmiri Chili", "Ghee", "Saffron Milk", "Cilantro/Mint", "Dough (for seal)"],
        steps: [
            "Toast and grind whole spices into biryani masala.",
            "Marinate chicken bone-in (prevents drying) in spiced yogurt overnight.",
            "Par-boil basmati rice with whole spices to 75% doneness.",
            "Layer raw chicken, then par-boiled rice, then fried onions, saffron milk, and herbs.",
            "Apply a dough seal to the pot lid to trap all steam.",
            "Bake/simmer for 45 mins. Crack the seal and serve with raita."
        ],
        secret: "Aged Basmati: Older rice grains stay long, fluffy, and separate, which is essential for a high-quality biryani."
    },
    {
        id: 17,
        title: "Smoked Butter Chicken",
        category: "Main",
        difficulty: "Medium",
        intro: "Better than takeout. Uses the 'Dhungar' charcoal method for flavor.",
        ingredients: ["Chicken Thighs", "Fenugreek Leaves (Kasuri Methi)", "Kashmiri Chili", "Garam Masala", "Butter/Cream", "Tomato Puree", "Charcoal"],
        steps: [
            "Marinate chicken in spiced yogurt; sear high heat for a tandoor char.",
            "Bloom spices in butter; add tomato puree and simmer 20 mins.",
            "Add cream, butter, and seared chicken.",
            "Dhungar Method: Place a red-hot coal in a bowl inside the pot; drizzle oil on coal; seal lid for 2 mins.",
            "Finish with dried fenugreek leaves."
        ],
        secret: "The Dhungar Method: Using a hot coal to smoke the finished curry provides the wood-fired tandoor flavor you can't get on a stovetop."
    },
    {
        id: 18,
        title: "Detroit-Style Pan Pizza",
        category: "Main",
        difficulty: "Medium",
        intro: "Focused on an airy, chewy dough and the iconic 'laced' cheese crust.",
        ingredients: ["Bread Flour", "Instant Yeast", "Mozzarella & Fontina", "Pepperoni", "Whole Tomatoes", "Hot Honey", "Ricotta"],
        steps: [
            "Mix dough; let rise in a Detroit-style metal pan for 3h.",
            "Grate mozzarella and fontina into cubes.",
            "Layer: Cheese cubes first (go to the edges!), then pepperoni.",
            "Top with three vertical lines of hand-crushed tomato sauce.",
            "Tuck sauce into the edges of the crust.",
            "Bake at 500°F. Finish with ricotta dollops, basil, and hot honey."
        ],
        secret: "Edge Caramelization: Press the cheese cubes right against the metal walls of the pan to create the 'lace' pattern—that's the best bite."
    },
    {
        id: 19,
        title: "Spaghetti & Meatballs",
        category: "Main",
        difficulty: "Medium",
        intro: "A beef and pork blend with a 'Meatball Hot Tub' finish.",
        ingredients: ["Ground Beef/Pork", "Parmesan Rind", "Canned Tomatoes", "Milk", "Panko", "Basil", "Garlic"],
        steps: [
            "Simmer sauce with hand-crushed tomatoes and a Parmesan rind for 1 hour.",
            "Hydrate breadcrumbs in milk/eggs for 5 mins to ensure juicy meatballs.",
            "Mix meats and herbs; roll golf-ball sized; sear in cast iron for a thick crust.",
            "Finish cooking meatballs directly in the simmering tomato sauce.",
            "Toss spaghetti with pasta water and Parm before adding meatballs.",
            "Top with 'Pangrattato' (toasted breadcrumbs) for crunch."
        ],
        secret: "Cornstarch Hands: If your hands are wet or sticky when putting on rubber gloves to mix meat, coat them in cornstarch to slide them in easily."
    },
    {
        id: 20,
        title: "Sheet Tray Tomato Soup & Grilled Cheese",
        category: "Main",
        difficulty: "Easy",
        intro: "The easiest way to make silky tomato soup—all on one tray.",
        ingredients: ["Vine Tomatoes", "Onion/Garlic", "Sourdough", "Cheddar/Gouda/Fontina", "Mayo/Butter", "Cream", "Parmesan"],
        steps: [
            "Roast tomatoes, onion, and garlic on a tray at 425°F until soft.",
            "Blend roasted veg with cream and boiling water; season with salt/pepper.",
            "Grate cheese long-way for strings; mix the three types.",
            "Apply butter and then mayo to sourdough; coat in Parmesan.",
            "Cook in pan over medium; use a lid and a splash of water for steam.",
            "Finish with a dedicated parmesan crust on one side of the bread."
        ],
        secret: "The Water Flip: Tilt the pan and add a splash of water away from the bread, then cover. The steam melts the cheese perfectly."
    },
    {
        id: 21,
        title: "Lemon Meringue Pie",
        category: "Dessert",
        difficulty: "Medium",
        intro: "Stable Italian meringue over a blooming lemon filling.",
        ingredients: ["Cold Butter", "Baking Soda", "Lemon Zest/Juice", "Sugar", "Cornstarch", "Eggs", "Cream of Tartar"],
        steps: [
            "Make crust (pea-sized butter bits); chill 1h, roll, and crimp.",
            "Blind bake with weights; brush with egg wash and bake until golden.",
            "Bloom lemon zest in juice; whisk with sugar and cornstarch over heat until thick.",
            "Temper yolks into lemon mixture; add butter.",
            "Italian Meringue: Pour 240°F sugar syrup into whipped egg whites.",
            "Fuse thin layer of meringue to the hot curd; add peaks.",
            "Torch for the iconic toasted look."
        ],
        secret: "The Fusion Layer: You must add a thin layer of meringue to the curd while it is still hot to fuse them and prevent a slippery air gap."
    },
    {
        id: 22,
        title: "Traditional Beef Pho",
        category: "Main",
        difficulty: "Hard",
        intro: "Pronounced 'fuh'. The secret is 'making it clean' for a crystal broth.",
        ingredients: ["Beef Knuckle/Oxtail", "Rice Noodles", "Vietnamese Cinnamon", "Star Anise", "Daikon Radish", "Top Round Beef", "Rock Sugar"],
        steps: [
            "Char onions and ginger over open flame until black (for sweetness).",
            "Blanch bones for 10m; discard water and scrub bones perfectly clean.",
            "Simmer clean bones with charred veg, daikon, and spices for 6 hours.",
            "Chill broth overnight; lift off the fat 'lid' to reveal clear broth.",
            "Boil rice noodles for 2-3 mins; rinse in cold water.",
            "Plate: Noodles, oxtail, raw sliced beef; pour boiling broth over the top."
        ],
        secret: "Daikon Sweetness: Adding daikon sticks to the broth simmer purifies the liquid and adds a subtle natural sweetness that sugar can't match."
    },
    {
        id: 23,
        title: "Mushroom Risotto",
        category: "Main",
        difficulty: "Medium",
        intro: "Five types of mushrooms and a crispy fried topping.",
        ingredients: ["Arborio Rice", "Shiitake/Lion's Mane/Oyster/Maitake/Chanterelle", "Leek", "Parmesan Rind", "White Wine", "Stock"],
        steps: [
            "Soak porcini; use liquid and chicken stock + Parm rind for a mushroom stock.",
            "Sweat leeks/shallots; sauté mushrooms in batches (don't overcrowd).",
            "Reserve 1 cup mushrooms; fry in olive oil until brittle and crunchy.",
            "Toast rice in butter until coated; deglaze with wine.",
            "Ladle hot stock 1-by-1; stir constantly for 18-20 mins.",
            "Finish with cold butter, cheese, and the crispy mushroom topping."
        ],
        secret: "The Al Dente Dot: Bite a grain of rice in half; when there is only a tiny white dot in the center, it is perfectly al dente."
    },
    {
        id: 24,
        title: "Quesabirria Tacos",
        category: "Main",
        difficulty: "Medium",
        intro: "Beef chuck roast braised in a chili-tea consommé.",
        ingredients: ["Chuck Roast", "Ancho/Guajillo/Arbol Chilies", "Oaxacan Cheese", "Beef Stock", "Mexican Oregano", "Corn Tortillas"],
        steps: [
            "Toast chilies; steep in beef stock 20 mins to make 'chili tea'.",
            "Sear chuck roast chunks until golden; add aromatics and chili tea.",
            "Braise 3-4 hours until fall-apart tender; shred by hand.",
            "Strain the braising liquid for the consommé.",
            "Dip tortilla in the red fat on top of the broth; layer beef and Oaxacan cheese strings.",
            "Sear until crispy; serve with the broth for dipping."
        ],
        secret: "The Fat Dip: Don't miss dipping the tortilla into the red fat on top of the consommé—it provides the color and prevents sticking."
    },
    {
        id: 25,
        title: "Five-Cheese Mac & Cheese",
        category: "Main",
        difficulty: "Easy",
        intro: "No shortcuts. A balanced blend for stretch and sharpness.",
        ingredients: ["Cavatappi", "Cheddar/Gouda/Mozzarella/Goat Cheese/Parmesan", "Heavy Cream", "Smoked Paprika", "Chicken Bouillon"],
        steps: [
            "Boil pasta 2 mins under package directions (it finishes in the oven).",
            "Infuse milk/cream with garlic, thyme, and smoked paprika.",
            "Stir half the cheese blend into the hot cream until stringy.",
            "Layer pasta and remaining cheese; top with a mountain of Parmesan.",
            "Broil at high heat until the top is 'laced' and crunchy.",
            "Rest 5 minutes to set the structure."
        ],
        secret: "Cavatappi Ridges: Use Cavatappi instead of elbow macaroni; the ridges and spirals catch way more cheese sauce."
    },
    {
        id: 26,
        title: "Pasta Bolognese",
        category: "Main",
        difficulty: "Hard",
        intro: "A slow-baked Italian-American masterpiece with fresh pappardelle.",
        ingredients: ["Beef/Pork", "Pancetta", "Onion/Celery/Carrot", "White Wine", "Milk", "Canned Tomatoes", "00 Flour/Eggs"],
        steps: [
            "Crisp pancetta; remove and keep fat. Brown beef and pork in the fat.",
            "Add 'Sofrito' veg; deglaze with wine; add tomatoes and beef stock.",
            "Add milk (traditional tenderizer) and bake covered for 3-4 hours.",
            "Make fresh pappardelle; roll to Level 6.",
            "Boil pasta 60s; toss with sauce and pasta water.",
            "Finish with a shower of Parmesan."
        ],
        secret: "The Oven Finish: Simmering Bolognese in the oven instead of on the stove provides much more even heat and prevents scorching."
    },
    {
        id: 27,
        title: "Remy's Ratatouille",
        category: "Main",
        difficulty: "Medium",
        intro: "Thinly sliced vegetables over a roasted red pepper piperade.",
        ingredients: ["Zucchini", "Yellow Squash", "Japanese Eggplant", "Roma Tomatoes", "Red Pepper", "Shallots", "Garlic"],
        steps: [
            "Char red pepper over flame; steam, peel, and blend with tomato sauce.",
            "Slice all vegetables to 1/8 inch using a mandolin (be careful!).",
            "Spread sauce in baking dish. Spiral the veg: Zucchini-Squash-Eggplant-Tomato.",
            "Drizzle with infused garlic/herb oil.",
            "Bake under a parchment paper lid for 30-45 mins.",
            "Serve with a vinaigrette made from the leftover piperade."
        ],
        secret: "Parchment Seal: Cut the parchment paper to the exact size of the pan; it steams the veg so they stay soft without browning."
    },
    {
        id: 28,
        title: "The 2lb Breakfast Burrito",
        category: "Breakfast",
        difficulty: "Medium",
        intro: "Homemade lard tortillas and crispy 'chalky' home fries.",
        ingredients: ["Pork Lard", "Flour", "Potatoes", "Sausage", "Eggs", "Avocado", "Chipotle crema", "Oaxaca Cheese"],
        steps: [
            "Rub lard into flour; add warm water to make tortilla dough; rest 30m.",
            "Boil potato cubes with baking soda; pan-fry until crispy.",
            "Make chipotle-lime crema. Sauté sausage and peppers.",
            "Roll paper-thin tortillas; cook 30s per side on hot pan.",
            "Gently scramble eggs in butter. Assemble layers.",
            "Sear the burrito closed in a pan using cheese as 'glue'."
        ],
        secret: "Chalky Potatoes: Boiled potatoes should look 'rough and chalky' on the outside before frying; this ensures a massive crunch."
    },
    {
        id: 29,
        title: "Orange Chicken",
        category: "Main",
        difficulty: "Easy",
        intro: "Fresh tangerine juice and a double-dredge crunch.",
        ingredients: ["Chicken Thighs", "Cornstarch/Flour", "Tangerine/Orange Juice", "Rice Vinegar", "Ginger/Garlic", "MSG (Optional)", "Red Pepper Flakes"],
        steps: [
            "Cut thighs into bite-sized chunks. Massage in wet dredge (egg/oil).",
            "Squeeze chicken into dry dredge (starch/flour) for 'craggly' bits.",
            "Fry in batches (4-5 mins) until light golden.",
            "Simmer juice, brown sugar, zest, vinegar, and aromatics into a glaze.",
            "Thicken with cornstarch slurry; toss chicken in the sticky sauce.",
            "Serve over white rice with green onions."
        ],
        secret: "The Hand Squeeze: When moving chicken from wet to dry dredge, squeeze the flour onto the meat to create 'shards' of crispiness."
    },
    {
        id: 30,
        title: "36-Layer Croissants",
        category: "Dessert",
        difficulty: "Hard",
        intro: "A labor of love using a 48-hour lamination process.",
        ingredients: ["Bread Flour", "European Butter", "Milk", "Yeast", "Sugar", "Egg Yolk"],
        steps: [
            "Make base dough; chill 12h. Pound cold butter into an 8-inch square.",
            "Wrap butter in dough (butter packet). Roll to 24 inches.",
            "Perform 'Letter Folds' and 'Book Folds', resting in freezer between each.",
            "Roll to final thickness; cut into long triangles.",
            "Stretch and roll into crescent shapes; proof 2.5h in a humid oven.",
            "Paint only the tops with egg wash (never the layers!).",
            "Bake at 350°F for 35 minutes until dark golden."
        ],
        secret: "No-Side Wash: Never brush egg wash on the sides of the croissant triangles; it will glue the 36 layers together and stop the rise."
    },
    {
        id: 31,
        title: "Chicken Shawarma",
        category: "Main",
        difficulty: "Medium",
        intro: "Featuring homemade Toum (garlic sauce) and yogurt-tenderized thighs.",
        ingredients: ["Chicken Thighs", "Yogurt", "Tomato Paste", "Aleppo Pepper", "Garlic", "Tahini", "Cucumbers", "Pickles"],
        steps: [
            "Grate an onion and use the juice + yogurt + spices to marinate chicken.",
            "Make Toum: Slowly emulsify garlic and oil for 5 mins until it looks like fluff.",
            "Tahini Sauce: Whisk tahini with lemon and 'garlic tea' (water steeped in garlic).",
            "Sear thighs in a heavy pan; weigh down for hard contact and char.",
            "Slice chicken into long strands. Wrap in bread with fries, salad, and Toum."
        ],
        secret: "Garlic Tea: Use water that has steeped in smashed garlic to thin your tahini; it adds deep aroma without raw bitterness."
    },
    {
        id: 32,
        title: "The Perfect Macaron",
        category: "Dessert",
        difficulty: "Hard",
        intro: "French-style meringue cookies. Precision is the only rule.",
        ingredients: ["Almond Flour", "Powdered Sugar", "Dehydrated Egg Whites", "Food Coloring", "Buttercream"],
        steps: [
            "Dehydrate egg whites at room temp for 24h. Wipe all bowls with vinegar.",
            "Sift almond flour and sugar twice. Whisk whites to stiff peaks.",
            "Macaronage: Fold flour into meringue until it falls in 'continuous ribbons'.",
            "Pipe using a #12 tip; drop tray 8 times to pop air bubbles.",
            "Rest until a skin forms (45 mins). Bake 23 mins at low temp.",
            "Fill with buttercream and refrigerate overnight to 'become one'."
        ],
        secret: "Vinegar Wipe: Wipe your mixing bowl and whisk with white vinegar before starting to ensure zero fat residue, which kills meringue."
    },
    {
        id: 33,
        title: "Classic Rotisserie Chicken",
        category: "Main",
        difficulty: "Medium",
        intro: "Focused on an 8-hour dry brine and herb butter logs.",
        ingredients: ["Whole Chicken", "Chicken Bouillon", "Dried Thyme", "Potatoes/Leeks/Shallots", "Herb Butter"],
        steps: [
            "Dry chicken perfectly; massage with oil and seasoning blend.",
            "Brine in fridge for 8-12 hours uncovered (for crispy skin).",
            "Place over bed of stock-soaked veg. Roast on a wire rack at 425°F.",
            "Baste with oil every 30 mins for the 'rotisserie shine'.",
            "Carve breast/legs; serve with slices of cold herb butter that melt over the hot meat."
        ],
        secret: "Wire Rack Roasting: Never let the bird touch the bottom of the pan; airflow underneath is the secret to even, crispy skin."
    },
    {
        id: 34,
        title: "Sushi: Nigiri & Maki",
        category: "Main",
        difficulty: "Medium",
        intro: "Mastering the rice is 50% of the battle. Includes Salmon and Tuna.",
        ingredients: ["Sushi Rice", "Kombu", "Rice Vinegar", "Salmon/Tuna/Hamachi", "Nori", "Wasabi"],
        steps: [
            "Rinse rice until water is clear. Cook with Kombu; season with vinegar mix.",
            "Fan rice to cool while mixing in seasoning. Slice fish in one long motion.",
            "Nigiri: Shape a cherry-sized ball of rice; create a dimple with thumb.",
            "Apply wasabi to fish; press fish over rice and shape with fingers.",
            "Maki: Spread rice on nori; add fish/veg; roll tight using bamboo mat.",
            "Cut rolls with a wet knife, finding the midpoint each time."
        ],
        secret: "The Dimple: Creating a small air pocket in the bottom of the rice ball during nigiri shaping makes the rice lighter on the tongue."
    },
    {
        id: 35,
        title: "Chicken Katsu Curry",
        category: "Main",
        difficulty: "Medium",
        intro: "A Japanese comfort staple with an 'elevated stock' secret.",
        ingredients: ["Chicken Breasts", "Panko", "Potato Starch", "Japanese Curry Powder", "Fuji Apple", "Dark Chocolate", "Short Grain Rice"],
        steps: [
            "Infuse stock with ginger/garlic/onion skins.",
            "Sweat onions for 30m; blend with stock, apple, and aromatics.",
            "Make a blonde roux; bloom curry powder; add blended base.",
            "Add 1 square of dark chocolate (the secret for depth).",
            "Whack chicken breasts to 1/2 inch; bread in potato starch-egg-panko.",
            "Fry until golden. Serve with rice wall holding back the curry."
        ],
        secret: "The Apple/Chocolate Combo: Grated Fuji apple adds natural tart sweetness, while dark chocolate adds a bitter depth that rounds out the spices."
    },
    {
        id: 36,
        title: "Maine Lobster Roll",
        category: "Main",
        difficulty: "Medium",
        intro: "Fresh Maine lobster with a brown butter finish and secret seasoning.",
        ingredients: ["Live Lobster", "Brioche Rolls", "Celery", "Mayo", "Chives", "Brown Butter", "Secret Seasoning"],
        steps: [
            "Steam lobsters (10m for 1.5lb). Immediately ice to stop cooking.",
            "Remove meat; chop into bite-sized pieces (don't forget the claws!).",
            "Mix lobster with celery, chives, lemon zest, and secret spice blend.",
            "Toast brioche sides in heavy butter. Drizzle rolls with hot brown butter.",
            "Pack rolls high; the contrast of hot roll and cold meat is key."
        ],
        secret: "Band Removal: Always remove the rubber bands before steaming. If you cook them on, the whole lobster will taste like rubber."
    },
    {
        id: 37,
        title: "Bakery-Style Glazed Donuts",
        category: "Dessert",
        difficulty: "Medium",
        intro: "A yeast-activated tacky dough with a 'Homer Simpson' finish.",
        ingredients: ["Active Dry Yeast", "Warm Milk", "Vanilla", "Flour", "Butter", "Eggs", "Beet Juice (for color)"],
        steps: [
            "Bloom yeast; mix with butter/eggs/flour until tacky; knead until smooth.",
            "Rise 1h; punch down; roll to 1/2 inch thickness. Cut rings.",
            "Rest rings on individual parchment squares for 1h.",
            "Fry at 350°F (1m per side). Lift parchment out once released.",
            "Make glazes: Chocolate, Vanilla, and Strawberry (using beet juice for pink).",
            "Dip hot and add sprinkles immediately."
        ],
        secret: "Parchment Squares: Cut parchment into small squares for each donut. Dropping the paper into the oil keeps the proofed donut perfectly circular."
    },
    {
        id: 38,
        title: "The Ultimate Chocolate Cake",
        category: "Dessert",
        difficulty: "Medium",
        intro: "Uses bloomed cocoa and espresso for a moist, deep crumb.",
        ingredients: ["Dutch Cocoa", "Espresso Powder", "Sour Cream", "Cake Flour", "Honey", "Buttercream", "Chocolate Ganache"],
        steps: [
            "Bloom cocoa and espresso in hot water; whisk in sour cream and oil.",
            "Mix dry ingredients; combine with wet; divide into three 8-inch pans.",
            "Bake at 350°F for 25m. Level the cakes with a serrated knife.",
            "Frosting: A hybrid of buttercream and honey-cream ganache.",
            "Stack and coat. Use an offset spatula to create wavy 'modern art' patterns."
        ],
        secret: "Sour Cream: Adding sour cream to the batter ensures the cake stays moist and tender for days longer than milk-based cakes."
    },
    {
        id: 39,
        title: "Golden Egg Fried Rice",
        category: "Main",
        difficulty: "Easy",
        intro: "Using 'Chicken Rice' and an edge-pour soy sauce technique.",
        ingredients: ["Jasmine Rice", "Chicken Stock", "Ginger", "Shallots", "Garlic", "Eggs", "Sesame Oil", "Soy Sauce"],
        steps: [
            "Boil rice in chicken stock + chicken fat. Dry on a tray overnight.",
            "Season the wok with smoking oil; pour off excess.",
            "Sauté shallots/garlic in chicken fat. Fluff the eggs first.",
            "Toss in rice; stir fast to separate grains.",
            "Edge Pour: Pour soy sauce on the smoking hot *edge* of the wok, not the rice.",
            "Finish with green onions and a sunny-side up egg."
        ],
        secret: "Chicken Fat Start: Render the fat from a chicken skin to use as your frying oil; it provides a flavor base no neutral oil can match."
    },
    {
        id: 40,
        title: "Candied Walnut Cinnamon Rolls",
        category: "Dessert",
        difficulty: "Hard",
        intro: "A brioche-style dough with a cream-poured baking finish.",
        ingredients: ["Yeast", "Warm Milk", "Butter", "Cinnamon", "Honey", "Cream Cheese", "Walnuts", "Heavy Cream"],
        steps: [
            "Make dough; knead to windowpane stage. Cold proof in fridge overnight.",
            "Roll into a 12x16 rectangle. Spread with brown butter/honey/cinnamon mix.",
            "Roll tight; freeze 20m; cut into 10 pieces with a thin knife.",
            "Proof 1.5h. Pour 1 spoonful of heavy cream over each roll.",
            "Bake until 190°F. Top with cream cheese frosting and candied walnuts."
        ],
        secret: "The Cream Pour: Pouring heavy cream over proofed rolls right before baking keeps the bottoms soft and creates a gooey caramel on the pan."
    },
    {
        id: 41,
        title: "Elevated Crunchwrap Supreme",
        category: "Main",
        difficulty: "Medium",
        intro: "Better than the bell. Features homemade cheese sauce and avocado crema.",
        ingredients: ["Giant Tortilla", "Ground Beef", "Jalapeno Juice", "American/Cheddar", "Tostada", "Sour Cream", "Avocado", "Cilantro"],
        steps: [
            "Brown beef with spices and a splash of pickled jalapeno juice.",
            "Make cheese sauce from a roux + American + sharp cheddar.",
            "Blend avocado, sour cream, lime, and cilantro for the green sauce.",
            "Layer: Tortilla, beef, cheese sauce, tostada, sour cream, salad, extra cheese.",
            "Add a tortilla 'hat'; fold 6 times. Sear fold-side down until sealed."
        ],
        secret: "The Jalapeno Juice: Using the juice from the jar of pickled jalapenos in the beef is the 'secret' flavor that mimics the original perfectly."
    },
    {
        id: 42,
        title: "New York Cheesecake",
        category: "Dessert",
        difficulty: "Medium",
        intro: "Dense, tangy, and rich with a brown butter graham crust.",
        ingredients: ["Graham Crackers", "Brown Butter", "Cream Cheese", "Lemon Zest", "4 Eggs", "Sour Cream", "Blueberry Sauce"],
        steps: [
            "Mix cracker crumbs with brown butter (wet sand texture); press into pan.",
            "Grind lemon zest into sugar with fingers to release oils.",
            "Whisk cream cheese, lemon sugar, and sour cream (no air bubbles!).",
            "Add 4 eggs one-by-one. Bake at 300°F for 1.5 hours.",
            "Turn off oven; crack door; let sit 1h to avoid cracks.",
            "Top with homemade cornstarch-thickened blueberry sauce."
        ],
        secret: "The Sugar Rub: Rubbing lemon zest into granulated sugar with your fingers releases essential oils that a mixer cannot extract."
    },
    {
        id: 43,
        title: "The Holiday Prime Rib",
        category: "Main",
        difficulty: "Hard",
        intro: "Herb-crusted salt brine served with beef-dripping Yorkshire puddings.",
        ingredients: ["Prime Rib", "Rosemary/Thyme", "Sea Salt", "Beef Stock", "Popovers", "Horseradish", "Heavy Cream"],
        steps: [
            "Tie roast with twine; cover in herbed salt; brine 24h uncovered in fridge.",
            "Rest at room temp for 2h. Roast at 250°F until 140°F internal.",
            "Make Yorkshire puddings: Pour batter into smoking hot beef drippings.",
            "Whip cream with horseradish and lemon for the sauce.",
            "Deglaze roasting pan for Au Jus. Sear meat 45s in a ripping hot pan; slice."
        ],
        secret: "The 2-Hour Rest: You must let the raw meat sit out for 2 hours before roasting. If it's cold in the center, the outside will overcook before it's done."
    },
    {
        id: 44,
        title: "Shatter-Crisp Buffalo Wings",
        category: "Main",
        difficulty: "Medium",
        intro: "Double-fried for a paper-thin shatter skin. Includes Ranch & Blue Cheese.",
        ingredients: ["Chicken Wings", "Potato Starch", "Baking Soda", "Frank's RedHot", "Butter/Honey", "Dill/Chives/Blue Cheese"],
        steps: [
            "Toss wings in starch/soda/salt; dry in fridge 6-24 hours.",
            "Mix Ranch and Blue Cheese together (the ultimate combo).",
            "Fry at 310°F (cook stage); rest 20 mins.",
            "Whisk hot sauce, butter, and honey for the glaze.",
            "Fry at 400°F until dark golden. Toss in sauce while hot."
        ],
        secret: "Potato Starch + Soda: This combination chemically alters the skin to make it bubble and crisp much faster and harder than flour."
    },
    {
        id: 45,
        title: "The Egg Masterclass",
        category: "Breakfast",
        difficulty: "Easy",
        intro: "Every way to cook an egg, from poached to the French omelet.",
        ingredients: ["Eggs", "Butter", "Chili Crisp", "Chicken Bouillon", "Vinegar", "Chives"],
        steps: [
            "Soft Boiled: 5m. Medium Boiled: 7m. Hard: 10m. Always ice bath.",
            "Poached: Vortex simmering water + vinegar. Poach 3m. Trim edges.",
            "Scrambled: 30s on heat / 30s off. Finish with bouillon powder and chives.",
            "French Omelet: Whisk with a fork (no air); cook low/slow; roll over itself.",
            "Sunny Side: Brown butter foam + lid for 45s steam."
        ],
        secret: "Chicken Bouillon: A tiny pinch of bouillon powder in scrambled eggs adds an umami depth that salt alone cannot achieve."
    },
    {
        id: 46,
        title: "French Onion Soup",
        category: "Main",
        difficulty: "Medium",
        intro: "A test of patience. Deeply caramelized onions in a marrow stock.",
        ingredients: ["Vidalia/White/Shallot Onions", "Marrow Bone", "Beef Stock", "Sherry", "Baguette", "Gruyere/Comte/Fontina"],
        steps: [
            "Simmer marrow bones/veg for 3h; skim impurities for clear stock.",
            "Caramelize three types of onions for 60m with brown sugar.",
            "Deglaze with white wine; add stock and herbs. Simmer 45m.",
            "Rub baguette with garlic; toast. Add sherry to the bottom of the bowl.",
            "Layer soup, bread, and a massive amount of mixed cheese. Broil."
        ],
        secret: "The Stock Scrape: Every few minutes while onions cook, add a splash of stock and scrape the 'fond'—it builds the color and soul of the soup."
    },
    {
        id: 47,
        title: "Spatchcock Turkey",
        category: "Main",
        difficulty: "Medium",
        intro: "Takes 2 hours instead of 5. Twice as juicy, every time.",
        ingredients: ["Whole Turkey", "Sage/Thyme/Rosemary", "Lemon/Orange", "Butter", "White Wine", "Cheesecloth"],
        steps: [
            "Cut out the backbone and crack the breastbone (the chiropractor crack).",
            "Dry brine with herbed salt 24-48h. Sneak compound butter under the skin.",
            "Roast over a bed of citrus/aromatics. Wrap bird in butter-wine soaked cheesecloth.",
            "Baste over the cloth every 30 mins. Remove cloth for final 30 mins.",
            "Deglaze the tray veg for the best gravy of your life."
        ],
        secret: "The Mummy Method: Wrapping the turkey in soaked cheesecloth protects the breast meat from drying out while the dark meat finishes."
    },
    {
        id: 48,
        title: "The Fried Chicken Sandwich",
        category: "Main",
        difficulty: "Medium",
        intro: "Thigh-based sandwich with a secret lemon-chili sauce and cold slaw.",
        ingredients: ["Chicken Thighs", "Buttermilk/Hot Sauce", "Rice Flour/Potato Starch", "Cabbage/Carrot", "Mayo/Honey/Mustard"],
        steps: [
            "Marinate thighs in buttermilk/hot sauce; dry uncovered 6h in fridge.",
            "Season meat directly before dredging. Mix wet into dry flour to make 'crags'.",
            "Double fry: 320°F first, 400°F second. Rest on a wire rack.",
            "Make sauce: Mayo, honey, mustard, lemon juice/zest, chili flakes.",
            "Toast buns in butter with a lid to steam the center. Assemble with slaw."
        ],
        secret: "The 2-Hand Rule: One hand stays 'dry' for flour, one stays 'wet' for buttermilk. This prevents your fingers from becoming 'dredged'."
    },
    {
        id: 49,
        title: "Paneer Butter Masala",
        category: "Main",
        difficulty: "Medium",
        intro: "Fresh homemade cheese in a silky, restaurant-style gravy.",
        ingredients: ["Whole Milk", "Lemon Juice", "Butter/Cream", "Tomato Puree", "Ginger/Garlic Paste", "Garam Masala", "Fenugreek Leaves"],
        steps: [
            "Boil milk; split with lemon; strain curds in cheesecloth. Press 1 hour.",
            "Sear fresh paneer cubes in butter until golden. Set aside.",
            "Simmer onions/spices; blend into a silky gravy with tomato puree.",
            "Add heavy cream, fenugreek, and massive amounts of butter.",
            "Simmer paneer in sauce 3m. Serve with hot ghee-painted naan."
        ],
        secret: "Hot Knife Slicing: Dip your knife in warm water between cuts of fresh paneer to get perfectly smooth, professional squares."
    },
    {
        id: 50,
        title: "Neapolitan Pizza (Naples Method)",
        category: "Main",
        difficulty: "Hard",
        intro: "A 46-hour process inspired by the masters in Naples.",
        ingredients: ["Neapolitan 00 Flour", "San Marzano Tomatoes", "Fresh Basil", "Fresh Mozzarella", "Yeast/Salt"],
        steps: [
            "Mix dough using the 'milky mixture' method. Rest 16h room temp.",
            "Portion and ferment 30h in fridge. Stretch using gravity.",
            "Sauce: Hand-crush tomatoes with whole garlic and fresh basil.",
            "Bake at 700°F+ (wood fire or pizza oven) for 90 seconds.",
            "Finish with fresh mozzarella and a drizzle of olive oil."
        ],
        secret: "The Salt Pinch: Adding a tiny pinch of salt to the *crust* right before it hits the oven mimics the masters and adds unexpected flavor."
    },
    {
        id: 51,
        title: "Beef Wellington",
        category: "Main",
        difficulty: "Hard",
        intro: "The ultimate showstopper. Filet Mignon in a mushroom-prosciutto wrap.",
        ingredients: ["Chateau Briand", "Shiitake/Cremini/Porcini", "Chestnuts", "Prosciutto", "Savory Crepes", "Puff Pastry", "English Mustard"],
        steps: [
            "Sear beef; paint with mustard while hot. Chill.",
            "Duxelles: Pulse mushrooms, chestnuts, garlic; fry until bone-dry.",
            "Layer: Plastic wrap, prosciutto, duxelles, crepes, beef. Roll into a burrito; chill.",
            "Wrap in puff pastry with egg yolk glue. Apply lattice pattern.",
            "Bake at 400°F. Rest 20 mins before slicing. Serve with red wine reduction."
        ],
        secret: "The Crepe Shield: Using thin crepes between the mushrooms and the pastry acts as a sponge to prevent the meat juices from making the pastry soggy."
    },
    {
        id: 52,
        title: "Neapolitan Ice Cream Sundae",
        category: "Dessert",
        difficulty: "Medium",
        intro: "Roast strawberry, vanilla bean, and dark chocolate from scratch.",
        ingredients: ["Strawberries", "Vanilla Bean", "Cocoa Powder", "Heavy Cream/Milk", "Honey", "Baking Soda"],
        steps: [
            "Roast strawberries with sugar/lemon; blend into cream base.",
            "Infuse milk with scraped vanilla bean; temper yolks and cook until coating spoon.",
            "Whisk cocoa into milk; melt chocolate chips into the hot base.",
            "Churn in ice cream maker; freeze overnight. Make honeycomb candy (honey/sugar to 295°F).",
            "Assemble with caramel, hot fudge, and honeycomb chunks."
        ],
        secret: "Roast your Fruit: Roasting the strawberries before blending them into the ice cream concentrates the flavor 10x more than fresh berries."
    },
    {
        id: 53,
        title: "The Chef's Pancakes",
        category: "Breakfast",
        difficulty: "Easy",
        intro: "Focusing on high baking powder ratios for skyscraper fluffiness.",
        ingredients: ["2 Eggs + 2 Yolks", "Baking Powder", "Buttermilk", "Clarified Butter", "Nutella", "Orange Zest"],
        steps: [
            "Whisk eggs/yolks with sugar and lots of baking powder until foamy.",
            "Fold in AP flour and buttermilk gently; ignore the clumps.",
            "Heat pan with clarified butter (no solids = no burning).",
            "Flip away from you once bubbles pop. Keep warm in 250°F oven.",
            "Top with orange-zest whipped cream and Nutella."
        ],
        secret: "The Clumps: Never whisk pancake batter until smooth. Small flour clumps disappear during cooking and ensure the pancake isn't rubbery."
    },
    {
        id: 54,
        title: "Chicken Quesadilla",
        category: "Main",
        difficulty: "Medium",
        intro: "Zero oil needed. Focused on long-strand Oaxacan cheese.",
        ingredients: ["Chicken Thighs", "Mexican Oregano", "Lard", "Flour", "Oaxaca Cheese", "Sharp Cheddar", "Chipotle in Adobo"],
        steps: [
            "Make lard/flour dough; roll paper-thin; cook on dry hot pan.",
            "Marinate thighs in citrus/soy/spices; sear with weights for char.",
            "Peel Oaxaca into strings; grate cheddar long-way. Mix.",
            "Steam tortilla in damp towel; layer cheese-chicken-cheese.",
            "Sear in dry pan; use cheese 'glue' on the edge to seal."
        ],
        secret: "Cheese Glue: Place a few strands of cheese at the very edge of the tortilla fold; as it melts, it seals the quesadilla shut like glue."
    },
    {
        id: 55,
        title: "Chicago Deep Dish",
        category: "Main",
        difficulty: "Hard",
        intro: "A pie-crust style pizza with a giant raw sausage patty layer.",
        ingredients: ["Semolina", "Corn Oil", "Italian Sausage", "Mozzarella", "San Marzano", "Fennel Seeds"],
        steps: [
            "Make oily semolina dough; chill 24-48h. Press cold into buttered pan.",
            "Layer low-moisture mozzarella slices on the bottom.",
            "Press raw sausage into a single giant disc that covers the cheese.",
            "Top with thick simmered tomato sauce and Parmesan.",
            "Bake at 425°F for 30m. Rest to set before slicing with a knife."
        ],
        secret: "The Sausage Shield: The giant sausage patty acts as a heat barrier, protecting the cheese from over-melting during the 30-minute bake."
    },
    {
        id: 56,
        title: "British Fish & Chips",
        category: "Main",
        difficulty: "Medium",
        intro: "Beer and sparkling water batter with beef tallow chips.",
        ingredients: ["Cod", "Russet Potatoes", "Beef Tallow", "Cold Beer", "Sparkling Water", "Curry Powder"],
        steps: [
            "Soak potato batons 30m; dry perfectly. Fry in tallow/oil mix at 320°F.",
            "Whisk beer, sparkling water, and flour; keep ice cold.",
            "Season cod; dip in cold batter; ease into 350°F oil.",
            "Double fry chips at 400°F for shatter-crisp finish.",
            "Serve with tartar sauce and 'chip shop' curry sauce."
        ],
        secret: "Dual Bubbles: Using both cold beer and sparkling water provides two different bubble sizes in the batter, creating a lighter crust."
    },
    {
        id: 57,
        title: "The Double Cheeseburger",
        category: "Main",
        difficulty: "Medium",
        intro: "A 3-meat blend (Chuck/Short Rib/Brisket) with homemade buns.",
        ingredients: ["Chuck/Rib/Brisket", "Bread Flour", "Milk Powder", "Yeast", "American Cheese", "Cucumbers"],
        steps: [
            "Make milk-powder dough buns; proof and bake with sesame seeds.",
            "Grind the three meats together; shape patties with a center dimple.",
            "Make quick pickles (vinegar/sugar boil over cucumber).",
            "Caramelize onions with water splashes until jammy.",
            "Toast buns in butter; sear patties in cast iron. Melt cheese under a lid."
        ],
        secret: "The Center Dimple: Press your thumb into the center of the raw patty; this stops it from puffing up into a meatball as it shrinks."
    },
    {
        id: 58,
        title: "Traditional Lasagna",
        category: "Main",
        difficulty: "Hard",
        intro: "4 layers of fresh pasta, hot sausage, and herbed ricotta.",
        ingredients: ["Fresh Pasta Sheets", "Hot/Sweet Sausage", "Ricotta", "Mozzarella/Parmesan", "Basil", "Eggs"],
        steps: [
            "Simmer meat sauce 1h with toasted tomato paste and fennel.",
            "Mix ricotta with garlic, pepper, and 2 eggs. Grate mozzarella long-way.",
            "Layer: Sauce, pasta, ricotta, mozzarella, Parm. Repeat 4x.",
            "Tuck sauce into the edges for caramelization.",
            "Bake at 375°F until bubbly. Rest 15m to set the structure."
        ],
        secret: "Leveling: Use an offset spatula to keep every layer of ricotta perfectly flat. This ensures the lasagna doesn't lean when sliced."
    },
    {
        id: 59,
        title: "Cacao to Chocolate Bar",
        category: "Main",
        difficulty: "Hard",
        intro: "Fermenting raw beans and stone-grinding for 72 hours.",
        ingredients: ["Raw Cacao Pods", "Banana Leaves", "Cocoa Butter", "Sugar"],
        steps: [
            "Karate chop pods; ferment beans in banana leaves for 7 days.",
            "Dehydrate and roast in a drum. Winnow shells using a hair dryer.",
            "Grind nibs into liquor; add sugar and cocoa butter.",
            "Stone grind in a machine for 72 hours until silky smooth.",
            "Temper on marble (cool to 80°F, heat to 90°F). Set in molds."
        ],
        secret: "Hair Dryer Winnowing: After crushing roasted beans, use a hair dryer to blow away the light husks, leaving only the heavy cacao nibs."
    },
    {
        id: 60,
        title: "New York Bagels",
        category: "Breakfast",
        difficulty: "Hard",
        intro: "Boiled in barley malt for that iconic shiny, chewy skin.",
        ingredients: ["High-Gluten Flour", "Barley Malt Syrup", "Instant Yeast", "Cream Cheese", "Smoked Salmon"],
        steps: [
            "Mix a stiff dough; ferment in fridge 24h. Shape into balls; rest 1.5h.",
            "Poke hole and stretch to 3 inches. Boil in malt water 1m per side.",
            "Bake at 425°F until dark golden brown.",
            "Make cream cheese by splitting milk with lemon juice and whipping.",
            "Assemble with salmon, capers, and red onion."
        ],
        secret: "Malt Boiling: You must use barley malt syrup in the boiling water. It's the only way to get the sticky, chewy New York crust."
    },
    {
        id: 61,
        title: "Laced Smashburger",
        category: "Main",
        difficulty: "Easy",
        intro: "80/20 beef with 'laced' crispy edges and special honey sauce.",
        ingredients: ["Ground Beef", "Potato Buns", "American Cheese", "Mayo/Honey/Dijon", "Pickles"],
        steps: [
            "Ball up beef; throw between hands to remove air. Chill balls.",
            "Steam buns over the meat while it cooks. Smash balls flat in hot pan.",
            "Scrape around the edges with the smasher to create 'lace'.",
            "Season with salt/pepper; flip and add cheese. Stack triples.",
            "Finish with thin-sliced pickles and honey-mayo sauce."
        ],
        secret: "The Hard Scrape: Use a heavy metal spatula to scrape the patty off the pan. That crusty, lacy edge is where all the flavor lives."
    },
    {
        id: 62,
        title: "Orecchiette Pesto",
        category: "Main",
        difficulty: "Medium",
        intro: "Blanched basil for color and hand-dragged 'little ears' pasta.",
        ingredients: ["Basil", "Pine Nuts", "Garlic Confit", "Parmesan", "Semolina", "Burrata", "Breadcrumbs"],
        steps: [
            "Make semolina/00 dough. Cut tiny bits; drag knife over to curl.",
            "Flip inside out to make 'ears'. Blanch basil 15s; ice bath.",
            "Blend basil with nuts, Parm, and garlic oil (add 1 ice cube).",
            "Toast breadcrumbs with salt/pepper. Boil pasta until it floats.",
            "Toss pasta and pesto (off heat). Plate with burrata and breadcrumbs."
        ],
        secret: "The Ice Cube: Add one ice cube to the blender when making pesto. It prevents the blades from heating and browning the fresh basil."
    },
    {
        id: 63,
        title: "Wagyu Katsu Sando",
        category: "Main",
        difficulty: "Medium",
        intro: "Turning A5 Japanese Wagyu into a symmetrical luxury sandwich.",
        ingredients: ["A5 Wagyu", "Milk Powder", "Bread Flour", "Panko", "Fuji Apple", "Wagyu Fat"],
        steps: [
            "Make Shokupan milk bread; bake in a covered pan for square shape.",
            "Make Tonkatsu sauce: Blend grated apple, onion, soy, and honey.",
            "Trim Wagyu into a perfect square. Bread in flour, egg, and panko.",
            "Fry for 2 minutes (medium-rare). Toast bread in rendered Wagyu fat.",
            "Paint bread with sauce; assemble and trim edges for perfect symmetry."
        ],
        secret: "Fat Toasting: Use the trimmed fat scraps from the Wagyu to toast the bread. It infuses the entire sandwich with beef flavor."
    },
    {
        id: 64,
        title: "Barbecue Pork Ribs",
        category: "Main",
        difficulty: "Medium",
        intro: "Competition rub and an apple-juice foil-dome braise.",
        ingredients: ["Pork Ribs", "Mustard", "Brown Sugar", "Smoked Paprika", "Apple Juice", "Molasses"],
        steps: [
            "Remove membrane; paint with mustard and dry rub; rest 12h.",
            "Bake at 275°F for 3 hours to develop a dry 'bark'.",
            "Wrap in foil with butter, juice, and sugar; bake 1.5h (the braise).",
            "Mix foil juices into ketchup and molasses to make the sauce.",
            "Paint ribs; bake at 425°F for 10m to set the glaze. Slice bone-side up."
        ],
        secret: "Bone-Side Slicing: Always flip ribs over to slice them. It allows you to see exactly where the bones are for perfect portions."
    },
    {
        id: 65,
        title: "NYC Halal Chicken & Rice",
        category: "Main",
        difficulty: "Easy",
        intro: "The iconic street cart meal with the white and red 'trifecta' sauces.",
        ingredients: ["Chicken Thighs", "Turmeric", "Long Grain Rice", "Chile de Arbol", "Yogurt/Mayo", "Pita"],
        steps: [
            "Marinate chicken in yogurt/spices; sear in cast iron for deep char.",
            "Cook rice in chicken stock + butter + turmeric. Toast pita.",
            "White Sauce: Mayo, yogurt, lemon, sugar, dried dill.",
            "Red Sauce: Blend soaked Arbol chilies, vinegar, and garlic.",
            "Toss shredded lettuce in an ice bath. Plate rice, chicken, and sauce lines."
        ],
        secret: "The Ice Bath: Soaking shredded iceberg lettuce in ice water for 10 minutes makes it ultra-crispy, mimicking the street-cart texture."
    },
    {
        id: 66,
        title: "The Comfort Burrito",
        category: "Main",
        difficulty: "Easy",
        intro: "Cilantro-lime rice and creamy mashed pinto beans.",
        ingredients: ["Chicken Thighs", "Pinto Beans", "Cilantro", "Lime", "Oaxaca Cheese", "Avocado"],
        steps: [
            "Simmer beans with aromatics; mash to creaminess. Toast rice and cook in stock.",
            "Fold lime and cilantro into rice. Marinate chicken in chipotle; sear until charred.",
            "Toss chopped chicken back into its own pan drippings for flavor.",
            "Layer rice, beans, chicken, cheese, and crema. Sear the burrito shut."
        ],
        secret: "Pan Drippings: Never discard the juices from the chicken pan. Tossing the chopped meat back into the fat is the 'Chipotle' secret."
    },
    {
        id: 67,
        title: "The Perfect Steak",
        category: "Main",
        difficulty: "Medium",
        intro: "A guide to Butter Basting (thin) and Reverse Searing (thick).",
        ingredients: ["Filet Mignon/Ribeye", "Rosemary", "Garlic", "Butter", "Peanut Oil"],
        steps: [
            "Thin Steak: Sear high heat; butter-baste with garlic/rosemary at 140°F.",
            "Thick Steak: Bake at 300°F until 140°F; rest; flash-sear in high-heat pan.",
            "Always dry steaks with paper towels before cooking.",
            "Rest for 10 mins with aromatics on top. Slice against the grain."
        ],
        secret: "The Gordon Rest: Place your garlic and rosemary on *top* of the steak while it rests; the steam continues to infuse the meat."
    },
    {
        id: 68,
        title: "Tandoori Chicken",
        category: "Main",
        difficulty: "Medium",
        intro: "Kashmiri-chili red chicken with homemade fire-pan Naan.",
        ingredients: ["Whole Chicken", "Yogurt", "Kashmiri Chili", "Garam Masala", "Ghee", "Fresh Naan Dough"],
        steps: [
            "Butterfly chicken; slash the meat; rub with yogurt marinade. Marinate 4h+.",
            "Sear high heat (mimic tandoor). Naan: Milk/yogurt dough; rest 2h.",
            "Roll Naan with parsley; cook on dry hot pan 60s per side (use lid for steam).",
            "Brush Naan with ghee/salt. Serve with mint chutney."
        ],
        secret: "Deep Slashing: Cut deep slits into the chicken meat before marinating. It’s the only way to get the flavor to the bone."
    },
    {
        id: 69,
        title: "One-Pan Paella",
        category: "Main",
        difficulty: "Hard",
        intro: "Seafood stock built from shrimp heads with a 'Socarrat' base.",
        ingredients: ["Bomba Rice", "Shrimp Heads", "Mussels/Clams", "Saffron", "Lima Beans", "Tomato"],
        steps: [
            "Fry shrimp heads to extract 'liquid gold' for stock. Bloom saffron.",
            "Sauté beans/peppers; add grated tomato (Sofrito).",
            "Add rice and stock. DO NOT STIR anymore.",
            "Nestle seafood into the rice; simmer 25 mins. Crank heat 2m at end to crisp."
        ],
        secret: "The No-Stir Rule: Once the stock is in, never touch the rice again. Stirring destroys the 'Socarrat' crispy crust at the bottom."
    },
    {
        id: 70,
        title: "Chicken Tikka Masala",
        category: "Main",
        difficulty: "Medium",
        intro: "Charred skewers finished in a creamy cashew-tomato gravy.",
        ingredients: ["Chicken Thighs", "Yogurt", "Cashews", "Tomato Sauce", "Fenugreek", "Whole Spices"],
        steps: [
            "Thread marinated chicken on skewers; grill until charred. Set aside.",
            "Sauté shallots with cinnamon/cloves. Blend soaked cashews into a 'cream'.",
            "Add tomato sauce and cashew cream. Combine chicken and simmer.",
            "Finish with dried fenugreek leaves. Serve with basmati and Naan."
        ],
        secret: "Cashew Cream: Blending soaked cashews with water provides a richer, more authentic thickener than heavy dairy cream."
    },
    {
        id: 71,
        title: "Fettuccine Alfredo",
        category: "Main",
        difficulty: "Medium",
        intro: "Real Alfredo is about butter quality and the '171-Gram' pasta rule.",
        ingredients: ["00 Flour", "Egg Yolks", "High-fat Butter", "Parmesan", "Garlic", "Half & Half"],
        steps: [
            "Make pasta (171g eggs total). Roll paper-thin; cut into thick noodles.",
            "Sauté minced garlic in butter; add half & half (warm, don't boil).",
            "Grate Parmesan into cream until thick. Boil pasta 60s.",
            "Toss pasta in sauce with a splash of pasta water. Plate in a giant roll."
        ],
        secret: "The 171 Rule: For the perfect dough hydration, you need exactly 171 grams of total egg/yolk per batch of flour."
    }
];

const spots = [
    {
        id: 501,
        title: "Yakitori Pontoon",
        category: "Global",
        location: "Tokyo, Japan",
        rating: 5,
        history: "A tiny alleyway stall serving traditional chicken skewers.",
        ordered: ["Chicken Yakitori Skewers ($1.38)"],
        verdict: "S-Tier. The first bite that 'forces a smile'.",
        details: "Smoky flavor from the traditional grill and an unbeatable vibe.",
        address: "Yakitori Pontoon, Tokyo, Japan"
    },
    {
        id: 502,
        title: "Du Yi Chu",
        category: "Global",
        location: "Beijing, China",
        rating: 5,
        history: "Established 1738. Legend says Emperor Qianlong named it.",
        ordered: ["Traditional Sanxian Shao Mai"],
        verdict: "The best dumplings in Dylan's life.",
        details: "Known for hand-made fresh dumplings with exactly 24 folds.",
        address: "Du Yi Chu, Qianmen, Beijing, China"
    },
    {
        id: 503,
        title: "Benu",
        category: "Michelin",
        location: "San Francisco, CA",
        rating: 5,
        history: "3-Michelin Star contemporary Asian by Chef Corey Lee.",
        ordered: ["Pine Mushroom Xiao Long Bao", "Thousand-Year Quail Egg"],
        verdict: "Emotional. A perfect 10/10 experience.",
        details: "The soup dumplings induced tears of childhood nostalgia.",
        address: "22 Hawthorne St, San Francisco, CA 94105"
    },
    {
        id: 504,
        title: "The Rock Cafe",
        category: "Global",
        location: "Stroud, OK (Route 66)",
        rating: 5,
        history: "Owner Dawn Welch was the inspiration for Sally in 'Cars'.",
        ordered: ["Bacon Cheeseburger", "Peach Cobbler"],
        verdict: "9.8/10. The highest score on Route 66.",
        details: "Sandstone construction and incredible home-cooked flavor.",
        address: "114 W Main St, Stroud, OK 74079"
    },
    {
        id: 505,
        title: "Gucci Osteria",
        category: "Michelin",
        location: "Beverly Hills, CA",
        rating: 5,
        history: "A partnership between Gucci and Chef Massimo Bottura.",
        ordered: ["Tortellini in 36-month Parmesan Cream"],
        verdict: "The #1 Designer Restaurant. Worth every cent.",
        details: "Unlike other designer cafes, the food quality is world-class.",
        address: "348 N Rodeo Dr, Beverly Hills, CA 90210"
    },
    {
        id: 506,
        title: "Katz's Delicatessen",
        category: "Michelin",
        location: "New York, NY",
        rating: 4,
        history: "NYC's oldest operating deli (1888). Iconic pastrami.",
        ordered: ["Pastrami on Rye"],
        verdict: "3.8/5. Legit, but very expensive.",
        details: "Messy, chaotic, and hand-carved. A true NYC experience.",
        address: "205 E Houston St, New York, NY 10002"
    },
    {
        id: 507,
        title: "Pink's Hot Dogs",
        category: "Global",
        location: "Los Angeles, CA",
        rating: 2.5,
        history: "Famous Hollywood landmark (1939) with celebrity photos.",
        ordered: ["Chili Dog", "Martha Stewart Dog"],
        verdict: "2.5/5. Confirmed Tourist Trap.",
        details: "The bread was hard and the price didn't match the quality.",
        address: "709 N La Brea Ave, Los Angeles, CA 90038"
    },
    {
        id: 508,
        title: "Tukta Thai",
        category: "Global",
        location: "Dallas, TX",
        rating: 5,
        history: "Dylan's favorite hole-in-the-wall. Open for 31 years.",
        ordered: ["Mint Leaf Fish", "Pad Thai"],
        verdict: "Hidden Gem Winner. Mind-blowing flavors.",
        details: "The owner named the shop after his wife (Tukta).",
        address: "9625 Plano Rd #500, Dallas, TX 75238"
    },
    {
        id: 509,
        title: "Heart Attack Grill",
        category: "Global",
        location: "Las Vegas, NV",
        rating: 1,
        history: "Hospital-themed restaurant focused on high-fat foods.",
        ordered: ["Octuple Bypass Burger (20k calories)"],
        verdict: "Pure Gimmick. 1/5. Would not return.",
        details: "Dry burger, greasy environment, and Dylan got spanked.",
        address: "450 Fremont St #130, Las Vegas, NV 89101"
    },
    {
        id: 510,
        title: "Mr. Charlie's",
        category: "Fast Food",
        location: "Los Angeles, CA",
        rating: 4.5,
        history: "A vegan McDonald's knockoff with a 'Frowny Meal'.",
        ordered: ["The Big Chuck"],
        verdict: "Better than McDonald's. Indistinguishable taste.",
        details: "Redefining fast food with a great cause and unique brand.",
        address: "612 N La Brea Ave, Los Angeles, CA 90036"
    },
    {
        id: 1001,
        title: "Masque",
        category: "Exclusive",
        location: "Mumbai, India",
        rating: 5,
        history: "Voted India's #1 restaurant for three consecutive years. Known for a creative 10-course tasting menu that highlights indigenous ingredients.",
        ordered: ["Red Fire Ant Pani Puri", "Yellow Corn Cream", "Cactus & Water Chestnut", "Cacao Pod Dessert"],
        verdict: "The best food experience we've had till now. Interactive and deeply rooted in Indian flavor.",
        details: "Nick tried fire ants which tasted like lemon. The kitchen tour and interactive dosa course were standouts.",
        address: "Masque, Mumbai, India"
    },
    {
        id: 1002,
        title: "Ossiano",
        category: "Exclusive",
        location: "Dubai, UAE",
        rating: 4.5,
        history: "A Michelin-starred seafood restaurant submerged inside a massive aquarium with 65,000 fish.",
        ordered: ["Wasabi Ice Cream", "Blue Lobster Taco", "Moroccan Lamb", "Orange Creamsicle Dessert"],
        verdict: "Super vibey presentation. The Blue Lobster taco was a favorite.",
        details: "Dining in front of the shark tank makes for a surreal, albeit slightly 'evil' seafood experience.",
        address: "Ossiano, Atlantis The Palm, Dubai"
    },
    {
        id: 1003,
        title: "Joel Robuchon",
        category: "Exclusive",
        location: "Hong Kong",
        rating: 5,
        history: "A 3-Michelin star French institution. The late Robuchon held more stars than any chef in history.",
        ordered: ["Famous Silky Mashed Potatoes", "Langoustine Ravioli", " Lobster Spaghetti", "Quail with Foie Gras"],
        verdict: "Perfect al dente pasta and the smoothest mashed potatoes on earth.",
        details: "One person's entire job is making the mashed potatoes. Nick switched desserts because the passion fruit egg looked cooler.",
        address: "L'Atelier de Joël Robuchon, Hong Kong"
    },
    {
        id: 1004,
        title: "Sugalabo",
        category: "Exclusive",
        location: "Tokyo, Japan",
        rating: 5,
        history: "An ultra-exclusive 8-seat counter restaurant. Entry is strictly invite-only from the chef himself.",
        ordered: ["Aged Potato with Caviar", "French Blue Lobster", "Duck & Foie Gras Wellington"],
        verdict: "Top 10 meals of my life. The aged potato was one of the best bites ever.",
        details: "The chef aged the potato for one year in the snow. Features the thinnest sliced prosciutto Nick has ever seen.",
        address: "Sugalabo, Tokyo, Japan"
    },
    {
        id: 1005,
        title: "Solo per Due",
        category: "Exclusive",
        location: "Vacone, Italy",
        rating: 5,
        history: "The smallest restaurant in the world. Only one table and two seats in an 1800s cabin.",
        ordered: ["Ricotta & Spinach Crepe", "Tagliatelle with Porcini", "Fish with Rosemary"],
        verdict: "Dead on perfect steak and absolute simplicity. Like eating a cloud.",
        details: "The owner is very strict: do not arrive even one minute before 9:00 PM.",
        address: "Solo per Due, Vacone, Italy"
    },
    {
        id: 1006,
        title: "Alchemist",
        category: "Exclusive",
        location: "Copenhagen, Denmark",
        rating: 5,
        history: "Voted 8th best in the world. A 50-course journey taking over 7 hours. More art installation than restaurant.",
        ordered: ["The Eyeball", "Plastic Fantastic (Edible Plastic)", "Lamb Brain", "Chicken Foot"],
        verdict: "A roller coaster for the senses. Biting into thin glass ice cream was a highlight.",
        details: "Costs $1,500 per person. Features a massive dome screen and multiple 'stages' of dining.",
        address: "Alchemist, Copenhagen, Denmark"
    },
    {
        id: 1007,
        title: "Louis' Lunch",
        category: "Burger",
        location: "New Haven, CT",
        rating: 4,
        history: "The birthplace of the hamburger (1895). They still use the original vertical broilers.",
        ordered: ["The Original Burger"],
        verdict: "The most pure form of a hamburger. Ketchup and mustard are forbidden.",
        details: "Served on white toast instead of a bun. A historical must-try.",
        address: "Louis' Lunch, New Haven, CT"
    },
    {
        id: 1008,
        title: "Hamburger America",
        category: "Burger",
        location: "New York, NY",
        rating: 5,
        history: "Founded by burger expert George Motz. Dedicated to regional burger styles.",
        ordered: ["Oklahoma Onion Burger"],
        verdict: "Unbelievable. Soft, melty, and the onions turn into 'candy' from the beef tallow.",
        details: "George uses a paint scraper to smash the burgers. The bun must be steamed, not toasted.",
        address: "Hamburger America, New York, NY"
    },
    {
        id: 1009,
        title: "Gui's Burger",
        category: "Burger",
        location: "Tokyo, Japan",
        rating: 5,
        history: "Innovative Wagyu burger joint using certified Kobe beef with a 10-digit tracking number.",
        ordered: ["Wagyu Smash Burger with Dragon Egg"],
        verdict: "A damn good burger. Wagyu does all the work for you.",
        details: "They use textile gloves under latex because Wagyu fat melts at such a low temperature.",
        address: "Gui's Burger, Tokyo, Japan"
    },
    {
        id: 1010,
        title: "Fire and Ice",
        category: "Busted",
        location: "Providence, RI",
        rating: 5,
        history: "An interactive grill where you pick raw ingredients and watch them cook over a massive ring of fire.",
        ordered: ["Custom Stir Fry", "Hot Dog", "Zucchini"],
        verdict: "Trophy Winner. What's not to like? Fresh, hot, and no mice in sight.",
        details: "Busted a review claiming there were rodents. Dennis (Health Inspector) gave it a clean pass.",
        address: "Fire + Ice, Providence, RI"
    },
    {
        id: 1011,
        title: "Long John Silver’s / Taco Bell",
        category: "Busted",
        location: "Various, USA",
        rating: 4,
        history: "A dual-branded fast food classic often cited as 'the worst meal in America' by critics.",
        ordered: ["Fried Fish Platter", "12 Tartar Sauces"],
        verdict: "Remarkable. The fish was buttery, flaky, and cooked fresh to order.",
        details: "Busted the claim of 'tough' fries. If you wait the 5-10 minutes for them to cook it fresh, it's actually great.",
        address: "Long John Silver's, USA"
    },
    {
        id: 1012,
        title: "The Melting Pot",
        category: "Busted",
        location: "Various, USA",
        rating: 4.5,
        history: "A premier fondue restaurant known for its multi-course dip experiences.",
        ordered: ["Cheese Fondue (Gruyere/Raclette)", "Chocolate Yin Yang Fondue"],
        verdict: "Not a 4-hour wait. Seated in 4 minutes. The pound cake was phenomenal.",
        details: "Busted reviews claiming it smelled bad. It was a clean, high-end experience with zero 'Tempur-Pedic' textures.",
        address: "The Melting Pot, USA"
    },
    {
        id: 1013,
        title: "Spirit Airlines In-Flight Menu",
        category: "Airline",
        location: "Texas to Florida",
        rating: 3,
        history: "A budget airline notorious for paid add-ons, where Ryan took a 2.5-hour flight from Texas to Florida.",
        ordered: ["Kids Snack Box", "Hot Oatmeal"],
        verdict: "It's honestly a good deal because you're also getting hydrated in the process.",
        details: "Attempted to buy a $15 ramen bundle but was rejected by the flight attendant. Ate the hot oatmeal 'like a hound dog'.",
        address: "Spirit Airlines"
    },
    {
        id: 1014,
        title: "Delta Airlines x Shake Shack",
        category: "Airline",
        location: "In-Flight",
        rating: 5,
        history: "Delta's in-flight menu featuring a microwaved-bun Shake Shack burger.",
        ordered: ["Shake Shack Burger", "Dark Chocolate Brownie", "Crinkle Cut Potato Chips"],
        verdict: "A banger. One of the better Shake Shack burgers I've ever had.",
        details: "Cooked in a convection oven, yet surprisingly juicy and hot. Served with Shack sauce and vegetables, which Ryan opted not to use.",
        address: "Delta Airlines"
    },
    {
        id: 1015,
        title: "International Economy Dinner",
        category: "Airline",
        location: "New York to London",
        rating: 4.5,
        history: "Complimentary hot dinner served on an overnight red-eye flight from New York to London.",
        ordered: ["Chicken", "Couscous", "Bread Roll", "Brownie"],
        verdict: "The food is actually all delicious.",
        details: "Ryan's first time eating couscous, and as a picky eater, he loved it. He fell asleep for 4 hours and missed any subsequent snacks.",
        address: "John F. Kennedy International Airport, New York, NY"
    },
    {
        id: 1016,
        title: "Upper Class Flight (The Loft)",
        category: "Airline",
        location: "London Heathrow to 'Andromeda Galaxy'",
        rating: 5,
        history: "A luxurious flight out of London Heathrow featuring 'tea time' and a socializing area called 'The Loft'.",
        ordered: ["Spicy Prawn", "Salmon and Vegetables", "Chocolate Cinnamon Dessert", "Barbecue Chips"],
        verdict: "Dang, that was good. It's cold, it's creamy, it's cinnamon, it's chocolate.",
        details: "The spicy prawn was a bit hot, but the salmon was amazing. A flight attendant also handed out candy during the trip.",
        address: "London Heathrow Airport"
    },
    {
        id: 1017,
        title: "Una Pizza Napoletana",
        category: "Exclusive",
        location: "Manhattan, New York",
        rating: 5,
        history: "A Michelin-starred pizzeria known for its authentic Neapolitan pizza.",
        ordered: ["Burrata", "Margherita Pizza", "Gelato", "Espresso"],
        verdict: "Pizza. Yes.",
        details: "This award-winning Manhattan spot barely has an outside sign, yet it is so popular that people wait outside just to catch canceled reservations. The appetizers included an incredible burrata, which Ryan described as the absolute best cheese he had ever eaten. The wood-fired Margherita pizza had a gooey, cheesy texture that uniquely felt like neither a solid nor a liquid. The restaurant's interior aesthetic boldly features large cans of tomato sauce as decor. The meal wrapped up with a phenomenally smooth gelato and an unexpected espresso.",
        address: "Una Pizza Napoletana, Manhattan, New York"
    },
    {
        id: 1018,
        title: "Gordon Ramsay Hell's Kitchen",
        category: "Exclusive",
        location: "Las Vegas, Nevada",
        rating: 5,
        history: "A celebrity chef restaurant inspired by the popular TV show 'Hell's Kitchen'.",
        ordered: ["Pan Seared Scallops", "Lobster Risotto", "Beef Wellington", "Mac and Cheese", "Sticky Toffee Pudding", "Speculoos Ice Cream and English Toffee Sauce"],
        verdict: "Love the Beef Wellington!",
        details: "Located directly on the Vegas Strip, the massive, packed dining room allows guests to watch chefs cook in the famous kitchen from the TV show. The restaurant is heavily themed, featuring Gordon Ramsay holograms, merchandise, and cookbooks. Starters included crunchy pan-seared scallops and a \"butter bomb\" lobster risotto. The main course was Ramsay's famous Beef Wellington, featuring incredibly tender meat wrapped in soft, melt-in-your-mouth breading, served alongside baked mac and cheese. Dessert was the signature sticky toffee pudding accompanied by speculoos ice cream and English toffee sauce, heavily praised as \"brown sugar caramel heaven.\"",
        address: "Gordon Ramsay Hell's Kitchen, Las Vegas, Nevada"
    },
    {
        id: 1019,
        title: "Cattleack's Barbecue",
        category: "Exclusive",
        location: "Dallas, Texas",
        rating: 5,
        history: "A highly acclaimed barbecue joint known for its brisket and ribs.",
        ordered: ["Texas Trinity Plate", "Crack Cake"],
        verdict: "Nice. Juicy. Tender. Moist. Suculent.",
        details: "Ryan and his dad woke up at 4 a.m. to ensure they were first in line, as this highly-rated destination routinely sells out of food. The restaurant features a charming handwritten menu and draws dedicated barbecue fans from all over the world, including Finland. They ordered the Texas Trinity Plate, filled with perfectly seasoned, moist brisket, deliciously yummy pork ribs, and super yummy sausage. The meal included their original barbecue sauce and concluded with a fantastic dessert known as \"Crack Cake.\" Ryan's dad enjoyed the meal so much that he brought a cooler in his truck specifically to pack up his leftovers.",
        address: "Cattleack's Barbecue, Dallas, Texas"
    },
    {
        id: 1020,
        title: "Ginza Sushi Onodera",
        category: "Exclusive",
        location: "Los Angeles, California",
        rating: 5,
        history: "A Michelin-starred sushi restaurant known for its traditional Edomae sushi.",
        ordered: ["Palate-Cleansing Ginger, Fish, Sushi Roll, Coconut-Flavoured Milk Pudding Layered with Matcha Sauce and Black Bean"],
        verdict: "6 stars.",
        details: "This exclusive, Michelin-starred sushi restaurant lacks an outside sign and serves guests through a curated pre-fixed menu. The service functioned like a choreographed dance, with staff perfectly attentive to the point of bringing Ryan a smartphone stand for recording. The appetizer courses featured a unique mixture of sushi, interesting octopus, crab, and squid. The Nigiri phase included palate-cleansing ginger and a massive piece of fish dynamically cut by a chef using a sword. The final courses included a nearly $100 massive sushi roll and a dessert of coconut-flavored milk pudding layered with matcha sauce and black bean.",
        address: "Ginza Sushi Onodera, Los Angeles, California"
    },
    {
        id: 1021,
        title: "11 Madison Park",
        category: "Exclusive",
        location: "New York City, New York",
        rating: 5,
        history: "A Michelin-starred restaurant known for its innovative and artistic approach to modern cuisine.",
        ordered: ["Plant-Based, Vegan Six-Course Tasting Menu"],
        verdict: "The Best Restaurant in America.",
        details: "Boasting 3 Michelin Stars, this NYC location offers a strictly plant-based, vegan six-course tasting menu that costs around $300. The interior features intimidatingly high ceilings, incredibly fancy decor, and an impressively quiet kitchen. Ryan and MasterChef finalist Nick DiGiovanni started their corner-table experience with hot hand towels. The courses were pure celebrations of vegetables, starting with a focus on onions, which miraculously succeeded in making Ryan enjoy eating his veggies. The sophisticated, four-hour meal ended with a highly refreshing dessert offering of mochi and grapes.",
        address: "11 Madison Park, New York City, New York"
    }
];

let view = 'recipes';

function switchView(v) {
    view = v;
    document.getElementById('tab-recipes').classList.toggle('active-tab', v === 'recipes');
    document.getElementById('tab-spots').classList.toggle('active-tab', v === 'spots');
    document.getElementById('recipeFilters').classList.toggle('hidden', v !== 'recipes');
    document.getElementById('spotFilters').classList.toggle('hidden', v === 'recipes');
    document.getElementById('mainTitle').innerText = v === 'recipes' ? '71 Master Recipes' : 'The Travel Log';
    document.getElementById('mainSubtitle').innerText = v === 'recipes' ? 'Technique-driven culinary archive.' : 'A global database of restaurants visited by Dylan and Nick.';
    render(v === 'recipes' ? recipes : spots);
}

function getStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) stars += `<span class="star-filled">★</span>`;
        else if (i - 0.5 === rating) stars += `<span class="star-filled">½</span>`;
        else stars += `<span class="star-empty">★</span>`;
    }
    return stars;
}

function render(data) {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = data.map(item => `
        <div class="card-anim group cursor-pointer p-6 rounded-3xl" onclick="openItem(${item.id})">
            <div class="aspect-[4/5] bg-stone-100 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center">
                <span class="step-num">${item.title.charAt(0)}</span>
                <div class="absolute top-6 right-6 text-sm font-bold">${item.rating ? getStars(item.rating) : ''}</div>
                <div class="absolute bottom-6 left-6 bg-white px-3 py-1 rounded shadow-sm text-[8px] font-black tracking-widest uppercase">
                    ${item.location || item.category}
                </div>
            </div>
            <h3 class="serif text-3xl mb-3 group-hover:text-stone-500 transition-colors leading-tight">${item.title}</h3>
            <p class="text-stone-400 text-sm italic font-light leading-relaxed line-clamp-2">
                ${item.intro || item.history}
            </p>
            <div class="mt-6 pt-6 border-t border-stone-100 flex justify-between items-center text-[9px] font-bold tracking-widest uppercase text-stone-400">
                <span>${item.difficulty || item.category}</span>
                <span class="text-stone-900 group-hover:translate-x-2 transition-transform">Explore &rarr;</span>
            </div>
        </div>
    `).join('');
}

function openItem(id) {
    const data = view === 'recipes' ? recipes : spots;
    const item = data.find(i => i.id === id);
    const content = document.getElementById('modalContent');

    if (view === 'recipes') {
        content.innerHTML = `
            <div class="grid md:grid-cols-5 h-full">
                <div class="md:col-span-2 bg-stone-50 p-12 lg:p-20 border-r border-stone-100">
                    <h2 class="text-6xl serif mb-6">${item.title}</h2>
                    <p class="text-stone-500 italic mb-12 border-l-2 border-stone-200 pl-4">"${item.intro}"</p>
                    <h4 class="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-6">The Pantry</h4>
                    <ul class="space-y-3 text-sm font-light text-stone-600">${item.ingredients.map(ing => `<li>— ${ing}</li>`).join('')}</ul>
                </div>
                <div class="md:col-span-3 p-12 lg:p-24 overflow-y-auto bg-white">
                    <h4 class="text-[10px] uppercase font-bold tracking-[0.3em] text-stone-300 mb-12 text-center">Execution</h4>
                    <div class="space-y-12">
                        ${item.steps.map((s, i) => `<div class="relative"><span class="step-num absolute -left-8 -top-12 opacity-10">${i+1}</span><p class="text-2xl font-light relative z-10 text-stone-800">${s}</p></div>`).join('')}
                    </div>
                    <div class="mt-20 bg-stone-50 p-10 rounded-3xl italic text-sm text-stone-600 border border-stone-100">
                        <strong class="text-stone-900 uppercase tracking-widest text-[10px] block mb-2">Secret Technique</strong> ${item.secret}
                    </div>
                </div>
            </div>`;
    } else {
        const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;
        content.innerHTML = `
            <div class="grid md:grid-cols-5 h-full bg-white">
                <div class="md:col-span-2 bg-stone-50 p-12 lg:p-20 border-r border-stone-100 flex flex-col justify-between">
                    <div>
                        <div class="text-2xl mb-6">${getStars(item.rating)}</div>
                        <h2 class="text-6xl serif mb-6 leading-tight">${item.title}</h2>
                        <p class="text-stone-500 font-light mb-8 leading-relaxed">${item.history}</p>
                    </div>
                    <a href="${mapsLink}" target="_blank" class="maps-btn inline-block text-center text-[10px] font-bold uppercase tracking-widest px-10 py-5 rounded-full">Open in Google Maps</a>
                </div>
                <div class="md:col-span-3 p-12 lg:p-24 flex flex-col justify-center">
                    <h4 class="text-[10px] uppercase font-bold tracking-widest text-stone-300 mb-6">The Verdict</h4>
                    <p class="text-4xl md:text-5xl serif italic text-stone-800 mb-12 leading-tight">"${item.verdict}"</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div>
                            <h5 class="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Highlights</h5>
                            <ul class="space-y-2 text-sm font-medium text-stone-700">
                                ${item.ordered.map(o => `<li>+ ${o}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h5 class="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Inside Note</h5>
                            <p class="text-sm text-stone-600 font-light leading-relaxed">${item.details}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('detailModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const data = view === 'recipes' ? recipes : spots;
    const filtered = data.filter(i => 
        i.title.toLowerCase().includes(query) || 
        (i.location && i.location.toLowerCase().includes(query)) ||
        (item.history && item.history.toLowerCase().includes(query))
    );
    render(filtered);
}

function filterItems(cat) {
    const data = view === 'recipes' ? recipes : spots;
    if (cat === 'all') render(data);
    else render(data.filter(i => i.category === cat || i.difficulty === cat));
}

switchView('recipes');