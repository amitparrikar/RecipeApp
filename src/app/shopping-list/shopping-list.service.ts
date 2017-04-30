import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {

  public shoppingListUpdated:EventEmitter<void> = new EventEmitter<void>();

  private shoppingList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addIngredientItem(item:Ingredient){
    this.shoppingList.push(item);
    this.shoppingListUpdated.emit();
  }

  addIngredients(list: Ingredient[]){
    this.shoppingList.push(...list);
  }
}
