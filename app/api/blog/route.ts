import { NextResponse } from "next/server";
import { fetchSubstackPosts } from "@/lib/substack";

export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await fetchSubstackPosts(6);
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
