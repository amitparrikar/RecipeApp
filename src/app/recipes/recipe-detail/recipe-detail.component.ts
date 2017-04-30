import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeItem') public recipeItem:Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  toShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }

}
