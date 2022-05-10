import axios from 'axios';

const api = axios.create({
    baseURL:`https://api-bluebank.herokuapp.com`,
    headers: {
        'Content-Type': 'application/json',
        Accept : 'application/json'
    },
    data: {},

});

export default api;