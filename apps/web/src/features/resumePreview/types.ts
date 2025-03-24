export interface ProfileData {
    name: string;
    email: string;
    phone: string;
    summary: string;
  }
  
  export interface ResumePreviewProps {
    profileData: ProfileData;
  }