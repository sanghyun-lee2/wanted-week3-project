import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    background: #f2f2f2;
  }
`;

export const searchWrap = styled.div`
   text-align: center;
   width: 50%;
   position: absolute;
   top: 20%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
