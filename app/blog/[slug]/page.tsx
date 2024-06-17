import { Content } from "@/components/Content";

import {
  blogPostsModels,
  getAllPublishedBlog,
  getSinglePost,
} from "@/lib/notion";
import { Post as PostType } from "@/types/Notion";

export const revalidate = 86400;

export default async function Post({ params }: { params: { slug: string } }) {
  const getPosts = await getAllPublishedBlog();
  const res: PostType[] = getPosts.map((post) => blogPostsModels(post));
  const post: PostType = await getSinglePost(params.slug);

  const posts = res
    .filter(
      (p: PostType) =>
        p.tags.map((tag) => post.tags.includes(tag)) && p.slug !== params.slug
    )
    .slice(0, 6);

  return <Content type="blog" item={post} lists={posts} />;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post: PostType = await getSinglePost(params.slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnail,
    },
  };
}

export async function generateStaticParams() {
  const getPosts = await getAllPublishedBlog();
  const posts: PostType[] = getPosts.map((post) => blogPostsModels(post));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
