import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  private paramSubscription: Subscription;
  private isEditMode:boolean = false;
  private recipeItem: Recipe;


  constructor(private actRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.paramSubscription = this.actRoute.params.subscribe(
      (params: Params) => {
        if(params['id']){
          this.isEditMode = true;
        }else {
          this.isEditMode = false;
        }
      }
    );
  }

  ngOnDestroy() {
    //Always clear all the subscription.
    //By default Anglar clears its own Observable Subscriptions
    this.paramSubscription.unsubscribe();
  }

}
