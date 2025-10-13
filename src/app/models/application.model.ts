export interface Application {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  appliedFor: string;     // existing
  requirement: string;    // ✅ add this field
  resumeFile?: File;      // optional (for upload)
}


  // primarySkills?: string;
  // primaryExperience?: number;

  // secondarySkills?: string;
  // secondaryExperience?: number;

  // careerCoachExperience?: boolean;
  // availabilityHours?: number;

