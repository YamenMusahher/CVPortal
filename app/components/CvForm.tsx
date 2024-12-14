'use client';

import React, { useState } from 'react';
import { createCv } from '../services/api';
import { Cv } from '../services/types';

const CvForm = () => {
  const [formData, setFormData] = useState<Cv>({
    _id: '',
    personalInfo: { name: '', email: '', phone: '' },
    skills: [],
    education: [],
    experience: [],
    references: [],
  });

  const [newSkill, setNewSkill] = useState('');
  const [newEducation, setNewEducation] = useState({ institution: '', degree: '', year: '' });
  const [newExperience, setNewExperience] = useState({ title: '', company: '', years: '' });
  const [newReference, setNewReference] = useState({ name: '', contactInfo: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const createdCv = await createCv(formData);
      console.log('CV created:', createdCv);
      alert('CV successfully created!');
    } catch (error) {
      console.error('Error creating CV:', error);
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData({ ...formData, skills: [...formData.skills, newSkill] });
      setNewSkill('');
    }
  };

  const addEducation = () => {
    setFormData({ ...formData, education: [...formData.education, newEducation] });
    setNewEducation({ institution: '', degree: '', year: '' });
  };

  const addExperience = () => {
    setFormData({ ...formData, experience: [...formData.experience, newExperience] });
    setNewExperience({ title: '', company: '', years: '' });
  };

  const addReference = () => {
    setFormData({ ...formData, references: [...formData.references, newReference] });
    setNewReference({ name: '', contactInfo: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-white shadow-sm">
      <h1 className="text-2xl font-bold">Create or Edit CV</h1>

      {/* Personal Info */}
      <div>
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData.personalInfo.name}
          onChange={(e) =>
            setFormData({ ...formData, personalInfo: { ...formData.personalInfo, name: e.target.value } })
          }
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.personalInfo.email}
          onChange={(e) =>
            setFormData({ ...formData, personalInfo: { ...formData.personalInfo, email: e.target.value } })
          }
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.personalInfo.phone}
          onChange={(e) =>
            setFormData({ ...formData, personalInfo: { ...formData.personalInfo, phone: e.target.value } })
          }
          className="border p-2 rounded w-full mb-2"
        />
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="New Skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button type="button" onClick={addSkill} className="bg-primary text-white px-4 py-2 rounded">
            Add Skill
          </button>
        </div>
        <ul className="list-disc ml-6 mt-2">
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-semibold">Education</h2>
        <input
          type="text"
          placeholder="Institution"
          value={newEducation.institution}
          onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Year"
          value={newEducation.year}
          onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="button" onClick={addEducation} className="bg-primary text-white px-4 py-2 rounded">
          Add Education
        </button>
        <ul className="list-disc ml-6 mt-2">
          {formData.education.map((edu, index) => (
            <li key={index}>
              {edu.institution}, {edu.degree} ({edu.year})
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <input
          type="text"
          placeholder="Title"
          value={newExperience.title}
          onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Company"
          value={newExperience.company}
          onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Years"
          value={newExperience.years}
          onChange={(e) => setNewExperience({ ...newExperience, years: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="button" onClick={addExperience} className="bg-primary text-white px-4 py-2 rounded">
          Add Experience
        </button>
        <ul className="list-disc ml-6 mt-2">
          {formData.experience.map((exp, index) => (
            <li key={index}>
              {exp.title} at {exp.company} ({exp.years})
            </li>
          ))}
        </ul>
      </div>

      {/* References */}
      <div>
        <h2 className="text-xl font-semibold">References</h2>
        <input
          type="text"
          placeholder="Name"
          value={newReference.name}
          onChange={(e) => setNewReference({ ...newReference, name: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={newReference.contactInfo}
          onChange={(e) => setNewReference({ ...newReference, contactInfo: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="button" onClick={addReference} className="bg-primary text-white px-4 py-2 rounded">
          Add Reference
        </button>
        <ul className="list-disc ml-6 mt-2">
          {formData.references.map((ref, index) => (
            <li key={index}>
              {ref.name}: {ref.contactInfo}
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded">
        Submit CV
      </button>
    </form>
  );
};

export default CvForm;
