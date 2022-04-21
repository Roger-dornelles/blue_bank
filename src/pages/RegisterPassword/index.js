import React, { useState } from 'react';
import { Container } from './styled';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

//icon
import { MdHttps } from "react-icons/md";

const RegisterPassword = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ password, setPassword ] = useState('');
    const [ warning, setWarning ] = useState('');

    const handleSubmitPassword = (e)=>{
        e.preventDefault();

        try{

            if(password.length === 0) {
                setWarning('Senha Obrigatorio');
                setTimeout(()=>{
                    setWarning('');
                },2700);
            }else if(password.length < 6){
                setWarning('Senha Invalida.');
                setTimeout(()=>{
                    setWarning('');
                },2700);
            }else{
                
                dispatch({
                    type:'CREATE_PASSWORD',
                    payload:{password}
                });

                setTimeout(()=>{
                    navigate('/createAccount');
                },2700);
                
            }
        }catch(error){
            setWarning('Ocorreu um erro tente novamente mais tarde.');
        }
    }

    return(
        <Container>
            <h2>Precisamos só de mais algumas informações.</h2>
            <p>Agora você precisa de uma senha para ter acesso a sua conta.</p>
            <span>Digite uma senha</span>

            <form onSubmit={handleSubmitPassword}>
                <label>
                    <MdHttps /><input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
                    {!warning && <p style={{fontSize:'14px'}}>Senha precisa ter 6 ou mais caracteres.</p>}
                    {warning && <p>{warning}</p>}
                </label>

                <label>
                    <ButtonAdvance>Avançar</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default RegisterPassword;