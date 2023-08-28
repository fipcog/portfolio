import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";


export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
        line-height: 1.2em;
    }

    body {
        margin: 0;

        background-color: ${theme.colors.primaryBgr};
        color: ${theme.colors.color};
        font-size: 18px;
        font-weight: 500;

        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    main section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBgr};
    }

    h1, h2, h3, h4, h5 {
        font-weight: 600;
    }
`