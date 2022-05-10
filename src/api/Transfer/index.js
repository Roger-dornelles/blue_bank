/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';
import Cookies from 'js-cookie';

export default {
    transfer: async (value, account, bank, typeAccount, agency, isNameValid, document)=>{
        let id = await Cookies.get('id');
        let token = await Cookies.get('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.post(`/transference/user/${id}`,{
            value, 
            account, 
            bank, 
            type_destiny_account: typeAccount,
            agency, 
            favored_name: isNameValid,
            document
        });
        let json = await result.data;
        console.log('JSON ', json);
        return json;
    }
}
