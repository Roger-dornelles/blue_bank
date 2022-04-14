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
                    <Link to='/conta_corrente' className="balance">
                        <p>Saldo Atual</p>
                        <span>R$ 2.557,45</span>
                    </Link>

                    <Link to='/cartao_credito' className="credit_card">
                        <p>Cartão de Crédito</p>
                        <span>Limite Disponivel</span>
                        <span>R$ 3.115,09</span>
                    </Link>

                    <Link to='/emprestimo' className="loan">
                        <p>Emprestimo</p>
                        <span>
                            Precisando de dinheiro?<br />
                            podemos ajudar.
                        </span>
                    </Link>

                    <Link to='/pix' className="pix">
                        <p>Pix</p>
                        <span>Deseja transferir ou pagar um boleto</span>
                    </Link>

                    <Link to='/transferencia' className="transfer">
                        <p>Transferencia</p>
                        <span>Deseja fazer uma transferencia de valores</span>
                    </Link>

                    <Link to='/doacao' className="donation">
                        <p>Doar</p>
                        <span>Ajude uma instituição</span>
                    </Link>
                </div>

            </div>
        </Container>
    )
};


export default Dashboard;