/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';
import Cookies from 'js-cookie';

export default {
    banks: async ()=>{
        let token = await Cookies.get('token');
        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.get('/bank');
        let json = await result.data;
        return json;
    }
};