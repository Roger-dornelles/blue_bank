import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height:100vh;
    background-color: #73C2FF;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size:16px;

    span,p{
        margin-top:50px;
        font-size:1.1em;
    }

    form{
        width:30%;
        display: flex;
        align-items: center;
        flex-direction: column;

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

            button{
                width: 40%;
                cursor: pointer;
                margin: auto;
                margin-top:50px;
                font-size:1.2em;
                background-color: #28a4ff;
                padding: 7px;
                border: 0;
                border-radius: 5px;
                color: #fff;

                &:hover{
                    background-color: #0070c1;
                    transition: background-color linear 1.7s;
                }
            }
        }


    }
`;