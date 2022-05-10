import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

import { mask,unMask } from 'remask';

// component 
import ButtonBacks from '../../components/ButtonBacks';

// api
import apiBanks from '../../api/Banks';
import apiTransfer from '../../api/Transfer';

const Transfer = ()=>{
    const navigate = useNavigate();

    const maskAgency = ['999','9999','9999-9'];
    const maskAccount = ['9999-9','999999-9','9999999-9','99999999-9','99999999999-9'];
    const maskCpf = ['999.999.999-99'];
    const maskValue = ['9,99','99,99','999,99','9.999,99','99.999,99','999.999,99'];

    const [ typeAccount, setTypeAccount ] = useState('');
    const [ banks, setBanks ] = useState('');
    const [ bank, setBank ] = useState('');
    const [ agency, setAgency ] = useState('');
    const [ account, setAccount ] = useState('');
    const [ value, setValue ] = useState('');
    let [ name, setName ] = useState('');
    const [ document, setDocument ] = useState('');

    const [ warning, setWarning ] = useState('');
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    useEffect(()=>{
        const displayBanks = async ()=>{
            try{

                let json = await apiBanks.banks();
                if (json.bank){
                    setBanks(json.bank)
                }
            }catch(error){
                setWarning('Ocorreu um erro tente novamente mais tarde.');
                setTimeout(()=>{
                    setWarning('');
                },2700);
            };
        };
        displayBanks();
    },[]);

    const handleSubmitForm = async(e)=>{
        e.preventDefault();
        
        try{
            
            if(typeAccount && banks && bank && agency && account && value && document && name){

                let isNameValid = '';
                if(name.length < 2){
                    setWarning('Informar um nome valido.');
                    setTimeout(()=>{
                        setWarning('');
                    },2700);
                    return;

                }else{

                    // validar nome somente caracteres.
                    name = name.toLowerCase();
                    let regex =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
                    isNameValid = name.match(regex);
                    
                    if(isNameValid === null){
                        setWarning('Nome invalido,  Somente caracteres.');
                        setTimeout(()=>{
                            setWarning('');
                        },2700);
                        return;
                    }else{
                        isNameValid = isNameValid[0];
                    };
                    //------------------------------------------------------------
                }

                if(agency.length < 3){
                    setWarning('Codigo da agencia incorreto.');
                    setTimeout(() => {
                        setWarning('');
                    },2700);
                    return;
                };

                if(account.length < 5){
                    setWarning('Conta invalida.');
                    setTimeout(() => {
                        setWarning('');
                    },2700);
                    return;
                }

                if(document.length < 14 ){
                    setWarning('Cpf invalido.');
                    setTimeout(() => {
                        setWarning('');
                    },2700);
                    return;
                };

                if(value.length < 4){
                    setWarning('Informar um valor Valido.');
                    setTimeout(() => {
                        setWarning('');
                    },2700);
                    return;
                }
                
                if(typeAccount && banks && bank && agency && account && value && document && isNameValid){
                    let json = await apiTransfer.transfer(
                        value, 
                        account, 
                        bank, 
                        typeAccount, 
                        agency, 
                        isNameValid,
                        document
                    );
                    
                    if(json){
                        setSuccess(json);
                        setTimeout(()=>{
                            navigate('/dashboard');
                            setSuccess('');
                        },2700);
                    }else{
                        setWarning(json.error);
                        setTimeout(()=>{
                            setWarning('');
                        },2700);
                    }
                    
                }
                
            }else{
    
                setWarning('Preencha todos os campos.');
                setTimeout(()=>{
                    setWarning('');
                },2700);
    
            }

        }catch(error){
            console.log('ERROR ', error)
            setError('Ocorreu um erro tente novamente mais tarde.');
            setTimeout(()=>{
                setError('');
            },2700);
        };
    };

    return(

        <Container>
            <ButtonBacks />
            <h2>Transferencia</h2>

            <form onSubmit={handleSubmitForm}>
                {warning && <span className='warning'>{warning}</span>}
                {error && <span className='error'>{error}</span>}
                {success && <span className='success'>{success}</span>}
                <div className='container'>
                    <label>
                        Banco:
                        <select onClick={e=>setBank(e.target.value)}>
                            <option></option>
                            {banks && banks.map((item)=>{
                                return (
                                    <option key={item.id}  value={item.bank}>{item.bank}</option>
                                )
                            })}
                        </select>
                    </label>

                    <label>
                        Agencia:
                        <input type="text" value={agency} onChange={e=>setAgency(mask(unMask(e.target.value), maskAgency))}/>
                    </label>
                </div>

                <label>
                        Tipo de Conta:
                        <select onClick={e=>setTypeAccount(e.target.value)} >
                        <option></option>
                            <option value="corrente">Conta Corrente</option>
                            <option value="poupança">Conta Poupança</option>

                        </select>
                    </label>

                <label>
                    Conta Destino:
                    <input type="text" value={account} onChange={e=>setAccount(mask(unMask(e.target.value),maskAccount))} />
                </label>

                <label>
                    Nome Favorecido:
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} />
                </label>

                <label>
                    Cpf Favorecido:
                    <input type="text" value={document} onChange={e=>setDocument(mask(e.target.value,maskCpf))} />
                </label>

                <label>
                    Valor da Transferencia:
                    <input type="text" value={value} onChange={e=>setValue(mask(unMask(e.target.value), maskValue))} />
                </label>
                
                <label>
                    <button type="submit">Transferir</button>
                </label>
            </form>
        </Container>
    )
};

export default Transfer;