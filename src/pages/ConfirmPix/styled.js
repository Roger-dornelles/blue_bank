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

            svg{
                position: absolute;
                font-size:1.7em;
                margin-top: -5px;
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

    .button{
        width: 20%;
        display: flex;

        a{
            width: 70%;
            margin: auto;
            text-decoration: none;
            margin-top:180px;
            background-color: #ebebeb;
            color:#6e6e6e;
            border: 0;
            border-radius: 7px;
            font-size:1.2em;
            padding: 7px;
            cursor: pointer;
            text-align: center;

                &:hover{
                    background-color: #d3d3d3;
                    color:#616161;
                }
        }
    }

`;