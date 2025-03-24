import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import ProfileForm from './components/ProfileForm'; 
import { GradientCircle, CircleOutline, DecoLine } from './components/ui/GradientComponents';
import { DisplayHeading, Subtitle } from './components/ui/Typography';
import { ResumePreview } from './features/resumePreview';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';

// Main container for the application
const AppContainer = styled.div`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  overflow-x: hidden;
`;

// Hero section with the introduction
const HeroSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  margin-bottom: ${props => props.theme.spacing.xl};
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

// Content container
const ContentContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const FormSection = styled.section`
  flex: 1;
  min-width: 0; // Prevents flex items from overflowing
  position: relative;
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
  background-color: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.large};
  width: 100%;
  display: none;
  transition: ${props => props.theme.transitions.default};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
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
      <GlobalStyles />
      <AppContainer>
        <Header />
        
        <HeroSection>
          <GradientCircle 
            size="400px" 
            position={{ top: '-200px', right: '5%' }} 
            animate={true} 
          />
          <CircleOutline 
            size="120px" 
            position={{ bottom: '20px', left: '15%' }} 
          />
          <DecoLine 
            length="100px"
            position={{ bottom: '50px', right: '30%' }}
            rotate="-45deg"
          />
          
          <HeroContent>
            <DisplayHeading>
              Not all resumes are created equal; they compete.
            </DisplayHeading>
            <Subtitle>
              Craft a resume that stands out with our AI-powered builder, tailored to match your profile with job requirements.
            </Subtitle>
          </HeroContent>
        </HeroSection>
        
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