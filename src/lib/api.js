import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://tour-back-end.herokuapp.com'
});

export default instance;