import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export const dynamic = "force-dynamic";

export async function GET() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(content);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file,
      date: data.date || "",
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json(posts);
}
