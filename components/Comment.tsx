"use client";

import Giscus from "@giscus/react";
import { LazyContainer } from "@/components/LazyContainer";

export function Comments() {
  return (
    <LazyContainer>
      <Giscus
        id="comments"
        repo="impfundev/blog-discussion"
        repoId="R_kgDOMKW9hQ"
        category="General"
        categoryId="DIC_kwDOMKW9hc4CgI51"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="light"
        lang="en"
      />
    </LazyContainer>
  );
}
