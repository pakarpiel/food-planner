export interface Recipe {
  id: number;
  name: string;
  onList: boolean;
}

export interface RecipeWithIngredients extends Recipe {
  ingredients: Ingredient[];
}

export interface Ingredient {
  recipeId: number;
  id: number;
  name: string;
  amount: number;
  unit: string;
}