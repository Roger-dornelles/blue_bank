import { Link } from 'react-router-dom';

import { Container } from './styled';

// icons 
import { MdAccountCircle } from "react-icons/md";

const Dashboard = ()=>{


    return (
        <Container>
            <div className="container-itens">
                <div className="header">
                    <p><MdAccountCircle />Ola, Bem vindo</p>
                    <Link to='/'>Sair</Link>
                </div>

                <div className="description">
                    <Link to='/' className="balance">
                        <p>Saldo Atual</p>
                        <span>R$ 2.557,45</span>
                    </Link>

                    <Link to='/' className="credit_card">
                        <p>Cartão de Crédito</p>
                        <span>Limite Disponivel</span>
                        <span>R$ 3.115,09</span>
                    </Link>

                    <Link to='/' className="loan">
                        <p>Emprestimo</p>
                        <span>
                            Precisando de dinheiro?<br />
                            podemos ajudar.
                        </span>
                    </Link>

                    <Link to='/' className="pix">
                        <p>Pix</p>
                        <span>Deseja transferir ou pagar um boleto</span>
                    </Link>

                    <Link to='/' className="transfer">
                        <p>Transferencia</p>
                        <span>Deseja fazer uma transferencia de valores</span>
                    </Link>

                    <Link to='/' className="donation">
                        <p>Doar</p>
                        <span>Ajude uma instituição</span>
                    </Link>
                </div>

            </div>
        </Container>
    )
};


export default Dashboard;