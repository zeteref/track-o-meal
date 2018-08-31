import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MealsComponent } from './meals/meals.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealSearchComponent } from './meal-search/meal-search.component';
import { TypeheadBasicComponent } from './typehead-basic/typehead-basic.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientListComponent } from './ingredients-list/ingredient-list-component';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MealSearchComponent,
    TypeheadBasicComponent,
    IngredientsComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
