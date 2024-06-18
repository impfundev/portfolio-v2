"use client";

import { searchAtom } from "@/stores/searchAtom";
import { useSetAtom } from "jotai";
import { ChangeEvent } from "react";

export function Search() {
  const setSearch = useSetAtom(searchAtom);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="w-full px-4 py-2 border border-foreground focus:outline-none rounded-full"
      onChange={handleSearch}
      id="search"
      name="search"
      placeholder="Search: Next.js, React, etc..."
    />
  );
}
