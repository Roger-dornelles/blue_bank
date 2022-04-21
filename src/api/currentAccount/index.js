/* eslint-disable import/no-anonymous-default-export */
import api from "../ApiConfig";

import Cookie from "js-cookie";

export default {
    account: async ()=>{
        let id = Cookie.get('id');
        let token = Cookie.get('token');
        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.get(`/account/user/${id}`);
        let json = await result.data;
        return json;
    }
};