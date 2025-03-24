import React from 'react';
import { EmptyPreview as StyledEmptyPreview } from './ResumePreview.styles';
import { DocumentIcon } from './Icons';

const EmptyPreview: React.FC = () => {
  return (
    <StyledEmptyPreview>
      <DocumentIcon />
      <p>Fill out your profile to see your resume come to life!</p>
    </StyledEmptyPreview>
  );
};

export default EmptyPreview;