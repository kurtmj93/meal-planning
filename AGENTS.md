# Meal Plan Generator Guide

## What the User Wants

The user is a muscular man cooking for one person. He wants **repeatable, quick, inexpensive meal plans** with these constraints:

### Core Requirements
- **Cook for two** per recipe (one serving now, one leftover later)
- **NOT traditional meal prep** — no "cook once, eat all week"
- **3–4 recipes per plan**, each using overlapping ingredients from a shared shopping list
- **Different culinary styles** per recipe — same ingredients, different flavor profiles (e.g., Mexican + Asian + Mediterranean)
- **Quick** — each recipe 30 minutes or less
- **Inexpensive** — budget-conscious, bulk-buying friendly
- **Calorie-aware** — user needs ~2400–2600 cal/day, so each serving is typically 500–800 cal

### What's Assumed on Hand (Pantry Staples)
These are **NOT** on the shopping list or priced:
- Oil (olive or cooking oil)
- Salt, black pepper
- Soy sauce
- Sesame oil (for Asian recipes)
- Spices: cumin, smoked paprika, chili powder, dried oregano, red pepper flakes, curry powder, garam masala

If a recipe needs an ingredient not in this list, it goes on the shopping list.

---

## Plan Structure (Astro Project)

All plan data lives in `src/data/plans.ts`. Each plan object has:

### 1. Header & Overview
- `title`, `emoji`, `protein`, `styles[]`, `recipeCount`, `maxMinutes`
- `overview` — one-paragraph description
- `color` — CSS theme color
- `estTotalLow`, `estTotalHigh` — total estimated price range

### 2. Shopping List
- `shopping.produce[]` — vegetables, herbs, citrus
- `shopping.protein[]` — meat, fish, eggs, legumes
- `shopping.pantry[]` — rice, canned goods, tortillas, pasta
- `shopping.dairy[]` — cheese, etc.

### 3. Estimated Prices
- `priceItems[]` — each with `item`, `qty`, `low`, `high`

### 4. The Recipes (3–4)
Each recipe has:
- `emoji`, `name`, `style`, `time`, `cal` (cal/serving), `servings`
- `ingredients[]` — list
- `leftovers[]` — "What you'll have left"
- `instructions[]` — numbered steps

### 5. Ingredient Usage Tracker
- `usage[]` — bulleted list showing how each shopping item is consumed

### 6. Scaling Info
- `scaling.low`, `scaling.high` — effective cost per actual meal
- `scaling.tips[]` — bulk buying tips

### 7. Best For
- `bestFor` — short tagline for the comparison table

---

## Calorie Estimation Guidelines

Use USDA FoodData Central values as reference. Approximate values:

