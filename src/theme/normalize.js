/** @format */

import { css } from 'styled-components';
import color from './color';

export default css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font: inherit;
    font-size: 1em;
    outline: none;
  }

  html {
    font-size: 8px;
    /* font-size: 2.225vw;

    @media only screen and (min-width: 420px) {
      font-size: 1.905vw;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 8px;
    } */
  }

  html,
  body {
    height: 100vh;
    background: #648eed36;
    color: ${color.black};
  }

  body {
    font-size: 2rem;
    -webkit-font-smoothing: antialiased;
  }

  body,
  ul,
  ol,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style-type: none;
  }

  svg {
    display: block;
  }

  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;
