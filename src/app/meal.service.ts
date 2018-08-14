import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Meal } from './models/meal';
import { MEALS } from './mock-meals';
import { MessageService } from './message.service';
import { errorHandler } from '@angular/platform-browser/src/browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealUrl = 'http://localhost:8080/meals';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.mealUrl, meal, httpOptions).pipe(
      tap((meal: Meal) => this.log(`added meal with id=${meal.id}`)),
      catchError(this.handleError<Meal>('addHero'))
    );
  }

  deleteMeal(meal: Meal | number): Observable<Meal> {
    const id = typeof meal === 'number' ? meal : meal.id;
    const url = `${this.mealUrl}/${id}`;

    return this.http.delete<Meal>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted meal id=${id}`)),
      catchError(this.handleError<Meal>('deleteMeal'))
    );
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealUrl)
      .pipe(
        catchError(this.handleError('getMeals', [])),
        tap(meals => this.log(`fetched meals`))
      );
  }

  getMeal(id: number): Observable<Meal> {
    const url = `${this.mealUrl}/${id}`;
    return this.http.get<Meal>(url).pipe(
      tap(_ => this.log(`fetched meal id=${id}`)),
      catchError(this.handleError<Meal>(`getMeal id=${id}`))
    );
  }

  updateMeal(meal: Meal) {
    return this.http.put(this.mealUrl, meal, httpOptions).pipe(
      tap(_ => this.log(`updated meal id=${meal.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  searchMeal(term: string): Observable<Meal[]> {
    if (!term.trim()) { return of([]); }

    return this.http.get<Meal[]>(`${this.mealUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found meals matching "${term}"`)),
      catchError(this.handleError<Meal[]>('searchMeal'))
    );
  }

  private log(message: string) {
    this.messageService.add(`MealService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} feiled: ${error.message}`);
      return of(result as T);
    };
  }
}

