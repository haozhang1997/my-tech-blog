import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block no-underline">
      <article className="rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg">
        <div className="mb-3 flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>
            {format(new Date(post.date), "yyyy-MM-dd")}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground group-hover:text-accent">
          {post.title}
        </h2>

        <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-2">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
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
