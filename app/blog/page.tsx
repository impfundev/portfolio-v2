export const revalidate = 10;

import { Card } from "@/components/Card";
import { Post } from "../../types/Notion";
import { blogPostsModels, getAllPublishedBlog } from "../../lib/notion";

export default async function Blog() {
  const getPosts = await getAllPublishedBlog();
  const posts: Post[] = getPosts.map((post) => blogPostsModels(post));
  return (
    <section className="mx-auto grid justify-between justify-items-center gap-10 pt-40">
      {posts.map((post: Post) => (
        <Card
          key={post.id}
          title={post.title}
          description={post.description}
          tags={post.tags}
          slug={post.slug}
          image={
            post.thumbnail.external?.url ||
            post.thumbnail.file?.url ||
            "https://dummyjson.com/image/400x400"
          }
          type="blog"
        />
      ))}
    </section>
  );
}
