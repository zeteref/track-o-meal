import { Component, OnInit } from '@angular/core';
import { Meal, getDate } from '../models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[];
  selectedMeal: Meal;

  constructor(private mealService: MealService) { }

  ngOnInit() {
      this.getMeals();
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }

  getMeals(): void {
    this.mealService.getMeals()
      .subscribe((meals => this.meals = meals));
  }

}
