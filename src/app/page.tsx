import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section-hero px-6 text-center">
        <div className="animate-in">
          <h1 className="gradient-text mx-auto max-w-4xl text-5xl font-extrabold tracking-[-0.04em] leading-[1.05] sm:text-7xl">
            探索技术的
            <br />
            无限可能
          </h1>
        </div>
        <p className="animate-in animate-delay-1 mx-auto mt-8 max-w-lg text-lg font-light leading-relaxed text-muted sm:text-xl">
          记录学习、分享思考、沉淀经验。
          <br className="hidden sm:block" />
          关于前端、后端、架构设计与技术人生。
        </p>
        <div className="animate-in animate-delay-2 mt-10 flex items-center justify-center gap-4">
          <a href="/blog" className="btn-primary">
            阅读博客
          </a>
          <a href="/about" className="btn-secondary">
            了解更多 &rarr;
          </a>
        </div>
      </section>

      {/* Recent posts */}
      <section className="mx-auto max-w-[720px] px-6 pb-28">
        <div className="animate-in mb-10 flex items-center gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            最近文章
          </h2>
          <div className="flex-1 h-px bg-border" />
          <a
            href="/blog"
            className="text-sm text-accent no-underline hover:text-accent-hover transition-colors duration-200"
          >
            全部 &rarr;
          </a>
        </div>
        <div className="flex flex-col gap-5">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
