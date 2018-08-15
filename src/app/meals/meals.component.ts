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

  constructor(private mealService: MealService) { }

  ngOnInit() {
      this.getMeals();
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.mealService.addMeal({ name } as Meal)
      .subscribe(meal => {
        this.meals.push(meal);
      });
  }

  delete(meal: Meal) {
    this.meals = this.meals.filter(m => m !== meal);
    this.mealService.deleteMeal(meal).subscribe();
  }

  getMeals(): void {
    this.mealService.getMeals()
      .subscribe(
        (meals) => { 
          this.meals = meals
        }
      );
  }

}
