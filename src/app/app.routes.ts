import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'recipe-list', loadComponent: () => import('./components/recipe-list/recipe-list.component').then(m => m.RecipeListComponent) },
    { path: 'recipe/:id', loadComponent: () => import('./components/recipe-detail/recipe-detail.component').then(m => m.RecipeDetailComponent) },
  ];
  
