import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public ingredientList: Ingredient[] = [];
  private shoppingListSubscription:Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.getShoppingListData();
    this.shoppingListSubscription = this.shoppingListService.shoppingListUpdated.subscribe(() => {
      this.getShoppingListData();
    });
  }

  getShoppingListData(){
    this.ingredientList = this.shoppingListService.getShoppingList();
  }

  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe();
  }

}
