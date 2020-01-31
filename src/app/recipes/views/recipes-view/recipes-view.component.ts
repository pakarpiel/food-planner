import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipeWithIngredients, Ingredient } from '../../Recipe';

type ShoppingListItems = {
  [k: string]: {
    ingredient: Ingredient;
    amount: Array<number>;
    unit: Array<string>;
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

  toggleList(recipe: Recipe, option) {
    recipe.onList = option;
    this.http.patch<Recipe>(`${this.url}/${recipe.id}`, recipe)
      .subscribe(resp => {
        this.fetchRecipes();
      });
  }

  makeShoppingList() {
    this.shoppingList = {};
    this.http
      .get<RecipeWithIngredients[]>(this.url, {
        params: {
          _embed: "ingredients"
        }
      })
      .subscribe (recipes => {
        recipes.forEach(recipe => {
          if(recipe.onList){
            recipe.ingredients.forEach(ingredient => {
              const item = (this.shoppingList[ingredient.name] = this.shoppingList[ingredient.name] || {
                ingredient,
                amount: [0],
                unit: [""]
              });
              if(item.unit.includes(ingredient.unit)){
                let index = item.unit.indexOf(ingredient.unit);
                item.amount[index] = (item.amount[index] + ingredient.amount)
              }else if(item.unit[0]===""){
                item.amount[0] = ingredient.amount;
                item.unit[0] = ingredient.unit;
              }else{
                item.amount.push(ingredient.amount);
                item.unit.push(ingredient.unit);
              }  
            });
          }  
        });
      });
  }
}
