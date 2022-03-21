import {Route,Routes} from 'react-router-dom';


// pages
import Home from './pages/Home';
import RegisterEmail from './pages/RegisterEmail';

const routes = ()=> {

    return (

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/register' element={ <RegisterEmail /> } />
        </Routes>
    )
};

export default routes;