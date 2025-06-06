import { createGlobalStyle } from "styled-components";
import background from "./bitcoin-4338838_1920.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

*, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: "Lato", sans-serif;
        color: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-image: url("${background}");
        background-attachment: fixed;
        background-size: cover;
        overflow: hidden;
    }
    @media (max-width: 768px) {
        .body {
            background-size: center;
        }
    }
`;