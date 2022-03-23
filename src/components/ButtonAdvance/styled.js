import styled from 'styled-components';

export const Button = styled.button`
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
`;