import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipeWithIngredients, Ingredient } from '../../Recipe';

type ShoppingListItems = {
  [k: string]: {
    ingredient: Ingredient;
    amount: Ingredient["amount"];
  }
}

@Component({
  selector: 'app-recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css']
})
export class RecipesViewComponent implements OnInit {
  recipes: Recipe[] = [];
  url = "http://localhost:3000/recipes";
  mode = null;
  newRecipe = null;

  constructor(public http: HttpClient, public route:ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.url).subscribe(resp => (this.recipes = resp));
  }

  addNewRecipe() {
    this.mode = "new";
  }

  saveRecipe(recipe: Recipe) {
    this.http.post(`${this.url}/`, recipe)
      .subscribe(resp => {
       this.router.navigate(['recipes', this.recipes.length+1])
      });
    this.mode = null;
  }

  shoppingList: ShoppingListItems = {};

  makeShoppingList() {
    this.http
      .get<RecipeWithIngredients[]>(this.url, {
        params: {
          _embed: "ingredients"
        }
      })
      .subscribe (recipes => {
        recipes.forEach(recipe => {
          recipe.ingredients.forEach(ingredient => {
            const item = (this.shoppingList[ingredient.name] = this.shoppingList[ingredient.name] || {
              amount: 0,
              ingredient
            });
            item.amount = (item.amount + ingredient.amount)
          });
        });
      });

  }

}
