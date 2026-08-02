import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Blog from "@/components/blog/Blog";
import LeetcodeStats from "@/components/leetcode/LeetcodeStats";
import Publications from "@/components/publications/Publications";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import TechScrollStrip from "@/components/ui/TechScrollStrip";
import Footer from "@/components/footer/Footer";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  type GitHubRepo,
} from "@/lib/github";
import {
  fetchLeetCodeStats,
  FALLBACK_LEETCODE_STATS,
} from "@/lib/leetcode";
import { fetchSubstackPosts, type BlogPost } from "@/lib/substack";

export const revalidate = 3600;

export default async function Home() {
  let avatarUrl = "https://avatars.githubusercontent.com/u/prabhatadvait";
  let publicRepos = 64;
  let followers = 209;
  let repos: GitHubRepo[] = [];
  let leetcodeStats = FALLBACK_LEETCODE_STATS;
  let blogPosts: BlogPost[] = [];

  try {
    const [profile, githubRepos, stats, posts] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
      fetchLeetCodeStats(),
      fetchSubstackPosts(4),
    ]);

    avatarUrl = profile.avatar_url;
    publicRepos = profile.public_repos;
    followers = profile.followers;
    repos = githubRepos;
    if (stats) leetcodeStats = stats;
    blogPosts = posts;
  } catch {
    // Use fallback values
  }

  return (
    <>
      <Hero avatarUrl={avatarUrl} />
      <TechScrollStrip />
      <About
        avatarUrl={avatarUrl}
        publicRepos={publicRepos}
        followers={followers}
        leetcodeSolved={leetcodeStats.totalSolved}
      />
      <Experience />
      <Skills />
      <Projects repos={repos} />
      <Blog posts={blogPosts} />
      <LeetcodeStats stats={leetcodeStats} />
      <Publications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
