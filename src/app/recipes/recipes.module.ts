import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesViewComponent } from './views/recipes-view/recipes-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeViewComponent } from './views/recipe-view/recipe-view.component';
import { RecipeIngredientComponent } from './components/recipe-ingredient/recipe-ingredient.component';


@NgModule({
  declarations: [RecipesViewComponent, RecipeViewComponent, RecipeIngredientComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule
  ]
})
export class RecipesModule { }
