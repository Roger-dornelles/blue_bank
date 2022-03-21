import styled from 'styled-components';

import photoHome  from '../../assets/images/photoHome.jpg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${photoHome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size:16px;
    font-weight: bold;

    h2{
        margin-top:150px;
    }

    p{
        margin-top:50px;
        font-size:1.2em;
    }

    a{
        font-size:1.1em;
        margin-top:250px;
        margin-bottom: 30px;
        color: #fff;
        letter-spacing: .07rem;
        &:hover{
            color: #a4d1ff;
        }
    }

    a:last-child{
        margin-left: 4px;
    }
    span{
        font-size: 1em;
    }

`;