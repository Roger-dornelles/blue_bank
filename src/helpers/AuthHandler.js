import Cookies from 'js-cookie';

export const doLoggin = (token,id) => {
    if(token){
        Cookies.set('token', token);
        Cookies.set('id', id)
    }
};

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
};

