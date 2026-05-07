import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "关于我和这个博客",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        About
      </h1>

      <div className="prose">
        <p>
          你好！欢迎来到我的技术博客。
        </p>
        <p>
          我是一名热爱技术的开发者，专注于前端工程、后端架构和系统设计。
          这个博客是我记录学习历程、分享技术见解的地方。
        </p>

        <h2>为什么写博客？</h2>
        <p>
          写作是最好的学习方式之一。通过把知识整理成文章，
          不仅能加深自己的理解，还能帮助到其他开发者。
        </p>

        <h2>技术栈</h2>
        <p>这个博客本身就是一个技术实践：</p>
        <ul>
          <li>Next.js + TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Markdown 内容管理</li>
          <li>Vercel 部署</li>
        </ul>

        <h2>联系我</h2>
        <p>
          如果你有任何问题或想法，欢迎通过{" "}
          <a href="https://github.com">GitHub</a> 或{" "}
          <a href="https://twitter.com">Twitter</a> 联系我。
        </p>
      </div>
    </section>
  );
}
