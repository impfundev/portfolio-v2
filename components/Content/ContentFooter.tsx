import { Post } from "@/types/Notion";
import { RelatedContent } from "@/components/Related";
import { Tags } from "@/components/Tags";
import { Author } from "@/components/Author";
import { Comments } from "@/components/Comment";
import Script from "next/script";
import { ArticleMarkup } from "@/components/SEO/ArticleMarkup";

type ContentFooter = {
  item: Post;
  lists: Post[];
  type: "blog" | "projects";
};

export function ContentFooter({ item, lists, type }: ContentFooter) {
  return (
    <div className="grid gap-4 py-10 w-full max-w-3xl">
      <Comments />
      <Tags tags={item.tags} />
      <Author />
      {lists.length !== 0 && <RelatedContent type={type} data={lists} />}
      <script src={`${process.env.BASE_URL}/highlighter.js`} />
      <Script id="init-syntax-highlighter">{`hljs.highlightAll()`}</Script>
      <ArticleMarkup data={item} />
    </div>
  );
}
