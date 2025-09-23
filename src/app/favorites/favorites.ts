import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FavoritesComponent implements OnInit {
  public books: Array<any> = new Array<any>();

  constructor(private apiService: ApiService) {
  }

  public getFavBooks(){
    this.apiService.getFavorites().subscribe(data => {
      this.books = data;
    }, err => {
      this.books = [];
    });
  }

  ngOnInit() {
    this.getFavBooks();
  }

}
