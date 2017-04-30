import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  //@Output('addIngredient') public newIngredient:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') public nameInput:ElementRef;
  @ViewChild('amountInput') public amountInput:ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {}

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    this.shoppingListService.addIngredientItem(new Ingredient(name, parseInt(amount)));
    //this.newIngredient.emit(new Ingredient(name, parseInt(amount)));
  }
}
