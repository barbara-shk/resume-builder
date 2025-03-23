import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      textSecondary: string;
      textLight: string;
      background: string;
      cardBg: string;
      border: string;
      success: string;
      warning: string;
      error: string;
      gradient: {
        start: string;
        end: string;
      };
    };
    
    fonts: {
      body: string;
      heading: string;
    };
    
    fontSizes: {
      small: string;
      base: string;
      medium: string;
      large: string;
      xl: string;
      xxl: string;
    };
    
    spacing: {
      xs: string;
      small: string;
      medium: string;
      large: string;
      xl: string;
      xxl: string;
    };
    
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      circle: string;
    };
    
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    
    transitions: {
      default: string;
      fast: string;
      slow: string;
    };
  }
}