import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../models/meal';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../models/ingredient';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(
    private ingredientService: IngredientService,
    private fb: FormBuilder
  ) { }

  ingredients: Ingredient[];
  selectedIngredient: Ingredient;

  form: FormGroup = this.fb.group({
    calories: [''],
    sugar: [''],
    protein: [''],
    fats: [''],
    carbo: [''],
    veg_protein: [''],
  });

  formControls(): string[] {
    return Object.keys(this.form.controls);
  }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  selectIngredient(ing: Ingredient): void {
    this.selectedIngredient = ing;
    Object.keys(this.selectedIngredient).forEach(key => {
      if (this.formControls().includes(key)) {
        this.form.get(key).setValue(ing[key]);
      }
    });
  }

}
