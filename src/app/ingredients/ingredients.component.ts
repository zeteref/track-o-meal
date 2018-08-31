import { Component, OnInit, ViewChild } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../models/meal';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../models/ingredient';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientListComponent } from '../ingredients-list/ingredient-list-component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @ViewChild('ingredientsSearch')
  ingredientsSearch: IngredientListComponent;

  constructor(
    private ingredientService: IngredientService,
    private fb: FormBuilder
  ) { }


  selectedIngredient: Ingredient;

  form: FormGroup = this.fb.group({
    name: [''],
    calories: [''],
    sugar: [''],
    protein: [''],
    fats: [''],
    carbo: [''],
    veg_protein: [''],
    id: ['']
  });

  formControls(): string[] {
    return Object.keys(this.form.controls).filter(x => x !== 'id');
  }

  ngOnInit() {
    this.ingredientsSearch.loadIngredients();
    this.form.get('name').valueChanges
      .subscribe(data  => {
        this.selectedIngredient.name = data;
      });
  }

  selectIngredient(ing: Ingredient): void {
    this.selectedIngredient = ing;
    Object.keys(this.selectedIngredient).forEach(key => {
      if (this.formControls().includes(key)) {
        this.form.get(key).setValue(ing[key]);
      }
    });
    this.form.get('id').setValue(ing.id);
  }

  deleteIngredient(ing: Ingredient): void {
    this.ingredientService.deleteIngredient(ing.id).subscribe(() => {
      this.ingredientsSearch.deleteCompleted(ing.id);
    });
  }

  onSubmit(): void {
    const ing: Ingredient = this.form.value;
    if (ing.id) {
      this.ingredientService.updateIngredient(ing).subscribe(() => this.selectedIngredient = undefined);
    } else {
      this.ingredientService.addIngredient(ing).subscribe((ret: Ingredient) => {
        this.selectedIngredient = undefined;
        this.ingredientsSearch.loadIngredients();
      });
    }
  }

  onCancel(): void {
    this.selectedIngredient = undefined;
  }

  newIngredient(): void {
    this.selectIngredient(new Ingredient());
    Object.keys(this.form.controls).forEach(key => this.form.controls[key].setValue(undefined));
  }

}
