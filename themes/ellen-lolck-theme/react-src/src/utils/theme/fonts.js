import { css } from "styled-components";

import myFontURL from "../../assets/fonts/ARIALBD.TTF";

/**
 * Font sizes used in the app
 * Calculate the font sizes from a base of 16px, and multiply by a fixed ratio:
 * Inspo: https://twitter.com/siddharthkp/status/1262038126794551296/photo/1
 */
export const fontSizes = {
  small: "14px",
  base: "16px",
  large: "22px",
  xl: "32px",
};

export const fontFaces = css`
  @font-face {
    font-family: "ArialGeo";
    src: url(${myFontURL}) format("truetype");
    font-style: normal;
  }
`;
export const fontFamily = {
  name: "ArialGeo",
  type: "sans-serif",
};
