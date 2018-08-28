import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Ingredient } from './models/ingredient';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private url = 'http://localhost:8080/ingredients';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getIngredients(): Observable<Ingredient[]> {

    return this.http.get<Ingredient[]>(this.url)
      .pipe(
        catchError(this.handleError('getIngredients', [])),
        tap(ingredients => this.log(`fetched ingredients`))
      );
  }

  addIngredient(ing: Ingredient): Observable<Ingredient> {
    const params = {};
    return this.http.post<Ingredient>(this.url, ing)
      .pipe(
        catchError(this.handleError('getIngredients', [])),
        tap((data: Ingredient) => this.log(`added ingredient id = ${data.id}`))
      );
  }

  updateIngredient(ing: Ingredient): any {
    throw new Error('Method not implemented.');
  }

  private log(message: string) {
    this.messageService.add(`IngredientService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
