import { Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { FormBuilder } from '@angular/forms';
import { Ingredient, get_columns } from '../models/ingredient';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

class Column {
  constructor(public field: string, public header: string) {}
}

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list-component.html',
  styleUrls: ['./ingredient-list-component.css']
})
export class IngredientListComponent implements OnInit {

  constructor(
    private ingredientService: IngredientService,
    private fb: FormBuilder
  ) { }

  columns = get_columns();

  selectedIngredient: Ingredient;
  searchTerms = new Subject<string>();

  @Input() ingredients: Ingredient[];
  @Output() selected = new EventEmitter<Ingredient>();
  @Output() delete = new EventEmitter<Ingredient>();
  @ViewChild('searchBox') searchBox;

  ngOnInit() {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.ingredientService.searchIngredients(term))
      )
      .subscribe(result => this.ingredients = result);
  }

  select(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    this.selected.emit(ingredient);
  }

  deleteRequest(ingredient: Ingredient) {
    this.delete.emit(ingredient);
  }

  deleteCompleted(id: number) {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.searchBox.nativeElement.value = '';
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);

  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
