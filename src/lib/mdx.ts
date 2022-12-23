/* eslint-disable @typescript-eslint/no-explicit-any */
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export async function getAllFilesFrontmatter<ProjectFrontmatter>(
  type: 'projects'
) {
  const files = readdirSync(join(process.cwd(), 'src', 'contents', type));

  return files.reduce((allPosts: Array<ProjectFrontmatter>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'contents', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    const res = [
      {
        ...(data as ProjectFrontmatter),
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}
