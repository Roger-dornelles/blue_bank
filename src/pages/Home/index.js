import { Link } from 'react-router-dom';

import { Container } from './styled';

const Home = ()=>{

    return (

        <Container>
            <h2>Bem vindo ao Blue Bank</h2>
            <p>A solução que você precisa para o seu dia a dia.</p>

            <Link to='' >Acessar minha conta</Link>

            <span>Você é novo aqui? <Link to='/registerEmail' >Começar</Link></span>
        </Container>
    )
};

export default Home;