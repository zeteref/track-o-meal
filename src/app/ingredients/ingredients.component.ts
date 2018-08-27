import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../models/meal';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../models/ingredient';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
    this.getIngredients();
    this.form.get('name').valueChanges
      .subscribe(data  => {
        this.selectedIngredient.name = data;
      });
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
    this.form.get('id').setValue(ing.id);
  }

  onSubmit(): void {
    const ing: Ingredient = this.form.value;
    console.log(ing);
    if (ing.id) {
      this.ingredientService.updateIngredient(ing).subscribe();
    } else {
      this.ingredientService.addIngredient(ing).subscribe();
    }
  }

  newIngredient(): void {
    this.selectIngredient(new Ingredient());
    Object.keys(this.form.controls).forEach(key => this.form.controls[key].setValue(undefined));
  }

}
