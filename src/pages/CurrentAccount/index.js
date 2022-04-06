import React from 'react';

import { Container } from './styled';

// components
import ButtonBacks from '../../components/ButtonBacks';

const CurrentAccount = ()=>{

    return (
        <Container>
            <ButtonBacks />
            <h2>Conta Corrente</h2>
            <p>saldo em conta</p>
            <span>R$ 2.557,45</span>
        </Container>
    )
};

export default CurrentAccount;