export const runtime = "edge";

import { getSinglePost } from "@/app/lib/notion";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const post = await getSinglePost(slug);

  return Response.json({ post });
}
