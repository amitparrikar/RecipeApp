import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  //@Output('recipeSelected') public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService, private route: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }

  onCreateNewRecipe(){
    this.route.navigate(['new'], { relativeTo: this.actRoute });
  }

}
