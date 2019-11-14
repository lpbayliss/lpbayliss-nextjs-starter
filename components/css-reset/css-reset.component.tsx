import { Global, css } from '@emotion/core';

const CSSReset: React.FunctionComponent = () => (
  <Global
    styles={css`
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      html {
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      html,
      body {
        font-family: 'Titillium Web', sans-serif;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Amaranth', sans-serif;
        font-weight: 700;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default CSSReset;
