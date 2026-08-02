import { ArrowUpRight, BookOpenText, PenSquare } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import type { BlogPost } from "@/lib/substack";

interface BlogProps {
  posts: BlogPost[];
}

function formatDate(value: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return "Recent";
  }
}

export default function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Blog"
          subtitle="I publish long-form technical essays on Substack. Every post here links to the full article there."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://prabhatadvait.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <BookOpenText size={16} />
            Read on Substack
          </a>
          <a
            href="https://prabhatadvait.substack.com/publish/home?utm_source=portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <PenSquare size={16} />
            Write New Post
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <GlassCard key={post.link} className="group p-6" hover>
                <div className="mb-3 inline-flex items-center rounded-full border border-indigo-200/60 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-700/40 dark:bg-indigo-900/40 dark:text-indigo-300">
                  {formatDate(post.publishedAt)}
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-5 text-sm leading-7 text-muted">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-indigo-600"
                >
                  Read article
                  <ArrowUpRight size={16} />
                </a>
              </GlassCard>
            ))}
          </div>
        ) : (
          <GlassCard className="mx-auto max-w-3xl p-8 text-center" hover={false}>
            <h3 className="mb-2 text-xl font-bold text-foreground">Substack posts will appear here</h3>
            <p className="mb-4 text-sm leading-7 text-muted">
              This section is connected to your Substack feed. Publish your first article and refresh the portfolio.
            </p>
            <a
              href="https://prabhatadvait.substack.com/publish/home?utm_source=portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <PenSquare size={16} />
              Open Substack Editor
            </a>
          </GlassCard>
        )}
      </div>
    </section>
  );
}
