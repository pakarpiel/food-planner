import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesViewComponent } from './views/recipes-view/recipes-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeViewComponent } from './views/recipe-view/recipe-view.component';
import { RecipeIngredientComponent } from './components/recipe-ingredient/recipe-ingredient.component';
import { RecipeIngredientEditorComponent } from './components/recipe-ingredient-editor/recipe-ingredient-editor.component';


import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [RecipesViewComponent, RecipeViewComponent, RecipeIngredientComponent, RecipeIngredientEditorComponent],
  imports: [
    FormsModule,
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule
  ]
})
export class RecipesModule { }
