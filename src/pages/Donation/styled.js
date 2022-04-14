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

    .description{
        display: flex;
        flex-direction: column;
        font-size:1.2em;
        width:30%;
        margin-top:80px;

        p{
            text-align: center;
            padding: 20px;
        }

        a{
            width: 50%;
            margin: auto;
            margin-top:60px;
            border: 1px solid #fff;
            color: #fff;
            padding: 10px;
            border-radius: 7px;
            text-align: center;
            text-decoration: none;

            &:hover{
                background-color: #3c9dff;
                border: 1px solid #409fff;
            }
        }
    }

`;