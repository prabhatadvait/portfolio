import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Prabhat Kumar | Technical Intern at Rakuten",
  description:
    "Portfolio of Prabhat Kumar - Technical Intern at Rakuten, Full Stack Developer, and DevOps enthusiast. Building scalable applications with React, FastAPI, and Docker.",
  keywords: [
    "Prabhat Kumar",
    "Technical Intern",
    "Rakuten",
    "Full Stack Developer",
    "FastAPI",
    "React",
    "DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Prabhat Kumar" }],
  openGraph: {
    title: "Prabhat Kumar | Technical Intern at Rakuten",
    description:
      "Building scalable applications with React, FastAPI, and Docker.",
    url: "https://prabhatadvait.vercel.app",
    siteName: "Prabhat Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/prabhatadvait",
        width: 400,
        height: 400,
        alt: "Prabhat Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhat Kumar | Technical Intern at Rakuten",
    description:
      "Building scalable applications with React, FastAPI, and Docker.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {/* Anti-flash: apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
