import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe ("Lithuanian Potato-Meat Dumplings (Cepelinai)", "So named because their shape resembles that of a Zeppelin airship, cepelinai are typically around 10–20 cm long, although the size depends on where they are made: in the western counties of Lithuania cepelinai are made bigger than in the east. In Samogitia cepelinai are called 'kleckā'.", "https://www.seforeceptai.lt/upload/2013/06/580_Cepelinai_su.jpg")

  ]

  constructor() { }

  ngOnInit() {
  }

}
