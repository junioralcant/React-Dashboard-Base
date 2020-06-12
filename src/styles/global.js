import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@400;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #EFF3F6;
        color: #000;
        font-family: 'Ubuntu', sans-serif;
        text-rendering: optimizeLegibility !important;  
        -webkit-font-smoothing: antialiased !important;
    }

    html, body, #root {
        height: 100%;
    }
    input, button {
        font-family: 'Ubuntu', sans-serif;
    }
    button {
        cursor: pointer;
    }
`;
