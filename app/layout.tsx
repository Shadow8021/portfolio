import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { siteUrl } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Développeur full-stack web & mobile à Brazzaville | Martial OYAGA",
  description:
    "Martial OYAGA, développeur full-stack à Brazzaville (Congo) : conception d’applications web et mobiles, d’API performantes et accompagnement technique.",
  applicationName: "Portfolio de Martial OYAGA",
  authors: [{ name: "Martial OYAGA", url: siteUrl }],
  creator: "Martial OYAGA",
  keywords: [
    "Martial OYAGA",
    "développeur full-stack",
    "développeur web",
    "développeur mobile",
    "Brazzaville",
    "Congo",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Martial OYAGA — Développeur full-stack",
    title: "Développeur full-stack web & mobile à Brazzaville | Martial OYAGA",
    description:
      "Applications web et mobiles, API performantes et accompagnement technique par Martial OYAGA, développeur full-stack à Brazzaville.",
    images: [
      {
        url: "/mart.jpg",
        width: 3144,
        height: 4192,
        alt: "Martial OYAGA, développeur full-stack à Brazzaville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur full-stack web & mobile | Martial OYAGA",
    description:
      "Découvrez le portfolio de Martial OYAGA, développeur full-stack à Brazzaville, Congo.",
    images: ["/mart.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl.href}#person`,
      name: "Martial OYAGA",
      url: siteUrl.href,
      image: new URL("/mart.jpg", siteUrl).href,
      jobTitle: "Développeur full-stack",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brazzaville",
        addressCountry: "CG",
      },
      knowsAbout: [
        "Développement web",
        "Développement mobile",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Flutter",
      ],
      sameAs: [
        "https://www.linkedin.com/in/gregor-martial-oyaga-5779b9311/",
        "https://github.com/Shadow8021",
        "https://www.facebook.com/gregoroyaga3.0/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl.href}#website`,
      url: siteUrl.href,
      name: "Portfolio de Martial OYAGA",
      inLanguage: "fr-FR",
      publisher: {
        "@id": `${siteUrl.href}#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") document.documentElement.dataset.theme = "light";
} catch (error) {
  console.error("Impossible de charger le thème enregistré.", error);
}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
