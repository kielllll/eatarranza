import { getFileBySlug } from '@/lib/mdx';

export async function useGetProject({ slug }: { slug: string }) {
  const project = await getFileBySlug(slug);

  return project;
}
