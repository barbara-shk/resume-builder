// theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    // Primary colors from your App.tsx
    primary: '#8E44AD', // Rich purple
    secondary: '#2ECC71', // Vibrant green
    accent: '#F39C12', // Warm orange
    
    // Text colors
    text: '#2C3E50', // Dark blue-gray from your App.tsx
    textSecondary: '#555555', // Added for secondary text
    textLight: '#888888', // Added for placeholder text
    
    // Background colors
    background: '#F5F0FF', // Light purple tint from your App.tsx
    cardBg: '#FFFFFF', // White for cards from your App.tsx
    border: '#E8E2F4', // Light purple-gray from your App.tsx (was lightGray)
    
    // Status colors
    success: '#2ECC71', // Using your secondary color
    warning: '#F39C12', // Using your accent color
    error: '#E74C3C', // Added for error states
    
    // Gradient colors preserved from your App.tsx
    gradient: {
      start: '#9C4DF4', // Bright purple
      end: '#5E17EB', // Deeper purple
    }
  },
  
  fonts: {
    body: '"Nunito", sans-serif', // From your App.tsx
    heading: '"Poppins", sans-serif', // From your App.tsx
  },
  
  fontSizes: {
    small: '0.875rem', // 14px
    base: '1rem',      // 16px
    medium: '1.25rem', // 20px
    large: '1.5rem',   // 24px
    xl: '2rem',        // 32px
    xxl: '2.5rem',     // 40px
  },
  
  spacing: {
    xs: '4px',                      // Added for very small spacing
    small: '8px',                   // From your App.tsx
    medium: '16px',                 // From your App.tsx
    large: '24px',                  // From your App.tsx
    xl: '32px',                     // From your App.tsx (was xlarge)
    xxl: '48px',                    // Added for extra large spacing
  },
  
  borderRadius: {
    small: '8px',                   // From your App.tsx
    medium: '12px',                 // From your App.tsx
    large: '16px',                  // From your App.tsx
    circle: '50%',                  // From your App.tsx
  },
  
  shadows: {
    small: '0 2px 8px rgba(142, 68, 173, 0.1)',   // From your App.tsx
    medium: '0 4px 16px rgba(142, 68, 173, 0.15)', // From your App.tsx
    large: '0 8px 24px rgba(142, 68, 173, 0.2)',   // From your App.tsx
  },
  
  breakpoints: {
    mobile: '576px',                // From your App.tsx
    tablet: '768px',                // From your App.tsx
    desktop: '992px',               // From your App.tsx
    wide: '1200px',                 // From your App.tsx
  },
  
  transitions: {
    default: 'all 0.3s ease',       // Added for consistent transitions
    fast: 'all 0.15s ease',         // Added for quick interactions
    slow: 'all 0.5s ease',          // Added for emphasis
  },
};

export default theme;