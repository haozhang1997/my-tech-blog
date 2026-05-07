import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({
  post,
  index = 0,
}: {
  post: PostMeta;
  index?: number;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block no-underline animate-in animate-delay-${index + 1}`}
    >
      <article className="card-hover rounded-2xl bg-card p-7 sm:p-8 shadow-[var(--shadow-sm)]">
        <div className="mb-4 flex items-center gap-3 text-[13px] text-muted">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMM dd, yyyy")}
          </time>
          <span className="w-1 h-1 rounded-full bg-muted/50" />
          <span>{post.readingTime}</span>
        </div>

        <h2 className="mb-3 text-[1.375rem] font-semibold tracking-tight leading-snug text-foreground group-hover:text-accent transition-colors duration-200">
          {post.title}
        </h2>

        <p className="mb-5 text-[0.9375rem] leading-relaxed text-muted line-clamp-2">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-accent/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
