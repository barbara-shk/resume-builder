import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import ProfileForm from './components/ProfileForm';
import ResumePreview from './components/ResumePreview';

// Define our theme with more vibrant colors
const theme = {
  colors: {
    primary: '#8E44AD', // Rich purple
    secondary: '#2ECC71', // Vibrant green
    accent: '#F39C12', // Warm orange
    background: '#F5F0FF', // Light purple tint
    text: '#2C3E50', // Dark blue-gray
    lightGray: '#E8E2F4', // Light purple-gray
    cardBg: '#FFFFFF', // White for cards
    gradient: {
      start: '#9C4DF4', // Bright purple
      end: '#5E17EB', // Deeper purple
    }
  },
  fonts: {
    body: '"Nunito", sans-serif',
    heading: '"Poppins", sans-serif',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    circle: '50%',
  },
  shadows: {
    small: '0 2px 8px rgba(142, 68, 173, 0.1)',
    medium: '0 4px 16px rgba(142, 68, 173, 0.15)',
    large: '0 8px 24px rgba(142, 68, 173, 0.2)',
  }
};

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
  padding: ${props => props.theme.spacing.xlarge};
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
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.large};
  width: 100%;
  display: none;
  
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
  const handleProfileChange = (field: any, value: any) => {
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