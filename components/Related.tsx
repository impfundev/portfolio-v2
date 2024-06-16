import { Post } from "@/types/Notion";
import { Card } from "@/components/Card";

export function RelatedContent({ data }: { data: Post[] }) {
  return (
    <div className="grid gap-6 py-10">
      <h2 className="text-center pb-10 font-bold text-2xl md:text-4xl lg:text-5xl">
        Related
      </h2>
      <div className="w-full grid md:grid-cols-2 justify-between justify-items-center gap-10">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            tags={item.tags}
            slug={item.slug}
            image={item.thumbnail}
            type="blog"
          />
        ))}
      </div>
    </div>
  );
}
