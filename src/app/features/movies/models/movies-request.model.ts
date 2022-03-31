import { moviesmodel } from "./movies.model";


export interface GetMoviesRequest {
    user_id: string;

}
export interface DeleteMoviesRequest {
    user_id: string;
    movie_id: string;
}

// export interface GetMovieRequest {
//     user_id: string;
//     book_id: string;
// }

// export interface DeleteMovieRequest extends GetMovieRequest {
//     user_id: string;
//     book_id: string;
// }

// export interface InsertMovieRequest {
//     user_id: string;
//     data: MovieItemModel
// }

// export interface UpdateMovieRequest {
//     user_id: string;
//     book_id: string;
//     data: MovieItemModel
// }