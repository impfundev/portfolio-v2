"use client";

import { Thumbnail as ThumbnailType } from "@/types/Notion";
import Image from "next/image";

export function Thumbnail({
  thumbnail,
  alt,
}: {
  thumbnail: ThumbnailType;
  alt: string;
}) {
  if (thumbnail.external)
    return (
      <Image
        src={thumbnail.external.url}
        alt={alt}
        className="w-full object-cover rounded-lg"
        width={720}
        height={480}
      />
    );

  if (thumbnail.file)
    return (
      <Image
        src={thumbnail.file.url}
        alt={alt}
        className="w-full object-cover rounded-lg"
        width={720}
        height={480}
      />
    );

  return (
    <img
      src={`https://dummyjson.com/image/720x480?text=${alt}`}
      alt={alt}
      className="w-full object-cover rounded-lg"
      width={720}
      height={480}
    />
  );
}
