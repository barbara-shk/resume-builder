import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
    font-size: 16px;
    line-height: ${props => props.theme.lineHeights.normal};
  }
  
  body {
    font-family: ${props => props.theme.fonts.body};
    font-weight: ${props => props.theme.fontWeights.regular};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.light};
    letter-spacing: ${props => props.theme.letterSpacing.tight};
    line-height: ${props => props.theme.lineHeights.tight};
    margin-bottom: ${props => props.theme.spacing.medium};
  }
  
  h1 {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
  
  h2 {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  
  h3 {
    font-size: ${props => props.theme.fontSizes.large};
  }
  
  p {
    margin-bottom: ${props => props.theme.spacing.small};
    line-height: ${props => props.theme.lineHeights.loose};
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: ${props => props.theme.transitions.fast};
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  
  button {
    font-family: ${props => props.theme.fonts.body};
    font-weight: ${props => props.theme.fontWeights.medium};
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  input, textarea, select {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.base};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.small};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.small};
    background-color: ${props => props.theme.colors.cardBg};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.accent};
    }
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .text-right {
    text-align: right;
  }
  
  .hidden {
    display: none !important;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  /* Responsive helpers */
  .mobile-only {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: none !important;
    }
  }
  
  .desktop-only {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none !important;
    }
  }
`;

export default GlobalStyles;