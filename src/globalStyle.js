import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body: ${props => props.theme.body};
    color: ${props => props.theme.fontColor}

`