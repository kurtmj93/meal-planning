import type { MultiweekPlan } from '../types/multiweek';

export const multiweekPlans: Record<string, MultiweekPlan> = {
  "costco-chicken-sausage": {
    slug: "costco-chicken-sausage",
    title: "Costco Chicken & Sausage — 3 Weeks",
    emoji: "📦",
    proteins: "Chicken thighs + Italian sausage",
    weeks: 3,
    durationDays: 21,
    recipeCount: 10,
    plannedMeals: 16,
    flexDays: 5,
    maxMinutes: 30,
    estTotalLow: 71.10,
    estTotalHigh: 104.50,
    overview: "One bulk trip. Three weeks of dinners. A Costco chicken-thighs tray (8.5 lb, sold by the pound in tear-off pouches) plus a 3.5 lb box of Kirkland Italian sausage covers 16 planned fresh dinners across 21 days (9 chicken, 7 sausage) plus 5 flex days. Every recipe serves 2 — cook tonight, eat the leftover half tomorrow at lunch or as a backup dinner. You finish the plan with ~4 lbs of chicken frozen in pouches, which is a head start on week 4. Pantry staples assumed on hand: oil, salt, pepper, soy sauce, sesame oil, and all spices.",
    bulkNote: "One Costco trip buys the protein: ~8.5 lb chicken tray (~$18–24, sold by the pound so buy exactly 8.5 lb), 3.5 lb Kirkland sausage (~$10.89), 24-count eggs, and a 5 lb rice bag. Then a ~10-minute Aldi run for produce. No beef in this plan — Costco's 88/12 ground beef ($6.80/lb) costs more than Aldi's 80/20 ($5.29/lb), so a beef week is a separate plan.",
    color: "#7c3aed",
    shopping: {
      produce: [
        "8 bell peppers (mixed colors)",
        "6 onions",
        "2 heads garlic",
        "3 medium potatoes",
        "2 bunches scallions",
        "1 bunch cilantro + 1 bunch parsley",
        "8 limes"
      ],
      protein: [
        "Chicken thighs, boneless skinless — 8.5 lb tray (Costco, sold by the pound; ~$18–24)",
        "Kirkland Italian sausage (mild or hot) — 3.5 lb (~$10.89)",
        "Eggs — 24-count (Costco, ~$5–7)"
      ],
      pantry: [
        "Rice — 5 lb bag (~$3.50–4.50, lasts months)",
        "Flour tortillas — 2 packs (8–10 count)",
        "Diced tomatoes — 2 cans (14.5 oz)",
        "Black beans — 2 cans (15 oz)",
        "Frozen corn — 1 bag (16 oz)",
        "Frozen mixed vegetables — 1 bag (16 oz)",
        "Kalamata olives — 1 jar (12 count)"
      ],
      dairy: [
        "Shredded cheese — 2 × 8 oz blocks (optionally a 3rd block if you're a heavy cheezer)"
      ]
    },
    priceItems: [
      { item: "Boneless skinless chicken thighs (Costco, by the pound)", qty: "8.5 lb", low: 18.00, high: 24.00 },
      { item: "Kirkland Italian sausage", qty: "3.5 lb", low: 10.00, high: 12.00 },
      { item: "Eggs", qty: "24-count", low: 5.00, high: 7.00 },
      { item: "Rice", qty: "5 lb bag", low: 3.50, high: 4.50 },
      { item: "Bell peppers (mixed)", qty: "8", low: 8.00, high: 12.00 },
      { item: "Onions", qty: "6", low: 3.00, high: 4.50 },
      { item: "Garlic", qty: "2 heads", low: 1.00, high: 1.50 },
      { item: "Scallions", qty: "2 bunches", low: 1.00, high: 1.50 },
      { item: "Fresh herbs (cilantro + parsley)", qty: "2 bunches", low: 1.50, high: 2.50 },
      { item: "Limes", qty: "8", low: 2.00, high: 4.00 },
      { item: "Flour tortillas", qty: "2 packs (8–10)", low: 3.00, high: 5.00 },
      { item: "Shredded cheese", qty: "2 × 8 oz", low: 4.00, high: 7.00 },
      { item: "Diced tomatoes", qty: "2 cans (14.5 oz)", low: 2.00, high: 3.50 },
      { item: "Black beans", qty: "2 cans (15 oz)", low: 1.60, high: 3.00 },
      { item: "Frozen corn", qty: "1 bag (16 oz)", low: 1.50, high: 2.50 },
      { item: "Potatoes", qty: "3 medium", low: 2.00, high: 3.50 },
      { item: "Frozen mixed vegetables", qty: "1 bag (16 oz)", low: 1.50, high: 2.50 },
      { item: "Kalamata olives", qty: "1 jar (12 count)", low: 2.50, high: 4.00 }
    ],
    menu: [
      { day: 1, kind: 'recipe', recipe: 'Mexican-Style Chicken & Rice Bowls' },
      { day: 2, kind: 'recipe', recipe: 'Sausage Bolognese over Rice' },
      { day: 3, kind: 'recipe', recipe: 'Asian Chicken & Pepper Stir-Fry' },
      { day: 4, kind: 'flex', note: 'Free choice' },
      { day: 5, kind: 'recipe', recipe: 'Sausage Fried Rice' },
      { day: 6, kind: 'recipe', recipe: 'Mexican-Style Chicken & Rice Bowls' },
      { day: 7, kind: 'recipe', recipe: 'Sausage & Black Bean Tacos' },
      { day: 8, kind: 'recipe', recipe: 'Asian Chicken & Pepper Stir-Fry' },
      { day: 9, kind: 'flex', note: 'Free choice' },
      { day: 10, kind: 'recipe', recipe: 'Sausage, Egg & Potato Hash' },
      { day: 11, kind: 'recipe', recipe: 'Mediterranean Pepper Chicken Skillet' },
      { day: 12, kind: 'recipe', recipe: 'Sausage Bolognese over Rice' },
      { day: 13, kind: 'recipe', recipe: 'Chicken & Pepper Quesadillas' },
      { day: 14, kind: 'flex', note: 'Free choice' },
      { day: 15, kind: 'recipe', recipe: 'Sausage Fried Rice' },
      { day: 16, kind: 'recipe', recipe: 'Mediterranean Pepper Chicken Skillet' },
      { day: 17, kind: 'recipe', recipe: 'Sausage & Black Bean Tacos' },
      { day: 18, kind: 'recipe', recipe: 'Thai-Style Chili Chicken Rice' },
      { day: 19, kind: 'flex', note: 'Free choice' },
      { day: 20, kind: 'recipe', recipe: 'Chicken & Egg Breakfast-for-Dinner Scramble' },
      { day: 21, kind: 'flex', note: 'Free choice — or pull a frozen chicken pouch' }
    ],
    recipes: [
      {
        emoji: "🌮", name: "Mexican-Style Chicken & Rice Bowls", style: "Mexican", time: 25, cal: 620, servings: 2,
        ingredients: ["8 oz boneless skinless chicken thighs, diced (1–2 pouches)", "1 cup uncooked rice (yields ~3 cups cooked)", "½ bell pepper, sliced", "½ onion, diced", "2 cloves garlic, minced", "1 tsp cumin", "1 tsp smoked paprika", "½ can (15 oz) black beans, drained", "1 cup frozen corn, thawed", "Shredded cheese, for topping (optional)", "Cilantro + lime wedge"],
        leftovers: ["~4 lbs of chicken still in the tray (freeze in pouches)", "Remaining peppers, onion, garlic", "Remaining rice, beans, corn, herbs, limes"],
        instructions: [
          "Cook 1 cup rice per package directions (yields ~3 cups cooked).",
          "Heat oil in a skillet over medium-high. Brown chicken, breaking into pieces, 6–8 min.",
          "Add onion and bell pepper; cook 3 min. Add garlic, cumin, paprika; 30 seconds.",
          "Stir in beans and corn; heat through 2 min.",
          "Serve over rice. Top with cheese (if you want), cilantro, and a squeeze of lime."
        ]
      },
      {
        emoji: "🥡", name: "Asian Chicken & Pepper Stir-Fry", style: "Asian", time: 20, cal: 560, servings: 2,
        ingredients: ["8 oz boneless skinless chicken thighs, sliced (2 pouches)", "1 cup uncooked rice", "1 bell pepper, sliced", "½ onion, sliced", "1 cup frozen mixed vegetables", "3 cloves garlic, minced", "3 tbsp soy sauce", "1 tsp sesame oil", "2 scallions, sliced", "Red pepper flakes, to taste"],
        leftovers: ["~4 lbs of chicken still in the tray (freeze in pouches)", "Remaining peppers, onion", "Remaining scallions, rice, frozen veg"],
        instructions: [
          "Cook rice per package directions.",
          "Slice chicken and vegetables.",
          "Heat sesame oil in a wok or large skillet over high heat. Stir-fry chicken 5–6 min until done.",
          "Add pepper, onion, and frozen veg; stir-fry 2–3 min.",
          "Add garlic for 30 seconds; drizzle soy and red pepper flakes; toss to coat.",
          "Serve over rice, topped with scallions."
        ]
      },
      {
        emoji: "🫕", name: "Mediterranean Pepper Chicken Skillet", style: "Mediterranean", time: 25, cal: 550, servings: 2,
        ingredients: ["8 oz boneless skinless chicken thighs, diced (1–2 pouches)", "1 cup uncooked rice", "½ bell pepper, diced", "½ onion, diced", "2 cloves garlic, minced", "¼ can (14.5 oz) diced tomatoes", "6 Kalamata olives, halved", "1 tsp dried oregano", "1 tsp smoked paprika", "Shredded cheese, for topping (optional)", "1 lime, for garnish"],
        leftovers: ["~4 lbs of chicken still in the tray (freeze in pouches)", "Remaining olives, peppers, onion, garlic", "Remaining rice, herbs, limes"],
        instructions: [
          "Cook rice per package directions.",
          "Season chicken with oregano, paprika, salt, and pepper. Brown in oil, 6–7 min.",
          "Add onion, pepper, and garlic; cook 3 min.",
          "Stir in diced tomatoes and olives; simmer 2 min.",
          "Serve over rice. Top with cheese and a squeeze of lime."
        ]
      },
      {
        emoji: "🧀", name: "Chicken & Pepper Quesadillas", style: "Quesadilla", time: 15, cal: 500, servings: 2,
        ingredients: ["8 oz boneless skinless chicken thighs, cooked and shredded (2 pouches)", "4 flour tortillas", "4 oz shredded cheese (2 oz per quesadilla)", "½ bell pepper, sliced", "1 tsp cumin", "1 tsp smoked paprika", "1 tbsp olive oil"],
        leftovers: ["~4 lbs of chicken still in the tray (freeze in pouches)", "Remaining tortillas (4–6 left)", "Remaining cheese, peppers"],
        instructions: [
          "Cook chicken in a dry skillet until done, 6–7 min; shred.",
          "Toss sliced pepper with cumin and paprika.",
          "Spread chicken and pepper over half a tortilla; add 2 oz cheese; fold.",
          "Cook in an oiled skillet 3–4 min per side until crisp. Repeat with the second quesadilla."
        ]
      },
      {
        emoji: "🌶️", name: "Thai-Style Chili Chicken Rice", style: "Thai", time: 20, cal: 480, servings: 2,
        ingredients: ["8 oz boneless skinless chicken thighs, sliced (2 pouches)", "1 cup uncooked rice", "½ bell pepper, sliced", "1 cup frozen mixed vegetables", "2 scallions, sliced", "2 cloves garlic, minced", "1 tbsp soy sauce", "2 tbsp water", "Red pepper flakes, to taste (start ½ tsp)", "1 lime, for garnish"],
        leftovers: ["~4 lbs of chicken still in the tray (freeze in pouches)", "Remaining peppers, scallions, rice"],
        instructions: [
          "Cook rice per package directions.",
          "Stir-fry sliced chicken in oil until done, 5–6 min.",
          "Add pepper, garlic, and frozen veg; 2–3 min.",
          "Stir in soy, water, and red pepper flakes; toss 1 min.",
          "Serve over rice, topped with scallions and a squeeze of lime."
        ]
      },
      {
        emoji: "🍳", name: "Chicken & Egg Breakfast-for-Dinner Scramble", style: "Breakfast-for-dinner", time: 15, cal: 410, servings: 2,
        ingredients: ["8 oz boneless skinless chicken thighs, diced (2 pouches)", "4 large eggs", "½ bell pepper, diced", "¼ onion, diced", "1 scallion, sliced", "1 oz shredded cheese (optional)"],
        leftovers: ["~4 lbs of chicken still in the tray (freeze in pouches)", "13 eggs left (refrigerated ~3 weeks)", "Remaining peppers, onion, scallions"],
        instructions: [
          "Sauté diced chicken in oil until done, 6–7 min.",
          "Add onion, pepper, and scallion; cook 2 min.",
          "Whisk eggs with salt and pepper; pour over and scramble low and slow, 2–3 min.",
          "Plate and top with cheese if you want."
        ]
      },
      {
        emoji: "🍝", name: "Sausage Bolognese over Rice", style: "Italian", time: 30, cal: 580, servings: 2,
        ingredients: ["2 Italian sausage links (8 oz), removed", "1 cup uncooked rice", "1 can (14.5 oz) diced tomatoes", "1 onion, diced", "4 cloves garlic, minced", "1 tsp dried oregano", "Red pepper flakes, to taste", "Shredded cheese, for topping (optional)", "Parsley, for garnish"],
        leftovers: ["Remaining garlic, rice, herbs", "Cheese, limes for other days"],
        instructions: [
          "Cook rice per package directions.",
          "Brown sausage in oil, breaking into pieces, 6–8 min.",
          "Add onion; cook 3 min. Add garlic, oregano, red pepper flakes; 30 seconds.",
          "Add diced tomatoes; simmer 10–12 min.",
          "Serve over rice, topped with cheese and parsley."
        ]
      },
      {
        emoji: "🍚", name: "Sausage Fried Rice", style: "Asian", time: 20, cal: 530, servings: 2,
        ingredients: ["2 Italian sausage links (8 oz), crumbled", "1 cup uncooked rice (cook and cool, or use leftover rice)", "2 large eggs", "½ bell pepper, diced", "½ onion, diced", "2 scallions, sliced", "3 tbsp soy sauce", "Red pepper flakes, to taste"],
        leftovers: ["Remaining eggs, scallions, peppers, onion", "Remaining rice"],
        instructions: [
          "Cook rice (or use leftover cooked rice).",
          "Brown crumbled sausage in oil, 5–6 min. Push to one side and scramble the eggs in the same pan.",
          "Add pepper and onion; cook 2 min.",
          "Add rice, soy, and red pepper flakes; toss 3–4 min until hot and lightly crisped.",
          "Top with scallions."
        ]
      },
      {
        emoji: "🌮", name: "Sausage & Black Bean Tacos", style: "Mexican", time: 20, cal: 500, servings: 2,
        ingredients: ["2 Italian sausage links (8 oz), removed", "8 flour tortillas (4 per person)", "½ can (15 oz) black beans, drained", "½ bell pepper, diced", "½ onion, diced", "2 cloves garlic, minced", "1 lime, for garnish", "Shredded cheese, for topping (optional)", "Cilantro, for topping"],
        leftovers: ["Remaining tortillas (4–8 left)", "Remaining beans, peppers, onion, limes, herbs"],
        instructions: [
          "Brown sausage in oil, breaking into pieces, 6–8 min.",
          "Add pepper, onion, and garlic; cook 2 min.",
          "Stir in beans; heat through 2 min.",
          "Warm tortillas; fill with sausage mixture; top with cheese, cilantro, and a squeeze of lime."
        ]
      },
      {
        emoji: "🥔", name: "Sausage, Egg & Potato Hash", style: "Breakfast-for-dinner", time: 25, cal: 420, servings: 2,
        ingredients: ["2 Italian sausage links (8 oz), removed", "3 medium potatoes, cut into ½-inch cubes (~1.5 lb)", "3 large eggs", "½ bell pepper, diced", "½ onion, diced", "1 oz shredded cheese (optional)", "Salt, pepper, olive oil"],
        leftovers: ["Remaining eggs, peppers, onion"],
        instructions: [
          "Boil potato cubes 5–6 min until just tender; drain.",
          "Brown sausage in oil, 6–7 min. Add potatoes, pepper, and onion; cook 4–5 min until golden.",
          "Make two wells in the hash and crack in the eggs; cover and cook 3–4 min until whites set.",
          "Break up the eggs; top with cheese if you want."
        ]
      }
    ],
    usage: [
      { item: "Chicken (8.5 lb tray)", desc: "9 recipe-days × 8 oz = 72 oz (4.5 lbs) used. ~4 lbs (64 oz) left frozen in pouches ≈ 8 more chicken recipe-days for week 4." },
      { item: "Sausage (3.5 lb box)", desc: "7 recipe-days × 8 oz (2 links) = 56 oz = the whole box, used exactly ✓" },
      { item: "Eggs (24-count)", desc: "Scramble 4 + fried rice 4 + hash 3 = 11 used. 13 left — eggs keep ~3 weeks refrigerated, covering flex-day breakfasts." },
      { item: "Bell peppers (8)", desc: "Bowls ½×2, stir-fry 1×2, Mediterranean ½×2, quesadillas ½, Thai ½, scramble ½, fried rice ½×2, tacos ½×2, hash ½ = 8 ✓" },
      { item: "Onions (6)", desc: "Bolognese 1 + stir-fry ½×2 + bowls ½×2 + Mediterranean ½×2 + fried rice ½×2 + tacos ½×2 + hash ½ + Thai ¼ + scramble ¼ = 4.5 → ~1.5 left" },
      { item: "Garlic (2 heads)", desc: "Bolognese ~6 cloves + ~8–10 cloves across the rest → both heads used ✓" },
      { item: "Rice (5 lb bag)", desc: "1 cup uncooked per rice recipe-day × 7 = ~7 cups (~1.75 lb) across three weeks. The bag lasts months." },
      { item: "Tortillas (2 packs)", desc: "Quesadillas 4 + tacos 8 = 12 used, 4–8 leftover" },
      { item: "Cheese (2 × 8 oz)", desc: "Spread as optional topping across ~7 recipe-days over three weeks. Add the 3rd block if you want cheese on everything." },
      { item: "Diced tomatoes (2 cans)", desc: "Bolognese 1 can × 2 uses + Mediterranean ¼ can × 2 = exactly 2 cans ✓" },
      { item: "Black beans (2 cans)", desc: "Bowls ½ can × 2 + tacos ¼ can × 2 = 1.5 cans → ½ can leftover" },
      { item: "Frozen corn (16 oz)", desc: "Bowls 1 cup × 2 = 2 cups → ~2 cups left frozen" },
      { item: "Frozen mixed veg (16 oz)", desc: "Stir-fry 1 cup × 2 + Thai 1 cup = 3 cups → ~1 cup left frozen" },
      { item: "Potatoes (3)", desc: "Hash only (3 medium). Hash is one recipe-day; a 4th potato is optional if you want a second hash on a flex day." },
      { item: "Olives (12-count jar)", desc: "Mediterranean skillet 6 olives × 2 uses = 12 ✓" },
      { item: "Limes (8)", desc: "Bowls 2, tacos 2, Thai 1, Mediterranean 2 = 7 used → 1 leftover" },
      { item: "Scallions (2 bunches)", desc: "Stir-fry 2×2 + fried rice 2×2 + Thai 1 + scramble 1 ≈ 9–10 scallions ✓" },
      { item: "Herbs (2 bunches)", desc: "Cilantro → bowls, tacos, Thai; parsley → Mediterranean, hash, bolognese garnish ✓" }
    ],
    scaling: {
      low: 2.22,
      high: 3.27,
      tips: [
        "Costco chicken is sold by the pound in tear-off pouches — buy exactly 8.5 lb, and the pouches (~6–8 oz each) freeze in the packaging. Pull one pouch per meal, zero portioning work.",
        "You finish with ~4 lbs of frozen chicken ≈ 8 more recipe-days. That's a built-in head start on week 4 (chain another multiweek plan or slot in a single chicken plan).",
        "This plan deliberately skips beef: Costco's 88/12 is ~$6.80/lb vs Aldi's 80/20 at $5.29/lb. A beef week is cheaper as its own plan around the 2.25 lb Aldi box.",
        "Kirkland 3.5 lb sausage (~$3.11/lb) is the cheapest Italian sausage in the area — retail links run $6–7/lb.",
        "Rice: the 5 lb bag (~$3.50–4.50) lasts months across plans. Eggs: the 24-count is ~$25 cheaper per dozen than two Aldi dozens."
      ]
    },
    bestFor: "3 weeks, one bulk trip, two proteins"
  }
};
