// GradientComponents.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for subtle movement
const floatAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

// Large decorative gradient circle
export const GradientCircle = styled.div<{
  size?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  animate?: boolean;
  zIndex?: number;
}>`
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${props => props.theme.colors.gradient.end} 0%,
    ${props => props.theme.colors.gradient.middle} 50%,
    ${props => props.theme.colors.gradient.start} 100%
  );
  position: absolute;
  top: ${props => props.position?.top || 'auto'};
  right: ${props => props.position?.right || 'auto'};
  bottom: ${props => props.position?.bottom || 'auto'};
  left: ${props => props.position?.left || 'auto'};
  z-index: ${props => props.zIndex || -1};
  opacity: 0.8;
  filter: blur(30px);
  animation: ${props => props.animate ? floatAnimation : 'none'} 15s ease-in-out infinite;
`;

// Thin decorative circle outline
export const CircleOutline = styled.div<{
  size?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  rotate?: string;
  zIndex?: number;
}>`
  width: ${props => props.size || '150px'};
  height: ${props => props.size || '150px'};
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.border};
  position: absolute;
  top: ${props => props.position?.top || 'auto'};
  right: ${props => props.position?.right || 'auto'};
  bottom: ${props => props.position?.bottom || 'auto'};
  left: ${props => props.position?.left || 'auto'};
  transform: ${props => props.rotate ? `rotate(${props.rotate})` : 'none'};
  z-index: ${props => props.zIndex || -1};
`;

// Decorative line
export const DecoLine = styled.div<{
  length?: string;
  thickness?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  rotate?: string;
  zIndex?: number;
}>`
  width: ${props => props.length || '80px'};
  height: ${props => props.thickness || '1px'};
  background-color: ${props => props.theme.colors.border};
  position: absolute;
  top: ${props => props.position?.top || 'auto'};
  right: ${props => props.position?.right || 'auto'};
  bottom: ${props => props.position?.bottom || 'auto'};
  left: ${props => props.position?.left || 'auto'};
  transform: ${props => props.rotate ? `rotate(${props.rotate})` : 'none'};
  z-index: ${props => props.zIndex || -1};
`;

// Section with gradient background
export const GradientSection = styled.section`
  position: relative;
  padding: ${props => props.theme.spacing.large};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.gradient.end}10 0%,
      ${props => props.theme.colors.background} 100%
    );
    z-index: -2;
  }
`;

// Modern button with gradient on hover
export const GradientButton = styled.button`
  background-color: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.base};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
  transition: ${props => props.theme.transitions.default};
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.gradient.start} 0%,
      ${props => props.theme.colors.gradient.end} 100%
    );
    z-index: -1;
    opacity: 0;
    transition: ${props => props.theme.transitions.default};
  }
  
  &:hover {
    color: white;
    border-color: transparent;
    
    &::before {
      opacity: 1;
    }
  }
`;

// Container that can have a gradient circle in the background
interface GradientBackgroundContainerProps {
  children: React.ReactNode;
  showDecoration?: boolean;
}

export const GradientBackgroundContainer: React.FC<GradientBackgroundContainerProps> = ({ 
  children,
  showDecoration = true
}) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {showDecoration && (
        <>
          <GradientCircle 
            size="400px" 
            position={{ top: '-100px', right: '-100px' }} 
            animate={true} 
          />
          <CircleOutline 
            size="200px" 
            position={{ bottom: '50px', left: '30px' }} 
            rotate="15deg" 
          />
          <DecoLine 
            length="120px" 
            position={{ bottom: '100px', right: '40px' }} 
            rotate="-30deg" 
          />
        </>
      )}
      {children}
    </div>
  );
};
