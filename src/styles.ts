import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  /* background-color: #000; */
  .image-wave-top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .image-wave-bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }
  .image-cake {
    flex: 1;
    img{
      width: 90%;
    }
  }
  @media screen and (max-width: 425px){
    /* overflow: visible; */
    .image-cake{
      display: flex;
      align-items: center;
    }
  }
`;

export const Definir = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  h1{
    text-transform: uppercase;
    color: var(--purple);
    font-family: "Poppins", sans-serif;
  }
  .forms{
    display: flex;
    gap: 2rem;
    .labels{
      display: flex;
      flex-direction: column;
      label{
        font-size: 2.2rem;
        color: var(--text-color);
        text-align: center;
        font-family: "Poppins", sans-serif;
      }
      input{
        max-width: 8rem;
        height: 8rem;
        font-size: 4rem;
        border-radius: 2rem;
        border: 2px solid var(--text-color);
        text-align: center;
        color: var(--text-color);
      }
      input:focus-visible{
        outline-color: var(--purple);
      }
      input.input-error{
        border-color: red;
      }
    }
  }
  button{
    padding: 1rem 4rem;
    border-radius: 10px;
    background-color: var(--purple);
    font-size: 20px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    border: 0;
    cursor: pointer;
    transition: all .5s;
  }
  button:hover{
    box-shadow: var(--purple) 0 1px 20px;
    transition-duration: .1s;
  }
  @media screen and (max-width: 425px){
    h1{
      text-align: center;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  padding: 0 4rem;
  z-index: 2;
  @media screen and (max-width: 425px){
    flex-direction: column;
  }
`

export const Timer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0px;
  /* background-color: brown; */

  .title {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: .2rem;
    font-family: 'Poppins', sans-serif;
    color: var(--purple);
    text-transform: uppercase;
  }
  .relogio {
    display: flex;
    flex-direction: column;
    padding: 0;
    /* background-color: blue; */
    width: 90%;
    .titles {
      display: flex;
      /* margin-left: 20px; */
      align-items: center;
      justify-content: space-between;
      th{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 300;
        color: var(--light-grey);
        text-align: center;
        width: 100%;
      }
    }
    .ponteiros {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: auto;
      /* background-color: yellow; */
      --tamanho: 72px;
      td:not(.twopoints){
        /* background-color: red; */
        width: var(--tamanho);
        justify-content: center;
      }
      .numero {
        font-size: var(--tamanho);
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        color: var(--black);
        padding: 10px;
      }
      .ponto {
        display: flex;  
        font-size: var(--tamanho);
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        color: var(--black);
      }
    }
  }
  .botao {
    padding: 18px;
    border-radius: 10px;
    background-color: var(--purple);
    font-size: 18px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    border: 0;
    cursor: pointer;
  }
  .botao:hover{
    box-shadow: var(--purple) 0 1px 20px;
    transition-duration: .1s;
  }

  @media screen and (max-width: 425px){
    .title{
      font-size: 2rem;
      text-align: center;
    }
    .relogio{
      .titles{
        th{
          font-size: 1.6rem;
        }
      }
      .ponteiros{
        --tamanho: 4rem;
      }
    }
    .botao{
      font-size: 1.4rem;
    }
  }
`

export const Comemoracao = styled.div`
  .mensagem{
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    max-width: 57rem;
    gap: 2rem;
    animation: chegada 6s ease;
    h1{
      font-size: 3.2rem;
      text-align: center;
      color: var(--purple);
      text-transform: uppercase;
    }
    p{
      font-size: 2rem;
      text-align: center;
    }
  }
  @keyframes chegada {
    0%{opacity: 0}
    100%{opacity: 1}
  }
  @media screen and (max-width: 425px){
    .mensagem{
      max-width: 425px;
      h1{
        font-size: 2.4rem;
      }
      p{
        font-size: 1.6rem;
      }
    }
  }
`