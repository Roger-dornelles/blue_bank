import React, { useState } from 'react';
import { Container } from './styled';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

// icons
import { MdPerson } from "react-icons/md";

const CreateAccount = ()=>{

    const [ name, setName ] = useState('');
    const [ warning, setWarning ] = useState('');

    const handleCreateAccount = (e)=>{
        e.preventDefault();
        try{

            if(name.length === 0){
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
                    

                }else{
                    setWarning('Nome Invalido.');
                    setTimeout(()=>{
                        setWarning('');
                    },2700);
                }

            }

        }catch(error){
            console.log(error)
            setWarning('Ocorreu um erro tente novamente mais tarde.');
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