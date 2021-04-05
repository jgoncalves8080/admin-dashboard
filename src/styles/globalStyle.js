import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body, html, #root {
    height: 100vh;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    /* background: #f2f4f5; */
  }

  body, input, button{
    /* color: #222; */
    /* font-size: 14px; */
    font-family: 'Roboto', sans-serif;
  }
  body {
    /* color: #626262;
    font: 400 0.875rem/1.375rem 'Raleway', sans-serif; */
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
    /* color: #626262; */
  }

  ul{
    list-style: none;
  }

  button {
    cursor: pointer;
  }

 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
