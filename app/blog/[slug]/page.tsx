export const revalidate = 10;

import { RelatedContent } from "@/components/Related";
import { Tags } from "@/components/Tags";

import {
  blogPostsModels,
  getAllPublishedBlog,
  getSinglePost,
} from "@/lib/notion";
import { Post as PostType } from "@/types/Notion";

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
      <img
        src={post.thumbnail}
        className="animate-fade-left animate-delay-700 w-full max-w-[720px] max-h-[480px] object-cover rounded-2xl"
        width={720}
        height={480}
        alt={post.title}
      />
      {post.content && (
        <div
          className="prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}
      <Tags tags={post.tags} />
      {posts.length !== 0 && <RelatedContent data={posts} />}
    </article>
  );
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
