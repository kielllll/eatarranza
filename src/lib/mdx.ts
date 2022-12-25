/* eslint-disable @typescript-eslint/no-explicit-any */
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
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

export async function getFiles() {
  return readdirSync(join(process.cwd(), 'src', 'contents', 'projects'));
}

export async function getFileBySlug(slug: string) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'contents', 'projects', `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'contents', `projects.mdx`),
        'utf8'
      );

  const { code, frontmatter } = await bundleMDX(source);

  return {
    code,
    frontmatter,
  };
}
