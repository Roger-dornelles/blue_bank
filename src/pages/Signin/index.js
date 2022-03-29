import React, { useState } from 'react';
import { Container } from './styled';

import { useNavigate } from 'react-router-dom';

// components
import ButtonAdvance from '../../components/ButtonAdvance';


const Signin = ()=>{
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ warning, setWarning ] = useState(false);

    const handleSubmitSignin = (e)=>{
        e.preventDefault();

        if(email){
            navigate('/confirm_signin');
        }else{

            setWarning('Digite seu Email.');
            setTimeout(()=>{
                setWarning('');
            },2700);
        }
    }

    return(
        <Container>
            <h2>Bem vindo novamente.</h2>
            <p>Para acessar sua conta digite seu email.</p>

            <form onSubmit={handleSubmitSignin}>
                <label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    {warning && <p>{warning}</p>}
                </label>
                <label>
                    <ButtonAdvance>Acessar</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default Signin;