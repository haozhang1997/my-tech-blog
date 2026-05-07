import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-20 pt-24 text-center sm:pt-32">
        <h1 className="gradient-text mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          探索技术的
          <br />
          无限可能
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          记录学习、分享思考、沉淀经验。关于前端、后端、架构设计与技术人生。
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-white no-underline hover:bg-accent-hover"
          >
            阅读博客
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-accent no-underline hover:bg-accent/10"
          >
            了解更多 &rarr;
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">最近文章</h2>
          <Link
            href="/blog"
            className="text-sm text-accent no-underline hover:text-accent-hover"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
