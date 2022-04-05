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
import CurrentAccount from './pages/CurrentAccount';
import CreditCard from './pages/CreditCard';
import Loan from './pages/Loan';

import NotFound from './pages/NotFound';

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
            <Route path='/conta_corrente' element={ < CurrentAccount /> } />
            <Route path='/cartao_credito' element={ <CreditCard /> } />
            <Route path='/emprestimo' element={ <Loan /> } />

            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
};

export default routes;