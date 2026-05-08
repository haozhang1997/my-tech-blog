import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content/posts");

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const filePath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf8");
  return NextResponse.json({ slug, content });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { content } = await request.json();
  const filePath = path.join(postsDir, `${slug}.md`);

  fs.writeFileSync(filePath, content, "utf8");
  return NextResponse.json({ success: true });
}
