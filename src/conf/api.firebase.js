import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://movislife-1b5d5.firebaseio.com/'
})

export default apiFirebase;