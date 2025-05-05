import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule,RouterLink], // add CommonModule if using *ngIf etc.
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  meal: any;
  isLoading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchMeal(id);
    } else {
      this.error = 'Invalid recipe ID.';
      this.isLoading = false;
    }
  }

  fetchMeal(id: string): void {
    this.http
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe({
        next: (res: any) => {
          this.meal = res.meals ? res.meals[0] : null;
          this.isLoading = false;
        },
        error: () => {
          this.error = 'Failed to load recipe.';
          this.isLoading = false;
        },
      });
  }

  getIngredients(): { name: string; quantity: string }[] {
    if (!this.meal) return [];
    const ingredients: { name: string; quantity: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const name = this.meal[`strIngredient${i}`];
      const quantity = this.meal[`strMeasure${i}`];
      if (name && name.trim()) {
        ingredients.push({ name, quantity });
      }
    }
    return ingredients;
  }
}
