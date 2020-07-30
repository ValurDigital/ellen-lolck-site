import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import { fontFamily, fontSizes } from "./fonts";
import { padding } from "./padding";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing:border-box;
    font-size:${fontSizes.base};
  }
  body{
    margin:0;
    font-family: ${fontFamily.name}, ${fontFamily.type};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  

    .wp-block-group__inner-container{
      display: flex;
      flex-direction: row;
      width: 100%;
      counter-reset: number;
      flex-wrap: wrap;
    }

    .wp-block-quote{
      width:50%; 
      counter-increment: number;
      width: 50%;
      counter-increment: number;
      display: flex;
      padding: 20px;
      flex-direction: column;
       &::before{
         content: counter(number)".";
         font-weight: bold;
         font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
         line-height: 1;
         margin-right: 10px;
       }
       p{
        display: flex;
        flex-direction:column;
       }
     }
  }
`;

export const theme = {
  colors,
  fontSizes,
  padding,
};
