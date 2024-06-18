"use client";

import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { LazyContainer } from "@/components/LazyContainer";
import { Tags } from "@/components/Tags";
import { Tag } from "@/types/Notion";

type Card = {
  title: string;
  image: string;
  description: string;
  tags: Tag[];
  slug: string;
  type: "blog" | "projects";
  date: Date;
};

export function Card({
  title,
  description,
  tags,
  image,
  type,
  slug,
  date,
}: Card) {
  const route = "/" + type + "/" + slug;

  return (
    <article className="w-full max-w-2xl">
      <LazyContainer className="grid md:grid-cols-2 gap-6 leading-relaxed">
        <Link href={route}>
          <Image
            src={image}
            className="animate-fade-left animate-delay-700 w-full object-cover rounded-lg"
            width={480}
            height={360}
            alt={title}
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h2 className="animate-fade-right text-2xl font-bold">
            <Link href={route}>{title}</Link>
          </h2>
          <time className="text-sm text-muted" dateTime={String(date)}>
            {moment(date, "YYYYMMDD").fromNow()}
          </time>
          <p className="animate-fade-right animate-delay-500 line-clamp-4 mb-2">
            <Link href={route}>{description}</Link>
          </p>
          <Tags tags={tags} />
        </div>
      </LazyContainer>
    </article>
  );
}
