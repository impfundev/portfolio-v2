"use client";

import { Post } from "@/types/Notion";
import { atom, useAtomValue } from "jotai";

export const searchAtom = atom("");

export const filterData = (data: Post[]) => {
  const searchQuery = useAtomValue(searchAtom);
  const filteredData = data.filter(
    (item: Post) =>
      item.title.toLowerCase().match(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().match(searchQuery.toLowerCase()) ||
      item.tags.find((tag) =>
        tag.name.toLowerCase().match(searchQuery.toLowerCase())
      )
  );

  if (!searchQuery) return data;

  return filteredData;
};
