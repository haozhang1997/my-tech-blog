export default function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-[960px] px-6 py-14">
        {/* Multi-column grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 mb-12">
          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-medium text-muted mb-4">
              导航
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-[13px] text-foreground/80 hover:text-accent no-underline transition-colors duration-200">
                  首页
                </a>
              </li>
              <li>
                <a href="/blog" className="text-[13px] text-foreground/80 hover:text-accent no-underline transition-colors duration-200">
                  博客
                </a>
              </li>
              <li>
                <a href="/about" className="text-[13px] text-foreground/80 hover:text-accent no-underline transition-colors duration-200">
                  关于
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-medium text-muted mb-4">
              技术栈
            </h4>
            <ul className="space-y-2.5">
              <li className="text-[13px] text-foreground/60">Next.js</li>
              <li className="text-[13px] text-foreground/60">Tailwind CSS</li>
              <li className="text-[13px] text-foreground/60">TypeScript</li>
              <li className="text-[13px] text-foreground/60">Vercel</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-medium text-muted mb-4">
              联系
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-foreground/80 hover:text-accent no-underline transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-foreground/80 hover:text-accent no-underline transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="text-[13px] text-foreground/80 hover:text-accent no-underline transition-colors duration-200"
                >
                  RSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex items-center justify-between">
          <p className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} TechBlog
          </p>
          <p className="text-[11px] text-muted/60">
            Made with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
