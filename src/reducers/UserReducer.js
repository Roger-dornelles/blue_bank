/* eslint-disable no-unreachable */
/* eslint-disable default-case */
const initialState = {
    email:'',
    password:'',
    cpf:'',
    name: ''
};

const UserReducer = (state=initialState, action) =>{

    switch (action.type){
        case 'CREATE_EMAIL':
            return { ...state, email:action.payload.email };
        break;

        case 'CREATE_CPF':
            return { ...state, cpf:action.payload.cpf };
        break;

        case 'CREATE_PASSWORD':
            return { ...state, password:action.payload.password };
        break;
    }

    return state;
};

export default UserReducer;

