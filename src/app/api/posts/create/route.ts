import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content/posts");

export async function POST(request: Request) {
  const { slug, content } = await request.json();

  if (!slug || !content) {
    return NextResponse.json({ error: "slug and content required" }, { status: 400 });
  }

  const filePath = path.join(postsDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Post already exists" }, { status: 409 });
  }

  fs.writeFileSync(filePath, content, "utf8");
  return NextResponse.json({ success: true, slug });
}
