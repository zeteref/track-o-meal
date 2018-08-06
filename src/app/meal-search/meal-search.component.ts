import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Meal } from '../models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: [ './meal-search.component.css' ]
})
export class MealSearchComponent implements OnInit {
  meals$: Observable<Meal[]>;
  private searchTerms = new Subject<string>();

  constructor(private mealService: MealService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.meals$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mealService.searchMeal(term)),
    );
  }
}
