import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from './styled';

// icon
import { FaUserAlt } from "react-icons/fa";
const ConfirmPix = ()=>{
    const navigate = useNavigate();

    const [ value, setValue ] = useState('');
    const [ warning, setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');

    const handleSubmitConfirmPix = (e)=>{
        e.preventDefault();

        try{
            if(value){
                setSuccess('Pix realizado com sucesso.');
                setTimeout(()=>{
                    setSuccess('');
                    navigate('/dashboard');
                },2700);
            }else{
                setWarning('Digite o PIX de destino.');
                setTimeout(()=>{
                    setWarning('');
                },2700);
            }
        }catch(err){
            setWarning('Ocorreu um erro tente mais tarde.');

        }
    }

    return (
        <Container>
            <h2>Ok, agora digite para quem você deseja transferir.</h2>

            <p>Digite o Pix de destino</p>

            <form onSubmit={handleSubmitConfirmPix}>
                <label>
                    <FaUserAlt /><input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
                    {warning && <span>{warning}</span>}
                    {success && <span style={{ color:'#00a82b'}}>{success}</span>}

                </label>
                <label>
                    <button type="submit">Transferir</button>
                </label>
            </form>
        </Container>
    )
};

export default ConfirmPix;