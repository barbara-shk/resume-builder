import React from 'react';
import styled from 'styled-components';
import { CircleOutline, DecoLine, GradientButton } from './ui/GradientComponents'; 

// Form container with minimalist styling
const FormContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xl};
  position: relative;
  overflow: hidden;
`;

const FormTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  margin-top: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.light};
  position: relative;
  display: inline-block;
  letter-spacing: ${props => props.theme.letterSpacing.tight};
`;

const FormSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.small};
  padding: ${props => props.theme.spacing.medium} 0;
  position: relative;
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.large};
  
  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background-color: ${props => props.theme.colors.border};
    margin-right: ${props => props.theme.spacing.medium};
  }
`;

const SectionTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.light};
  margin: 0;
`;

const InputGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.small};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textSecondary};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  transition: ${props => props.theme.transitions.default};
  background-color: transparent;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textLight};
    font-weight: ${props => props.theme.fontWeights.light};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.base};
  min-height: 140px;
  resize: vertical;
  transition: ${props => props.theme.transitions.default};
  background-color: transparent;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textLight};
    font-weight: ${props => props.theme.fontWeights.light};
  }
`;

const HelpText = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textLight};
  margin-top: ${props => props.theme.spacing.small};
  font-style: italic;
`;

const ImportButtonWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: center;
`;

// Interface for our component props
interface ProfileFormProps {
  profileData: {
    name: string;
    email: string;
    phone: string;
    summary: string;
  };
  onChange: (field: string, value: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profileData, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <FormContainer>
      <CircleOutline 
        size="60px" 
        position={{ top: '30px', right: '30px' }} 
      />
      <DecoLine 
        length="80px"
        position={{ bottom: '40px', left: '20px' }}
        rotate="-30deg"
      />
      
      <FormTitle>Build your profile</FormTitle>
      
      <FormSection>
        <SectionTitleWrapper>
          <SectionTitle>Personal Information</SectionTitle>
        </SectionTitleWrapper>
        
        <InputGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            placeholder="John Smith"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            placeholder="john.smith@example.com"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
          />
        </InputGroup>
      </FormSection>
      
      <FormSection>
        <SectionTitleWrapper>
          <SectionTitle>Professional Summary</SectionTitle>
        </SectionTitleWrapper>
        
        <InputGroup>
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            id="summary"
            name="summary"
            value={profileData.summary}
            onChange={handleChange}
            placeholder="Write a brief summary of your professional background and key qualifications..."
          />
          <HelpText>
            A concise summary highlighting your expertise and career goals (150-200 words recommended).
          </HelpText>
        </InputGroup>
      </FormSection>
      
      <ImportButtonWrapper>
        <GradientButton>
          Import from JSON or PDF
        </GradientButton>
      </ImportButtonWrapper>
    </FormContainer>
  );
};

export default ProfileForm;