import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../models/meal';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  selectIngredient(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
  }

}
