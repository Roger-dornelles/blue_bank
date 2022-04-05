import React, { useState } from 'react';
import { Container } from './styled';

import { useNavigate } from 'react-router-dom';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

//icon
import { MdHttps } from "react-icons/md";


const Signin = ()=>{
    const navigate = useNavigate();

    const [ password, setPassword ] = useState('');
    const [ warning, setWarning ] = useState(false);

    const handleConfirmSignin = (e)=>{
        e.preventDefault();

        if(password.length >= 8){
            navigate('/dashboard');
        }else{
            setWarning('Digite sua senha.');
            setTimeout(()=>{
                setWarning('');
            },2700);
        }
    }

    return(
        <Container>
            <h2>Agora precisamos da sua senha.</h2>
            <p>Para acessar sua conta digite sua senha.</p>

            <form onSubmit={handleConfirmSignin}>
                <label>
                    <MdHttps /><input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
                    {warning && <p>{warning}</p>}
                </label>
                <label>
                    <ButtonAdvance>Login</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default Signin;