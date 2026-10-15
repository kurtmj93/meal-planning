import type { MealPlan } from '../types/plans';

export const plans: Record<string, MealPlan> = {
  "chicken-threes": {
    slug: "chicken-threes",
    title: "Chicken Threes",
    emoji: "🍗",
    protein: "Chicken thighs",
    styles: ["Mexican", "Asian", "Mediterranean", "Quesadillas"],
    recipeCount: 4,
    maxMinutes: 25,
    estTotalLow: 19.55,
    estTotalHigh: 30.75,
    overview: "One shopping trip. Four different meals with the same core ingredients prepared in Mexican, Asian, Mediterranean, and quesadilla styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, garlic, cumin, smoked paprika, chili powder, dried oregano, red pepper flakes, curry powder, garam masala. If you need any of those, add ~$5–$10.",
    color: "#3b82f6",
    shopping: {
      produce: ["3 bell peppers (mixed colors)", "1 large onion", "1 head garlic", "1 bunch fresh cilantro or parsley", "2 scallions"],
      protein: ["2.5 lbs boneless skinless chicken thighs"],
      pantry: ["Rice (white or brown, 1 lb bag if needed)", "1 can (15 oz) black beans", "1 can (14.5 oz) diced tomatoes", "1 pack flour tortillas (8–10 count)"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Bell peppers (3 mixed)", qty: "3", low: 3.00, high: 4.50 },
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Cilantro or parsley bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Boneless skinless chicken thighs", qty: "2.5 lbs", low: 6.25, high: 8.75 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Black beans", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🌮", name: "Mexican-Style Chicken & Rice Bowls", style: "Mexican", time: 25, cal: 640, servings: 2,
        ingredients: ["¾ lb chicken thighs, diced", "1½ cups cooked rice", "½ bell pepper, sliced", "¼ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "Shredded cheese, for topping", "Cilantro, chopped", "Lime wedge", "Salt, pepper, olive oil"],
        leftovers: ["1 lb chicken thighs", "Half the bell peppers", "Remaining onion", "1 can black beans", "1 can diced tomatoes", "Remaining rice", "Remaining tortillas, cheese"],
        instructions: [
          "Cook rice according to package directions (use ¾ cup uncooked → yields ~2 cups cooked).",
          "Heat olive oil in a skillet over medium-high heat. Brown chicken, breaking into small pieces, 6–8 min.",
          "Add onion and bell pepper; cook 3 min until softened.",
          "Add garlic, cumin, and paprika; cook 30 seconds.",
          "Stir in black beans and heat through (2 min).",
          "Serve over rice. Top with cheese, cilantro, and a squeeze of lime."
        ]
      },
      {
        emoji: "🥡", name: "Asian Chicken & Pepper Stir-Fry", style: "Asian", time: 20, cal: 530, servings: 2,
        ingredients: ["¾ lb chicken thighs, sliced", "2 cups cooked rice", "1 bell pepper, sliced", "½ onion, sliced", "3 cloves garlic, minced", "3 tbsp soy sauce", "1 tsp sesame oil", "2 scallions, sliced (garnish)", "Red pepper flakes, to taste"],
        leftovers: ["1 lb chicken thighs", "Remaining bell peppers", "Remaining onion", "Remaining rice", "Remaining tortillas, cheese"],
        instructions: [
          "Slice chicken and vegetables.",
          "Heat sesame oil in a wok or large skillet over high heat.",
          "Stir-fry chicken 5–6 min until cooked through.",
          "Add bell pepper and onion; stir-fry 2–3 min until crisp-tender.",
          "Add garlic; cook 30 seconds.",
          "Drizzle soy sauce and sesame oil; toss to coat.",
          "Serve over rice. Top with scallions."
        ]
      },
      {
        emoji: "🫕", name: "Mediterranean Chicken & Pepper Skillet", style: "Mediterranean", time: 22, cal: 660, servings: 2,
        ingredients: ["¾ lb chicken thighs, diced", "½ bell pepper, diced", "¼ onion, diced", "2 cloves garlic, minced", "1 tsp dried oregano", "1 tsp smoked paprika", "1½ tbsp olive oil", "2 cups cooked rice", "Shredded cheese, for topping", "Salt, pepper"],
        leftovers: ["1 lb chicken thighs", "Remaining bell peppers", "Remaining onion", "Remaining rice", "Remaining tortillas, cheese"],
        instructions: [
          "Season chicken with oregano, paprika, salt, and pepper.",
          "Heat olive oil in a skillet over medium-high heat.",
          "Cook chicken 6–7 min until done.",
          "Add onion, bell pepper, and garlic; cook 3 min.",
          "Serve over rice. Top with cheese."
        ]
      },
      {
        emoji: "🧀", name: "Chicken & Pepper Quesadillas", style: "Quesadilla", time: 15, cal: 580, servings: 2,
        ingredients: ["½ lb chicken thighs, shredded", "4 flour tortillas", "2 oz shredded cheese", "½ bell pepper, sliced", "1 tsp cumin", "1 tsp smoked paprika", "1 tbsp olive oil", "Salt, pepper"],
        leftovers: ["1.5 lb chicken thighs", "Remaining bell peppers", "Remaining onion", "Remaining rice", "Remaining tortillas (4–6 left)"],
        instructions: [
          "Shred cooked chicken.",
          "Sprinkle tortillas with cumin and paprika.",
          "Add chicken and cheese; cook in oiled pan.",
          "Flip and cook 3–4 min per side until crisp.",
          "Top with bell pepper slices; serve."
        ]
      }
    ],
    usage: [
      { item: "Chicken (2.5 lbs)", desc: "¾ lb × 3 recipes + ½ lb × 1 recipe = 2.75 lbs → buy 2.5 lbs, use it all" },
      { item: "Bell peppers (3)", desc: "½ + 1 + ½ + ½ = 3 used ✓" },
      { item: "Onion (1 large)", desc: "¼ + ½ + ¼ + ¼ = 1.25 → buy 1 large, use it all" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use ~5 cups across recipes, plenty leftover" },
      { item: "Black beans (1 can)", desc: "used only in Mexican bowl" },
      { item: "Diced tomatoes (1 can)", desc: "used only in Mexican bowl" },
      { item: "Tortillas (8–10)", desc: "4 for quesadillas, 4–6 leftover" },
      { item: "Cheese (8 oz)", desc: "~2 oz Mexican + ~2 oz quesadillas = ~4 oz used, ~4 oz leftover" }
    ],
    scaling: {
      low: 2.45,
      high: 3.85,
      tips: [
        "Buy chicken in 4–5 lb trays from Costco, Sam's Club, or your grocer's freezer section. Freeze in ½ lb portions. Saves ~$4–6 per batch.",
        "Rice: 5–7 lb bag (~$3–4) lasts months. Cost: ~$0.40/lb vs $1–2/lb for small bags.",
        "Cheese: Buy blocks, shred yourself. Pre-shredded costs 20–30% more."
      ]
    },
    bestFor: "High protein, variety"
  },

  "bean-grain-bowls": {
    slug: "bean-grain-bowls",
    title: "Bean & Grain Bowls",
    emoji: "🌱",
    protein: "Black beans, chickpeas",
    styles: ["Mexican", "Indian", "Mediterranean"],
    recipeCount: 3,
    maxMinutes: 25,
    estTotalLow: 13.90,
    estTotalHigh: 24.00,
    overview: "Vegetarian-leaning. Three different meals with the same core ingredients (beans, rice, sweet potato) prepared in Mexican, Indian, and Mediterranean styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, and all spices.",
    color: "#22c55e",
    shopping: {
      produce: ["2 medium sweet potatoes (~1.5 lbs)", "1 large onion", "1 head garlic", "1 bunch fresh cilantro or parsley", "2 limes"],
      protein: [],
      pantry: ["2 cans (15 oz) black beans", "1 can (15 oz) chickpeas", "1 can (14.5 oz) diced tomatoes", "1 bag (16 oz) frozen mixed vegetables", "Rice (1 lb bag if needed)", "1 pack flour tortillas (8–10 count)"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Sweet potatoes (2 medium)", qty: "1.5 lbs", low: 2.00, high: 3.00 },
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Cilantro or parsley bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Limes", qty: "2", low: 0.50, high: 1.00 },
      { item: "Black beans", qty: "2 cans (15 oz)", low: 1.60, high: 3.00 },
      { item: "Chickpeas", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Frozen mixed vegetables", qty: "16 oz bag", low: 1.50, high: 2.50 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🌮", name: "Mexican Sweet Potato & Black Bean Bowls", style: "Mexican", time: 25, cal: 740, servings: 2,
        ingredients: ["1 sweet potato, diced small", "1 can black beans, rinsed", "1 bell pepper, diced", "½ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1½ cups cooked rice", "Shredded cheese, for topping", "Cilantro, chopped", "Lime wedge", "Salt, pepper, olive oil"],
        leftovers: ["1 sweet potato", "1 can black beans", "1 can chickpeas", "1 can diced tomatoes", "1 bag frozen veggies", "Remaining rice"],
        instructions: [
          "Cook rice according to package directions (use ¾ cup uncooked → yields ~2 cups cooked).",
          "Peel and dice sweet potato into ½-inch cubes.",
          "Heat olive oil in a skillet over medium-high heat. Roast sweet potato cubes 8–10 min, stirring occasionally, until tender and slightly caramelized.",
          "Add onion and bell pepper; cook 4 min until softened.",
          "Add garlic, cumin, and paprika; cook 30 seconds.",
          "Stir in black beans and heat through (2 min).",
          "Serve over rice. Top with cheese, cilantro, and a squeeze of lime."
        ]
      },
      {
        emoji: "🍛", name: "Indian Chickpea & Spinach Dal", style: "Indian", time: 20, cal: 570, servings: 2,
        ingredients: ["1 can chickpeas, rinsed and drained", "1 can diced tomatoes (14.5 oz)", "1 cup frozen mixed vegetables", "½ onion, diced", "3 cloves garlic, minced", "1 tbsp curry powder", "1 tsp garam masala", "1½ cups cooked rice", "Fresh cilantro, chopped", "Salt, pepper, olive oil"],
        leftovers: ["1 sweet potato", "1 can black beans", "Remaining rice", "Remaining tortillas"],
        instructions: [
          "Cook rice if not already done (from the Mexican bowl batch).",
          "Heat olive oil in a skillet over medium heat. Cook onion 3 min until soft.",
          "Add garlic, curry powder, and garam masala; cook 30 seconds until fragrant.",
          "Add diced tomatoes (with juice) and bring to a simmer.",
          "Add chickpeas and frozen vegetables; simmer 8–10 min until sauce thickens.",
          "Season with salt and pepper. Top with fresh cilantro.",
          "Serve over rice."
        ]
      },
      {
        emoji: "🫕", name: "Mediterranean Baked Chickpea Bowls", style: "Mediterranean", time: 20, cal: 690, servings: 2,
        ingredients: ["1 can chickpeas, rinsed and drained", "1 sweet potato, diced", "½ onion, diced", "2 cloves garlic, minced", "1 tsp dried oregano", "1 tsp smoked paprika", "4 flour tortillas", "¼ cup shredded cheese", "Salt, pepper, olive oil"],
        leftovers: ["Remaining sweet potato", "Remaining rice", "Remaining tortillas (~4–6)", "Remaining cheese"],
        instructions: [
          "Preheat oven to 425°F.",
          "Dice remaining sweet potato into ½-inch cubes.",
          "Toss chickpeas, sweet potato, and onion with olive oil, oregano, paprika, salt, and pepper on a baking sheet.",
          "Bake 15–18 min until chickpeas are crispy and sweet potato is tender.",
          "Add garlic in the last 2 minutes.",
          "Serve in warm tortillas with cheese, or over rice."
        ]
      }
    ],
    usage: [
      { item: "Sweet potatoes (2)", desc: "1 for Mexican bowl + 1 for Mediterranean bake = 2 ✓" },
      { item: "Black beans (2 cans)", desc: "1 for Mexican bowl + 1 leftover = 2 ✓" },
      { item: "Chickpeas (1 can)", desc: "1 for Indian dal + split for Mediterranean = 1 can ✓" },
      { item: "Diced tomatoes", desc: "used only in Indian dal" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use 3 cups across recipes, plenty leftover" },
      { item: "Tortillas (8–10)", desc: "4 for Mediterranean bake, 4–6 leftover" }
    ],
    scaling: {
      low: 2.30,
      high: 4.00,
      tips: [
        "Sweet potatoes: bagged at warehouse stores, ~$0.50–0.80/lb.",
        "Rice: 5–7 lb bag (~$3–4) lasts months.",
        "Canned beans: store brands (Great Value, Kirkland) are identical to name brands."
      ]
    },
    bestFor: "Vegetarian, budget"
  },

  "pasta-veggie": {
    slug: "pasta-veggie",
    title: "Pasta & Veggie",
    emoji: "🍝",
    protein: "Beans, chickpeas, feta",
    styles: ["Italian", "Mediterranean", "Mexican-American"],
    recipeCount: 3,
    maxMinutes: 20,
    estTotalLow: 11.35,
    estTotalHigh: 19.50,
    overview: "Pasta-centric. Three different meals with the same core ingredients (pasta, tomatoes, beans, veggies) prepared in Italian, Mediterranean, and Mexican styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, and Italian seasoning.",
    color: "#f59e0b",
    shopping: {
      produce: ["2 large onions", "1 head garlic", "1 bunch fresh parsley or cilantro"],
      protein: [],
      pantry: ["1 lb pasta (penne, rotini, or any shape)", "2 cans (14.5 oz) diced tomatoes", "1 can (15 oz) black beans", "1 can (15 oz) chickpeas", "1 bag (16 oz) frozen mixed vegetables"],
      dairy: ["Feta cheese (6 oz block)"]
    },
    priceItems: [
      { item: "Large onions", qty: "2", low: 1.50, high: 2.50 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Parsley or cilantro bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Pasta (1 lb)", qty: "1 lb", low: 1.00, high: 2.00 },
      { item: "Diced tomatoes", qty: "2 cans (14.5 oz)", low: 2.00, high: 3.50 },
      { item: "Black beans", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Chickpeas", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Frozen mixed vegetables", qty: "16 oz bag", low: 1.50, high: 2.50 },
      { item: "Feta cheese (block)", qty: "6 oz", low: 2.50, high: 4.00 }
    ],
    recipes: [
      {
        emoji: "🍝", name: "Italian Pasta with Tomato & Bean Sauce", style: "Italian", time: 20, cal: 620, servings: 2,
        ingredients: ["8 oz pasta", "1 can diced tomatoes (14.5 oz)", "1 can black beans, rinsed", "½ onion, diced", "2 cloves garlic, minced", "1 tsp Italian seasoning", "Red pepper flakes, to taste", "Salt, pepper, olive oil"],
        leftovers: ["1 can diced tomatoes", "1 can chickpeas", "1 bag frozen veggies", "Remaining pasta", "Remaining feta"],
        instructions: [
          "Cook pasta according to package directions. Reserve ½ cup pasta water, then drain.",
          "While pasta cooks, heat olive oil in a skillet over medium heat. Cook onion 3 min until soft.",
          "Add garlic and Italian seasoning; cook 30 seconds.",
          "Pour in diced tomatoes (with juice). Simmer 5 min.",
          "Stir in black beans and red pepper flakes; cook 2 min.",
          "Toss pasta into the sauce. Add pasta water if needed to loosen.",
          "Serve with a crack of black pepper."
        ]
      },
      {
        emoji: "🥙", name: "Mediterranean Chickpea Pasta Salad", style: "Mediterranean", time: 15, cal: 580, servings: 2,
        ingredients: ["8 oz pasta (cooked, cooled)", "1 can chickpeas, rinsed and drained", "½ onion, finely diced", "2 cloves garlic, minced", "¼ cup crumbled feta cheese", "1 tbsp olive oil", "1 tbsp lemon juice (or lime)", "Salt, pepper, red pepper flakes"],
        leftovers: ["Remaining pasta", "Remaining diced tomatoes", "Remaining frozen veggies", "Remaining feta"],
        instructions: [
          "Cook remaining pasta (use 8 oz). Cool under running water or let sit.",
          "In a large bowl, combine cooled pasta, chickpeas, and onion.",
          "Whisk olive oil, lemon juice, garlic, salt, and pepper. Pour over pasta.",
          "Toss to combine. Top with crumbled feta.",
          "Serve warm or cold."
        ]
      },
      {
        emoji: "🌶️", name: "Mexican Pasta Frittata", style: "Mexican-American", time: 20, cal: 720, servings: 2,
        ingredients: ["8 oz pasta", "1 can black beans, rinsed", "1 can diced tomatoes (14.5 oz)", "½ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1 cup frozen mixed vegetables", "¼ cup shredded cheese", "Salt, pepper, olive oil"],
        leftovers: ["Remaining feta", "Remaining chickpeas", "Remaining frozen veggies"],
        instructions: [
          "Cook pasta according to package directions. Drain, leaving it in the pot.",
          "In a separate skillet, heat olive oil over medium heat. Cook onion 3 min.",
          "Add garlic, cumin, and paprika; cook 30 seconds.",
          "Add diced tomatoes and frozen vegetables; simmer 5 min.",
          "Stir in black beans; cook 2 min.",
          "Pour sauce over pasta in the pot. Toss to combine.",
          "Serve topped with shredded cheese."
        ]
      }
    ],
    usage: [
      { item: "Pasta (1 lb)", desc: "8 oz × 3 recipes = 24 oz = 1.5 lbs → Buy 1.5 lb (24 oz) of pasta" },
      { item: "Diced tomatoes (2 cans)", desc: "1 for Italian + 1 for Mexican = 2 ✓" },
      { item: "Black beans (1 can)", desc: "1 for Italian + split with Mexican = 1 can. → Buy 2 cans black beans" },
      { item: "Chickpeas (1 can)", desc: "used only in Mediterranean salad" },
      { item: "Frozen veggies", desc: "1 cup for Mexican, rest leftover → buy 1 bag" },
      { item: "Onions (2)", desc: "½ + ½ + ½ = 1.5 → 2 onions, ½ leftover" },
      { item: "Feta (6 oz)", desc: "¼ cup (~1 oz) for Mediterranean salad, rest leftover" }
    ],
    scaling: {
      low: 1.85,
      high: 3.30,
      tips: [
        "Pasta: 1 lb costs ~$1–2. A 2 lb bag lasts for multiple plans.",
        "Canned goods: store brands are identical to name brands.",
        "This is the cheapest plan — shelf-stable ingredients, minimal produce."
      ]
    },
    bestFor: "Cheapest option"
  },

  "fish-rice": {
    slug: "fish-rice",
    title: "Fish & Rice",
    emoji: "🐟",
    protein: "Canned tuna, eggs",
    styles: ["Asian", "Mexican", "Quick-fried"],
    recipeCount: 3,
    maxMinutes: 20,
    estTotalLow: 14.30,
    estTotalHigh: 24.75,
    overview: "Shelf-stable protein. Three different meals with the same core ingredients (tuna, rice, frozen veggies, eggs) prepared in Asian, Mexican, and quick-fried styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, and sesame oil.",
    color: "#3b82f6",
    shopping: {
      produce: ["1 large onion", "1 head garlic", "1 bunch fresh cilantro", "1 bunch scallions (green onions)", "2 limes"],
      protein: ["4 cans (5 oz each) tuna in water", "1 dozen eggs"],
      pantry: ["Rice (1 lb bag if needed)", "1 can (15 oz) black beans", "1 can (14.5 oz) diced tomatoes", "1 bag (16 oz) frozen mixed vegetables"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Cilantro bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Limes", qty: "2", low: 0.50, high: 1.00 },
      { item: "Tuna (5 oz cans)", qty: "4 cans", low: 3.00, high: 5.00 },
      { item: "Eggs (large, Grade A)", qty: "1 dozen", low: 2.00, high: 3.50 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Black beans", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Frozen mixed vegetables", qty: "16 oz bag", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🥡", name: "Asian Tuna & Rice Bowl", style: "Asian", time: 20, cal: 620, servings: 2,
        ingredients: ["2 cans tuna (5 oz), drained and flaked", "1½ cups cooked rice", "1 cup frozen mixed vegetables", "½ onion, diced", "2 cloves garlic, minced", "2 tbsp soy sauce", "1 tsp sesame oil", "2 scallions, sliced (garnish)", "1 lime, cut into wedges", "Salt, pepper, olive oil"],
        leftovers: ["2 cans tuna", "1 can black beans", "1 can diced tomatoes", "Remaining rice", "Remaining frozen veggies"],
        instructions: [
          "Cook rice according to package directions (use ¾ cup uncooked → yields ~2 cups cooked).",
          "Heat olive oil in a skillet over medium-high heat. Cook onion 3 min until soft.",
          "Add garlic and frozen vegetables; stir-fry 3 min until veggies are tender.",
          "Add flaked tuna; cook 2 min to warm through.",
          "Drizzle soy sauce and sesame oil; toss to coat.",
          "Serve over rice. Top with sliced scallions and a squeeze of lime."
        ]
      },
      {
        emoji: "🌮", name: "Mexican Tuna Rice Bowl", style: "Mexican", time: 15, cal: 720, servings: 2,
        ingredients: ["2 cans tuna (5 oz), drained and flaked", "1 can black beans, rinsed", "1 can diced tomatoes (14.5 oz)", "1 cup frozen mixed vegetables", "½ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1½ cups cooked rice", "Shredded cheese, for topping", "Cilantro, chopped", "Lime wedge", "Salt, pepper, olive oil"],
        leftovers: ["Remaining rice", "Remaining frozen veggies", "Remaining cheese"],
        instructions: [
          "Cook rice if not already done (from the Asian bowl batch).",
          "Heat olive oil in a skillet over medium heat. Cook onion 3 min.",
          "Add garlic, cumin, and paprika; cook 30 seconds.",
          "Add diced tomatoes (with juice) and frozen vegetables; simmer 5 min.",
          "Stir in black beans; cook 2 min.",
          "Gently fold in flaked tuna; warm through 1 min (don't overcook).",
          "Serve over rice. Top with cheese, cilantro, and lime."
        ]
      },
      {
        emoji: "🍳", name: "Quick Tuna Fried Rice", style: "Quick-fried", time: 15, cal: 430, servings: 2,
        ingredients: ["2 cans tuna (5 oz), drained and flaked", "2 eggs", "1 cup frozen mixed vegetables", "1 cup cooked rice (day-old is best)", "2 scallions, sliced", "2 tbsp soy sauce", "1 tsp sesame oil", "Red pepper flakes, to taste", "Salt, pepper, olive oil"],
        leftovers: ["Remaining rice", "Remaining eggs", "Remaining cheese"],
        instructions: [
          "Heat olive oil in a wok or large skillet over high heat.",
          "Scramble eggs in the pan; break into small pieces. Set aside.",
          "Add more oil; stir-fry frozen vegetables 3 min.",
          "Add rice; press flat and let get slightly crispy (2 min). Stir.",
          "Add flaked tuna and scrambled eggs; toss to combine.",
          "Drizzle soy sauce and sesame oil; add red pepper flakes.",
          "Toss everything together. Top with sliced scallions."
        ]
      }
    ],
    usage: [
      { item: "Tuna (4 cans)", desc: "2 cans × 3 recipes = 6 cans needed → Buy 4 cans, use 2 per recipe" },
      { item: "Eggs (1 dozen)", desc: "2 for fried rice, 10 leftover for future meals" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use 3.5 cups across recipes, plenty leftover" },
      { item: "Frozen veggies (1 bag)", desc: "1 cup × 3 recipes = 3 cups → use 1 cup per recipe, 1 cup leftover" },
      { item: "Black beans (1 can)", desc: "used only in Mexican bowl" },
      { item: "Diced tomatoes (1 can)", desc: "used only in Mexican bowl" }
    ],
    scaling: {
      low: 2.30,
      high: 4.15,
      tips: [
        "Tuna: 12-packs at Costco/Sam's ($5–7 vs $7–10 retail).",
        "Eggs: prices have been volatile due to avian flu — coming down in 2026.",
        "Rice: 5–7 lb bag (~$3–4) lasts months."
      ]
    },
    bestFor: "Shelf-stable, no fridge protein"
  },

  "ground-beef-rice": {
    slug: "ground-beef-rice",
    title: "Ground Beef & Rice",
    emoji: "🥩",
    protein: "Ground beef",
    styles: ["Mexican", "Asian", "Italian"],
    recipeCount: 3,
    maxMinutes: 25,
    estTotalLow: 14.80,
    estTotalHigh: 25.00,
    overview: "Rich, hearty meals. Three different meals with the same core ingredients (ground beef, rice, tomatoes) prepared in Mexican, Asian, and Italian styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, and spices.",
    color: "#dc2626",
    shopping: {
      produce: ["1 large onion", "1 head garlic", "1 bunch fresh cilantro or parsley"],
      protein: ["1.5 lbs ground beef (80/20 or 85/15)"],
      pantry: ["Rice (1 lb bag if needed)", "1 can (15 oz) black beans", "1 can (14.5 oz) diced tomatoes", "1 bag (16 oz) frozen mixed vegetables"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Cilantro or parsley bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Ground beef (1.5 lbs)", qty: "1.5 lbs", low: 5.00, high: 8.00 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Black beans", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Frozen mixed vegetables", qty: "16 oz bag", low: 1.50, high: 2.50 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🌮", name: "Mexican Ground Beef Tacos", style: "Mexican", time: 20, cal: 780, servings: 2,
        ingredients: ["¾ lb ground beef", "½ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1 can black beans, rinsed", "4 flour tortillas", "Shredded cheese, for topping", "Cilantro, chopped", "Salt, pepper, olive oil"],
        leftovers: ["¾ lb ground beef", "Remaining onion", "Remaining rice", "Remaining tortillas", "Remaining cheese"],
        instructions: [
          "Heat olive oil in a skillet over medium-high heat. Brown ground beef, breaking into small pieces, 6–8 min.",
          "Add onion; cook 3 min until soft.",
          "Add garlic, cumin, and paprika; cook 30 seconds.",
          "Stir in black beans and heat through (2 min).",
          "Warm tortillas in a dry pan or microwave.",
          "Fill tortillas with beef-bean mixture. Top with cheese and cilantro."
        ]
      },
      {
        emoji: "🥡", name: "Asian Ground Beef Fried Rice", style: "Asian", time: 20, cal: 820, servings: 2,
        ingredients: ["¾ lb ground beef", "1 cup frozen mixed vegetables", "2 cups cooked rice (day-old is best)", "2 cloves garlic, minced", "3 tbsp soy sauce", "1 tsp sesame oil", "Red pepper flakes, to taste", "2 scallions, sliced (garnish)", "Salt, pepper, olive oil"],
        leftovers: ["Remaining rice", "Remaining frozen veggies", "Remaining cheese"],
        instructions: [
          "Heat olive oil in a wok or large skillet over high heat.",
          "Brown ground beef, breaking into small pieces, 5–6 min. Drain excess fat if needed.",
          "Add frozen vegetables; stir-fry 3 min.",
          "Add rice; press flat and let get slightly crispy (2 min). Stir.",
          "Add garlic; cook 30 seconds.",
          "Drizzle soy sauce and sesame oil; add red pepper flakes. Toss to combine.",
          "Top with sliced scallions."
        ]
      },
      {
        emoji: "🍝", name: "Italian Ground Beef Bolognese over Rice", style: "Italian", time: 25, cal: 750, servings: 2,
        ingredients: ["¾ lb ground beef", "1 can diced tomatoes (14.5 oz)", "½ onion, diced", "2 cloves garlic, minced", "1 tsp dried oregano", "1 tsp smoked paprika", "2 cups cooked rice", "Shredded cheese, for topping", "Salt, pepper, olive oil"],
        leftovers: ["Remaining rice", "Remaining cheese"],
        instructions: [
          "Cook rice if not already done (from the fried rice batch).",
          "Heat olive oil in a skillet over medium-high heat. Brown ground beef, breaking into small pieces, 6–8 min.",
          "Add onion; cook 3 min until soft.",
          "Add garlic, oregano, and paprika; cook 30 seconds.",
          "Pour in diced tomatoes (with juice). Simmer 10–12 min until sauce thickens.",
          "Season with salt and pepper.",
          "Serve over rice. Top with shredded cheese."
        ]
      }
    ],
    usage: [
      { item: "Ground beef (1.5 lbs)", desc: "¾ lb × 3 = 2.25 lbs → Buy 2 lbs instead" },
      { item: "Onion (1)", desc: "½ + ½ = 1 → 1 onion ✓" },
      { item: "Garlic (1 head)", desc: "2 + 2 + 2 = 6 cloves → 1 head has ~12 cloves ✓" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use 4 cups across recipes, plenty leftover" },
      { item: "Black beans (1 can)", desc: "used only in Mexican tacos" },
      { item: "Diced tomatoes (1 can)", desc: "used only in Italian bolognese" },
      { item: "Frozen veggies (1 bag)", desc: "1 cup for fried rice, rest leftover" },
      { item: "Tortillas (8–10)", desc: "4 for Mexican tacos, 4–6 leftover" },
      { item: "Cheese (8 oz)", desc: "~2 oz Mexican + ~2 oz Italian = ~4 oz used, ~4 oz leftover" }
    ],
    scaling: {
      low: 2.50,
      high: 4.15,
      tips: [
        "Ground beef: 3–4 lb pack at Costco/Sam's ($6–9 vs $8–12 retail).",
        "Rice: 5–7 lb bag (~$3–4) lasts months.",
        "Ground beef is more expensive than chicken or beans but cooks faster and has richer flavor."
      ]
    },
    bestFor: "Rich, hearty, fast cooking"
  },

  "lentil-grain": {
    slug: "lentil-grain",
    title: "Lentil & Grain",
    emoji: "🫘",
    protein: "Red lentils",
    styles: ["Indian", "Middle Eastern", "Mexican"],
    recipeCount: 3,
    maxMinutes: 25,
    estTotalLow: 11.75,
    estTotalHigh: 20.50,
    overview: "Vegetarian, high-fiber. Three different meals with the same core ingredients (lentils, rice, tomatoes) prepared in Indian, Middle Eastern, and Mexican styles. Cook for two (leftover). Lentils are one of the cheapest, most nutritious plant proteins available — 18g protein per cup cooked. Pantry staples assumed on hand: oil, salt, pepper, and all spices.",
    color: "#059669",
    shopping: {
      produce: ["2 large onions", "1 head garlic", "1 bunch fresh cilantro or parsley"],
      protein: [],
      pantry: ["1 lb red lentils (dry)", "Rice (1 lb bag if needed)", "2 cans (14.5 oz) diced tomatoes", "1 bag (16 oz) frozen mixed vegetables"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Large onions", qty: "2", low: 1.50, high: 2.50 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Cilantro or parsley bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Red lentils (dry)", qty: "1 lb", low: 1.00, high: 2.00 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Diced tomatoes", qty: "2 cans (14.5 oz)", low: 2.00, high: 3.50 },
      { item: "Frozen mixed vegetables", qty: "16 oz bag", low: 1.50, high: 2.50 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🍛", name: "Indian Red Lentil Dal", style: "Indian", time: 25, cal: 620, servings: 2,
        ingredients: ["1 cup red lentils, rinsed", "1 can diced tomatoes (14.5 oz)", "1 large onion, diced", "3 cloves garlic, minced", "1 tbsp curry powder", "1 tsp garam masala", "1½ cups cooked rice", "Fresh cilantro, chopped", "Salt, pepper, olive oil"],
        leftovers: ["¾ cup cooked lentils", "1 can diced tomatoes", "1 bag frozen veggies", "Remaining rice", "Remaining tortillas"],
        instructions: [
          "Rinse lentils under cold water. Cook in 3 cups water with a pinch of salt for 15–20 min until soft and creamy. Drain if needed.",
          "While lentils cook, heat olive oil in a skillet over medium heat. Cook onion 3 min until soft.",
          "Add garlic, curry powder, and garam masala; cook 30 seconds until fragrant.",
          "Pour in diced tomatoes (with juice). Simmer 5 min.",
          "Stir in cooked lentils; simmer 3 min to meld flavors.",
          "Season with salt and pepper. Top with fresh cilantro.",
          "Serve over rice."
        ]
      },
      {
        emoji: "🥙", name: "Middle Eastern Lentil & Tomato Stew", style: "Middle Eastern", time: 25, cal: 580, servings: 2,
        ingredients: ["¾ cup cooked red lentils (from dal batch)", "1 can diced tomatoes (14.5 oz)", "1 large onion, diced", "2 cloves garlic, minced", "1 tsp dried oregano", "1 tsp smoked paprika", "Red pepper flakes, to taste", "4 flour tortillas", "¼ cup shredded cheese", "Salt, pepper, olive oil"],
        leftovers: ["Remaining rice", "Remaining frozen veggies", "Remaining cheese"],
        instructions: [
          "Heat olive oil in a skillet over medium heat. Cook onion 3 min until soft.",
          "Add garlic, oregano, and paprika; cook 30 seconds.",
          "Pour in diced tomatoes (with juice). Simmer 8–10 min until thickened.",
          "Stir in leftover cooked lentils; heat through 3 min.",
          "Season with salt, pepper, and red pepper flakes.",
          "Serve in warm tortillas with cheese, or over rice."
        ]
      },
      {
        emoji: "🌮", name: "Mexican Lentil Bowls", style: "Mexican", time: 20, cal: 650, servings: 2,
        ingredients: ["½ cup cooked red lentils (from dal batch)", "1 cup frozen mixed vegetables", "½ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1½ cups cooked rice", "Shredded cheese, for topping", "Cilantro, chopped", "Salt, pepper, olive oil"],
        leftovers: ["Remaining rice", "Remaining cheese"],
        instructions: [
          "Cook rice if not already done (from the dal batch).",
          "Heat olive oil in a skillet over medium-high heat. Cook onion 3 min.",
          "Add garlic, cumin, and paprika; cook 30 seconds.",
          "Add frozen vegetables; cook 4 min until tender.",
          "Stir in leftover cooked lentils; heat through 2 min.",
          "Serve over rice. Top with cheese and cilantro."
        ]
      }
    ],
    usage: [
      { item: "Red lentils (1 lb dry)", desc: "1 cup dry → ~2.5 cups cooked. Use 1 cup (dal) + ¾ cup (stew) + ½ cup (Mexican) = 2.25 cups, plenty leftover" },
      { item: "Onions (2)", desc: "1 for dal + 1 for stew = 2 ✓" },
      { item: "Garlic (1 head)", desc: "3 + 2 + 2 = 7 cloves → 1 head has ~12 cloves ✓" },
      { item: "Diced tomatoes (2 cans)", desc: "1 for dal + 1 for stew = 2 ✓" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use 3 cups across recipes, plenty leftover" },
      { item: "Frozen veggies (1 bag)", desc: "1 cup for Mexican bowl, rest leftover" },
      { item: "Tortillas (8–10)", desc: "4 for Middle Eastern stew, 4–6 leftover" },
      { item: "Cheese (8 oz)", desc: "~2 oz stew + ~2 oz Mexican = ~4 oz used, ~4 oz leftover" }
    ],
    scaling: {
      low: 2.00,
      high: 3.35,
      tips: [
        "Red lentils: ~$1–2/lb dry. Cook in 15–20 min, no soaking needed.",
        "This is the second-cheapest plan — ~$2.00–$3.00 per serving.",
        "Lentils are incredibly cheap, cook fast, and are packed with protein and fiber."
      ]
    },
    bestFor: "Highest fiber, cheapest protein"
  },

  "egg-power": {
    slug: "egg-power",
    title: "Egg Power",
    emoji: "🥚",
    protein: "Eggs",
    styles: ["Classic", "Mediterranean", "Asian", "Mexican"],
    recipeCount: 4,
    maxMinutes: 25,
    estTotalLow: 13.30,
    estTotalHigh: 22.75,
    overview: "Eggs are the cheapest quality protein. Four different meals with the same core ingredients (eggs, rice, peppers, onion) prepared in Classic, Mediterranean, Asian, and Mexican styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, and spices.",
    color: "#f59e0b",
    shopping: {
      produce: ["2 bell peppers (mixed colors)", "1 large onion", "1 head garlic", "1 bunch scallions (green onions)", "1 bunch fresh cilantro", "2 limes"],
      protein: ["1 dozen large eggs (12)"],
      pantry: ["Rice (white or brown, 1 lb bag if needed)", "1 can (14.5 oz) diced tomatoes", "1 can (15 oz) black beans", "1 pack flour tortillas (8–10 count)"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Bell peppers (2 mixed)", qty: "2", low: 2.00, high: 3.00 },
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Cilantro bunch", qty: "1", low: 0.75, high: 1.25 },
      { item: "Limes", qty: "2", low: 0.50, high: 1.00 },
      { item: "Large eggs", qty: "1 dozen", low: 2.00, high: 3.50 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Black beans", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🍳", name: "Veggie Scramble & Rice", style: "Classic", time: 15, cal: 600, servings: 2,
        ingredients: ["4 large eggs", "½ bell pepper, diced", "¼ onion, diced", "2 cloves garlic, minced", "2 tbsp olive oil", "2 oz shredded cheese", "2 cups cooked rice (1 cup per serving)", "Salt, pepper"],
        leftovers: ["8 eggs", "1½ bell peppers", "¾ onion", "1 can diced tomatoes", "1 can black beans", "Remaining rice, tortillas, cheese", "Remaining scallions, cilantro, limes"],
        instructions: [
          "Cook rice if not already done (2½ cups uncooked → ~7½ cups cooked — enough for this whole plan).",
          "Heat 1 tbsp oil in a skillet over medium heat. Sauté onion and bell pepper 3 min until softened.",
          "Add garlic; cook 30 seconds until fragrant.",
          "Whisk eggs with salt and pepper in a bowl until smooth.",
          "Pour eggs into the skillet. Gently push with a spatula, breaking and folding, 2–3 min until just set.",
          "Slide into a bowl, top with cheese.",
          "Serve with a big scoop of rice — crack an extra yolk into the rice if you're hungry."
        ]
      },
      {
        emoji: "🍅", name: "Shakshuka (Eggs in Tomato Sauce)", style: "Mediterranean", time: 25, cal: 560, servings: 2,
        ingredients: ["4 large eggs", "½ can diced tomatoes (14.5 oz), with juice", "½ bell pepper, diced", "¼ onion, diced", "2 cloves garlic, minced", "1 tsp smoked paprika", "½ tsp cumin", "1 tsp dried oregano", "2 tbsp olive oil", "2 cups cooked rice (side)", "Salt, pepper"],
        leftovers: ["4 eggs", "1 bell pepper", "¾ onion", "½ can diced tomatoes", "1 can black beans", "Remaining rice, tortillas, cheese", "Remaining scallions, cilantro, limes"],
        instructions: [
          "Heat oil in a skillet over medium heat. Sauté onion and bell pepper 4 min.",
          "Add garlic, paprika, cumin, and oregano; cook 30 seconds until fragrant.",
          "Pour in the diced tomatoes with juice. Simmer 5 min until slightly thickened.",
          "Make 4 wells in the sauce; crack one egg into each.",
          "Cover and cook 6–8 min until whites are set and yolks are just cooked through.",
          "Spoon sauce over the cooked rice. Break the yolk into the rice and eat with a spoon."
        ]
      },
      {
        emoji: "🍚", name: "Egg Fried Rice", style: "Asian", time: 20, cal: 560, servings: 2,
        ingredients: ["2 large eggs", "3 cups cooked rice (day-old or chilled is best)", "½ bell pepper, diced small", "½ onion, diced small", "2 cloves garlic, minced", "3 tbsp soy sauce", "1 tsp sesame oil", "2 tbsp olive oil", "2 scallions, sliced (garnish)", "Red pepper flakes, to taste"],
        leftovers: ["2 eggs", "½ bell pepper", "¼ onion", "½ can diced tomatoes", "1 can black beans", "Remaining rice, tortillas, cheese", "Remaining cilantro, 1 lime"],
        instructions: [
          "Crack eggs into a bowl, add a pinch of salt, and scramble. Heat 1 tbsp oil in a wok or large skillet over high heat; scramble the eggs 1 min, break into bite-size pieces, and set aside.",
          "Add the remaining 1 tbsp oil over high heat. Add onion and bell pepper; stir-fry 2 min.",
          "Add garlic and red pepper flakes; cook 30 seconds.",
          "Add the rice, breaking up clumps. Press flat and let it sit 1 min to get some toasty spots, then stir.",
          "Pour in soy sauce and sesame oil; toss to coat.",
          "Return the scrambled eggs; toss 30 seconds.",
          "Top with sliced scallions. Squeeze of lime if you want."
        ]
      },
      {
        emoji: "🌮", name: "Huevos Rancheros", style: "Mexican", time: 25, cal: 550, servings: 2,
        ingredients: ["2 large eggs", "½ can diced tomatoes (14.5 oz)", "½ can black beans (15 oz), rinsed", "½ bell pepper, diced", "¼ onion, diced", "1 clove garlic, minced", "1 tsp cumin", "2 flour tortillas", "2 oz shredded cheese", "2 tbsp olive oil", "Cilantro, lime (garnish)", "Salt, pepper"],
        leftovers: ["0 eggs ✓", "0 bell peppers ✓", "½ can black beans", "Remaining tortillas (~6–8)", "~4 oz cheese", "Remaining rice", "1 lime, remaining cilantro, scallions"],
        instructions: [
          "Heat 1 tbsp oil in a skillet over medium heat. Sauté onion and bell pepper 3 min, add garlic 30 seconds.",
          "Add the diced tomatoes and cumin. Simmer 5 min into a thick, chunky salsa. Season with salt.",
          "Warm the black beans in a small pan with a splash of water.",
          "In a small skillet, fry one egg per serving in the remaining oil until the whites are set (~3 min, no flipping needed for a runny yolk).",
          "Warm the tortillas in a dry pan 30 seconds per side.",
          "Layer: tortilla → salsa → beans → fried egg → cheese → cilantro.",
          "Squeeze a lime over the top and eat."
        ]
      }
    ],
    usage: [
      { item: "Eggs (1 dozen)", desc: "4 + 4 + 2 + 2 = 12 used ✓" },
      { item: "Bell peppers (2)", desc: "½ × 4 recipes = 2 used ✓" },
      { item: "Onion (1 large)", desc: "¼ + ¼ + ½ + ¼ = 1¼ → buy 1 large, you'll use it all" },
      { item: "Garlic (1 head)", desc: "2 + 2 + 2 + 1 = 7 cloves → 1 head has ~12 cloves, ~5 left for future meals ✓" },
      { item: "Rice", desc: "Cook 2½ cups uncooked at once → yields ~7½ cups. Use 2 + 2 + 3 + 0 = 7 cups, plenty leftover" },
      { item: "Diced tomatoes (1 can)", desc: "½ can (shakshuka) + ½ can (huevos) = 1 can used ✓" },
      { item: "Black beans (1 can)", desc: "½ can in huevos rancheros, ½ can leftover — save for a future meal" },
      { item: "Tortillas (8–10)", desc: "2 in huevos rancheros, the rest for future meals" },
      { item: "Cheese (8 oz)", desc: "2 oz + 2 oz = 4 oz used, 4 oz leftover ✓" }
    ],
    scaling: {
      low: 1.65,
      high: 2.85,
      tips: [
        "Eggs: ~$2–3.50/dozen. One dozen covers all four recipes.",
        "Rice: cook 2½ cups uncooked at once → yields ~7½ cups — enough for this whole plan.",
        "This is one of the cheapest plans — eggs are the cheapest quality protein available."
      ]
    },
    bestFor: "Cheapest protein, easiest cooking"
  },

  "pork-peppers": {
    slug: "pork-peppers",
    title: "Pork & Peppers",
    emoji: "🐷",
    protein: "Ground pork",
    styles: ["Mexican", "Asian", "Italian", "Mediterranean"],
    recipeCount: 4,
    maxMinutes: 25,
    estTotalLow: 17.75,
    estTotalHigh: 28.75,
    overview: "Ground pork is the value cut — typically $1–$2/lb cheaper than ground beef and works in every style. Four different meals with the same core ingredients (ground pork, rice, peppers, onion) prepared in Mexican, Asian, Italian, and Mediterranean styles. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, and spices.",
    color: "#ef4444",
    shopping: {
      produce: ["2 bell peppers (mixed colors)", "1 large onion", "1 head garlic", "1 bunch scallions (green onions)", "2 limes"],
      protein: ["2.5 lbs lean ground pork (80–90% lean)"],
      pantry: ["Rice (white or brown, 2 lb bag or 1 lb bag if you already have some)", "1 can (14.5 oz) diced tomatoes"],
      dairy: ["Shredded Mexican-blend cheese (8 oz)"]
    },
    priceItems: [
      { item: "Bell peppers (2 mixed)", qty: "2", low: 2.00, high: 3.00 },
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Limes", qty: "2", low: 0.50, high: 1.00 },
      { item: "Lean ground pork", qty: "2.5 lbs", low: 7.50, high: 11.25 },
      { item: "Rice", qty: "2 lb bag", low: 1.50, high: 3.00 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Mexican-blend shredded cheese", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🌮", name: "Seasoned Pork Tacos", style: "Mexican", time: 20, cal: 500, servings: 2,
        ingredients: ["½ lb ground pork", "½ bell pepper, minced", "¼ onion, minced", "1 clove garlic, minced", "¼ can diced tomatoes", "1 tsp cumin", "1 tsp chili powder", "1 tsp smoked paprika", "4 flour tortillas", "2 oz shredded cheese", "1 tbsp olive oil", "½ lime", "Salt, pepper"],
        leftovers: ["2 lbs ground pork", "1½ bell peppers", "¾ onion", "Remaining rice, tortillas, cheese", "Remaining scallions, 1½ limes"],
        instructions: [
          "Heat oil in a skillet over medium-high heat. Brown the pork, breaking it up, 5–6 min.",
          "Add onion and bell pepper; cook 3 min until softened.",
          "Add garlic, cumin, chili powder, and smoked paprika; cook 30 seconds until fragrant.",
          "Stir in the diced tomatoes. Simmer 3 min. Season with salt.",
          "Warm the tortillas in a dry pan 30 seconds per side.",
          "Build tacos: pork mixture, cheese, and a squeeze of lime."
        ]
      },
      {
        emoji: "🥡", name: "Asian Pork & Pepper Stir-Fry", style: "Asian", time: 20, cal: 710, servings: 2,
        ingredients: ["½ lb ground pork", "1 bell pepper, sliced", "½ onion, sliced", "2 cloves garlic, minced", "2 tbsp soy sauce", "1 tsp sesame oil", "Red pepper flakes, to taste", "1.5 tbsp olive oil", "2 scallions, sliced (garnish)", "3 cups cooked rice (1½ cups per serving)"],
        leftovers: ["1.5 lbs ground pork", "½ bell pepper", "¼ onion", "Remaining rice, 1 lime"],
        instructions: [
          "Cook rice if not already done (1 cup uncooked → ~3 cups cooked; 1½ cups → ~4½ cups for this plan).",
          "Heat 1 tbsp oil in a wok or large skillet over high heat.",
          "Add the pork, breaking it up and pressing it flat. Let it sit 2 min to get color, then break and cook 3 more min until browned.",
          "Add onion and bell pepper; stir-fry 2–3 min until crisp-tender.",
          "Add garlic and red pepper flakes; cook 30 seconds.",
          "Drizzle in soy sauce and sesame oil; toss to coat.",
          "Serve over the rice, top with sliced scallions."
        ]
      },
      {
        emoji: "🍝", name: "Pork Bolognese over Rice", style: "Italian", time: 25, cal: 700, servings: 2,
        ingredients: ["½ lb ground pork", "½ can diced tomatoes (14.5 oz)", "½ onion, finely diced", "2 cloves garlic, minced", "1 tsp dried oregano", "½ tsp smoked paprika", "Red pepper flakes, to taste", "1.5 tbsp olive oil", "3 cups cooked rice (1½ cups per serving)", "Salt, pepper"],
        leftovers: ["1 lb ground pork", "½ bell pepper", "¼ onion", "Remaining rice, tortillas, cheese", "1 lime"],
        instructions: [
          "Heat oil in a wide skillet or Dutch oven over medium-high heat.",
          "Add the pork, pressing it flat, then break it up as it browns (5–6 min).",
          "Add the onion; cook 3–4 min until softened.",
          "Add garlic, oregano, smoked paprika, and red pepper flakes; cook 30 seconds.",
          "Pour in the diced tomatoes with juice. Simmer 8–10 min until the sauce thickens.",
          "Season with salt and pepper.",
          "Spoon over the rice."
        ]
      },
      {
        emoji: "🫕", name: "Mediterranean Pork & Pepper Skillet", style: "Mediterranean", time: 25, cal: 650, servings: 2,
        ingredients: ["½ lb ground pork", "½ bell pepper, chopped", "¼ onion, diced", "2 cloves garlic, minced", "¼ can diced tomatoes", "1 tsp dried oregano", "1 tsp smoked paprika", "2 oz shredded cheese", "1 tbsp olive oil", "2 cups cooked rice (1 cup per serving)", "½ lime", "Salt, pepper"],
        leftovers: ["½ lb ground pork (freeze for a future meal)", "0 bell peppers ✓", "Remaining tortillas (~4–6)", "~4 oz cheese", "Remaining rice"],
        instructions: [
          "Heat olive oil in a skillet over medium-high heat. Brown the pork, breaking into small pieces, 5–6 min.",
          "Add onion and bell pepper; cook 3 min.",
          "Add garlic, oregano, and paprika; cook 30 seconds.",
          "Stir in the diced tomatoes. Simmer 3 min.",
          "Serve over rice. Top with cheese and a squeeze of lime."
        ]
      }
    ],
    usage: [
      { item: "Ground pork (2.5 lbs)", desc: "½ lb × 4 recipes = 2 lbs used, ½ lb leftover (freeze it)" },
      { item: "Bell peppers (2)", desc: "½ + 1 + ½ + ½ = 2.5 → buy 2, use them all (slight shortfall on recipe 2)" },
      { item: "Onion (1)", desc: "¼ + ½ + ½ + ¼ = 1.5 → buy 1 large, use it all" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use 6 cups across recipes, plenty leftover" },
      { item: "Diced tomatoes (1 can)", desc: "¼ + ½ + ¼ = 1 can used ✓" },
      { item: "Tortillas (8–10)", desc: "4 for tacos, 4–6 leftover" },
      { item: "Cheese (8 oz)", desc: "2 oz tacos + 2 oz med = 4 oz used, ~4 oz leftover" }
    ],
    scaling: {
      low: 2.25,
      high: 3.60,
      tips: [
        "Ground pork: 3–4 lb pack at Costco/Sam's ($6–9 vs $8–12 retail).",
        "Ground pork is cheaper than beef and works in every style.",
        "Freeze the leftover ½ lb for a future meal."
      ]
    },
    bestFor: "Value meat (undercuts beef)"
  },

  "tofu-threes": {
    slug: "tofu-threes",
    title: "Tofu Threes",
    emoji: "🧈",
    protein: "Firm tofu",
    styles: ["Asian", "Mexican", "Indian", "Breakfast-for-Dinner"],
    recipeCount: 4,
    maxMinutes: 30,
    estTotalLow: 16.00,
    estTotalHigh: 25.50,
    overview: "Plant-based and cheap. Four different meals with the same core ingredients (tofu, rice, peppers, onion) prepared in Asian, Mexican, Indian, and Breakfast-for-Dinner styles. Cook for two (leftover). Four 14-oz blocks of firm tofu (~$5–$7) is the whole protein budget. Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, and spices.",
    color: "#10b981",
    shopping: {
      produce: ["3 bell peppers (mixed colors)", "1 large onion", "1 head garlic", "1 bunch scallions (green onions)"],
      protein: ["4 blocks firm tofu (14 oz each — extra-firm is best for the scramble and tacos)"],
      pantry: ["Rice (white or brown, 1 lb bag if needed)", "Cornstarch (small 4 oz bag — only needed for the crispy stir-fry)", "1 can (14.5 oz) diced tomatoes"],
      dairy: ["Shredded cheese (8 oz) — optional, used in 2 of the 4 recipes"]
    },
    priceItems: [
      { item: "Bell peppers (3 mixed)", qty: "3", low: 3.00, high: 4.50 },
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Firm tofu", qty: "4 blocks (14 oz)", low: 5.00, high: 7.00 },
      { item: "Rice (if needed)", qty: "1 lb bag", low: 1.00, high: 2.00 },
      { item: "Cornstarch", qty: "1 small bag", low: 0.75, high: 1.50 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Flour tortillas", qty: "1 pack (8–10)", low: 1.50, high: 2.50 },
      { item: "Shredded cheese (optional)", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🥡", name: "Crispy Tofu & Pepper Stir-Fry", style: "Asian", time: 30, cal: 620, servings: 2,
        ingredients: ["1 block firm tofu (14 oz), patted dry and cut into 1\" cubes", "1 tbsp cornstarch (to toss the tofu in)", "1 bell pepper, sliced", "½ onion, sliced", "2 cloves garlic, minced", "2 tbsp soy sauce", "1 tsp sesame oil", "2 tbsp olive oil", "2 scallions, sliced (garnish)", "2 cups cooked rice (1 cup per serving)", "Red pepper flakes, to taste"],
        leftovers: ["3 blocks tofu", "2 bell peppers", "¾ onion", "Remaining rice, tortillas, cheese", "Remaining scallions"],
        instructions: [
          "Press the tofu 10 min (wrap in a towel under a heavy pan), then pat very dry and cut into cubes. Toss with cornstarch until coated.",
          "Heat 1 tbsp oil in a wok or large skillet over high heat. Fry tofu in a single layer 4–5 min per side until golden and crisp. Set aside.",
          "Wipe the skillet if needed. Add the remaining 1 tbsp oil over high heat.",
          "Add onion and bell pepper; stir-fry 2 min.",
          "Add garlic and red pepper flakes; cook 30 seconds.",
          "Drizzle in soy sauce and sesame oil; toss.",
          "Return the tofu; toss 1 min to re-crisp and coat.",
          "Serve over rice, top with scallions."
        ]
      },
      {
        emoji: "🌮", name: "Seasoned Tofu Tacos", style: "Mexican", time: 25, cal: 510, servings: 2,
        ingredients: ["1 block extra-firm tofu (14 oz), drained and crumbled", "½ bell pepper, minced", "¼ onion, minced", "1 clove garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1 tsp chili powder", "4 flour tortillas", "2 oz shredded cheese (optional)", "1 tsp olive oil", "½ lime", "Salt"],
        leftovers: ["2 blocks tofu", "1½ bell peppers", "½ onion", "Remaining rice, tortillas (~4–6), cheese", "Remaining scallions"],
        instructions: [
          "Drain the tofu well, press 5 min, and crumble with your hands into a bowl.",
          "Mix in cumin, smoked paprika, chili powder, and a pinch of salt.",
          "Heat oil in a skillet over medium-high heat. Add the crumbled tofu in an even layer; press flat and let it sit 3 min to get color, then crumble and cook 4 more min until the edges crisp.",
          "Add onion and bell pepper; cook 3 min until softened.",
          "Warm the tortillas in a dry pan 30 seconds per side.",
          "Build tacos: tofu scramble, cheese, scallions, and a squeeze of lime."
        ]
      },
      {
        emoji: "🍛", name: "Tofu & Pepper Curry Bowl", style: "Indian", time: 30, cal: 640, servings: 2,
        ingredients: ["1 block firm tofu (14 oz), cut into ¾\" cubes", "½ bell pepper, diced", "¼ onion, diced", "2 cloves garlic, minced", "½ can diced tomatoes (14.5 oz)", "1 tbsp curry powder", "1 tsp cumin", "1 tbsp olive oil", "2 cups cooked rice (1 cup per serving)", "Scallions or cilantro (garnish)", "Salt"],
        leftovers: ["1 block tofu", "1 bell pepper", "¼ onion", "Remaining rice, tortillas, cheese", "Remaining scallions"],
        instructions: [
          "Pat the tofu cubes dry. Heat oil in a skillet over medium-high heat.",
          "Add the tofu in a single layer; cook 4–5 min per side until golden. Set aside.",
          "In the same skillet, add a little more oil if needed. Sauté onion 3 min, add bell pepper and cook 2 more min.",
          "Add garlic, curry powder, and cumin; cook 30 seconds until fragrant.",
          "Add the diced tomatoes with juice. Simmer 5 min.",
          "Return the tofu; simmer 3 min until heated through. Season with salt.",
          "Spoon over the rice. Garnish with scallions."
        ]
      },
      {
        emoji: "🍳", name: "Tofu Scramble & Rice", style: "Breakfast-for-Dinner", time: 20, cal: 640, servings: 2,
        ingredients: ["1 block extra-firm tofu (14 oz), drained, patted dry, and crumbled", "½ bell pepper, diced small", "¼ onion, diced small", "1 clove garlic, minced", "½ tsp smoked paprika", "2 oz shredded cheese (optional)", "1 tsp olive oil", "2 cups cooked rice (1 cup per serving)", "Scallions (garnish)", "Salt, pepper"],
        leftovers: ["0 tofu ✓", "½ bell pepper", "Remaining rice, tortillas (~4–6)", "~4 oz cheese", "Remaining scallions"],
        instructions: [
          "Drain the tofu well, press 5 min, and crumble with your hands into a bowl.",
          "Heat oil in a skillet over medium heat. Add the crumbled tofu in an even layer; press flat and let it sit 3 min to get color.",
          "Add onion, bell pepper, and garlic; cook 3 min until softened.",
          "Add smoked paprika; cook 30 seconds.",
          "Top with cheese and scallions.",
          "Serve over rice."
        ]
      }
    ],
    usage: [
      { item: "Tofu (4 blocks)", desc: "1 block × 4 recipes = 4 used ✓" },
      { item: "Bell peppers (3)", desc: "1 + ½ + ½ + ½ = 2.5 → buy 3, use them all" },
      { item: "Onion (1)", desc: "½ + ¼ + ¼ + ¼ = 1.25 → buy 1 large, use it all" },
      { item: "Rice", desc: "Cook 3 cups uncooked → yields ~9 cups. Use 8 cups across recipes, plenty leftover" },
      { item: "Diced tomatoes (1 can)", desc: "½ can (curry), ½ can leftover — save for a future meal" },
      { item: "Tortillas (8–10)", desc: "4 for tacos, 4–6 leftover" },
      { item: "Cheese (8 oz)", desc: "2 oz tacos + 2 oz scramble = 4 oz used, ~4 oz leftover" }
    ],
    scaling: {
      low: 2.00,
      high: 3.20,
      tips: [
        "Tofu: store-brand 14 oz blocks are ~$1.25–$1.75 each. Skip the cheese (optional) to save $2–3.50.",
        "Cornstarch lasts forever — one small bag covers this plan and many future ones.",
        "This is the cheapest plant-based plan."
      ]
    },
    bestFor: "Plant-based, no meat"
  },

  "turkey-avocado-wrap": {
    slug: "turkey-avocado-wrap",
    title: "Turkey & Avocado Wrap",
    emoji: "🦃",
    protein: "Deli turkey",
    styles: ["Mediterranean", "American", "Mexican", "Middle Eastern"],
    recipeCount: 4,
    maxMinutes: 25,
    estTotalLow: 17.50,
    estTotalHigh: 28.75,
    overview: "Quick and portable. Four different meals with deli turkey as the protein base: a wrap, a salad, a quesadilla, and a bowl. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, garlic, cumin, smoked paprika, chili powder, dried oregano, red pepper flakes, curry powder, garam masala.",
    color: "#f59e0b",
    shopping: {
      produce: ["1 avocado", "1 red onion", "1 head romaine or mixed greens", "1 small cucumber", "1 bell pepper (any color)", "1 lemon"],
      protein: ["16 oz sliced deli turkey (about 4 oz per recipe)"],
      pantry: ["Rice (1 lb bag)", "Flatbread or tortillas — 1 pack", "Hummus — 6 oz"],
      dairy: ["Shredded cheese (optional) — 4 oz"]
    },
    priceItems: [
      { item: "Deli turkey", qty: "16 oz", low: 7.00, high: 11.00 },
      { item: "Avocado", qty: "1", low: 1.25, high: 2.00 },
      { item: "Romaine / greens", qty: "1 head", low: 1.00, high: 2.00 },
      { item: "Cucumber, bell pepper", qty: "1 each", low: 1.50, high: 2.50 },
      { item: "Red onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Rice (1 lb)", qty: "1 bag", low: 1.00, high: 2.00 },
      { item: "Flatbread / tortillas", qty: "1 pack", low: 1.50, high: 2.50 },
      { item: "Hummus", qty: "6 oz", low: 3.00, high: 4.50 },
      { item: "Lemon, oil (small amt)", qty: "—", low: 0.50, high: 1.00 }
    ],
    recipes: [
      {
        emoji: "🥑", name: "Turkey & Avocado Wrap", style: "Mediterranean", time: 8, cal: 350, servings: 2,
        ingredients: ["4 oz deli turkey slices", "1 avocado, sliced", "1 cup romaine, chopped", "3 tbsp hummus", "1 flatbread or large tortilla", "Olive oil — 1 tsp", "Salt and pepper"],
        leftovers: ["12 oz turkey", "Half the cucumber, bell pepper, red onion", "Half the hummus (about 3 oz)", "1 lemon"],
        instructions: [
          "Spread hummus on the flatbread; layer turkey, avocado, and romaine.",
          "Drizzle with a touch of olive oil; season with salt and pepper.",
          "Roll tightly, slice in half, and serve."
        ]
      },
      {
        emoji: "🥗", name: "Turkey & Red Onion Salad", style: "American", time: 10, cal: 420, servings: 2,
        ingredients: ["4 oz deli turkey, shredded", "½ red onion, thinly sliced", "1 cup romaine, chopped", "½ cucumber, diced", "Lemon juice — 1 tbsp", "Olive oil — 1 tbsp", "Salt, pepper"],
        leftovers: ["8 oz turkey", "Bell pepper, half the red onion"],
        instructions: [
          "Toss shredded turkey with romaine, cucumber, and red onion.",
          "Whisk lemon juice, olive oil, salt, and pepper; drizzle over the salad."
        ]
      },
      {
        emoji: "🌮", name: "Turkey & Avocado Quesadilla", style: "Mexican", time: 12, cal: 520, servings: 2,
        ingredients: ["4 oz deli turkey, shredded", "½ avocado, sliced", "2 tortillas (8\")", "Shredded cheese — 2 oz (optional)", "Smoked paprika — ¼ tsp", "Cumin — ¼ tsp", "Olive oil — 1 tbsp"],
        leftovers: ["4 oz turkey", "Romaine, cucumber, bell pepper, red onion"],
        instructions: [
          "Sprinkle tortillas with cumin and smoked paprika; add turkey and cheese if using.",
          "Heat olive oil in a pan; cook quesadilla 3–4 minutes per side until crisp.",
          "Top with avocado slices before serving."
        ]
      },
      {
        emoji: "🥙", name: "Turkey & Hummus Bowl", style: "Middle Eastern", time: 10, cal: 380, servings: 2,
        ingredients: ["4 oz deli turkey, sliced", "½ cup cooked rice", "4 tbsp hummus", "½ bell pepper, sliced", "½ cucumber, diced", "Red onion — ¼, thinly sliced", "Lemon juice — 1 tsp"],
        leftovers: ["None — all turkey used up.", "Remaining rice"],
        instructions: [
          "Spread hummus in a bowl as a base.",
          "Arrange turkey slices, bell pepper, cucumber, and red onion on top.",
          "Squeeze lemon juice over everything; serve."
        ]
      }
    ],
    usage: [
      { item: "Turkey (16 oz)", desc: "4 oz × 4 recipes = 16 oz used ✓" },
      { item: "Avocado (1)", desc: "used in the wrap" },
      { item: "Romaine / greens", desc: "1 cup wrap + 1 cup salad = used up" },
      { item: "Cucumber", desc: "½ in salad, ½ in bowl" },
      { item: "Bell pepper", desc: "½ in quesadilla, ½ in bowl" },
      { item: "Red onion", desc: "½ in salad, ¼ in bowl (buy 1 small, ¼ leftover)" },
      { item: "Hummus (6 oz)", desc: "3 tbsp (~1.5 oz) in wrap, 4 tbsp (~2 oz) in bowl = ~3.5 oz used, ~2.5 oz left" },
      { item: "Lemon", desc: "used in salad and bowl" }
    ],
    scaling: {
      low: 1.75,
      high: 2.90,
      tips: [
        "Deli turkey: warehouse clubs (Costco, Sam's) have it at $2.80/lb vs $3.50+ retail.",
        "Avocado: buy 1.5–2 per trip; freeze the second if you don't use it right away.",
        "This plan is quick — no actual cooking required for most recipes."
      ]
    },
    bestFor: "Quick, portable wraps"
  },

  "chickpea-power-bowl": {
    slug: "chickpea-power-bowl",
    title: "Chickpea Power Bowl",
    emoji: "🥗",
    protein: "Chickpeas",
    styles: ["Mediterranean", "Middle Eastern", "Indian", "American"],
    recipeCount: 4,
    maxMinutes: 30,
    estTotalLow: 11.35,
    estTotalHigh: 20.00,
    overview: "Vegetarian, high fiber. Four different meals with chickpeas as the protein base: a bowl, a flatbread, a curry, and a salad. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, garlic, cumin, smoked paprika, chili powder, dried oregano, red pepper flakes, curry powder, garam masala.",
    color: "#10b981",
    shopping: {
      produce: ["1 red onion", "1 head romaine or mixed greens", "1 cucumber", "2 bell peppers (mixed colors)", "1 bunch scallions"],
      protein: ["2 cans chickpeas (15 oz each)"],
      pantry: ["Rice (1 lb bag)", "Flatbread or pita — 1 pack", "Tahini — 1 jar", "Lemons — 2"],
      dairy: ["Feta cheese (optional) — 4 oz"]
    },
    priceItems: [
      { item: "Chickpeas (2 cans)", qty: "2", low: 1.60, high: 3.00 },
      { item: "Red onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Romaine / greens", qty: "1 head", low: 1.00, high: 2.00 },
      { item: "Cucumber", qty: "1", low: 0.50, high: 1.00 },
      { item: "Bell peppers (2)", qty: "2", low: 2.00, high: 3.00 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Rice (1 lb)", qty: "1 bag", low: 1.00, high: 2.00 },
      { item: "Flatbread / pita", qty: "1 pack", low: 1.50, high: 2.50 },
      { item: "Tahini (small jar)", qty: "1", low: 2.00, high: 3.50 },
      { item: "Lemons", qty: "2", low: 0.50, high: 1.00 }
    ],
    recipes: [
      {
        emoji: "🥗", name: "Mediterranean Chickpea Bowl", style: "Mediterranean", time: 15, cal: 520, servings: 2,
        ingredients: ["1 can chickpeas, drained", "1 cup romaine, chopped", "½ cucumber, diced", "¼ red onion, thinly sliced", "2 tbsp tahini", "1 lemon, juiced", "1 tbsp olive oil", "Salt, pepper"],
        leftovers: ["1 can chickpeas", "Half the cucumber, red onion, scallions", "1 bell pepper", "2 lemons"],
        instructions: [
          "Toss chickpeas with olive oil, salt, and pepper; pan-sear 3–4 minutes until lightly crisp.",
          "Build bowls with romaine, cucumber, onion, and warm chickpeas.",
          "Mix tahini with lemon juice and a splash of water to thin; drizzle over top."
        ]
      },
      {
        emoji: "🫓", name: "Spiced Chickpea Flatbread", style: "Middle Eastern", time: 20, cal: 400, servings: 2,
        ingredients: ["1 can chickpeas, drained and rinsed", "2 flatbreads or pita breads", "½ red onion, diced", "1 tsp cumin", "Smoked paprika — ¼ tsp", "Olive oil — 1 tbsp"],
        leftovers: ["½ can chickpeas", "Half the cucumber, red onion"],
        instructions: [
          "Mash chickpeas with cumin, paprika, salt, and pepper in a bowl.",
          "Spread the mash onto flatbreads; top with diced onion.",
          "Brush with olive oil and toast in a hot pan or oven 5–7 minutes until crisp."
        ]
      },
      {
        emoji: "🍛", name: "Chickpea & Pepper Curry", style: "Indian", time: 25, cal: 380, servings: 2,
        ingredients: ["1 can chickpeas, drained", "1 bell pepper, diced", "½ red onion, diced", "Curry powder — 1 tsp", "Cooked rice — 2 cups", "Olive oil — 1 tbsp"],
        leftovers: ["1 lemon", "Scallions"],
        instructions: [
          "Sauté onion and bell pepper in olive oil until soft (5 min).",
          "Add curry powder; stir 1 minute until fragrant.",
          "Stir in chickpeas and a splash of water; simmer 5–7 minutes.",
          "Serve over cooked rice."
        ]
      },
      {
        emoji: "🥒", name: "Crunchy Chickpea Salad", style: "American", time: 5, cal: 250, servings: 2,
        ingredients: ["½ can chickpeas, drained", "½ cucumber, diced", "Scallions — 2, sliced", "Lemon juice — 1 tbsp", "Olive oil — 1 tsp"],
        leftovers: ["None — all produce used up."],
        instructions: [
          "Toss chickpeas, cucumber, and scallions in a bowl.",
          "Drizzle with lemon juice and olive oil; season with salt and pepper."
        ]
      }
    ],
    usage: [
      { item: "Chickpeas (2 cans)", desc: "1 can in the bowl, 1 can in the flatbread + curry split" },
      { item: "Red onion", desc: "half in the bowl, half in the flatbread" },
      { item: "Romaine / greens", desc: "all in the bowl" },
      { item: "Cucumber", desc: "half in the bowl, half in the salad" },
      { item: "Bell peppers (2)", desc: "one in the curry, one in the flatbread" },
      { item: "Scallions", desc: "all in the salad" },
      { item: "Rice", desc: "all in the curry" },
      { item: "Tahini + lemon", desc: "used in the bowl dressing" }
    ],
    scaling: {
      low: 1.60,
      high: 2.40,
      tips: [
        "Canned chickpeas: ~$0.60/can at warehouse vs $1.00 retail.",
        "Buy a large tub of tahini — it lasts months and gets used across multiple plans.",
        "One of the cheapest vegetarian plans available."
      ]
    },
    bestFor: "Vegetarian, high fiber"
  },

  "salmon-veggies": {
    slug: "salmon-veggies",
    title: "Salmon & Veggies",
    emoji: "🐟",
    protein: "Salmon fillets",
    styles: ["Asian", "Mediterranean", "Thai", "American"],
    recipeCount: 4,
    maxMinutes: 30,
    estTotalLow: 17.95,
    estTotalHigh: 28.65,
    overview: "Omega-3 rich. Four different meals with salmon as the protein base: a teriyaki bowl, a Mediterranean bake, a Thai stir-fry, and a simple grilled fillet. Cook for two (leftover). Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, garlic, cumin, smoked paprika, chili powder, dried oregano, red pepper flakes, curry powder, garam masala.",
    color: "#3b82f6",
    shopping: {
      produce: ["1 bunch broccoli (or 1 large head)", "1 bell pepper (any color)", "1 small onion", "2 cloves garlic", "1 lime", "Fresh ginger — 1 inch piece"],
      protein: ["Salmon fillets — 2 (6 oz each)"],
      pantry: ["Rice — 1 lb bag", "Lemon — 1 (for the Mediterranean bake)"],
      dairy: ["Feta cheese (optional) — 2 oz"]
    },
    priceItems: [
      { item: "Salmon fillets (2, 6 oz each)", qty: "2", low: 13.00, high: 20.00 },
      { item: "Broccoli", qty: "1 bunch", low: 1.50, high: 2.50 },
      { item: "Bell pepper", qty: "1", low: 1.00, high: 1.50 },
      { item: "Onion", qty: "1", low: 0.50, high: 0.75 },
      { item: "Garlic", qty: "2 cloves", low: 0.20, high: 0.40 },
      { item: "Lime, ginger", qty: "1 each", low: 0.50, high: 1.00 },
      { item: "Rice (1 lb)", qty: "1 bag", low: 1.00, high: 2.00 },
      { item: "Lemon", qty: "1", low: 0.25, high: 0.50 }
    ],
    recipes: [
      {
        emoji: "🍚", name: "Salmon Teriyaki Bowl", style: "Asian", time: 20, cal: 650, servings: 2,
        ingredients: ["1 salmon fillet (6 oz)", "Broccoli florets — 1 cup", "Soy sauce — 2 tbsp", "Sesame oil — 1 tsp", "Ginger, minced — 1 tsp", "Garlic, minced — 1 clove", "Cooked rice — 1 cup"],
        leftovers: ["1 salmon fillet", "Half the broccoli, bell pepper, onion", "1 clove garlic", "1 lime", "1 inch ginger"],
        instructions: [
          "Sear salmon skin-side down in a hot pan with sesame oil 4–5 minutes.",
          "Flip; add soy sauce, ginger, garlic to the pan and simmer 2–3 minutes.",
          "Steam broccoli until tender-crisp (3–4 min).",
          "Serve salmon over rice with broccoli on the side."
        ]
      },
      {
        emoji: "🫒", name: "Mediterranean Salmon Bake", style: "Mediterranean", time: 20, cal: 580, servings: 2,
        ingredients: ["1 salmon fillet (6 oz)", "Bell pepper, diced", "Onion, diced", "Lemon juice — 1 tbsp", "Olive oil — 1 tbsp", "Feta cheese (optional) — 2 oz"],
        leftovers: ["None — all salmon used up."],
        instructions: [
          "Toss pepper and onion with olive oil, salt, and pepper.",
          "Place salmon on a baking sheet; surround with veggies.",
          "Squeeze lemon over salmon; bake at 400°F for 12–15 minutes.",
          "Crumble feta over top if using."
        ]
      },
      {
        emoji: "🥢", name: "Thai-Style Salmon Stir-Fry", style: "Thai / Asian", time: 15, cal: 520, servings: 2,
        ingredients: ["1 salmon fillet (6 oz), cut into chunks", "Bell pepper, sliced", "Onion, sliced", "Soy sauce — 1 tbsp", "Lime juice — 1 tsp", "Sesame oil — 1 tsp"],
        leftovers: ["1 lime", "Remaining broccoli, bell pepper, onion"],
        instructions: [
          "Heat sesame oil in a wok or pan; stir-fry pepper and onion 3–4 minutes.",
          "Add salmon chunks; cook 3–4 minutes until just opaque.",
          "Deglaze with soy sauce and lime juice; toss to coat."
        ]
      },
      {
        emoji: "🍳", name: "Simple Grilled Salmon Fillet", style: "American", time: 10, cal: 480, servings: 2,
        ingredients: ["1 salmon fillet (6 oz)", "Lime juice — 1 tsp", "Salt, pepper", "Olive oil — 1 tsp"],
        leftovers: ["None — everything used up."],
        instructions: [
          "Pat salmon dry; brush with olive oil and season with salt and pepper.",
          "Grill or pan-sear 4–5 minutes per side until flaky.",
          "Squeeze lime over the top before serving."
        ]
      }
    ],
    usage: [
      { item: "Salmon (2 fillets, 6 oz each)", desc: "one per recipe — all used up ✓" },
      { item: "Broccoli", desc: "used in the teriyaki bowl; remainder available for other uses" },
      { item: "Bell pepper", desc: "half in the Mediterranean bake, half in the Thai stir-fry" },
      { item: "Onion", desc: "half in the Mediterranean bake, half in the Thai stir-fry" },
      { item: "Garlic + ginger + lime", desc: "used in the teriyaki bowl and Thai stir-fry" },
      { item: "Rice", desc: "all in the teriyaki bowl" },
      { item: "Lemon", desc: "used in the Mediterranean bake" }
    ],
    scaling: {
      low: 1.65,
      high: 2.65,
      tips: [
        "Frozen salmon fillets: often just as fresh, 20–30% cheaper. Look for wild-caught at Costco/Sam's.",
        "Rice: 5–7 lb bag (~$3–4) lasts months.",
        "Salmon is the most expensive protein here but provides excellent omega-3s."
      ]
    },
    bestFor: "Omega-3 rich, quick cook"
  },

  "sweet-potato-beans": {
    slug: "sweet-potato-beans",
    title: "Sweet Potato & Beans",
    emoji: "🍠",
    protein: "Sweet potato, beans, lentils",
    styles: ["Mexican", "Indian", "Mediterranean", "Mexican-American"],
    recipeCount: 4,
    maxMinutes: 30,
    estTotalLow: 16.65,
    estTotalHigh: 28.50,
    overview: "Highest-fiber plan. Four different meals with sweet potato and three legumes (black beans, chickpeas, red lentils) prepared in Mexican, Indian, Mediterranean, and chili styles. Cook for two (leftover). Sweet potatoes are the starch — no rice needed. Pantry staples assumed on hand: oil, salt, pepper, and all spices.",
    color: "#ea580c",
    shopping: {
      produce: ["12 medium sweet potatoes (≈ 6 lb — a big bag works too)", "2 bell peppers (mixed colors)", "1 large onion", "1 head garlic", "1 bunch scallions (green onions)", "2 limes"],
      protein: [],
      pantry: ["2 cans (15 oz) black beans", "1 can (15 oz) chickpeas", "1 lb dry red lentils", "1 can (14.5 oz) diced tomatoes"],
      dairy: ["Shredded cheese (8 oz) — optional, used as a topping in 3 of the 4 recipes"]
    },
    priceItems: [
      { item: "Sweet potatoes", qty: "12 medium (~6 lb)", low: 6.00, high: 10.00 },
      { item: "Bell peppers (2 mixed)", qty: "2", low: 2.00, high: 3.00 },
      { item: "Large onion", qty: "1", low: 0.75, high: 1.25 },
      { item: "Garlic head", qty: "1", low: 0.50, high: 0.75 },
      { item: "Scallions", qty: "1 bunch", low: 0.50, high: 0.75 },
      { item: "Limes", qty: "2", low: 0.50, high: 1.00 },
      { item: "Black beans", qty: "2 cans (15 oz)", low: 1.60, high: 3.00 },
      { item: "Chickpeas", qty: "1 can (15 oz)", low: 0.80, high: 1.50 },
      { item: "Red lentils (dry)", qty: "1 lb", low: 1.00, high: 2.00 },
      { item: "Diced tomatoes", qty: "1 can (14.5 oz)", low: 1.00, high: 1.75 },
      { item: "Shredded cheese (optional)", qty: "8 oz", low: 2.00, high: 3.50 }
    ],
    recipes: [
      {
        emoji: "🌮", name: "Sweet Potato & Black Bean Bowls", style: "Mexican", time: 30, cal: 510, servings: 2,
        ingredients: ["3 medium sweet potatoes, cut into ½\" cubes", "½ can black beans (15 oz), drained and rinsed", "½ bell pepper, diced", "¼ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "1.5 tbsp olive oil", "2 oz shredded cheese (optional)", "½ lime", "Scallions, chopped (garnish)", "Salt"],
        leftovers: ["9 sweet potatoes", "1½ cans black beans", "1½ bell peppers", "¾ onion", "Remaining rice, 1 lime"],
        instructions: [
          "Cut the sweet potatoes into even ½\" cubes — the size is what keeps this under 30 min.",
          "Heat 1 tbsp oil in a large skillet over medium-high heat. Add the sweet potatoes in a single layer; cook 10–12 min, turning once, until tender and lightly caramelized on the edges.",
          "Add onion and bell pepper; cook 3 min until softened.",
          "Add garlic, cumin, and smoked paprika; cook 30 seconds until fragrant.",
          "Stir in the black beans; heat through 2 min. Season with salt.",
          "Serve in bowls with cheese (if using), scallions, and a squeeze of lime."
        ]
      },
      {
        emoji: "🍛", name: "Sweet Potato & Red Lentil Curry", style: "Indian", time: 30, cal: 500, servings: 2,
        ingredients: ["3 medium sweet potatoes, cut into ½\" cubes", "½ cup red lentils (from the 1 lb bag), rinsed", "½ onion, diced", "2 cloves garlic, minced", "½ can diced tomatoes (14.5 oz)", "1 tbsp curry powder", "1 tsp cumin", "1.5 tbsp olive oil", "2 cups water (or broth)", "Scallions, sliced (garnish)", "Salt"],
        leftovers: ["6 sweet potatoes", "2 cans black beans", "1 can chickpeas", "~¾ lb red lentils (plenty for a future dal)", "½ can diced tomatoes", "1½ bell peppers", "½ onion, ~8 cloves garlic", "~4 oz cheese, 1 lime"],
        instructions: [
          "Rinse the lentils. Heat oil in a saucepan over medium heat.",
          "Sauté the onion 3 min until soft. Add garlic; cook 30 seconds.",
          "Add curry powder and cumin; cook 30 seconds until fragrant (don't let it burn).",
          "Add the lentils, diced tomatoes, sweet potatoes, and water. Bring to a boil, then simmer 15–18 min until the lentils are tender and the liquid is thick.",
          "Season with salt. The curry should be spoon-thick.",
          "Serve with scallions. Great over rice if you have some, but the lentils are the starch here."
        ]
      },
      {
        emoji: "🫕", name: "Sweet Potato & Chickpea Skillet", style: "Mediterranean", time: 30, cal: 620, servings: 2,
        ingredients: ["3 medium sweet potatoes, cut into ½\" cubes", "1 can chickpeas (15 oz), drained and rinsed", "1 bell pepper, diced", "¼ onion, diced", "1 clove garlic, minced", "1 tsp smoked paprika", "1 tsp dried oregano", "1.5 tbsp olive oil", "2 oz shredded cheese (optional)", "½ lime", "Salt, pepper"],
        leftovers: ["3 sweet potatoes", "½ bell pepper", "2 cans black beans", "½ can diced tomatoes", "½ onion", "~7 cloves garlic", "~2 oz cheese", "1 lime, remaining scallions"],
        instructions: [
          "Heat 1 tbsp oil in a large skillet over medium-high heat. Add the sweet potatoes in a single layer; cook 10–12 min, turning, until tender and golden.",
          "Add onion and bell pepper; cook 3 min.",
          "Add garlic, smoked paprika, and oregano; cook 30 seconds.",
          "Stir in the chickpeas; heat through 2 min. Season with salt and pepper.",
          "Top with cheese (if using) and a squeeze of lime."
        ]
      },
      {
        emoji: "🥘", name: "Sweet Potato & Black Bean Chili", style: "Mexican-American", time: 30, cal: 520, servings: 2,
        ingredients: ["3 medium sweet potatoes, cut into ½\" cubes", "½ can black beans (15 oz), drained and rinsed", "½ can diced tomatoes (14.5 oz)", "½ onion, diced", "2 cloves garlic, minced", "1 tbsp chili powder", "1 tsp cumin", "1.5 tbsp olive oil", "2 oz shredded cheese (optional, for topping)", "Scallions, sliced (garnish)", "Salt"],
        leftovers: ["0 sweet potatoes ✓", "1 can black beans (for a future meal)", "0 tomatoes ✓", "Onion used up ✓", "~5 cloves garlic", "~2 oz cheese", "1 lime, remaining scallions"],
        instructions: [
          "Heat 1.5 tbsp oil in a saucepan over medium heat. Sauté the onion 3 min until soft.",
          "Add garlic, chili powder, and cumin; cook 30 seconds until fragrant.",
          "Add the diced tomatoes, sweet potatoes, and a splash of water (about ¼ cup). Simmer 8–10 min until the sweet potatoes are tender.",
          "Stir in the black beans; heat through 2 min. Season with salt.",
          "Serve with cheese (if using) and scallions. Squeeze of lime if you want it brighter."
        ]
      }
    ],
    usage: [
      { item: "Sweet potatoes (12)", desc: "3 × 4 recipes = 12 used ✓" },
      { item: "Black beans (2 cans)", desc: "½ can (bowls) + ½ can (chili) = 1 can used, 1 can leftover — save it or make a quick salsa" },
      { item: "Chickpeas (1 can)", desc: "full can in the Mediterranean skillet ✓" },
      { item: "Red lentils (1 lb)", desc: "½ cup in the curry, ~¾ lb leftover — enough for 2–3 more Indian-style meals (see the Lentil & Grain plan)" },
      { item: "Diced tomatoes (1 can)", desc: "½ can (curry) + ½ can (chili) = 1 can used ✓" },
      { item: "Bell peppers (2)", desc: "½ + 1 + ½ = 2 used ✓" },
      { item: "Onion (1 large)", desc: "¼ + ½ + ¼ + ½ = 1.5 → buy 1 large, you'll use it all" },
      { item: "Garlic (1 head)", desc: "2 + 2 + 1 + 2 = 7 cloves → 1 head has ~12 cloves, ~5 left for future meals ✓" },
      { item: "Cheese (8 oz, optional)", desc: "2 + 2 + 2 = 6 oz used, 2 oz leftover ✓" }
    ],
    scaling: {
      low: 2.10,
      high: 3.60,
      tips: [
        "Sweet potatoes: bagged at warehouse stores, ~$0.50–0.80/lb. Loose at $0.75–$1.25 each.",
        "Skip the cheese (optional) to save $2–3.50.",
        "This is the highest-fiber plan — sweet potatoes + beans + lentils = complex carbs galore."
      ]
    },
    bestFor: "Highest fiber, all-starch base"
  }
};
