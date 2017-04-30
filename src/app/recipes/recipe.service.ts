import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipeList: Array<Recipe> = [
    new Recipe('Chicken Xacuti', 'A lovely chicken dish, it is a speciality of Goa, very tasty and pungent. Tastes awesome with Goan Paw(local bread)', 'http://bit.ly/2pl6gqZ')
  ];

  getRecipes() {
    return this.recipeList.slice();
  }

  recipeIsSelected(recipeItem: Recipe){
    this.recipeSelected.emit(recipeItem);
  }

}
