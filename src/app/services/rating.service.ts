import { Injectable } from '@angular/core';

interface Rating {
  id: number;
  mealId: string;
  userName: string;
  stars: number;
  comment: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratings: Rating[] = [];
  private nextId = 1;

  constructor() {}

  getRatingsForMeal(mealId: string): Rating[] {
    return this.ratings.filter(r => r.mealId === mealId);
  }

  addRating(mealId: string, userName: string, stars: number, comment: string): void {
    this.ratings.push({
      id: this.nextId++,
      mealId,
      userName,
      stars,
      comment,
      createdAt: new Date()
    });
  }

  deleteRating(id: number): void {
    this.ratings = this.ratings.filter(r => r.id !== id);
  }
}
