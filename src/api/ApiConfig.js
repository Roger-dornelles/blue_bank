import axios from 'axios';

const api = axios.create({
    baseURL:'https://api-bluebank.herokuapp.com'

});

export default api;