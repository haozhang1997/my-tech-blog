import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section-hero px-6 text-center">
        <div className="animate-in">
          <h1
            className="gradient-text mx-auto max-w-3xl text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.1] sm:text-[4rem]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            探索人生的
            <br />
            无限可能
          </h1>
        </div>
        <p className="animate-in animate-delay-1 mx-auto mt-7 max-w-md text-[1.0625rem] font-normal leading-relaxed text-muted sm:text-lg">
          记录学习、分享思考、沉淀经验。
          <br className="hidden sm:block" />
          关于商业、AI与生活。
        </p>
        <div className="animate-in animate-delay-2 mt-9 flex items-center justify-center gap-3">
          <a href="/blog" className="btn-primary">
            阅读博客
          </a>
          <a href="/about" className="btn-secondary">
            了解更多
          </a>
        </div>
      </section>

      {/* Recent posts */}
      <section className="mx-auto max-w-[700px] px-6 pb-28">
        <div className="animate-in mb-10 flex items-center gap-4">
          <h2 className="text-[11px] uppercase tracking-wider font-medium text-muted">
            最近文章
          </h2>
          <div className="flex-1 h-px bg-border" />
          <a
            href="/blog"
            className="text-[13px] text-accent no-underline hover:text-accent-hover transition-colors duration-200"
          >
            查看全部 &rarr;
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
