import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }

    body {
        margin: 0;

        background-color:  #0F1624;
        color: #e4e2e2;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`