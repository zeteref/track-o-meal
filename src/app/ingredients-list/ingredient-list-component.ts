import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { FormBuilder } from '@angular/forms';
import { Ingredient } from '../models/ingredient';

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

  columns = [
    new Column('name', 'Name'),
    new Column('calories', 'Calories'),
    new Column('protein', 'Protein'),
    new Column('veg_protein', 'Veg. Protein'),
    new Column('carbo', 'Carbo'),
    new Column('sugar', 'Sugar'),
    new Column('fats', 'Fats'),
  ];

  selectedIngredient: Ingredient;

  @Input() ingredients: Ingredient[];
  @Output() selected = new EventEmitter<Ingredient>();
  @Output() delete = new EventEmitter<Ingredient>();

  ngOnInit() {
  }

  select(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    this.selected.emit(ingredient);
  }

  deleteRequest(ingredient: Ingredient) {
    this.delete.emit(ingredient);
  }

  deleteCompleted(id: number) {
      const idx = this.ingredients.findIndex(i => i.id === id);
      this.ingredients.splice(idx, 1);
  }

  loadIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }
}
