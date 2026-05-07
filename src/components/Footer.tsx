export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[980px] px-6 py-12">
        {/* Multi-column grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 mb-10">
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3">
              导航
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200">
                  首页
                </a>
              </li>
              <li>
                <a href="/blog" className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200">
                  博客
                </a>
              </li>
              <li>
                <a href="/about" className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200">
                  关于
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3">
              技术栈
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-muted">Next.js</li>
              <li className="text-xs text-muted">Tailwind CSS</li>
              <li className="text-xs text-muted">TypeScript</li>
              <li className="text-xs text-muted">Vercel</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3">
              社交
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="text-xs text-muted hover:text-foreground no-underline transition-colors duration-200"
                >
                  RSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6">
          <p className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} TechBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
