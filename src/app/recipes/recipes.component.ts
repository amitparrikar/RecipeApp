import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  public selectedRecipeItem:Recipe;
  private recipeSelectedSubscriber: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeSelectedSubscriber = this.recipeService.recipeSelected.subscribe( (recipeItem:Recipe) => {
      this.selectedRecipeItem = recipeItem;
    });
  }

  ngOnDestroy() {
    this.recipeSelectedSubscriber.unsubscribe();
  }

}
