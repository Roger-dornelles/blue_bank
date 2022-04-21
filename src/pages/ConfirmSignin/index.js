/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState} from 'react';
import { Container } from './styled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//helpers
import { doLoggin } from '../../helpers/AuthHandler';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

//icon
import { MdHttps } from "react-icons/md";

// api
import api from '../../api/signin';


const Signin = ()=>{
    const navigate = useNavigate();
    const email = useSelector(state=>state.user.userEmail);

    const [ password, setPassword ] = useState('');
    const [ warning, setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');

    const onclick = (e)=>{
        e.preventDefault();
    };

    const handleConfirmSignin = async(e)=>{
        e.preventDefault();
        if(password.length >= 6){
            let json = await api.signin(email,password);

            for(let i in json){

                if(json[i] === 'E-mail invalido...'){
                    setWarning(json[i]);

                    setTimeout(()=>{
                        navigate('/signin');
                    },2700);

                }else if(json[i] === 'Senha invalida...'){
                    setWarning(json[i]);

                    setTimeout(()=>{
                        setWarning('');
                    },2700);
                }else{
                    doLoggin(json.token,json.id);
                    setSuccess("Logado com sucesso...");

                    setTimeout(()=>{
                        navigate('/dashboard');
                        window.location.reload('/dashboard');
                        
                    },2500);
                };

            };
        }else{
            setWarning('Digite sua senha de 6 ou mais caracteres.');
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
                    { success && <p className="success">{success}</p>}
                </label>
                <label>
                    <ButtonAdvance onClick={onclick}>Login</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default Signin;