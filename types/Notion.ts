export type Post = {
  id: string;
  publishAt: Date;
  updateAt: Date;
  title: string;
  slug: string;
  description: string;
  tags: Tag[];
  thumbnail: Thumbnail;
  content?: string;
};

export type Tag = {
  id: string;
  name: string;
};

export type Thumbnail = {
  name: string;
  type: string;
  file?: {
    url: string;
  };
  external?: {
    url: string;
  };
};
