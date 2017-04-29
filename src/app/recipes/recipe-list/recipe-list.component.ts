import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output('recipeSelected') public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  recipeList: Recipe[] = [
    new Recipe('Chicken Xacuti', 'A lovely chicken dish, it is a speciality of Goa, very tasty and pungent. Tastes awesome with Goan Paw(local bread)', 'http://bit.ly/2pl6gqZ')
  ];

  constructor() {}

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeSelected.emit(recipeItem);
  }

}
