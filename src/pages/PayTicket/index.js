import React,{ useState } from 'react';

import { Container } from './styled';

// icon
import { FaBarcode } from "react-icons/fa";

//component
import ButtonBacks from '../../components/ButtonBacks';

// remask (mascara input )
import { mask } from 'remask';

const PayTicket = ()=> {
    const pattern = ['99999.99999 99999.999999 99999.999999 9 99999999999999']

    const [ value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');

    const handleConfirmPay = (e)=>{
        e.preventDefault();

        
        if(value.length >= 52){
            setSuccess('Pagamento efetuado...');

            setTimeout(()=>{
                setSuccess('');
                setValue('');
            },2700);

        }else{
            setWarning('Código de barras incorreto...');
            setTimeout(() => {
                setWarning('');
            }, 2700);
        }
    }

    return(
        <Container>
            <ButtonBacks />
            <h2>Pagar Boleto</h2>

            <span>Digite o código de barras</span>

            <form onSubmit={handleConfirmPay}>
                <label>
                    <FaBarcode /><input type="text" value={value} onChange={e=>setValue(mask(e.target.value, pattern))} />
                    {success && <span style={{color:'#009f00'}}>{success}</span>}
                    {warning && <span style={{color:'#d70000'}}>{warning}</span>}
                </label>
                <label>
                    <button type="submit">Pagar</button>
                </label>
            </form>
        </Container>
    )
};


export default PayTicket;