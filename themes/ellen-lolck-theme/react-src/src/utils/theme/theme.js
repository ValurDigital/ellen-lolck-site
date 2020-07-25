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
  }
`;

export const theme = {
  colors,
  fontSizes,
  padding,
};
