import React, { useState } from 'react';
import { Container } from './styled';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

// icons
import { MdPerson } from "react-icons/md";

// api 
import api from '../../api/signup';

// helpers
import { doLoggin } from '../../helpers/AuthHandler';

const CreateAccount = ()=>{
    const navigate = useNavigate();
    const email = useSelector(state=>state.user.email);
    const password = useSelector(state=>state.user.password);
    const cpf = useSelector(state=>state.user.cpf);

    let [ name, setName ] = useState('');
    const [ warning, setWarning ] = useState('');

    const handleCreateAccount = async (e)=>{
        e.preventDefault();
        try{

            if(name.length === 0){
                console.log(email)
                console.log(cpf)
                console.log(password)
                setWarning('Nome Obrigatório.');

                setTimeout(()=>{
                    setWarning('');
                },2700);

            }else if(name.length < 2){
                setWarning('Nome Invalido.');

                setTimeout(()=>{
                    setWarning('');
                },2700);

            }else{
                let regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
                let isValidName = regex.test(name);

                if(isValidName) {

                    name = name.toLowerCase();
                    const newName = name.charAt(0).toUpperCase() + name.slice(1);
                    name = newName;
                    let json = await api.signup(name, password,email,cpf);

                    if(json.error === 'E-mail já cadastrado...'){
                        setWarning(json.error);
                        setTimeout(() =>{

                            navigate('/registerEmail');
                        },2500)
                    };

                    doLoggin(json.token, json.id);
                    setTimeout(()=>{
                        navigate('/dashboard');
                        window.location.reload('/dashboard');
                    },2500);

                }else{
                    setWarning('Nome Invalido.');
                    setTimeout(()=>{
                        setWarning('');
                    },2700);
                }

            }

        }catch(error){
            console.log(error);
            setWarning('Ocorreu um erro tente novamente mais tarde.');
            setTimeout(()=>{
                setWarning('');
            },2750);
        }
    }

    return(
        <Container>
            <h2>Estamos terminando.</h2>
            <p>Agora para terminarmos o seu cadastro precisamos saber seu NOME.</p>
            <p>Digite seu nome.</p>

            <form onSubmit={handleCreateAccount}>
                <label>
                    <MdPerson /><input type="text" value={name} onChange={e=>setName(e.target.value)} />
                    {warning && <p>{warning}</p>}

                </label>

                <label>
                    <ButtonAdvance>Criar Cadastro</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default CreateAccount;