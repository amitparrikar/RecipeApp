import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  constructor(private recipeService: RecipeService, private actRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }

  // onSelected() {
  //   this.router.navigate(['./../recipes', this.recipeItem.id], { relativeTo: this.actRoute });
  // }


}
