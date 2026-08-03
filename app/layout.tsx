import Navbar from "@/components/Navbar";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Deva's Portfolio",
  description: "Devanand M — Full Stack Engineer | React | Next.js | Node.js | TypeScript | Tailwind CSS",
};

const themeScript = `
(function(){
  try{
    var t = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(t);
  }catch(e){ document.documentElement.classList.add('dark'); }
})();
`

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
        {children}</body>
    </html>
  );
}