| Ingredient | Calories |
|---|---|
| Chicken thighs (boneless, skinless) | ~209 cal/100g raw → ~230 cal/100g cooked |
| Ground beef (80/20) | ~254 cal/100g cooked |
| White rice (cooked) | ~206 cal/cup |
| Black beans (canned, drained) | ~127 cal/½ cup |
| Chickpeas (canned, drained) | ~210 cal/cup |
| Red lentils (cooked) | ~230 cal/cup |
| Tuna (canned in water, 5 oz can) | ~120 cal per can |
| Eggs (large) | ~72 cal each |
| Bell pepper (medium) | ~37 cal |
| Onion (medium) | ~44 cal |
| Garlic (1 clove) | ~4 cal |
| Flour tortilla (8") | ~80 cal each |
| Shredded cheese (Mexican blend) | ~110 cal/oz |
| Olive oil | ~120 cal/tbsp |
| Black beans (½ can from 15 oz) | ~190 cal |
| Diced tomatoes (14.5 oz can) | ~140 cal |
| Frozen mixed vegetables (1 cup) | ~60–80 cal |
| Sweet potato (medium) | ~103 cal/100g |

**Per serving** = recipe total ÷ 2. Round to nearest 10.

---

## Ingredient Overlap Rules

When designing a plan:

1. **Pick one protein base** — chicken, ground beef, tuna, eggs, beans, lentils, pasta
2. **Pick a starch base** — rice, pasta, tortillas, potatoes
3. **Pick 3–4 culinary styles** — Mexican, Asian, Italian, Mediterranean, Indian, Middle Eastern, Breakfast-for-dinner
4. **Each recipe uses the same core ingredients** but different spices/sauces to create different flavors
5. **Track leftovers** — the "What you'll have left" section is critical for planning
6. **Minimize unique ingredients** — every ingredient should appear in at least 2 recipes

### Style Examples by Protein

**Chicken thighs:** Mexican bowls, Asian stir-fry, Mediterranean skillet, quesadillas
**Ground beef:** Beef tacos, beef fried rice, bolognese over rice
**Tuna:** Asian tuna bowl, Mexican tuna bowl, tuna fried rice
**Lentils:** Indian dal, Middle Eastern stew, Mexican bowls
**Beans:** Mexican bowls, Indian dal, Mediterranean baked, quesadillas
**Pasta:** Italian tomato-bean, Mediterranean chickpea pasta salad, Mexican pasta frittata
**Eggs:** Veggie scramble, frittata, shakshuka-style, egg fried rice
**Tofu:** Crispy stir-fry, seasoned tacos, curry bowl, breakfast scramble
**Ground pork:** Tacos, stir-fry, bolognese, Mediterranean skillet
**Deli turkey:** Wrap, salad, quesadilla, hummus bowl
**Chickpeas:** Power bowl, flatbread, curry, crunchy salad
**Salmon:** Teriyaki bowl, Mediterranean bake, Thai stir-fry, simple grilled

---

## Price Estimation Guidelines

Use approximate US averages (mid-2026 BLS/USDA data):

| Item | Price Range |
|---|---|
| Chicken thighs (boneless, per lb) | $2.50–$3.50 |
| Ground beef (per lb) | $3.50–$5.50 |
| Ground pork (per lb) | $3.00–$4.50 |
| Bell peppers (each) | $1.00–$1.50 |
| Onion (each) | $0.50–$0.75 |
| Garlic (per head) | $0.50–$0.75 |
| Eggs (dozen) | $2.00–$3.50 |
| Rice (1 lb bag) | $1.00–$2.00 |
| Canned beans (15 oz) | $0.80–$1.50 |
| Canned tomatoes (14.5 oz) | $1.00–$1.75 |
| Tortillas (8–10 pack) | $1.50–$2.50 |
| Cheese (8 oz) | $2.00–$3.50 |
| Frozen mixed vegetables (16 oz) | $1.50–$2.50 |
| Tuna (5 oz can) | $0.75–$1.25 |
| Red lentils (1 lb dry) | $1.00–$2.00 |
| Sweet potato (each) | $0.75–$1.25 |
| Scallions (bunch) | $0.50–$0.75 |
| Fresh herbs (bunch) | $0.75–$1.25 |
| Limes (each) | $0.25–$0.50 |
| Firm tofu (14 oz block) | $1.25–$1.75 |
| Deli turkey (per lb) | $3.50–$5.50 |
| Salmon fillets (6 oz) | $6.50–$10.00 |
| Ground pork (per lb) | $3.00–$4.50 |

**Bulk buying** typically saves 20–40% on protein and 10–30% on pantry items.

---

## Project Structure

```
~/Dev/meal-plan-astro/
├── src/
│   ├── data/plans.ts          ← Single source of truth — add new plans here
│   ├── types/plans.ts         ← TypeScript interfaces
│   ├── layouts/Base.astro     ← Shared HTML shell
│   ├── styles/global.css      ← All shared styles
│   ├── pages/
│   │   ├── index.astro        ← Hub page
│   │   └── plans/[slug].astro ← Plan detail (auto-generated from data)
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── astro.config.mjs
└── README.md
```

To add a new plan:
1. Add the plan object to `src/data/plans.ts` following the existing structure
2. The plan page is auto-generated — no separate files needed

---

## Tone & Style

- **Conversational but efficient** — no fluff, no cooking blog preamble
- **Practical** — every line should be actionable
- **Honest about limitations** — note when quantities don't perfectly align, when leftovers remain
- **Color-coded** — each plan gets a theme color in the hub and back-to-hub link
- **Printable** — the shopping list should work as a paper shopping list

## What to Avoid

- ❌ Recipes requiring exotic or hard-to-find ingredients
- ❌ "Meal prep" where you cook everything Sunday and eat it all week
- ❌ Recipes that serve only 1 (always serve 2 for leftovers)
- ❌ Recipes over 30 minutes active cook time
- ❌ Including pantry staples (oil, salt, pepper, common spices) on the shopping list
- ❌ Overlapping ingredients that don't actually work together across styles

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
