import { blogPostsModels, getAllPublishedBlog } from "@/lib/notion";
import { DataList } from "@/components/DataList";

export default async function Blog() {
  const getPosts = await getAllPublishedBlog();
  const posts = getPosts.map((post) => blogPostsModels(post));
  return <DataList type="blog" data={posts} />;
}
