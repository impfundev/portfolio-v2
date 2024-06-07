import { Card } from "@/components/Card";
import { getPosts } from "../lib/data";
import { Post } from "../types/Notion";

export default async function Blog() {
  const posts = await getPosts();
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
