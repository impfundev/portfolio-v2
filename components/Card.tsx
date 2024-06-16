"use client";

import Link from "next/link";
import { Tags } from "./Tags";
import { useInView } from "react-intersection-observer";
import { Tag } from "@/types/Notion";

type Card = {
  title: string;
  image?: string;
  description: string;
  tags: Tag[];
  slug: string;
  type: "blog" | "projects";
};

export function Card({ title, description, tags, image, type, slug }: Card) {
  const route = type + "/" + slug;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <article
      ref={ref}
      className="w-full grid md:grid-cols-2 gap-6 leading-relaxed transition-all max-w-2xl"
    >
      {inView && (
        <>
          <Link href={route}>
            <img
              src={image}
              className="animate-fade-left animate-delay-700 w-full object-cover rounded-lg"
              width={200}
              height={200}
              loading="lazy"
            />
          </Link>
          <div className="flex flex-col gap-4">
            <h2 className="animate-fade-right text-2xl font-bold">
              <Link href={route}>{title}</Link>
            </h2>
            <Tags tags={tags} />
            <p className="animate-fade-right animate-delay-500 line-clamp-4">
              <Link href={route}>{description}</Link>
            </p>
          </div>
        </>
      )}
    </article>
  );
}
