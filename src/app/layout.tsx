
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geistSans = GeistSans
const geistMono = GeistMono

import "./globals.css";
import ThemeScript from "@/components/ThemeScript";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://snowwolf.dev"),

  title: {
    default: "Snowwolf – Frontend & Full Stack Developer",
    template: "%s | Snowwolf",
  },

 description:
  "Portfolio of Snowwolf, a Frontend & Full Stack Developer building fast, accessible, and modern web applications with React, Next.js, TypeScript, Node.js, Express, and MongoDB.",

  icons: {
    icon: [
      {
        url: "/snowwolf.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/snowwolf.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Snowwolf | Frontend Developer",
    description:
      "Portfolio showcasing React, Next.js, TypeScript, and full-stack development.",
    url: "https://snowwolf.dev",
    siteName: "Snowwolf",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Snowwolf Portfolio",
      },
    ],
    type: "website",
  },

    twitter: {
      card: "summary_large_image",
      title: "Snowwolf | Frontend Developer",
      description:
        "Portfolio showcasing React, Next.js, TypeScript, and full-stack development.",
      images: ["/og-image.png"],
    },
  alternates: {
  canonical: "https://snowwolf.dev",
},

robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

applicationName: "Snowwolf",
appleWebApp: {
  capable: true,
  statusBarStyle: "default",
  title: "Snowwolf",
},

formatDetection: {
  email: false,
  address: false,
  telephone: false,
},

keywords: [
  "Frontend Developer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "Portfolio",
  "Snowwolf",
],
authors: [
  {
    name: "Akinkunmi Adeyinka",
    url: "https://snowwolf.dev",
  },
],
creator: "Akinkunmi Adeyinka",
publisher: "Snowwolf",
category: "technology",

};  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      
      <head>
        
        <meta name="color-scheme" content="light dark" />
        <ThemeScript />
      </head>
     <body 
     className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
