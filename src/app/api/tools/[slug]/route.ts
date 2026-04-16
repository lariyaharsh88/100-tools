import { NextResponse } from "next/server";
import { getToolBySlug } from "@/data/tools";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  }

  return NextResponse.json(tool);
}
