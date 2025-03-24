import React, { ReactNode } from 'react';
import { 
  ResumeSection as StyledResumeSection,
  ResumeSectionHeading,
  PlaceholderText
} from './ResumePreview.styles';

interface ResumeSectionProps {
  title: string;
  icon: ReactNode;
  content?: ReactNode;
  placeholderText: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  title, 
  icon, 
  content, 
  placeholderText 
}) => {
  return (
    <StyledResumeSection>
      <ResumeSectionHeading>
        {icon}
        {title}
      </ResumeSectionHeading>
      {content || <PlaceholderText>{placeholderText}</PlaceholderText>}
    </StyledResumeSection>
  );
};

export default ResumeSection;