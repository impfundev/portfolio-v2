import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPublishedBlog = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_POSTS_ID!,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
    sorts: [
      {
        property: "updateAt",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts;
};

export const blogPostsModels = (post: any) => {
  return {
    id: post.id,
    publishAt: post.properties.publishAt.date.start,
    updateAt: post.properties.updateAt.date.start,
    title: post.properties.title.title[0].plain_text,
    slug: post.properties.slug.formula.string,
    description: post.properties.description.rich_text[0].plain_text,
    tags: post.properties.tags.multi_select,
    thumbnail: post.properties.thumbnail.rich_text[0].text.content,
  };
};

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_POSTS_ID!,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const singlePost = response.results[0];

  const responseBlockPages = await notion.blocks.children.list({
    block_id: singlePost.id,
  });

  const content: any = responseBlockPages.results;
  const data = blogPostsModels(singlePost);

  return {
    ...data,
    content,
  };
};

export const getAllPublishedProject = async () => {
  const projects = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS_ID!,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
    sorts: [
      {
        property: "updateAt",
        direction: "descending",
      },
    ],
  });

  const allProject = projects.results;

  return allProject;
};

export const getSingleProject = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS_ID!,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const singlePost = response.results[0];

  const responseBlockPages = await notion.blocks.children.list({
    block_id: singlePost.id,
  });

  const content = responseBlockPages.results;
  const data = blogPostsModels(singlePost);

  return {
    ...data,
    content,
  };
};
