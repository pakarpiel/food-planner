import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe, RecipeWithIngridients, Ingredient } from "../../Recipe";

type ShoppingListItems = {
  [k: string]: {
    ingredient: Ingredient;
    amount: Ingredient["amount"];
  };
};

@Component({
  selector: "app-recipes-view",
  templateUrl: "./recipes-view.component.html",
  styleUrls: ["./recipes-view.component.css"]
})
export class RecipesViewComponent implements OnInit {
  recipes: Recipe[] = [];
  url = "http://localhost:3000/recipes";

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<Recipe[]>(this.url).subscribe(resp => (this.recipes = resp));
  }

  shoppingList: ShoppingListItems = {};

  makeShoppingList() {
    this.http
      .get<RecipeWithIngridients[]>(this.url, {
        params: {
          _embed: "ingredients"
        }
      })
      .subscribe(recipes => {
        recipes.forEach(recipe => {
          recipe.ingredients.forEach(ingredient => {
            const item = (this.shoppingList[ingredient.name] = this
              .shoppingList[ingredient.name] || {
              amount: 0,
              ingredient
            });
            item.amount = (item.amount + ingredient.amount)
          });
        });
      });
  }
}
