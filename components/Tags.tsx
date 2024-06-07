import { Tag } from "@/types/Notion";
import Link from "next/link";

type Tags = {
  tags: Tag[];
};

export function Tags({ tags }: Tags) {
  return (
    <nav className="animate-fade-right animate-delay-300">
      <ul className="list-inside flex flex-wrap gap-2 items-center">
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <Link
                className="px-3 py-1 bg-primary text-background rounded-full text-xs md:text-base"
                href={`/tags/${tag.name}`}
              >
                {tag.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
