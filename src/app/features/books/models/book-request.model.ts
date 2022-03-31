import { BookModel } from "./books.model";

export interface GetBookRequest {
    user_id: string;
}
export interface DeleteBookRequest{
    user_id: string;
    book_id: string
}

export interface UpdateBookRequest {
    user_id: string;
    book_id: string;
    data: BookModel;
}