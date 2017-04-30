import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') public recipeItem: Recipe;
  //@Output('recipeSelected') recipeSelected:EventEmitter<void> = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeIsSelected(this.recipeItem);
  }

}
