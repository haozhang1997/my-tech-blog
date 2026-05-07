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
    <article className="mx-auto max-w-[680px] px-6 pb-24 pt-20">
      {/* Back */}
      <Link
        href="/blog"
        className="animate-in mb-10 inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-foreground transition-colors duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        返回
      </Link>

      {/* Header */}
      <header className="animate-in animate-delay-1 mb-12">
        <div className="mb-5 flex items-center gap-3 text-[13px] text-muted">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <time dateTime={post.date}>
            {format(new Date(post.date), "yyyy 年 MM 月 dd 日")}
          </time>
          <span className="w-1 h-1 rounded-full bg-muted/50" />
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-[2.25rem] sm:text-[2.75rem] font-bold tracking-[-0.035em] leading-[1.1]">
          {post.title}
        </h1>

        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/[0.06] px-3 py-1 text-[11px] font-medium text-accent/80"
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
