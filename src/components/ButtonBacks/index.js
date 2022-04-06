import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './styled';
import { FaArrowLeft } from "react-icons/fa";

const ButtonBacks = ()=>{

    return(
        <Button>
            <Link to='/dashboard'><FaArrowLeft /></Link>
        </Button>
    )
}

export default ButtonBacks;