import type { PriceItem, Recipe, UsageItem } from './plans';

/**
 * Multiweek plan: one big bulk-buy trip (Costco-sized protein boxes)
 * feeding 2–3 weeks of dinners. Each recipe serves 2 (dinner + leftover).
 * Menu days are either a recipe (by unique recipe name) or a flex day.
 */
export interface MultiweekMenuDay {
  day: number;
  kind: 'recipe' | 'flex';
  /** Unique recipe name (when kind === 'recipe'). */
  recipe?: string;
  /** Note for flex days. */
  note?: string;
}

export interface MultiweekPlan {
  slug: string;
  title: string;
  emoji: string;
  proteins: string;
  weeks: number;
  durationDays: number;
  recipeCount: number; // unique recipes
  plannedMeals: number; // recipe-days scheduled
  flexDays: number;
  maxMinutes: number;
  estTotalLow: number;
  estTotalHigh: number;
  overview: string;
  bulkNote: string;
  color: string;
  shopping: {
    produce: string[];
    protein: string[];
    pantry: string[];
    dairy: string[];
  };
  priceItems: PriceItem[];
  /** One grid cell per day, in order. */
  menu: MultiweekMenuDay[];
  recipes: Recipe[];
  usage: UsageItem[];
  scaling: {
    low: number; // per serving, effective
    high: number;
    tips: string[];
  };
  bestFor: string;
}
