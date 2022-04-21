/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';

export default {
    signup: async (name, password,email,cpf)=>{
        let result = await api.post('/signup',{name, password, email, cpf});
        let json = await result.data;
        return json;
    }
}