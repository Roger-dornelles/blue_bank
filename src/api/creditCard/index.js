/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';
import Cookies from 'js-cookie';

export default {
    creditCardLimit: async ()=>{
        let id = await Cookies.get('id');
        let token = await Cookies.get('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.get(`/creditCard/user/${id}`);
        let json = await result.data;
        return json;
    },
    invoices: async ( month, year ) => {
        let id = await Cookies.get('id');
        let token = await Cookies.get('token');
        
        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.get(`/creditCard/invoices/${id}`,{month,year});
        let json = await result.data;
        return json;
    }
};