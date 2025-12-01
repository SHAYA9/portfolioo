import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shayan-port.vercel.app"), // Replace with your actual domain
  title: "SHAYAN | Portfolio | XpertSphere - Full Stack Developer & AI Specialist",
  description: "SHAYAN | XpertSphere: Portfolio of Shayan, a full stack developer and Agentic AI specialist, creating powerful web solutions and intelligent agents.",
  openGraph: {
    title: "SHAYAN | Portfolio | XpertSphere - Full Stack Developer & AI Specialist",
    description: "SHAYAN | XpertSphere: Portfolio of Shayan, a full stack developer and Agentic AI specialist.",
    url: "https://shayan-port.vercel.app", // Replace with your actual domain
    siteName: "Shayan's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Replace with a path to your OG image
        width: 1200,
        height: 630,
        alt: "Shayan - Full Stack Developer & AI Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayan | Full Stack Developer & AI Specialist",
    description: "Portfolio of Shayan, a full stack developer and Agentic AI specialist. Owner of XpertSphere, creating powerful web solutions and intelligent agents.",
    creator: "@your-twitter-handle", // Replace with your Twitter handle
    images: ["/twitter-image.jpg"], // Replace with a path to your Twitter image
  },
  keywords: ["Shayan", "Portfolio", "Full Stack Developer", "Agentic AI", "XpertSphere", "Next.js", "React", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shayan",
              "url": "https://shayan-port.vercel.app",
              "sameAs": [
                "https://github.com/SHAYA9",
                "https://www.linkedin.com/in/shaya9/",
                "https://www.instagram.com/shaya9_ali/"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "XpertSphere"
              }
            })
          }}
        />
        <meta name="google-site-verification" content="wpveJVhsOohhsSaHM8xWxPz19Txok241NnAgp_tRlAQ" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
