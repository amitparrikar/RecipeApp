import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output('addIngredient') public newIngredient:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {}

  addIngredient(name:HTMLInputElement, amount:HTMLInputElement) {
    this.newIngredient.emit(new Ingredient(name.value, parseInt(amount.value)));
  }
}
