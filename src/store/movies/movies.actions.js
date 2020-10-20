import apiMovieRequest from '../../conf/api.movie';

export const REQUEST8MOVIES = 'request movies';
export const FETCH_MOVIES = 'fetch movies';
export const FETCH_MOVIES_SUCCESS = 'fetch movies success';
export const FETCH_MOVIES_ERROR = 'fetch movies error';
export const SET_SELECTED_MOVIE = 'set selected movies';

export const requestMovies = () => ({
    type: REQUEST_MOVIES
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
});

export const fetchMoviesError = error => ({
    type: FETCH_MOVIES_ERROR,
    error
});

export const fetchMovies = (filter) => dispatch => {
    dispatch(requestMovies());
    const query = '?' + Object.keys(filter).map( k => `${ k }=${ filter[k]}&`).join('');
    return apiMovieRequest.searchMovies(filter).then( 
        movies => dispatch(fetchMoviesSuccess(movies)),
        error => dispatch(fetchMoviesError(error))
    )
}

export const setSelectedMovies = index => ({
    type: SET_SELECTED_MOVIE,
    index
});