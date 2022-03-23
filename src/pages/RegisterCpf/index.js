import React,{ useState } from 'react';
import { Container } from './styled';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// remask (mascara input )
import { mask } from 'remask';

// components
import ButtonAdvance from '../../components/ButtonAdvance';

// icons 
import { MdOutlinePin } from "react-icons/md";


const RegisterCpf = ()=>{
    const pattern = ['999.999.999-99'];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ cpf, setCpf ] = useState('');
    const [warning, setWarning ] = useState('');

    const handleSubmitCpf = (e)=>{
        e.preventDefault();

        try {
            if(cpf.length === 0){
                setWarning('Cpf Obrigatorio.');
                setTimeout(()=>{
                    setWarning('');
                },2700);
            }else if(cpf.length < 14){
                setWarning('Cpf Invalido.');
                setTimeout(()=>{
                    setWarning('');
                },2700);
            }else{
                dispatch({
                    type:'CREATE_CPF',
                    payload:{cpf}
                });

                setTimeout(()=>{
                    navigate('/registerPassword');
                },2700);
            }
        }catch(error){
            setWarning('Ocorreu um erro tente novamente mais tarde.');
            setTimeout(()=>{
                setWarning('');
            },2700);
        }
    }


    return (
        <Container>
            <h2>Ok, Agora precisamos do seu CPF</h2>
            <p>Digite seu cpf</p>
            <form onSubmit={handleSubmitCpf}>
                <label>
                    <MdOutlinePin /><input type="text" value={cpf} onChange={e=>setCpf(mask(e.target.value,pattern))} />
                    {warning && <p>{warning}</p>}
                </label>
                <label>
                    <ButtonAdvance>Avançar</ButtonAdvance>
                </label>
            </form>
        </Container>
    )
};

export default RegisterCpf;