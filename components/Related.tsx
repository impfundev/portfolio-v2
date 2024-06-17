import { Post } from "@/types/Notion";
import { Card } from "@/components/Card";
import { LazyContainer } from "./LazyContainer";

export function RelatedContent({ data }: { data: Post[] }) {
  return (
    <LazyContainer className="grid gap-4 py-10">
      <h3 className="animate-fade-up text-center pb-10 font-bold text-xl md:text-2xl lg:text-4xl">
        Related
      </h3>
      <div className="w-full grid justify-between justify-items-center gap-10">
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
    </LazyContainer>
  );
}
