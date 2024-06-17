import { Post } from "@/types/Notion";
import { RelatedContent } from "@/components/Related";
import { Tags } from "@/components/Tags";
import { Author } from "@/components/Author";
import { Render } from "@9gustin/react-notion-render";

export function Content({ item, lists }: { item: Post; lists: Post[] }) {
  return (
    <article className="grid gap-4 pt-20">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
        {item.title}
      </h1>
      <p className="text-muted md:text-lg lg:text-xl max-w-xl">
        {item.description}
      </p>
      <img
        src={item.thumbnail}
        className="animate-fade-left animate-delay-700 w-full max-w-[720px] max-h-[480px] object-cover rounded-2xl"
        width={720}
        height={480}
        alt={item.title}
      />
      {item.content && (
        <div className="prose md:prose-lg">
          <Render blocks={item.content} />
        </div>
      )}
      <Tags tags={item.tags} />
      <Author />
      {lists.length !== 0 && <RelatedContent data={lists} />}
    </article>
  );
}
