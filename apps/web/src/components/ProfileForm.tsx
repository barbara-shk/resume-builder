import React from 'react';
import styled from 'styled-components';

// Form container with more vibrant styling
const FormContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.large};
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
      ${props => props.theme.colors.gradient.start}, 
      ${props => props.theme.colors.gradient.end}
    );
  }
`;

const FormTitle = styled.h2`
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
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 2px;
  }
`;

const FormSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xlarge};
  background: #FAFAFA;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.large};
`;

const SectionTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${props => props.theme.spacing.small};
    width: 20px;
    height: 20px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.small};
  font-weight: 600;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.2);
  }
  
  &::placeholder {
    color: #B8B2C5;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.2);
  }
  
  &::placeholder {
    color: #B8B2C5;
  }
`;

const HelpText = styled.p`
  font-size: 0.85rem;
  color: #8E7CAD;
  margin-top: ${props => props.theme.spacing.small};
  font-style: italic;
`;

const ImportButton = styled.button`
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.gradient.start}, 
    ${props => props.theme.colors.gradient.end}
  );
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.medium};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(142, 68, 173, 0.3);
  
  svg {
    margin-right: ${props => props.theme.spacing.small};
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(142, 68, 173, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(142, 68, 173, 0.4);
  }
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
      <FormTitle>Your Profile</FormTitle>
      
      <FormSection>
        <SectionTitle>Personal Information</SectionTitle>
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
        <SectionTitle>Professional Summary</SectionTitle>
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
      
      <ImportButton>Import from JSON or PDF</ImportButton>
    </FormContainer>
  );
};

export default ProfileForm;