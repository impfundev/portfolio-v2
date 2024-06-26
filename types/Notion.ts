export type Post = {
  id: string;
  publishAt: Date;
  updateAt: Date;
  title: string;
  slug: string;
  description: string;
  tags: Tag[];
  thumbnail: string;
  content?: any;
};

export type Tag = {
  id: string;
  name: string;
};
