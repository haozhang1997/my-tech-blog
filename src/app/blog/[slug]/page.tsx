import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-[660px] px-6 pb-24 pt-20">
      {/* Back */}
      <Link
        href="/blog"
        className="animate-in mb-10 inline-flex items-center gap-1.5 text-[13px] text-muted no-underline hover:text-foreground transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        返回文章列表
      </Link>

      {/* Header */}
      <header className="animate-in animate-delay-1 mb-10">
        <div className="mb-5 flex items-center gap-3 text-[13px] text-muted">
          <time dateTime={post.date}>
            {format(new Date(post.date), "yyyy 年 MM 月 dd 日")}
          </time>
          <span className="w-[3px] h-[3px] rounded-full bg-muted/40" />
          <span>{post.readingTime}</span>
        </div>

        <h1
          className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.025em] leading-[1.15]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {post.title}
        </h1>

        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-accent/[0.07] px-3 py-1 text-[11px] font-medium text-accent/90"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Divider */}
      <div className="animate-in animate-delay-2 mb-10 h-px bg-border" />

      {/* Content */}
      <div
        className="animate-in animate-delay-3 prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
