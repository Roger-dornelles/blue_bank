/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';

export default {
    signin: async ()=>{
        let email = 'teste@teste.com';
        let password = '123456';
        let result = await api.post('/signin',{email,password});
        let json = result.data;
        console.log(json);
    }
}