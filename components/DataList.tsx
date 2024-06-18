"use client";

import { useAtomValue } from "jotai";
import { filterData, searchAtom } from "@/stores/searchAtom";

import { Post } from "@/types/Notion";
import { Search } from "@/components/Search";
import { Card } from "@/components/Card";
import { ProjectsMarkup } from "@/components/SEO/ProjectsMarkup";
import { BlogMarkup } from "@/components/SEO/BlogMarkup";

export function DataList({
  data,
  type,
}: {
  data: Post[];
  type: "projects" | "blog";
}) {
  const searchQuery = useAtomValue(searchAtom);
  const filteredData = filterData(data);
  return (
    <section className="w-full max-w-2xl mx-auto grid gap-10 mt-24">
      <Search />
      {searchQuery && filteredData.length !== 0 && (
        <div className="w-full text-center">
          <p>
            Search for <b>{searchQuery}</b>:
          </p>
        </div>
      )}
      {filteredData.length !== 0 ? (
        filteredData.map((item: Post) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.updateAt}
            description={item.description}
            tags={item.tags}
            slug={item.slug}
            image={item.thumbnail}
            type={type}
          />
        ))
      ) : (
        <div className="w-full text-center">
          <p>
            Search for <b>{searchQuery}</b> not found
          </p>
        </div>
      )}
      {type === "projects" ? <ProjectsMarkup /> : <BlogMarkup />}
    </section>
  );
}
