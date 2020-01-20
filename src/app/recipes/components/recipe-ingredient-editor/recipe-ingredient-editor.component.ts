import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    amount: "",
    unit: ""
  };

  @Output()
  saveIngredient = new EventEmitter();

  send() {
    debugger
    this.saveIngredient.emit(this.ingredient);
    this.ingredient = {
      recipeId: null,
      id: null,
      name: "",
      amount: "",
      unit: ""
    }
  }

  nameInput(text: string) {
    this.ingredient.name = text;
  }

  amountInput(text: string) {
    this.ingredient.amount = text;
  }

  unitInput(text: string) {
    this.ingredient.unit = text;
  }

  constructor() { }

  ngOnInit() {
  }

}
