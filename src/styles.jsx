import styled from "styled-components";

export const Principal = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
` 

export const Div = styled.div`
    background-color: gray;
    width: 400px;
    height: 550px;
    border-radius: 10px;
    border: black 2px solid;
    padding: 10px;
`

export const Tela = styled.div`
    background: white;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    h1{
        font-size: 125px;
    }
`

export const Teclado = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`

export const Botão = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`



