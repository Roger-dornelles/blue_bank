import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

// remask (mascara input )
import { mask, unMask } from 'remask';

import ButtonBacks from '../../components/ButtonBacks';


const Loan = ()=>{
    const navigate = useNavigate();

    const pattern = ['9,99','99,99','999,99','9.999,99','99.999,99','999.999,99'];

    const [ value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');
    
    const handleSubmitLoan = (e)=>{
        e.preventDefault();

        try{

            if(value){

                navigate('/contratar_emprestimo');
            }else{
                setWarning('Digite um valor...');

                setTimeout(()=>{
                    setWarning('');
                },2700);
            };

        }catch(err){
            setWarning('Ocorreu um erro tente mais tarde...');
        }
    };


    return (
        <Container>
            <ButtonBacks />
            <h2>Emprestimo</h2>
            <p>Esta com dificuldades ou quer uma grana extra, nós podemos te ajudar.</p>

            <span>Limite Disponivel: <b>R$ 5.575,00</b></span>

            <form onSubmit={ handleSubmitLoan }>
                <label>
                    <b>R$</b><input type="text"  value={value} onChange={e=>setValue(mask(unMask(e.target.value),pattern))} />
                    { warning && <span>{warning}</span>}
                </label>

                <label>
                    <button type="submit">Simular</button>
                </label>
            </form>
        </Container>
    )
};

export default Loan;