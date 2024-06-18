import moment from "moment";
import { Post } from "@/types/Notion";
import { Render } from "@9gustin/react-notion-render";
import { ContentFooter } from "@/components/Content/ContentFooter";

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
    <>
      <article className="typography pt-20">
        <h1>{item.title}</h1>
        <p className="text-muted md:text-lg lg:text-xl max-w-xl">
          {item.description}
        </p>
        <time className="text-sm text-muted" dateTime={String(item.updateAt)}>
          {moment(item.updateAt, "YYYYMMDD").fromNow()}
        </time>
        {item.content && <Render blocks={item.content} />}
      </article>
      <ContentFooter item={item} lists={lists} type={type} />
    </>
  );
}
