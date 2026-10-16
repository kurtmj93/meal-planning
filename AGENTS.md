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

### Vendor-Specific Pricing (Richmond, VA area)

These are current approximate prices as of October 2026. Aldi consistently has the lowest prices on staples. Costco offers the best per-unit value on bulk protein. Lidl and Food Lion fall in between.

| Item | Aldi | Lidl | Food Lion | Costco (Richmond, VA) |
|---|---|---|---|---|
| Chicken thighs (boneless, skinless, per lb) | $2.99 | ~$2.50–3.50 | ~$2.75–3.79 | $2.99 (Kirkland air-chilled) |
| Ground beef (80/20, per lb) | $5.29 | ~$5.69 | ~$4.99–5.49 | $4.69–4.99 (Kirkland vacuum) |
| Ground pork (per lb) | ~$3.50–4.00 | ~$3.50–4.50 | ~$4.00–5.00 | — |
| Bacon (per lb) | ~$4.99–5.99 | ~$4.00–5.00 | ~$4.99–5.99 | ~$4.92 (Kirkland thick sliced) |
| Frozen shrimp (raw, per lb) | ~$3.50–7.00 | ~$9.00 | ~$8.00–9.00 | ~$8.29 (Kirkland 2 lb) |
| Italian sausage (per lb) | ~$2.99 | ~$3.50–4.50 | ~$3.50–4.50 | ~$3.10 (Kirkland 3.5 lb) |
| Eggs (dozen) | $1.85 (Goldhen) | ~$1.86 | ~$2.50–3.00 | ~$3.00 (24 ct $6.00) |
| Bell peppers (each) | ~$1.25–1.50 | ~$1.00–1.50 | ~$1.00–1.50 | ~$1.50–2.00 |
| Onion (each) | ~$0.50–0.75 | ~$0.50–0.75 | ~$0.50–0.75 | ~$0.75–1.00 |
| Garlic (per head) | ~$0.50–0.75 | ~$0.50–0.75 | ~$0.50–0.75 | ~$0.75–1.00 |
| Rice (1 lb bag) | ~$1.00–1.50 | ~$1.00–1.50 | ~$1.50–2.00 | ~$1.50–2.00 |
| Canned beans (15 oz) | ~$0.75–1.25 | ~$0.80–1.50 | ~$0.80–1.50 | ~$1.00–1.50 |
| Canned tomatoes (14.5 oz) | ~$0.99–1.25 | ~$1.00–1.50 | ~$1.00–1.75 | ~$1.25–1.50 |
| Tortillas (8–10 pack) | ~$1.50–2.00 | ~$1.50–2.50 | ~$1.50–2.50 | ~$2.00–3.00 |
| Cheese (8 oz block) | ~$2.00–2.50 | ~$2.00–3.00 | ~$2.50–3.50 | ~$3.00–4.00 |
| Frozen mixed veggies (16 oz) | ~$1.25–1.75 | ~$1.50–2.00 | ~$1.50–2.50 | ~$1.50–2.00 |
| Sweet potato (each) | ~$0.75–1.25 | ~$0.75–1.25 | ~$0.75–1.25 | ~$1.00–1.50 |
| Scallions (bunch) | ~$0.50–0.75 | ~$0.50–0.75 | ~$0.50–0.75 | ~$0.75–1.00 |
| Fresh herbs (bunch) | ~$0.75–1.25 | ~$0.75–1.25 | ~$0.75–1.25 | ~$1.00–1.50 |
| Limes (each) | ~$0.25–0.50 | ~$0.25–0.50 | ~$0.25–0.50 | ~$0.50–0.75 |
| Firm tofu (14 oz block) | ~$1.25–1.75 | ~$1.50–2.00 | ~$2.00–2.50 | ~$2.00–2.50 |
| Deli turkey (per lb) | ~$4.00–5.00 | ~$4.00–5.50 | ~$4.00–5.50 | ~$5.00–6.00 |
| Frozen white fish (per lb) | ~$6.89–8.99 | ~$5.00–7.00 | ~$5.00–7.00 | ~$5.00–7.00 |
| Salmon fillets (per lb) | ~$11.95 | ~$8.00–10.00 | ~$9.00–12.00 | ~$9.00–11.00 |

