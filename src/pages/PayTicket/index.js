import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

// api
import api from '../../api/pix';

// icon
import { FaBarcode, FaFileInvoiceDollar } from "react-icons/fa";

//component
import ButtonBacks from '../../components/ButtonBacks';

// remask (mascara input )
import { mask, unMask } from 'remask';

const PayTicket = ()=> {
    const navigate = useNavigate();

    const pattern = ['99999.99999 99999.999999 99999.999999 9 99999999999999']
    const pattern_value = ['9,99','99,99','999,99','9.999,99','99.999,99','999.999,99'];

    const [ value, setValue ] = useState('');
    const [ barsCodin, setBarsCodin ] = useState('');
    const [ warning, setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');

    const handleConfirmPay = async(e)=>{
        e.preventDefault();

        try{

            if(barsCodin.length === 0 && !value){
                setWarning('Preencha todos os campos');
    
                setTimeout(() => {
                    setWarning('');
                }, 2700);
                return;
            };

            if(barsCodin.length < 54){
                setWarning('Codigo de barras invalido.');
                setTimeout(() => {
                    setWarning('');
                }, 2700);
                return;

            }else if(value.length < 4){
                setWarning('Valor invalido.');
                setTimeout(() => {
                    setWarning('');
                }, 2700);
                return;
            }else{
                let description = 'boleto'
                let json = await api.payment(value,barsCodin,description);
                if(json){
                    setSuccess(json);

                    setTimeout(() => {
                        navigate('/dashboard');
                    },2700);
                };
                
            };
        }catch(error){
            setWarning('Ocorreu um erro tente mais tarde.');
        
        };
    };

    return(
        <Container>
            <ButtonBacks />
            <h2>Pagar Boleto</h2>

            <span>Digite o código de barras e o valor do Boleto.</span>

            <form onSubmit={handleConfirmPay}>
                {success && <span style={{color:'#009f00'}}>{success}</span>}
                {warning && <span style={{color:'#d70000'}}>{warning}</span>}
                <label>
                    Codigo de Barras:
                    <FaBarcode /><input type="text" value={barsCodin} onChange={e=>setBarsCodin(mask(e.target.value, pattern))} />
                </label>
                <label>
                    Valor do Boleto:
                    <FaFileInvoiceDollar /><input type="text" value={value} onChange={e=>setValue(mask(unMask(e.target.value), pattern_value))} />
                </label>
                <label>
                    <button type="submit">Pagar</button>
                </label>
            </form>
        </Container>
    )
};


export default PayTicket;