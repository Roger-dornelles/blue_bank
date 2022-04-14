import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styled';

// component
import ButtonBacks from '../../components/ButtonBacks';

const Donation = ()=>{


    return(
        <Container>
            <ButtonBacks />
            <h2>Faça uma Doação</h2>
            <div className="description">

                <p>Ajude uma instituição de caridade,
                    a sua contribuição é muito importante
                    pois ela tem muito valor.
                </p>

                <p>
                    A BLUEBANK tem parcerias com algumas intituições
                    de apoio, e precisamos da sua ajuda para poder
                    melhorar a qualidade de vida destas pessoas
                </p>

                <Link to='/fazer_doacao'>Quero Ajudar</Link>
            </div>
        </Container>
    )
};

export default Donation;