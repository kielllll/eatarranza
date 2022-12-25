export type ProjectFrontmatter = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techs: string;
  banner: string;
  link?: string;
  github?: string;
  youtube?: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};
