import { Component } from '@angular/core';
import { Recipe } from '../recepi.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://toriavey.com/images/2011/01/TOA109_18-1-500x500.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://toriavey.com/images/2011/01/TOA109_18-1-500x500.jpeg')
  ];


}
