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

    p, span{
        margin-top:50px;
        font-size:1.2em;
    }

    span{
        margin-top:30px;

        b{
            margin-left: 15px;
        }
    }

    form{
        width:20%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top:70px;

        label{
            width: 100%;
            display: flex;

            b{
                position: absolute;
                font-size:1.3em;
            }

            input{
                width: 100%;
                font-size:1.2em;
                border: 0;
                border-bottom: 1px solid #fff;
                outline: none;
                background-color: #73C2FF;
                color: #fff;
                padding-left: 30px;
            }

            span{
                position: absolute;
                margin-top:25px;
                font-size:1em;
                color: #d70000;
            }

            button{
                width: 70%;
                margin: 0 auto;
                margin-top: 40px;
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