import React from 'react';
import { Button } from './styled';

const ButtonAdvance = ({children,onclick})=>{

    return(
        <Button onClick={onclick}>
            {children}
        </Button>
    )
};

export default ButtonAdvance;