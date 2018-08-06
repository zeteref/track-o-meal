import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Meal } from '../models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  @Input()
  meal: Meal;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.getMeal();
  }

  getMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mealService.getMeal(id)
      .subscribe(meal => this.meal = meal);
  }

  save(): void {
    this.mealService.updateMeal(this.meal)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
