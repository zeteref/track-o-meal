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

  private url = 'http://localhost:8080/ingredients'

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getIngredients(id: number): Observable<Ingredient[]> {
    const url = `${this.url}/${id}`;

    return this.http.get<Ingredient[]>(this.url)
      .pipe(
        catchError(this.handleError('getIngredients', [])),
        tap(ingredients => this.log(`fetched ingredients`))
      );
  }

  private log(message: string) {
    this.messageService.add(`IngredientService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} feiled: ${error.message}`);
      return of(result as T);
    };
  }

}
