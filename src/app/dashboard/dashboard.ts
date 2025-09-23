import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IBook } from '../book/book';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [
    RouterModule,
    FormsModule
  ]
})
export class DashboardComponent implements OnInit {
  public books: IBook[] = [];
  public keyword: string = '';

  constructor(private apiService: ApiService) {
  }

  private getBooks(){
    this.apiService.getBooks().subscribe(data => {
      this.books = data;
    }, err => {
      this.books = [];
    });
  }

  ngOnInit() {
     this.getBooks();
  }

  public searchBook(){
    this.apiService.getBook(this.keyword).subscribe(data => {
      this.books = [];
      if(Array.isArray(data))
        this.books = data;
      else
        this.books.push(data);
    }, err => {
      this.books = [];
    })
  }

}
