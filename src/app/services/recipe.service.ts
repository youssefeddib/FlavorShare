
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Get meals by ingredient (e.g., chicken_breast)
  getMealsByIngredient(ingredient: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/filter.php?i=${ingredient}`);
  }

  // Get full meal details by ID
  getMealById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  // Search meals by name
  searchMealByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search.php?s=${name}`);
  }

  // List all meal categories (optional)
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories.php`);
  }
}
