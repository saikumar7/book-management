import { createReducer, on } from "@ngrx/store";
import { AddBook, AddBookError, AddBookSuccess, RemoveBook } from './book.actions';
import { Book } from '../model/book';

export const initialState: Book[] = [];
export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => {return state}),
  on(AddBookSuccess, (state, {id, title,author}) => [...state, {id, title,author}]),
  on(AddBookError, (state, {error}) => {
    console.log(error)
    return state;
  }),
  on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);