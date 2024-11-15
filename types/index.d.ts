interface Project {
  id: string;
  slug: string;
  name: string;
  thumbnail: string;
  oneLiner: string;
  tags: string[];
}

interface ProjectDetail extends Project {
  description: string;
  website: string;
  twitter: string;
}