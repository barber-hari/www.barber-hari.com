import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&family=Noto+Sans+KR:wght@100;400&display=swap');
  * {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: inherit;
    font-family: 'Inria Serif', serif;
  }

  html, body {
    background-color: #000;
  }

  body {
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 100%;
    font-style: normal;
    font-weight: 300;
    line-height: 1;
    margin: 0;
    padding: 0;
    background-color: #000000;
    top: 0;
    left: 0;

    @media (max-width: 1023px) {
      min-height: -webkit-fill-available;
    }
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  /* ∞∞ text styling ∞∞ */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  em,
  a,
  b,
  strong {
    font-style: normal;
    font-weight: 300;
  }
  strong {
    font-size: 1.15em;
  }
  small {
    font-size: 0.85em;
  }
  ul,
  ol,
  menu {
    list-style: none;
  }
  sub,
  sup {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  dfn {
    font-style: italic;
  }
  /* ∞∞ form elements ∞∞ */
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
    background: transparent;
    outline: none;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  button,
  select {
    text-transform: none;
    cursor: pointer;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    min-width: 0;
  }
  textarea {
    resize: none;
  }
  /* ∞∞ link styling ∞∞ */
  a {
    display: inline;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  /* ∞∞ hr using box ∞∞ */
  hr {
    border: none;
    box-sizing: border-box;
    height: 0.075rem;
  }
  /* ∞∞ hidden ∞∞ */
  [hidden],
  template {
    display: none;
  }
  /* ∞∞ media specific ∞∞ */
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  /* ∞∞ tables ∞∞ */
  table {
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
  }
  td,
  th {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    text-align: inherit;
  }
  /*====================================================== 
        ∞∞ browser specific ∞∞ 
    */
  /* ∞∞ IE ∞∞ */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }
  a {
    background-color: transparent;
  }
  button {
    overflow: visible;
  }
  html {
    -ms-text-size-adjust: 100%;
  }
  img {
    border: none;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  legend {
    border: none;
    padding: 0;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  textarea {
    overflow: auto;
  }
  /* ∞∞ moz ∞∞ */
  body {
    -moz-osx-font-smoothing: grayscale;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: none;
    padding: 0;
  }
  input {
    line-height: normal;
  }
  /* ∞∞ webkit ∞∞ */
  * {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  html {
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  blockquote {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
  }
  fieldset {
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-before: 0;
    -webkit-padding-start: 0;
    -webkit-padding-end: 0;
    -webkit-padding-after: 0;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    height: auto;
  }
  input[type='search'] {
    -webkit-appearance: textfield;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration,
  progress {
    -webkit-appearance: none;
  }
  .container {
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
`;
