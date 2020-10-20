import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmQ1YzdjM2NjYWEyMzQ5M2FiZGNiMDE2NTI5YTg0ZiIsInN1YiI6IjVmODhhODQ5M2FmOTI5MDAzYTRiZTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUwpQn3VpuZRYlbsgdyNKbAVBLXX0OFLUltrHKno4CY'
    return req;
})

export const apiMovie;


export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
    description: m.overview
})

export default {
    searchMovies: (filter) => {
        const query = '?' + Object.keys(filter).map( k => `${ k }=${ filter[k]}&`).join('');
        return apiMovie.get('/search/movie' + query)
                       .then( response => response.data.results)
                       .then( moviesApi => moviesApi.map(apiMovieMap))
    }
}