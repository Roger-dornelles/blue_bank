import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

//component
import ButtonBacks from '../../components/ButtonBacks';

import { Container } from './styled';

// remask ( mascara input )
import { mask, unMask } from 'remask';

const Pix = () => {
    const pattern = ['9,99','99,99','999,99','9.999,99','99.999,99','999.999,99'];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');

    const handleConfirmPix = (e)=>{
        e.preventDefault();

        if(value){
            dispatch({
                type:'CREATE_VALUE_PIX',
                payload:{pixValue: value}
            });
            navigate('/confirmar_pix');

        }else{
            setWarning('Digite um valor...');
            setTimeout(()=>{
                setWarning('');
            },2700);
        }

    }

    return(
        <Container>
            <ButtonBacks />
            <h2>Pix</h2>
            <p>Você pode pagar ou transferir usando o Pix.</p>

            <span>Qual valor você deseja transferir?</span>

            <form onSubmit={handleConfirmPix}>
                <label>
                    <b>R$</b><input type="text" value={value} onChange={e=>setValue(mask(unMask(e.target.value),pattern))} />
                    {warning && <span>{warning}</span>}
                </label>
                <label>
                    <button>Avançar</button>
                </label>
            </form>
            <div className='button'>
                <Link to='/pagar_boleto'>Pagar boleto</Link>
            </div>
        </Container>
    )
};

export default Pix;