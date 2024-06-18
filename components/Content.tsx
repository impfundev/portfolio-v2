import moment from "moment";
import { Post } from "@/types/Notion";
import { RelatedContent } from "@/components/Related";
import { Tags } from "@/components/Tags";
import { Author } from "@/components/Author";
import { Render } from "@9gustin/react-notion-render";
import { Comments } from "@/components/Comment";

export function Content({
  item,
  lists,
  type,
}: {
  item: Post;
  lists: Post[];
  type: "blog" | "projects";
}) {
  return (
    <div className="grid gap-4 pt-20">
      <article className="typography">
        <h1>{item.title}</h1>
        <p className="text-muted md:text-lg lg:text-xl max-w-xl">
          {item.description}
        </p>
        <time className="text-sm text-muted" dateTime={String(item.updateAt)}>
          {moment(item.updateAt, "YYYYMMDD").fromNow()}
        </time>
        {item.content && <Render blocks={item.content} />}
      </article>
      <Comments />
      <Tags tags={item.tags} />
      <Author />
      {lists.length !== 0 && <RelatedContent type={type} data={lists} />}
    </div>
  );
}
