import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Meal, MealIngredient } from '../models/meal';
import { MealService } from '../meal.service';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  @Input()
  meal: Meal;

  ingredients: MealIngredient[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mealService: MealService,
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.getMeal();
    this.getIngredients();
  }

  getMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mealService.getMeal(id)
      .subscribe(meal => this.meal = meal);
  }

  getIngredients(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mealService.getMealIngredients(id)
      .subscribe(ingredients => {
        this.ingredients = ingredients;
        console.log(this.ingredients);
      });
  }

  save(): void {
    this.mealService.updateMeal(this.meal)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
