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
  mode = null;
  selected = null;

  constructor(public http: HttpClient, public route:ActivatedRoute) { }

  saveIngredient(ingredient: Ingredient) {
    ingredient.recipeId = this.recipe.id;
    if (this.mode != "edit") {
      this.http.post(`${this.url}ingredients/`, ingredient)
      .subscribe(resp => {
       this.fetchRecipe();
      });
    } else {
      this.http.patch<Ingredient>(`${this.url}ingredients/${ingredient.id}`, ingredient)
      .subscribe(resp => {
        this.fetchRecipe();
      });
      this.mode = null;
    }     
  }

  editIngredient(ingredient: Ingredient) {
    this.mode = "edit";
    this.selected = Object.assign({}, ingredient);
    window.scrollTo(0,0);
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
