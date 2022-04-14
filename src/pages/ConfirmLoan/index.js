import React,{ useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

// icons
import { FaClipboardList } from "react-icons/fa";

const ConfirmLoan = ()=>{
    const navigate = useNavigate();

    const [ warning, setWarning ] = useState('');
    const [option, setOption ] = useState('');
    const handleConfirmLoan = (e)=>{
        e.preventDefault();

        if(option){
            navigate('/dashboard');
        }else{
            setWarning('Selecione a quantidade de parcelas');

            setTimeout(()=>{
                setWarning('');
            },2750);
        }

    }

    return(
        <Container>
            <h2>Ok, em quantas parcelas você deseja pagar?</h2>
            <p>Selecione o numero de parcelas.</p>

            <form onSubmit={handleConfirmLoan}>
                <label>
                    <FaClipboardList /><select onChange={e=>setOption(e.target.value)}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    {warning && <span>{warning}</span>}
                </label>
                <label>
                    <button type="submit">Contratar</button>
                </label>
            </form>
        </Container>
    )
};

export default ConfirmLoan;