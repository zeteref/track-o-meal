import { Injectable } from '@angular/core';
import { Meal } from './models/meal';
import { MEALS } from './mock-meals';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private messageService: MessageService) { }

  getMeals(): Observable<Meal[]> {
    this.messageService.add('MealService: fetched Meals');
    return of(MEALS);
  }
}

