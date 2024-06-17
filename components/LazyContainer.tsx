"use client";

import { useInView } from "react-intersection-observer";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function LazyContainer(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div {...props} ref={ref}>
      {inView && props.children}
    </div>
  );
}
