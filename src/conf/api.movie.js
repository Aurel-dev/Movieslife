import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmQ1YzdjM2NjYWEyMzQ5M2FiZGNiMDE2NTI5YTg0ZiIsInN1YiI6IjVmODhhODQ5M2FmOTI5MDAzYTRiZTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUwpQn3VpuZRYlbsgdyNKbAVBLXX0OFLUltrHKno4CY'
    return req;
})

export default apiMovie;