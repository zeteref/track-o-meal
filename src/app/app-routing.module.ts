import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'meals', component: MealsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meals/:id', component: MealDetailComponent },
  { path: 'ingredients', component: IngredientsComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
