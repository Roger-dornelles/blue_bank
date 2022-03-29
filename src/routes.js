import {Route,Routes} from 'react-router-dom';


// pages
import Home from './pages/Home';
import RegisterEmail from './pages/RegisterEmail';
import RegisterCpf from './pages/RegisterCpf';
import RegisterPassword from './pages/RegisterPassword';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import ConfirmSignin from './pages/ConfirmSignin';

const routes = ()=> {

    return (

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/registerEmail' element={ <RegisterEmail /> } />
            <Route path='/registerCpf' element={ <RegisterCpf /> } />
            <Route path='/registerPassword' element={ <RegisterPassword /> } />
            <Route path='/createAccount' element={ <CreateAccount /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
            <Route path='/signin' element={ <Signin /> } />
            <Route path='/confirm_signin' element={ <ConfirmSignin /> } />
        </Routes>
    )
};

export default routes;