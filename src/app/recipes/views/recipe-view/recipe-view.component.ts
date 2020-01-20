import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe, Ingredient } from '../../Recipe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {
  recipe: Recipe;
  url = "http://localhost:3000/";

  constructor(public http: HttpClient, public route:ActivatedRoute) { }

  saveIngredient(ingredient: Ingredient) {
    debugger
    ingredient.recipeId = this.recipe.id;
    this.http.post(`${this.url}ingredients/`, ingredient)
    .subscribe(resp => {
      this.fetchRecipe();
    });
  }

  ngOnInit() {
    this.fetchRecipe();
  }

  fetchRecipe() {
    const recipe_id = this.route.snapshot.paramMap.get("recipe_id");
    // ==
    this.http
      .get<Recipe>(`${this.url}recipes/${recipe_id}`, {
        params: {
          _embed: "ingredients"
        }
      })
      .subscribe(recipe => (this.recipe = recipe));
  }

  deleteIngredient(ingredient: Ingredient){
    this.http
      .delete(`${this.url}ingredients/${ingredient.id}`)
      .subscribe(resp => {
        this.fetchRecipe();
      });
  }

}
