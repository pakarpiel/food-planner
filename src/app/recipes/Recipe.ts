export interface Recipe {
  id: number;
  name: string;
  category: string;
}

export interface Ingredient {
  recipeId: number;
  id: number;
  name: string;
  amount: number;
  unit: string;
}