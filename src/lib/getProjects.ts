import { promises as fs } from 'fs';
import path from 'path';
import { Project } from '@/context/ProjectContext';

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'database/projects.json');
  const file = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(file);
}
