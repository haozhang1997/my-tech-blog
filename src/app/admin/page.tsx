"use client";

import { useState, useEffect } from "react";

interface PostItem {
  slug: string;
  title: string;
  date: string;
}

const DEFAULT_TEMPLATE = `---
title: "文章标题"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "一句话描述"
tags: ["标签"]
---

正文内容...
`;

export default function AdminPage() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [showNew, setShowNew] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch("/api/posts/list");
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
  }

  async function loadPost(slug: string) {
    const res = await fetch(`/api/posts/${slug}`);
    if (res.ok) {
      const data = await res.json();
      setContent(data.content);
      setCurrentSlug(slug);
      setShowNew(false);
      setMessage("");
    }
  }

  async function savePost() {
    if (!currentSlug) return;
    setSaving(true);
    const res = await fetch(`/api/posts/${currentSlug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    setSaving(false);
    if (res.ok) {
      setMessage("已保存！");
      setTimeout(() => setMessage(""), 2000);
    } else {
      setMessage("保存失败");
    }
  }

  async function createPost() {
    if (!newSlug.trim()) return;
    setSaving(true);
    const res = await fetch("/api/posts/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: newSlug.trim(), content: DEFAULT_TEMPLATE }),
    });
    setSaving(false);
    if (res.ok) {
      setMessage("创建成功！");
      setShowNew(false);
      setNewSlug("");
      await fetchPosts();
      loadPost(newSlug.trim());
    } else {
      const data = await res.json();
      setMessage(data.error || "创建失败");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          文章编辑器
        </h1>
        <button
          onClick={() => { setShowNew(!showNew); setCurrentSlug(null); setContent(""); }}
          className="btn-primary text-sm !h-9 !px-4"
        >
          + 新文章
        </button>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Sidebar - post list */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="rounded-2xl border border-border bg-card p-4">
            <h3 className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">
              文章列表
            </h3>
            <ul className="space-y-1">
              {posts.map((post) => (
                <li key={post.slug}>
                  <button
                    onClick={() => loadPost(post.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                      currentSlug === post.slug
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-foreground/80 hover:bg-accent/5"
                    }`}
                  >
                    {post.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Editor area */}
        <div className="flex-1 min-w-0">
          {showNew && (
            <div className="mb-4 flex gap-3 items-center">
              <input
                type="text"
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value)}
                placeholder="文件名（英文，如 my-new-post）"
                className="flex-1 h-9 px-4 rounded-lg border border-border bg-card text-sm text-foreground outline-none focus:border-accent"
              />
              <button
                onClick={createPost}
                disabled={saving}
                className="btn-primary text-sm !h-9 !px-4"
              >
                创建
              </button>
            </div>
          )}

          {currentSlug && (
            <>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted">
                  编辑：<span className="text-foreground font-medium">{currentSlug}.md</span>
                </span>
                <div className="flex items-center gap-3">
                  {message && (
                    <span className="text-sm text-accent">{message}</span>
                  )}
                  <button
                    onClick={savePost}
                    disabled={saving}
                    className="btn-primary text-sm !h-9 !px-4"
                  >
                    {saving ? "保存中..." : "保存"}
                  </button>
                </div>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-[70vh] rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground font-mono resize-none outline-none focus:border-accent transition-colors duration-200"
                spellCheck={false}
              />
              <p className="mt-2 text-xs text-muted">
                提示：使用 Markdown 格式编写。顶部 --- 之间是文章元信息（标题、日期、标签等）。
              </p>
            </>
          )}

          {!currentSlug && !showNew && (
            <div className="flex items-center justify-center h-64 rounded-2xl border border-dashed border-border">
              <p className="text-muted text-sm">← 选择一篇文章编辑，或点右上角创建新文章</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
