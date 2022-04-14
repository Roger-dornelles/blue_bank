import React from 'react';

import { Container } from './styled';

// component 
import ButtonBacks from '../../components/ButtonBacks';

const Transfer = ()=>{


    return(

        <Container>
            <ButtonBacks />
            <h2>Transferencia</h2>

            <form>
                <label>
                    Banco:
                    <input type="text" />
                </label>


                <label>
                    Agencia:
                    <input type="text" />
                </label>
                <label>
                    Conta:
                    <input type="text" />
                </label>


                <label>
                    Valor:
                    <input type="text" />
                </label>

                <label>
                    <button type="submit">Transferir</button>
                </label>
            </form>
        </Container>
    )
};

export default Transfer;