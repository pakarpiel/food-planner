import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../Recipe';

@Component({
  selector: 'app-recipe-ingredient-editor',
  templateUrl: './recipe-ingredient-editor.component.html',
  styleUrls: ['./recipe-ingredient-editor.component.css']
})
export class RecipeIngredientEditorComponent implements OnInit {
  ingredient: Ingredient = {
    recipeId: null,
    id: null,
    name: "",
    amount: 0,
    unit: ""
  };

  @Input()
  editedIngredient;

  @Output()
  saveIngredient = new EventEmitter();

  send() {
    this.saveIngredient.emit(this.ingredient);
    this.ingredient = {
      recipeId: null,
      id: null,
      name: "",
      amount: 0,
      unit: ""
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.editedIngredient) {
      this.ingredient = this.editedIngredient;
    }
  }

}
