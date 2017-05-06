import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  //@Input('recipeItem') public recipeItem:Recipe;
private recipeItem:Recipe;
private paramSubscription:Subscription;

  constructor(private recipeService: RecipeService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.actRoute.params.subscribe( (params: Params) => {
      this.recipeItem = this.recipeService.getRecipeItemById(+params['id']);
    });
  }

  toShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }

  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }


}
