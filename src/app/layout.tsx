import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "@/components/layout/Header";
import "@/styles/mixins.scss"
import Footer from "@/components/layout/Footer";

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet"></link> */}

export const metadata: Metadata = {
  title: "My Website | Fast & SEO Friendly",
  description: "Dynamic website built with Next.js, TypeScript, SCSS, and Tailwind",
  keywords: ["Next.js", "SEO", "Tailwind", "TypeScript"],
  openGraph: {
    title: "My Website",
    description: "Dynamic website with advanced SEO",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "My Website" },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer/>
      </body>

      {/* <body className="antialiased">{children}</body> */}
    </html>
  );
}