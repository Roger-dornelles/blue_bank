import React,{ useState } from 'react';
import { Container } from './styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

// react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

//helpers
import SchemaEmail from '../../helpers/SchemaEmail';

// icons 
import { MdEmail } from "react-icons/md";

const RegisterEmail = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ warning, setWarning ] = useState('');
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SchemaEmail)
    });
    const onSubmit = (data) =>{

        try{
            if(data.email){
                dispatch({
                    type:'CREATE_EMAIL',
                    payload: { email: data.email}
                });
    
                setTimeout(()=>{
                    navigate('/registerCpf');
                },2700);
            }
        }catch(err){
            setWarning('Ocorreu um erro tente novamente mais tarde.');
            setTimeout(()=>{
                setWarning('');
            },2700)
        }
        

        
    };

    return(
        <Container>
            <h2>Vamos começar</h2>
            <p>Para começarmos precisamos de um Email.</p>

            <span>Digite seu Email.</span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <MdEmail /><input {...register("email")} />
                    <p>{errors.email?.message}</p>
                    {warning && <p>{warning}</p>}
                </label>
                <label>
                    <ButtonAdvance>Avançar</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default RegisterEmail;