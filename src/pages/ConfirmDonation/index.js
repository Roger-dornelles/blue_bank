import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

const ConfirmDonation = ()=>{
    const navigate = useNavigate();

    const [ value, setValue ] = useState('');
    const [ institution, setInstitution ] = useState('');
    const [ warning, setWarning ] = useState('');
    const [ warnings, setWarnings] = useState('')
    const [ success, setSuccess ] = useState('');

    const handleConfirmDonations = (e)=>{
        e.preventDefault();

        if(!institution) {
            setWarnings('Selecionar instituição.');

            setTimeout(()=>{
                setWarnings('');
            },2700);
        };

        if(!value) {
            setWarning('Informar valor para doação');

            setTimeout(()=>{
                setWarning('');
            },2700);
        }else if(value === '0' ){
            setWarning('Valor invalido');
            setTimeout(()=>{
                setWarning('');
            },2700);

        }else{
            setSuccess('Doação realizada com sucesso.');
            setTimeout(()=>{
                setSuccess('');
                navigate('/dashboard');
            },2700);

        }

    }

    return (
        <Container>
            <div className='info'>
                <p>
                    Obrigado por ajudar uma instituição,<br/>
                    listamos algumas das instituição que você pode ajudar
                </p>


                <div className='select'>
                    <span>Selecione uma instituição.</span>

                    <select onChange={e=>setInstitution(e.target.value)}>
                        <option value=''>Selecionar</option>
                        <option value='cruz-vermelha'>Cruz Vermelha</option>
                        <option value='santa-casa'>Santa Casa</option>
                    </select>
                    {warnings && <p className='select-warning'>{warnings}</p>}
                </div>


                <form onSubmit={handleConfirmDonations}>
                    <label>
                        <p>Digite o valor da sua doação.</p>
                        <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
                        {warning && <span>{warning}</span>}
                        { success && <span style={{color:'#008a00'}}>{success}</span>}
                    </label>

                    <label>
                        <button type="submit">Doar</button>
                    </label>
                </form>

            </div>
        </Container>
    )
};

export default ConfirmDonation;