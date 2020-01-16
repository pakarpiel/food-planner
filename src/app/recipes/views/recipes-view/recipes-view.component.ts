import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css']
})
export class RecipesViewComponent implements OnInit {
  recipes: Recipe[] = [];
  url = "http://localhost:3000/recipes";

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Recipe[]>(this.url)
    .subscribe(resp => (this.recipes = resp));
  }

}
