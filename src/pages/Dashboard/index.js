import { useSelector } from 'react-redux';
import { Container } from './styled';

const Dashboard = ()=>{
    const name = useSelector(state=>state.user.name);

    return (
        <Container>
            <h2>Painel Administrativo</h2>
            <p>Ola {name}</p>
        </Container>
    )
};


export default Dashboard;