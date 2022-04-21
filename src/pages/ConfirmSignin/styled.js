import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #73C2FF;
    color: #fff;
    font-size:16px;

    p{
        margin-top:50px;
        font-size:1.2em;
    }

    form{
        width:30%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top:50px;

        label{
            width: 100%;
            display: flex;
            align-items: center;

            svg{
                position: absolute;
                font-size:2em;
                margin-top:12px;
            }

            input{
                width:100%;
                background-color: #73C2FF;
                border: 0;
                border-bottom: 1px solid #fff;
                margin-top: 30px;
                outline: none;
                font-size:1.2em;
                color: #fff;
                padding-left: 35px;
            }
            p{
                position: absolute;
                margin-top: 75px;
                color: #b90000;
            }

            .success{
                color: #00aa00;
            }
        }
    } 
`;