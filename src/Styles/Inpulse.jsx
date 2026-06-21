import styled from 'styled-components';

 export const Contain= styled.article`
    width:100vw;
    height:100vh;
    background:#FCECD5;
    display:flex;
    justify-content:center;
    align-items:center;

    button{
        position:fixed;
        bottom:5px;
        z-index:2;
    };
    input{
        width:30px;
        height:30px;
        padding:0;
        border: none;
         z-index:2;
    };
  `
  export const Color1 = styled.input`
        position:fixed;  
        top:5px;
        left: 5px;
  `

  export const Color2= styled.input`
        position:fixed;  
        top:40px;
        left: 5px;
  `
