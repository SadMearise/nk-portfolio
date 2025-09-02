type Tag = {
  id: number;
  name: string;
  path: string;
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  tags: Tag[];
};
