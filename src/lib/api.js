import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://tour-back-end.herokuapp.com'
   // baseURL: 'http://192.168.1.109:1337'
});

export default instance;