import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    // New primary colors inspired by the design
    primary: '#FF5C35', // Warm orange-red
    secondary: '#FF8A65', // Lighter orange
    accent: '#FFB599', // Soft peach
    
    // Text colors - more subdued for minimalist aesthetic
    text: '#2D2D2D', // Almost black but softer
    textSecondary: '#5A5A5A', // Medium gray
    textLight: '#909090', // Light gray
    
    // Background colors - light, neutral
    background: '#F8F3EF', // Warm off-white
    cardBg: '#FFFFFF', // Crisp white
    border: '#E5E0DD', // Light warm gray
    
    // Status colors
    success: '#73C3A6', // Muted teal
    warning: '#FFBB66', // Soft amber
    error: '#FF7D7D', // Soft red
    
    // Gradient colors - core of the new design
    gradient: {
      start: '#FF5C35', // Warm orange-red
      middle: '#FF7F51', // Mid-tone orange
      end: '#FFAA80', // Soft peach
    }
  },
  
  fonts: { 
    body: '"Inter", "Helvetica Neue", sans-serif',
    heading: '"Sora", "Helvetica Neue", sans-serif',
  },
  
  fontSizes: {
    small: '0.875rem', // 14px
    base: '1rem',      // 16px
    medium: '1.25rem', // 20px
    large: '1.75rem',  // 28px - slightly larger
    xl: '2.5rem',      // 40px - much larger for impact
    xxl: '3.5rem',     // 56px - for major headings
  },
  
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  spacing: {
    xs: '8px',        // Increased from 4px
    small: '16px',    // Increased from 8px
    medium: '32px',   // Increased from 16px
    large: '48px',    // Increased from 24px
    xl: '64px',       // Increased from 32px
    xxl: '96px',      // Increased from 48px
  },
  
  borderRadius: {
    small: '4px',     // Reduced from 8px - more subtle
    medium: '8px',    // Reduced from 12px
    large: '12px',    // Reduced from 16px
    circle: '50%',    // Unchanged
  },
  
  shadows: {
    small: '0 2px 10px rgba(0, 0, 0, 0.03)',   // More subtle
    medium: '0 4px 20px rgba(0, 0, 0, 0.05)',  // More subtle
    large: '0 8px 30px rgba(0, 0, 0, 0.07)',   // More subtle
  },
  
  breakpoints: {
    mobile: '576px',  // Unchanged
    tablet: '768px',  // Unchanged
    desktop: '992px', // Unchanged
    wide: '1200px',   // Unchanged
  },
  
  transitions: {
    default: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', // Slightly more polished easing
    fast: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',    
    slow: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',    
  },
  
  // New properties for the minimalist design
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
  
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    extraWide: '0.05em',
  },
};

export default theme;