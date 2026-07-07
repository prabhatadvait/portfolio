# Prabhat Kumar - Portfolio Website

A modern, auto-updating personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark glassmorphic design with neon accents and smooth animations
- Auto-synced GitHub projects and profile (avatar, repos, followers)
- Live LeetCode competitive programming stats
- Contact form via EmailJS (free tier)
- Fully responsive, SEO-optimized
- 100% free to deploy on Vercel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your EmailJS credentials to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## EmailJS Setup (Free)

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add Gmail as email service
3. Create email template with fields: `from_name`, `from_email`, `subject`, `message`
4. Copy Service ID, Template ID, and Public Key to `.env.local`

## Deploy to Vercel (Free)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add environment variables from `.env.local`
4. Deploy - auto-updates on every push

## License

MIT
