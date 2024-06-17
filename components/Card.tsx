"use client";

import Link from "next/link";
import { Tags } from "@/components/Tags";
import { Tag } from "@/types/Notion";
import Image from "next/image";

type Card = {
  title: string;
  image: string;
  description: string;
  tags: Tag[];
  slug: string;
  type: "blog" | "projects";
};

export function Card({ title, description, tags, image, type, slug }: Card) {
  const route = type + "/" + slug;

  return (
    <article className="w-full grid md:grid-cols-2 gap-6 leading-relaxed transition-all max-w-2xl">
      <Link href={route}>
        <Image
          src={image}
          className="animate-fade-left animate-delay-700 w-full object-cover rounded-lg"
          width={480}
          height={360}
          alt={title}
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
    </article>
  );
}
