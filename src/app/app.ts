import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    BookComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'books-market';
}
