import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-recipe-name-editor',
  templateUrl: './recipe-name-editor.component.html',
  styleUrls: ['./recipe-name-editor.component.css']
})
export class RecipeNameEditorComponent implements OnInit {
  recipe: Recipe = {
    id: null,
    name: ""
  }

  @Output()
  saveRecipe = new EventEmitter();

  send() {
    this.saveRecipe.emit(this.recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
