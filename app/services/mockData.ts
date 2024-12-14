export const mockUsers = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'user',
    },
  ];
  
  export const mockCvs = [
    {
      _id: '101',
      personalInfo: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '12345678',
      },
      skills: ['JavaScript', 'React', 'Node.js'],
      education: [
        { institution: 'NTNU', degree: 'Bachelor', year: '2022' },
      ],
      experience: [
        { title: 'Frontend Developer', company: 'Tech AS', years: '2021-2023' },
      ],
      references: [
        { name: 'Jane Smith', contactInfo: 'jane.smith@example.com' },
      ],
    },
  ];
  