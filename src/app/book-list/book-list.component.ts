import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  book$: Observable<Book[]>;

  constructor(private store: Store<AppState>) { 
    this.book$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string): void {
    this.store.dispatch(AddBook({id, title, author}))
  }

  removeBook(bookId: string): void {
    this.store.dispatch(RemoveBook({bookId}))
  }
}
