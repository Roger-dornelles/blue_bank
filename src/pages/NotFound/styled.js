import styled from 'styled-components';

import NotFound from '../../assets/images/notFound.jpg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${NotFound});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-size:16px;

    h2{
        margin-top:70px;
        font-size:1.7em;
        color: #73C2FF;
    }
`;