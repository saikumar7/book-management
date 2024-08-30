import { createAction, props } from "@ngrx/store";
import { Book } from '../model/book';

export const AddBook = createAction('[Book] Add book', props<Book>());
export const AddBookSuccess = createAction('[Book] Added book successfully', props<Book>());
export const AddBookError = createAction('[Book] Add Book Failure', props<{error: any}>());

export const RemoveBook = createAction('[Book] Remove book', props<{bookId: string}>());