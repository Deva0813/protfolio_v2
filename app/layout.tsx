import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/Providers/ReactQueryProvider";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deva's Portfolio",
  description:
    "Devanand M — Full Stack Engineer | React | Next.js | Node.js | TypeScript | Tailwind CSS",
  keywords: [
    "Devanand M",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "2.5+ years",
    "AWS",
    "Github",
  ],
  authors: [
    { name: "Devanand M", url: "https://deva0813.github.io/protfolio_v2" },
  ],
  metadataBase: new URL("https://deva0813.github.io"),
  openGraph: {
    type: "website",
    title: "Deva's Portfolio",
    description:
      "Devanand M — Full Stack Engineer | React | Next.js | Node.js | TypeScript | Tailwind CSS",
    url: "https://deva0813.github.io/protfolio_v2",
    siteName: "Deva's Portfolio",
    images: [
      {
        url: "https://deva0813.github.io/protfolio_v2/meta.png",
        alt: "Deva's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deva's Portfolio",
    description:
      "Devanand M — Full Stack Engineer | React | Next.js | Node.js | TypeScript | Tailwind CSS",
    images: ["https://deva0813.github.io/protfolio_v2/meta.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const themeScript = `
(function(){
  try{
    var t = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(t);
  }catch(e){ document.documentElement.classList.add('dark'); }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">

        <Navbar />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        <Footer />

      </body>
    </html>
  );
}
