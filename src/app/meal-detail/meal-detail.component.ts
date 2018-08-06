import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  @Input()
  meal: Meal;

  constructor() { }

  ngOnInit() {
  }

}
