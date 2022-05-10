/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';

import Cookies from 'js-cookie';

export default {
    displayPix: async()=>{
        let id = await Cookies.get('id');
        let token = await Cookies.get('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.get(`/pix/viewTransfers/${id}`);
        let json = await result.data;
        return json;
    },
    transferValues: async( value,pixdestination,description )=>{
        let id = await Cookies.get('id');
        let token = await Cookies.get('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.post(`/pix/transfer/${id}`,{
            value,
            pixdestination,
            description
        });
        let json = await result.data;
        return json;
    },
    payment: async (value,barsCodin,description)=>{
        let id = await Cookies.get('id');
        let token = Cookies.get('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.post(`/pix/pagament/${id}`,{
            value,
            pixdestination:barsCodin,
            description
        });
        let json = await result.data;
        return json;
    }
};