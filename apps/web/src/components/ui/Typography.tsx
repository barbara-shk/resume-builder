// Typography.tsx
import styled from 'styled-components';

// Display heading - used for major sections, similar to the "Not all funds are created equal" text
export const DisplayHeading = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 1.1;
  letter-spacing: ${props => props.theme.letterSpacing.tight};
  margin-bottom: ${props => props.theme.spacing.large};
  position: relative;
  max-width: 700px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

// Section heading - used for secondary headings
export const SectionHeading = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.regular};
  letter-spacing: ${props => props.theme.letterSpacing.tight};
  margin-bottom: ${props => props.theme.spacing.medium};
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

// Subtitle text - for supporting headings
export const Subtitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.medium};
  max-width: 600px;
  line-height: ${props => props.theme.lineHeights.normal};
`;

// Body text with the understated style from the design
export const BodyText = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: ${props => props.theme.lineHeights.loose};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

// Caption text for smaller, secondary information
export const Caption = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.small};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
`;

// Text with a gradient effect
export const GradientText = styled.span`
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.gradient.start} 0%,
    ${props => props.theme.colors.gradient.end} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

// Text with a horizontal line beside it (like in the design)
export const LinedText = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing.large} 0;
  
  &::before {
    content: '';
    height: 1px;
    width: 60px;
    margin-right: ${props => props.theme.spacing.medium};
    background-color: ${props => props.theme.colors.border};
  }
`;

// Modern styled link
export const TextLink = styled.a`
  color: ${props => props.theme.colors.text};
  position: relative;
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
