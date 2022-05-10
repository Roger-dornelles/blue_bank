import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container } from './styled';

import api from '../../api/pix';

// icon
import { FaUserAlt } from "react-icons/fa";

const ConfirmPix = ()=>{
    const navigate = useNavigate();
    const valuePix = useSelector(state=>state.user.pixValue);

    const [ pixDestination, setPixDestination ] = useState('');
    const [ warning, setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');

    const handleSubmitConfirmPix = async(e)=>{
        e.preventDefault();

        try{
            if(pixDestination){

                if(valuePix){
                    try{
                        let pixdestination = pixDestination
                        let value = valuePix;
                        let description = 'transferencia';
                        let json = await api.transferValues(value,pixdestination,description);
                        if(json){

                            setSuccess(json);
                            setTimeout(()=>{
                                setSuccess('');
                                navigate('/dashboard');
                            },2700);
                        }

                    }catch(error) {
                        setWarning('Ocorreu um erro tente novamente mais tarde.');
                        setTimeout(()=>{
                            setWarning('');
                        },2700);
                    }
                }

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
                    <FaUserAlt /><input type="text" value={pixDestination} onChange={e=>setPixDestination(e.target.value)}/>
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