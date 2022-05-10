import React, { useState, } from 'react';
import { Container } from './styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

// icons 
import { MdEmail } from "react-icons/md";


const Signin = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState('');
    const [ warning, setWarning ] = useState(false);


    const handleSubmit = ()=>{

        if(email){

            dispatch({
                type:'SAVE_EMAIL',
                payload: { email }
            });
            
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

            <form onSubmit={handleSubmit}>
                <label>
                <MdEmail /><input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    {warning && <p>{warning}</p>}
                </label>
                <label>
                    <ButtonAdvance onClick={onclick}>Acessar</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default Signin;