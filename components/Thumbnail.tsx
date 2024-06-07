"use client";

import { Thumbnail as ThumbnailType } from "@/app/types/Notion";

export function Thumbnail({
  thumbnail,
  alt,
}: {
  thumbnail: ThumbnailType;
  alt: string;
}) {
  if (thumbnail.external)
    return (
      <img
        src={thumbnail.external.url}
        alt={alt}
        className="w-full object-cover rounded-lg"
        width={720}
        height={480}
      />
    );

  if (thumbnail.file)
    return (
      <img
        src={thumbnail.file.url}
        alt={alt}
        className="w-full object-cover rounded-lg"
        width={720}
        height={480}
      />
    );

  return (
    <img
      src={"https://dummyjson.com/image/720x480"}
      alt={alt}
      className="w-full object-cover rounded-lg"
      width={720}
      height={480}
    />
  );
}
