import styled from 'styled-components';

export const PreviewWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PreviewContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xl};
  min-height: 600px;
  position: relative;
  z-index: 1;
`;

export const PreviewTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  margin-top: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.light};
  position: relative;
  display: inline-block;
  letter-spacing: ${props => props.theme.letterSpacing.tight};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 1px;
    background-color: ${props => props.theme.colors.border};
  }
`;

export const ResumeDocument = styled.div`
  border: none;
  padding: ${props => props.theme.spacing.large};
  background-color: white;
  min-height: 500px;
  font-size: ${props => props.theme.fontSizes.base};
  position: relative;
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.borderRadius.small};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

export const ResumeName = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.light};
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text};
  letter-spacing: ${props => props.theme.letterSpacing.tight};
`;

export const ResumeContact = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.small};
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  
  span {
    display: flex;
    align-items: center;
    
    svg {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const ResumeSummary = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.base};
    line-height: ${props => props.theme.lineHeights.loose};
    font-weight: ${props => props.theme.fontWeights.light};
  }
`;

export const ResumeSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const ResumeSectionHeading = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.small};
  display: flex;
  align-items: center;
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    color: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1px;
    background-color: ${props => props.theme.colors.border};
    margin-left: ${props => props.theme.spacing.small};
  }
`;

export const PlaceholderText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.light};
  margin: ${props => props.theme.spacing.small} 0;
  padding-left: ${props => props.theme.spacing.medium};
  border-left: 1px solid ${props => props.theme.colors.border};
`;

export const EmptyPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.textLight};
  
  svg {
    width: 64px;
    height: 64px;
    margin-bottom: ${props => props.theme.spacing.medium};
    color: ${props => props.theme.colors.border};
  }
  
  p {
    font-size: ${props => props.theme.fontSizes.medium};
    max-width: 300px;
    margin: 0 auto;
    font-weight: ${props => props.theme.fontWeights.light};
    line-height: ${props => props.theme.lineHeights.loose};
  }
`;