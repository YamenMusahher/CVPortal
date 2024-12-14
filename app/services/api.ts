import { mockUsers, mockCvs } from './mockData';
import { User, Cv } from './types';

// Mock API-funksjoner
export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers), 500); // Simulerer API-respons med 500ms forsinkelse
  });
};

export const getCvs = async (): Promise<Cv[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCvs), 500); // Simulerer API-respons med 500ms forsinkelse
  });
};

export const createCv = async (data: Cv): Promise<Cv> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...data, _id: Date.now().toString() }), 500);
  });
};

export const updateCv = async (id: string, data: Cv): Promise<Cv> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...data, _id: id }), 500);
  });
};

export const deleteCv = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
};
