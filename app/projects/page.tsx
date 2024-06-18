import { blogPostsModels, getAllPublishedProject } from "@/lib/notion";
import { DataList } from "@/components/DataList";

export default async function Blog() {
  const getProject = await getAllPublishedProject();
  const projects = getProject.map((project) => blogPostsModels(project));

  return <DataList type="projects" data={projects} />;
}
