import {Route,Routes} from 'react-router-dom';


// pages
import Home from './pages/Home';
import RegisterEmail from './pages/RegisterEmail';
import RegisterCpf from './pages/RegisterCpf';
import RegisterPassword from './pages/RegisterPassword';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';

const routes = ()=> {

    return (

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/registerEmail' element={ <RegisterEmail /> } />
            <Route path='/registerCpf' element={ <RegisterCpf /> } />
            <Route path='/registerPassword' element={ <RegisterPassword /> } />
            <Route path='/createAccount' element={ <CreateAccount /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
        </Routes>
    )
};

export default routes;