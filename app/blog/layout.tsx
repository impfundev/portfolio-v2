import type { Metadata } from "next";
import { site_config } from "@/config/site.config";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: site_config.blog.title,
  description: site_config.blog.description,
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
