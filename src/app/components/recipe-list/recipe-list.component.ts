import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  meals: any[] = [];
  loading = true;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getMealsByIngredient('chicken_breast').subscribe({
      next: (data) => {
        this.meals = data.meals || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading meals', err);
        this.loading = false;
      }
    });
  }
}
