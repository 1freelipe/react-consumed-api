import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  }

  body {
    color: ${colors.primaryColor};
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    color: ${colors.primaryColor};
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.succesColor};
    color: #fff;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: #e74c3c;
  }

  .Toastify__progress-bar--success {
    background: #fff;
  }

  .Toastify__toast--success {
    --toastify-icon-color-success: #fff;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  padding: 30px;
  background: #fff;
  margin: 30px auto;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;
