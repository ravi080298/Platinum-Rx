import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0070f3",
    primaryDark: "#005bb5",
    text: "#111827",
    muted: "#6b7280",
  },
};

export const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    color: ${(props) => props.theme.colors.text};
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; text-decoration: none }
  img { max-width: 100%; display: block }
`;
