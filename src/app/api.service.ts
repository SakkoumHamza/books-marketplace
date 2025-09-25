import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environement';
import { IBook } from './book/book';
import { inject } from '@angular/core';


export class ApiService {

  private BASE_URL = environment.apiURL;

  public http: HttpClient = inject(HttpClient);

  public addToFavorites(book: IBook) {
    return this.http.post(`${this.BASE_URL}/favorites`, book);
  }

  public getFavorites() {
    return this.http.get<IBook[]>(`${this.BASE_URL}/favorites`);
  }

  public getBooks() {
    return this.http.get<IBook[]>(`${this.BASE_URL}/books`);
  }

  public getBook(id: string) {
    return this.http.get<IBook>(`${this.BASE_URL}/books/${id}`);
  }
}
