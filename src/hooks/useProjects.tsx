import { getAllFilesFrontmatter } from '@/lib/mdx';

import { ProjectFrontmatter } from '@/types/mdx';

export async function useGetAllProjects() {
  const projects = await getAllFilesFrontmatter<ProjectFrontmatter>('projects');

  return { projects };
}
