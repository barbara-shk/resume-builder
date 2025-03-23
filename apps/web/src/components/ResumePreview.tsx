import React from 'react';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.large};
  min-height: 500px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.accent}, 
      ${props => props.theme.colors.secondary}
    );
  }
`;

const PreviewTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  margin-top: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40%;
    height: 4px;
    background-color: ${props => props.theme.colors.accent};
    border-radius: 2px;
  }
`;

const ResumeDocument = styled.div`
  border: none;
  padding: ${props => props.theme.spacing.large};
  background-color: white;
  min-height: 500px;
  font-size: 0.9rem;
  position: relative;
  box-shadow: ${props => props.theme.shadows.small};
  border-radius: ${props => props.theme.borderRadius.medium};
  transform: rotate(1deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(0);
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: -10px;
    width: 20px;
    height: 60px;
    background-color: rgba(142, 68, 173, 0.3);
    border-radius: ${props => props.theme.borderRadius.small};
  }
`;

const ResumeName = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.primary};
  letter-spacing: -0.5px;
`;

const ResumeContact = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  color: ${props => props.theme.colors.text};
  font-size: 0.95rem;
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  
  span {
    display: flex;
    align-items: center;
    
    svg {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      color: ${props => props.theme.colors.accent};
    }
  }
`

interface ResumePreviewProps {
  profileData: {
    name: string;
    email: string;
    phone: string;
    summary: string;
  };
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ profileData }) => {
  const hasData = profileData.name || profileData.email || profileData.phone || profileData.summary;
  
  return (
    <PreviewContainer>
      <PreviewTitle>Live Preview</PreviewTitle>
      
      <ResumeDocument>
        {hasData ? (
          <>
            <ResumeName>{profileData.name || 'Your Name'}</ResumeName>
            
            <ResumeContact>
              {profileData.email && (
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.5L12 13 4 7.5V18h16V7.5zm0-2H4v.17L12 10l8-4.33V5.5z"/>
                  </svg>
                  {profileData.email}
                </span>
              )}
              
              {profileData.phone && (
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.897 13.897 0 0 0 4 1.205c.139.02.322.041.55.064a.5.5 0 0 1 .449.498z"/>
                  </svg>
                  {profileData.phone}
                </span>
              )}
            </ResumeContact>
            
            <ResumeSummary>
              <SectionHeading>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                Professional Summary
              </SectionHeading>
              {profileData.summary ? (
                <p>{profileData.summary}</p>
              ) : (
                <PlaceholderText>Your professional summary will appear here as you type it in the form.</PlaceholderText>
              )}
            </ResumeSummary>
            
            <div>
              <SectionHeading>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 5h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1V3a1 1 0 1 1 2 0v2zm0 2v2h13V7H7zm0 4v2h13v-2H7zm0 4v2h13v-2H7z"/>
                </svg>
                Work Experience
              </SectionHeading>
              <PlaceholderText>Your work experience details will appear here once added. This section will showcase your job history, responsibilities, and achievements.</PlaceholderText>
            </div>
          </>
        ) : (
          <EmptyPreview>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"/>
            </svg>
            <p>Fill out your profile to see your resume come to life!</p>
          </EmptyPreview>
        )}
      </ResumeDocument>
    </PreviewContainer>
  );
};

export default ResumePreview;