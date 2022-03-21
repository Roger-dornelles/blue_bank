import React, { useState } from 'react';
import { Container} from './styled';

// react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import SchemaEmail from '../../helpers/SchemaEmail';

// icons 
import { MdEmail, MdMarkEmailRead } from "react-icons/md";

const RegisterEmail = ()=>{
    const [ isEmail, setIsEmail ] = useState(false)
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SchemaEmail)
    });
    const onSubmit = (data) =>{
        if(data){
            setIsEmail(true);
        
        }else{
            setIsEmail(false);
        }

        
    };

    return(
        <Container>
            <h2>Vamos começar</h2>
            <p>Para começarmos precisamos de um Email.</p>

            <span>Digite seu Email.</span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    {!isEmail ? <MdEmail /> : <MdMarkEmailRead style={{color:'#00ff00'}} /> }
                    <input {...register("email")} />
                    <p>{errors.email?.message}</p>
                </label>
                <label>
                    <button type="submit">Avançar</button>
                </label>
            </form>
        </Container>
    )
};

export default RegisterEmail;