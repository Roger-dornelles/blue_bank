import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #73C2FF;
    color: #fff;
    font-size: 16px;

    h2{
        margin-top:150px;
    }

    span{
        margin-top:50px;
        font-size:1.2em;
    }


    form{
        width:31%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top:70px;

        span{
            position: absolute;
            font-size:1.1em;
            margin-top:-350px;
        }

        label{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top:30px;

            svg{
                position: absolute;
                font-size:1.9em;
                margin-top:30px;
            }


            input{
                width: 100%;
                font-size:1.2em;
                border: 0;
                border-bottom: 1px solid #fff;
                outline: none;
                background-color: #73C2FF;
                color: #fff;
                padding-left: 35px;
                margin-top: 20px;
            }

            button{
                width: 50%;
                margin: 0 auto;
                margin-top: 70px;
                background-color: #2fa7ff;
                color:#fff;
                border: 0;
                border-radius: 7px;
                font-size:1.2em;
                padding: 7px;
                cursor: pointer;

                &:hover{
                    background-color: #0092fd;
                }
            }
        }
    }

`;