import type { Metadata } from "next";
import { site_config } from "@/config/site.config";
import { ReactNode } from "react";
import { ProjectsMarkup } from "@/components/SEO/ProjectsMarkup";

export const metadata: Metadata = {
  title: site_config.projects.title,
  description: site_config.projects.description,
};

export const revalidate = 10;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProjectsMarkup />
    </>
  );
}
