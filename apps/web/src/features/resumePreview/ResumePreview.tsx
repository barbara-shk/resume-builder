import React from 'react';
import { GradientCircle, CircleOutline } from '../../components/ui/GradientComponents'; 
import { SummaryIcon, ExperienceIcon } from './Icons';
import EmptyPreview from './EmptyPreview';
import ResumeSection from './ResumeSection';
import ResumeContact from './ResumeContact';
import { ResumePreviewProps } from './types';
import {
  PreviewWrapper,
  PreviewContainer,
  PreviewTitle,
  ResumeDocument,
  ResumeName,
  ResumeSummary
} from './ResumePreview.styles';

const ResumePreview: React.FC<ResumePreviewProps> = ({ profileData }) => {
  const hasData = profileData.name || profileData.email || profileData.phone || profileData.summary;
  
  return (
    <PreviewWrapper>
      <GradientCircle 
        size="250px" 
        position={{ top: '-120px', left: '-100px' }} 
        zIndex={0} 
        animate={true}
      />
      <CircleOutline 
        size="80px" 
        position={{ bottom: '100px', right: '40px' }} 
      />
      
      <PreviewContainer>
        <PreviewTitle>Live Preview</PreviewTitle>
        
        <ResumeDocument>
          {hasData ? (
            <>
              <ResumeName>{profileData.name || 'Your Name'}</ResumeName>
              
              <ResumeContact 
                email={profileData.email} 
                phone={profileData.phone} 
              />
              
              <ResumeSummary>
                <ResumeSection
                  title="Professional Summary"
                  icon={<SummaryIcon />}
                  content={profileData.summary && <p>{profileData.summary}</p>}
                  placeholderText="Your professional summary will appear here as you type it in the form."
                />
              </ResumeSummary>
              
              <ResumeSection
                title="Work Experience"
                icon={<ExperienceIcon />}
                placeholderText="Your work experience details will appear here once added. This section will showcase your job history, responsibilities, and achievements."
              />
            </>
          ) : (
            <EmptyPreview />
          )}
        </ResumeDocument>
      </PreviewContainer>
    </PreviewWrapper>
  );
};

export default ResumePreview;