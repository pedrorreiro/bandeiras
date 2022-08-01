import styled from 'styled-components';

export const Global = styled.div`
    background-color: ${props => props.theme.body};
    min-height: 100vh;
`

export const Header = styled.header`
    background-color: ${props => props.theme.blocos.body};
    color: ${props => props.theme.color};
    box-shadow: 0px 9px 8px 2px rgba(0,0,0,0.05);
    z-index: 1;
    font-weight: 600;
    padding: 20px 80px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    
    h1 {
        font-size: 1.6rem;
        text-align: center;
        margin: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        h1 {
            margin-bottom: 20px;
        }
    }

`

export const Container = styled.div`
    color: ${props => props.theme.color};
    padding-top: 60px;
    z-index: 0;
    
`

export const Bloco = styled.div`
    background-color: ${props => props.theme.blocos.body};

    margin-bottom: 50px !important;
    margin: 0 50px;
    width: 280px;
    position: relative;
   
    border-radius: 7px;
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.27);
    font-size: 0.7rem;

    @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

    animation: fadeIn 0.5s ease-in-out;

    div {
        color: ${props => props.theme.color};
        font-size: 0.9rem;
    }

    img{
        width: 280px;
        height: 220px;
        border-radius: 7px;
        
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.05);

        transition: all 0.1s ease-in-out;
        
    }

    &:active{
        transform: scale(1);
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
`

export const Descricao = styled.div`
    padding: 20px 25px;
`

export const Toggle = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 550;

    span {
        margin-left: 10px;
    }

    &:hover {
        cursor: pointer;
    }
`

export const Blocos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: center;
        width: auto;
        padding: 0 25px;
        flex-direction: column;
        align-items: center;
    }
`

export const DivBusca = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    margin-bottom: 100px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 50px;
        padding: 0 25px;

    }
`

export const Busca = styled.div`
    background-color: ${props => props.theme.blocos.body};

    * {
        background-color: ${props => props.theme.blocos.body};
        border: 1px ${props => props.theme.blocos.body};
        color: ${props => props.theme.color};
    }

    box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.07);

    width: 500px;
    border-radius: 5px;
    
    
    font-size: 1rem;
    font-weight: 500;

    display: inline-flex;
    align-items: center;

    input{
        width: 80%;
        padding: 20px 20px;
        font-size: 1.1rem;
        opacity: 0.7;
    }

    input:focus{
        outline: none;
        box-shadow: 0 0 0 0;
    }

    @media (max-width: 768px) {

        width: 100%;

        input{
            width: 100%;
        }

    }
`

export const Lupa = styled.div`
    display: inline-block;
    margin-left: 20px;

`

export const Escolha = styled.div`
    display: inline-block;
    color: #fff;
    
    div{
        box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.05);
        width: 200px;
    }

    label, div {
        color: ${props => props.theme.color};   
    }

    div {
        opacity: 0.8;
        background-color: ${props => props.theme.blocos.body};
    }

    @media (max-width: 768px) {

        width: 100%;
        margin-top: 15px;

        div {
            width: 100%;
            margin: 0;
        }

    }
`

export const Up = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    zIndex: 100;
    color: ${props => props.theme.color};

    &:hover {
        cursor: pointer;
    }
`

export const Bandeira = styled.div`
    img{
        width: 100%;
        height: 500px;
    }
`

export const Voltar = styled.div`
    display: inline-flex;
    padding: 10px 35px;
    border-radius: 7px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 60px;
    cursor: pointer;
    font-size: 1rem;
    color: ${props => props.theme.color};
    background: ${props => props.theme.blocos.body};
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
`

export const Info = styled.div`
    display: flex;

    img{
        border-radius: 7px;
    }

    @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

    animation: fadeIn 0.5s ease-in-out;

    @media (max-width: 768px) {
        flex-direction: column;

        img{
            height: 250px;
        }
    }
`

export const InfoDado = styled.span`
    color: ${props => props.theme.secondaryColor};
`

export const Dados = styled.div`
    margin-left: 200px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-left: 0;
        align-items: center;
    }
`

export const Link = styled.a`
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
`