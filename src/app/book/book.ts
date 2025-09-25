import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Book interface
export interface IBook {
  id: string;
  title: string;
  cover: string;
  publishDate: string;
  rating: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.html',
  styleUrls: ['./book.css'],
  imports: [
    RouterModule,
  ]
})
export class BookComponent implements OnInit {
  private apiService = inject(ApiService);
  private activatedRoute = inject(ActivatedRoute);
  private toastr = inject(ToastrService);


  public book: IBook = {
    id: '',
    title: '',
    cover: '',
    publishDate: '',
    rating: '',
    author: '',
    description: ''
  };

  ngOnInit() {
    const bookId = this.activatedRoute.snapshot.params['id'];
    this.apiService.getBook(bookId).subscribe({
      next: (data: IBook) => {
        this.book = data;
      },
      error: () => {
        this.toastr.error('Could not fetch the book.', 'Error');
      }
    });
  }

  public addToFav() {
    this.apiService.addToFavorites(this.book).subscribe({
      next: () => {
        this.toastr.success('Book has been added to Readlist!', 'Success');
      },
      error: () => {
        this.toastr.error('Something went wrong!', 'Error');
      }
    });
  }
}
export const defaultBook: IBook = {
  id: '',
  title: '',
  cover: '',
  publishDate: '',
  rating: '',
  author: '',
  description: ''
};
