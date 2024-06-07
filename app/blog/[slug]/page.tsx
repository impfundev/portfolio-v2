export const dynamicParams = false;

import { Card } from "@/components/Card";
import { Tags } from "@/components/Tags";

import dynamic from "next/dynamic";
import {
  blogPostsModels,
  getAllPublishedBlog,
  getSinglePost,
} from "@/lib/notion";
import { Post as PostType } from "@/types/Notion";
const Thumbnail = dynamic(
  () => import("@/components/Thumbnail").then((res) => res.Thumbnail),
  { ssr: false }
);

export default async function Post({ params }: { params: { slug: string } }) {
  const getPosts = await getAllPublishedBlog();
  const res: PostType[] = getPosts.map((post) => blogPostsModels(post));
  const post: PostType = await getSinglePost(params.slug);

  const posts = res
    .filter((p: any) => p.tags.includes(...post.tags) && p.slug !== params.slug)
    .slice(0, 6);

  return (
    <article className="grid gap-4 pt-20">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl">{post.description}</p>
      <Thumbnail thumbnail={post.thumbnail} alt={post.title} />
      {post.content && (
        <div
          className="prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}
      <Tags tags={post.tags} />
      {posts.length !== 0 && (
        <div className="grid gap-6 py-10">
          <h2 className="text-center pb-10 font-bold text-2xl md:text-4xl lg:text-5xl">
            Related
          </h2>
          <div className="w-full grid md:grid-cols-2 justify-between justify-items-center gap-10">
            {posts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                description={post.description}
                tags={post.tags}
                slug={post.slug}
                image={
                  post.thumbnail.external!.url ||
                  post.thumbnail.file!.url ||
                  "https://dummyjson.com/image/400x400"
                }
                type="blog"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const getPosts = await getAllPublishedBlog();
  const posts: PostType[] = getPosts.map((post) => blogPostsModels(post));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
