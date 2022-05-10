import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #73C2FF;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size:16px;

    h2{
        margin-top:150px;
    }

    p{
        font-size:1.2em;
        margin-top:50px;
        margin-bottom:10px;
    }

    span{
        font-size:1em;
    }

    .warning{
        position: absolute;
        color: #bb0000;
    }

    .container-info{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top:50px;

        .description-pix{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 10px 0;
        }
    }
`;