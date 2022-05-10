/* eslint-disable import/no-anonymous-default-export */
import api from '../ApiConfig';
import Cookies from 'js-cookie';

export default {
    transfer: async (value, account, bank, typeAccount, agency, isNameValid, document)=>{
        let id =  Cookies.get('id');
        let token = Cookies.get('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        let result = await api.post(`/transference/user/${id}`,{
            value: value, 
            account: account, 
            bank: bank, 
            type_destiny_account: typeAccount,
            agency: agency, 
            favored_name: isNameValid,
            document: document
        });
        let json = await result.data;
        return json;
    }
}