**Notes:**
- `~` = approximate, based on vendor positioning and available data
- Prices are for standard/conventional items unless noted
- Costco prices reflect Kirkland Signature or in-house brands
- Aldi's Kirkwood brand chicken thighs are ~$2.29/lb (conventional bone-in); boneless/skinless USDA Family Pack is $2.99/lb
- BLS national average for ground beef (Oct 2026): ~$6.79/lb — Costco at $4.69–4.99 is significantly below
- BLS national average for eggs: ~$2.27/doz — Aldi at $1.85 is the best deal
- BLS national average for boneless skinless chicken thighs: ~$3.26/lb
- Costco's standard retail ground beef is now 88/12 (~6.3 lb box @ $6.80/lb, Oct 2026). The $4.69–4.99 range applies to 80/20 vacuum packs — verify locally.

### Minimum Package Sizes (October 2026)

The smallest purchasable unit of each protein at each vendor — the real floor for any bulk buy. Per-lb math is meaningless if the package doesn't match what the plan needs.

| Item | Aldi | Lidl | Food Lion | Costco |
|---|---|---|---|---|
| Chicken thighs (boneless, skinless) | ~2.75 lb family-pack tray ($8.22 @ $2.99/lb); Kirkwood ~1.85 lb @ $3.59; One Fine Chicken ~3 lb @ $2.49 | Not confirmed in US | Sold by weight; family-pack tray ~3.25 lb @ $3.69–3.79/lb | Sold by weight in tear-off pouches; tray ~8.5 lb (~$18–24) |
| Ground beef (80/20) | ~2.25 lb box ($11.90 @ $5.29/lb) | 2 lb (907 g) tray; $11.45–13.39 ($5.73–6.69/lb) | ~1.1 lb tray @ $6.99/lb | Kirkland 88/12 ~6.3 lb box @ $6.80/lb (~$43); 80/20 seen at $4.69–4.99 |
| Bacon | 16 oz @ $4.35 | — | ~1 lb packs | 2 × 1.5 lb = 3 lb @ $12.99 ($4.33/lb; recently down from $16.49) |
| Italian sausage | 16 oz @ $3.55 | — | ~1 lb links | 3.5 lb @ $10.89 (~$3.11/lb) |
| Frozen shrimp | — | ~$9/lb (15/20 packs) | — | 2 lb or 4 lb Kirkland packages |

**Key facts for multiweek planning:**
- Retail protein floors are ~1.85–2.75 lb per buy (Aldi boxes, Lidl 2 lb trays, Food Lion ~3.25 lb thigh trays) — current plans' 2.5 lb buys sit right at that floor, so existing single-protein plans are viable at any of the four vendors
- Costco boxes are the scale driver: one box/tray of each protein ≈ 6–16 meals' worth (6.3 lb beef box, 8.5 lb chicken tray, 3 lb bacon, 3.5 lb sausage)
- Aldi's 2.25 lb 80/20 box ($5.29/lb) undercuts Costco's 88/12 ($6.80/lb): 3 Aldi boxes = 6.75 lb ~$36 vs 1 Costco box = 6.3 lb ~$43 — but Costco wins on trip consolidation
- Chicken thighs are sold by the pound at every vendor (trays just happen to be 2–3.25 lb retail, ~8.5 lb at Costco), so plan sizing can be exact pounds; Costco pouches are pre-portioned ~6–8 oz

### Retail Price Ranges (Quick Reference)

Use these when you need a ballpark for any vendor:

| Item | Price Range |
|---|---|
| Chicken thighs (boneless, per lb) | $2.50–$3.50 |
| Ground beef (per lb) | $3.50–$5.50 |
| Ground pork (per lb) | $3.00–$4.50 |
| Bacon (per lb) | $4.00–$6.00 |
| Frozen shrimp (per lb) | $7.00–$10.00 |
| Italian sausage (per lb) | $3.00–$4.50 |
| Eggs (dozen) | $2.00–$3.50 |
| Bell peppers (each) | $1.00–$1.50 |
| Onion (each) | $0.50–$0.75 |
| Garlic (per head) | $0.50–$0.75 |
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
| Frozen white fish (per lb) | $5.00–7.00 |

**Bulk buying** typically saves 20–40% on protein and 10–30% on pantry items.

---

## Project Structure

```
~/Dev/meal-plan-astro/
├── src/
│   ├── data/plans.ts            ← Single source of truth — add new plans here
│   ├── types/plans.ts           ← TypeScript interfaces (MealPlan, Recipe, …)
│   ├── layouts/Base.astro       ← Shared HTML shell
│   ├── styles/global.css        ← All shared styles
│   ├── pages/
│   │   ├── index.astro          ← Hub page (plans + comparison)
│   │   ├── plans/[slug].astro   ← Plan detail (auto-generated from data)
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── astro.config.mjs
└── README.md
```

To add a new plan:
1. Add the plan object to `src/data/plans.ts` following the existing structure
2. The plan page is auto-generated — no separate files needed

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
