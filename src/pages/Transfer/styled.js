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
        margin-top:100px;
    }

    span{
        margin-top:50px;
        font-size:1.2em;
    }

    form{
        width:31%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        margin-top:70px;
        font-size: 1.2em;
        position: relative;

        .warning, .error, .success{
        position: absolute;
        width: 100%;
        top: -100px;
        text-align: center;
        padding: 3px ;
        font-size:1em;
        
    }

    .warning{
        background-color: #ffff15;
        color: #000;
    }

    .error{
        background-color: #ff0000;
    }

    .success{
        background-color: #00b02d;
        color: #fff;
    }

    .container{
        display: flex;
        width:100%;

        label{
            width: 50%;
            display: flex;
            justify-content: center;
            margin-top:30px;

            select{
                width: 80%;
                background-color: #73C2FF;
                color: #fff;
                border: 0;
                border-bottom: 1px solid #fff;
                outline: none;
                margin-left:12px;
                font-size:.9em;
            }

            input{
                width: 80%;
                font-size:1em;
                border: 0;
                border-bottom: 1px solid #fff;
                outline: none;
                background-color: #73C2FF;
                color: #fff;
                padding-left: 5px;
                margin: auto;

            }

        }
    }

        label{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top:30px;
            text-align: center;

            svg{
                position: absolute;
                font-size:1.9em;
                margin-top:-4px;
            }

            input{
                width: 60%;
                font-size:1em;
                border: 0;
                border-bottom: 1px solid #fff;
                outline: none;
                background-color: #73C2FF;
                color: #fff;
                padding-left: 5px;
                margin: auto;
                margin-top:20px;
            }

            span{
                position: absolute;
                margin-top:25px;
                font-size:1em;
            }

            button{
                width: 50%;
                margin: 0 auto;
                margin-top: 50px;
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
            select{
                width: 60%;
                margin: auto;
                background-color: #73C2FF;
                color: #fff;
                border: 0;
                border-bottom: 1px solid #fff;
                outline: none;
                //margin-left:12px;
                font-size:.9em;

                option {
                    width: 60%;
                    background-color: #fff;
                    color: #000;
                }
            }
        }

    }

`;