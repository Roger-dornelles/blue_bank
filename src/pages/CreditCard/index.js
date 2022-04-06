import React from 'react';

import { Container } from './styled';

import ButtonBacks from '../../components/ButtonBacks';

const CreditCard = ()=>{

    return(

        <Container>
            <ButtonBacks />
            <h2>Cartão de Credito</h2>
            <p>Limite Disponivel</p>
            <span>R$ 2.557,45</span>
        </Container>
    )
};

export default CreditCard;