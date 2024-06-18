"use client";

import { Post } from "@/types/Notion";
import { RelatedContent } from "@/components/Related";
import { Tags } from "@/components/Tags";
import { Author } from "@/components/Author";
import { Comments } from "@/components/Comment";
import { ArticleMarkup } from "@/components/SEO/ArticleMarkup";
import hljs from "highlight.js";
import { useEffect } from "react";

type ContentFooter = {
  item: Post;
  lists: Post[];
  type: "blog" | "projects";
};

export function ContentFooter({ item, lists, type }: ContentFooter) {
  useEffect(() => {
    if (typeof document !== undefined) {
      hljs.highlightAll();
    }
  }, []);

  return (
    <div className="grid gap-4 py-10 w-full max-w-3xl">
      <Comments />
      <Tags tags={item.tags} />
      <Author />
      {lists.length !== 0 && <RelatedContent type={type} data={lists} />}
      <ArticleMarkup data={item} />
    </div>
  );
}
