import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../Recipe';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent implements OnInit {
  @Input()
  ingredient: Ingredient;

  @Output()
  delete = new EventEmitter();

  close() {
    this.delete.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
