import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #73C2FF;
    color: #fff;
    display:flex;
    align-items: center;
    flex-direction: column;
    font-size:16px;

    .container-itens{
        width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .header{
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top:50px;

            p{
                font-size:1.2em;
            }

            svg{
                font-size:1.5em;
                position: absolute;
                margin-left:-30px;
                margin-top:-5px;
            }

            a{
                color:#fff;
                font-size:1.2em;
            }
    
        }

        .description{
            width: 100%;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
            margin-top:100px;


            .balance, .credit_card, .loan, .pix, .transfer, .donation{
                width:calc(80% / 3);
                min-height: 200px;
                display: flex;
                flex-direction: column;
                padding:7px;
                margin: 20px 0;
                border-radius:7px;
                background-color: #68AFE6;
                text-align:center;
                text-decoration:none;
                color: #fff;


                p{
                    margin-top:20px;
                    font-size:1.3em;
                }

                span{
                    margin-top:20px;
                }

                &:hover{
                    background-color: #53a6e3;
                }
            }
        }
    }
`;