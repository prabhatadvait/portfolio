export interface BlogPost {
  title: string;
  link: string;
  publishedAt: string;
  excerpt: string;
}

const SUBSTACK_FEED_URL = "https://prabhatadvait.substack.com/feed";

function stripCdata(value: string): string {
  return value.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function decodeHtml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(value: string): string {
  return decodeHtml(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function extractTag(block: string, tagName: string): string {
  const safeTag = tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`<${safeTag}>([\\s\\S]*?)<\\/${safeTag}>`, "i"));
  if (!match?.[1]) return "";
  return stripCdata(match[1]);
}

function parseSubstackFeed(xml: string, limit = 4): BlogPost[] {
  const itemMatches = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi));

  return itemMatches.slice(0, limit).map((match) => {
    const item = match[1] ?? "";
    const title = decodeHtml(extractTag(item, "title")) || "Untitled post";
    const link = extractTag(item, "link") || "https://prabhatadvait.substack.com";
    const pubDate = extractTag(item, "pubDate");
    const isoDate = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();

    const content =
      extractTag(item, "content:encoded") || extractTag(item, "description") || "";

    const excerpt = stripHtml(content).slice(0, 180).trim();

    return {
      title,
      link,
      publishedAt: isoDate,
      excerpt: excerpt.length > 0 ? `${excerpt}${excerpt.length >= 180 ? "..." : ""}` : "Read this article on Substack.",
    };
  });
}

export async function fetchSubstackPosts(limit = 4): Promise<BlogPost[]> {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "PrabhatPortfolioBot/1.0",
      },
    });

    if (!response.ok) return [];

    const xml = await response.text();
    if (!xml) return [];

    return parseSubstackFeed(xml, limit);
  } catch {
    return [];
  }
}
