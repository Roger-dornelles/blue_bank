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
    
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top:150px;
        
        p{
            font-size:1.3em;
            line-height:33px;
        }

        
        .select{
            width:70%;
            margin: auto;
            margin-top:50px;

            span{
                text-align: center;
                font-size: 1.2em;
            }

            select{
                width:100%;
                border-radius:6px;
                padding: 7px;
                outline: none;
                border: none;
                margin: auto;
                font-size:1.1em;
                margin-top:20px;
    
                option{
                    text-align: center;
                }
            }
            .select-warning{
                position: absolute;
                margin-top:5px;
                font-size: 1.1em;
                color: #bb0000;
            }
        }


        form{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 90px;

            label{
                display: flex;
                flex-direction: column;
                margin: auto;
                width: 70%;

                input{
                    border: none;
                    border-bottom: 1px solid #fff;
                    background-color: #73C2FF;
                    margin-bottom: 50px;
                    outline: none;
                    font-size: 1.1em;
                    color: #fff;
                    margin-top: 20px;
                }

                span{
                    position: absolute;
                    margin-top:80px;
                    font-size: 1.1em;
                    color: #bb0000;
                }


                button{
                    padding: 10px;
                    font-size:1.1em;
                    border-radius: 6px;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    background-color: #40aeff;
                    color: #fff;
                    margin-top:30px;

                    &:hover{
                        background-color: #2ba5ff;
                    }
                }
            }
        }
    }
`;