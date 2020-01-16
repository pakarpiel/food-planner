import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesViewComponent } from './views/recipes-view/recipes-view.component';
import { RecipeViewComponent } from './views/recipe-view/recipe-view.component';


const routes: Routes = [
  {
    path: "recipes",
    component: RecipesViewComponent
  },
  {
    path: "recipes/:recipe_id",
    component: RecipeViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
