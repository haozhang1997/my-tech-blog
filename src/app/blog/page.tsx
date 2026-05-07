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
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Blog
      </h1>
      <p className="mb-10 text-lg text-muted">
        共 {posts.length} 篇文章，持续更新中。
      </p>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
