export interface User {
    _id: string;
    name: string;
    email: string;
    role: string; // 'admin' or 'user'
  }
  
  export interface Cv {
    _id: string;
    personalInfo: {
      name: string;
      email: string;
      phone?: string;
    };
    skills: string[];
    education: { institution: string; degree: string; year: string }[];
    experience: { title: string; company: string; years: string }[];
    references: { name: string; contactInfo: string }[];
  }
  