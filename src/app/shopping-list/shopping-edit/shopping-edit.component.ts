import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output('addIngredient') public newIngredient:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') public nameInput:ElementRef;
  @ViewChild('amountInput') public amountInput:ElementRef;
  constructor() { }

  ngOnInit() {}

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.newIngredient.emit(new Ingredient(name, parseInt(amount)));
  }
}
