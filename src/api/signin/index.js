/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';

export default {
    signin: async (email,password) => {

        let result = await api.post('/signin',{email,password});
        let json = result.data;
        return json;
    }
}