import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipeList: Array<Recipe> = [
    new Recipe(1, 'Chicken Xacuti',
               'A lovely chicken dish, it is a speciality of Goa, very tasty and pungent. Tastes awesome with Goan Paw(local bread)',
               'http://bit.ly/2pl6gqZ',
               [new Ingredient('Chicken', 1), new Ingredient('Coriandal', 3), new Ingredient('Oil', 2)]),
    new Recipe(2, 'Prawn Human',
               'A lovely home recipe, A light yellow curry made out of prawns and tender mango. My mouth already started watering',
               'http://bit.ly/2qsJFW2',
               [new Ingredient('Prawns', 1), new Ingredient('Tender Mango', 3), new Ingredient('Turmeric', 2)])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipeList.slice();
  }

  getRecipeItemById(id:number){
    return this.recipeList.find(recipe => {
        return recipe.id === id;
    });
  }

  recipeIsSelected(recipeItem: Recipe){
    this.recipeSelected.emit(recipeItem);
  }

  addIngredientsToShoppingList(ingredientList: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredientList);
  }

}
