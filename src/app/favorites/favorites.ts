import { Component, inject, OnInit, } from '@angular/core';
import { ApiService } from '../api.service';
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
import { IBook } from '../book/book';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css'],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ApiService]
})
export class FavoritesComponent implements OnInit {
  public books: IBook[] = new Array<IBook>();


  private apiService: ApiService = inject(ApiService);
  
  public getFavBooks(){
    this.apiService.getFavorites().subscribe(data => {
      this.books = data;
    }, err => {
      console.error(err);
      this.books = [];
    });
  }

  ngOnInit() {
    this.getFavBooks();
  }

}
