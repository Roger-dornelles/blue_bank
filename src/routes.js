import {Route,Routes} from 'react-router-dom';

// helpers
import {  isLogged } from './helpers/AuthHandler';


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
import ConfirmLoan  from './pages/ConfirmLoan';
import Pix from './pages/Pix';
import ConfirmPix from './pages/ConfirmPix';
import PayTicket from './pages/PayTicket';
import Transfer from './pages/Transfer';
import Donation from './pages/Donation';
import ConfirmDonation from './pages/ConfirmDonation'

import NotFound from './pages/NotFound';

const routes = ()=> {

    const logged = isLogged();

    return (

        <Routes>

            <Route path='/' element={ <Home /> } />
            <Route path='/registerEmail' element={ <RegisterEmail /> } />
            <Route path='/registerCpf' element={ <RegisterCpf /> } />
            <Route path='/registerPassword' element={ <RegisterPassword /> } />
            <Route path='/createAccount' element={ <CreateAccount /> } />
            <Route path='/signin' element={ <Signin /> } />
            <Route path='/confirm_signin' element={ <ConfirmSignin /> } />
            
            {logged &&
                <>
                    <Route path='/dashboard' element={ <Dashboard /> } />
                    <Route path='/conta_corrente' element={ < CurrentAccount /> } />
                    <Route path='/cartao_credito' element={ <CreditCard /> } />
                    <Route path='/emprestimo' element={ <Loan /> } />
                    <Route path='/contratar_emprestimo' element={ <ConfirmLoan /> } />
                    <Route path='/pix' element={ <Pix /> } />
                    <Route path='/confirmar_pix' element={ <ConfirmPix /> } />
                    <Route path='/pagar_boleto' element={ <PayTicket /> } />
                    <Route path='/transferencia' element={ <Transfer /> } />
                    <Route path='/doacao' element={ <Donation /> } />
                    <Route path='/fazer_doacao' element={ <ConfirmDonation /> } />
                </>
            
            }

            <Route path='*' element={ <NotFound /> } />


        </Routes>
    )
};

export default routes;