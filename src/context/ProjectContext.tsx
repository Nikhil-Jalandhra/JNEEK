'use client';

import { createContext, useContext, ReactNode } from 'react';

export interface Project {
  name: string;
  type: string[];
  techUsed: string[];
  image: string[];
  description: string;
  language: string;
  star: string;
  link: string;
  repo: string;
  date: string;
  KeyFeatures?: string;
  learning?: string;
}

export const ProjectContext = createContext<Project[]>([]);
export const useProjects = (): Project[] => useContext(ProjectContext);

interface ProjectProviderProps {
  children: ReactNode;
  value: Project[];
}

export const ProjectProvider = ({ children, value }: ProjectProviderProps) => (
  <ProjectContext.Provider value={value}>
    {children}
  </ProjectContext.Provider>
);
