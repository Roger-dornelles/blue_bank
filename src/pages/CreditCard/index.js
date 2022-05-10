import React, { useState, useEffect} from 'react';

import { Container } from './styled';

// components
import ButtonBacks from '../../components/ButtonBacks';

// api
import apiCreditCard from '../../api/creditCard';

//helpers
import getDate from '../../helpers/getDate';

const CreditCard = ()=>{

    const [ value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');
    useEffect(()=>{

        const creditCardLimit = async()=>{
            try{
                let json = await apiCreditCard.creditCardLimit();
                if(json.limit){
                    setValue(json.limit);
                }else{
                    setValue('Limite indisponivel.')
                };

            }catch(error){
                setWarning('Ocorreu um erro tente novamente mais tarde.')
            }
        };
        creditCardLimit();

        const creditCardInvoice = async ()=>{
            try{
                let { monthFormat, year } = await getDate();
                let json = await apiCreditCard.invoices(monthFormat,year);
                console.log('PAGE ', json)
            }catch(error){
                setWarning('Ocorreu um erro tente novamente mais tarde.')
            }

        };
        creditCardInvoice();
    },[]);

    return(

        <Container>
            {warning}
            <ButtonBacks />
            <h2>Cartão de Credito</h2>
            <p>Limite Disponivel</p>
            <span>R$ {value}</span>
        </Container>
    )
};

export default CreditCard;