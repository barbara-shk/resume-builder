import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import ProfileForm from './components/ProfileForm';
import ResumePreview from './components/ResumePreview';
import theme from './style/theme';

// Main container for the application
const AppContainer = styled.div`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

// Content container
const ContentContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.large};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const FormSection = styled.section`
  flex: 1;
  min-width: 0; // Prevents flex items from overflowing
`;

const PreviewSection = styled.section`
  flex: 1;
  min-width: 0;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none; // Hide on mobile initially
  }
`;

const MobilePreviewButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: bold;
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.large};
  width: 100%;
  display: none;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.theme.colors.gradient.end};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

function App() {
  // This will hold our user profile data
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    // We'll expand this as we develop more features
  });
  
  // State to control mobile preview visibility
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  // Handler for form input changes
  const handleProfileChange = (field: string, value: string) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <ContentContainer>
          <FormSection>
            <ProfileForm 
              profileData={profileData} 
              onChange={handleProfileChange} 
            />
            <MobilePreviewButton onClick={() => setShowMobilePreview(!showMobilePreview)}>
              {showMobilePreview ? 'Hide Preview' : 'Show Preview'}
            </MobilePreviewButton>
          </FormSection>
          <PreviewSection style={{ display: showMobilePreview ? 'block' : undefined }}>
            <ResumePreview profileData={profileData} />
          </PreviewSection>
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;