import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "所有技术文章",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-[720px] px-6 pb-24 pt-20">
      <div className="animate-in mb-2">
        <h1 className="text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
          Blog
        </h1>
      </div>
      <p className="animate-in animate-delay-1 mb-12 text-lg font-light text-muted">
        共 {posts.length} 篇文章，持续更新中。
      </p>

      <div className="flex flex-col gap-5">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
