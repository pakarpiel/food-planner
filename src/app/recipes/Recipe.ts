export interface Recipe {
  id: number;
  name: string;
  category: string;
}

export interface RecipeWithIngridients extends Recipe {
  ingredients: Ingredient[];
}

export interface Ingredient {
  recipeId: number;
  id: number;
  name: string;
  amount: number;
  unit: string;
}
