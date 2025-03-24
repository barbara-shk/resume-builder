import React from 'react';
import { ResumeContact as StyledResumeContact } from './ResumePreview.styles';
import { EmailIcon, PhoneIcon } from './Icons';

interface ResumeContactProps {
  email?: string;
  phone?: string;
}

const ResumeContact: React.FC<ResumeContactProps> = ({ email, phone }) => {
  if (!email && !phone) return null;
  
  return (
    <StyledResumeContact>
      {email && (
        <span>
          <EmailIcon />
          {email}
        </span>
      )}
      
      {phone && (
        <span>
          <PhoneIcon />
          {phone}
        </span>
      )}
    </StyledResumeContact>
  );
};

export default ResumeContact;