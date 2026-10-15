export interface Recipe {
  emoji: string;
  name: string;
  style: string;
  time: number;
  cal: number;
  servings: number;
  ingredients: string[];
  leftovers: string[];
  instructions: string[];
}

export interface PriceItem {
  item: string;
  qty: string;
  low: number;
  high: number;
}

export interface UsageItem {
  item: string;
  desc: string;
}

export interface ScalingInfo {
  low: number;
  high: number;
  tips: string[];
}

export interface ShoppingList {
  produce: string[];
  protein: string[];
  pantry: string[];
  dairy: string[];
}

export interface MealPlan {
  slug: string;
  title: string;
  emoji: string;
  protein: string;
  styles: string[];
  recipeCount: number;
  maxMinutes: number;
  estTotalLow: number;
  estTotalHigh: number;
  overview: string;
  color: string;
  shopping: ShoppingList;
  priceItems: PriceItem[];
  recipes: Recipe[];
  usage: UsageItem[];
  scaling: ScalingInfo;
  bestFor: string;
}
