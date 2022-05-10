import React, { useState, useEffect } from 'react';

import { Container } from './styled';

// components
import ButtonBacks from '../../components/ButtonBacks';

// api
import apiCurrentAccount from '../../api/currentAccount';
import apiPix from '../../api/pix';

const CurrentAccount = ()=>{

    const [ value, setValue ] = useState('');
    const [ displayPix, setDisplayPix ] = useState('');

    const [ warning, setWarning ] = useState('');

    useEffect(()=>{
        try{

            const currentAccount = async()=>{
                let json = await apiCurrentAccount.account();
                if(json.initialvalue){
                    setValue(`R$: ${json.initialvalue}`);
                }else{

                    setValue('Limite indisponivel');
                }
            };  
            currentAccount();

        }catch(error){
            setWarning('Ocorreu um erro tente mais tarde...');
            
            setTimeout(()=>{
                setWarning('');
            },2500);
        };


        try{
            const pix = async()=>{
                let json = await apiPix.displayPix();

                if(json){
                    for(let i in json){
                        setDisplayPix(json[i]);
                    }
                }else{
                    setWarning(json)
                }
            };
            pix();
        }catch(error){
            setWarning('Ocorreu um erro tente mais tarde...');
            
            setTimeout(()=>{
                setWarning('');
            },2500);
        }
    },[])

    return (
        <Container>
            <ButtonBacks />
            <h2>Conta Corrente</h2>
            <p>Limite disponivel</p>
            <span> {value}</span>
            {warning && <span className='warning'>{warning}</span>}

            <div className='container-info'>
                {displayPix && 
                    displayPix.map((item,key)=>{
                        return(
                            <div className='description-pix' key={key}>
                                <span>{item.description}</span>
                                <span>R$ {item.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
};

export default CurrentAccount;