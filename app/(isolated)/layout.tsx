import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Analytics/>
      <body className="antialiased bg-gray-950">
        <div className="max-w-screen-lg mx-auto px-8 pt-4 sm:pt-8 pb-24">
          {/* Gradient background */}
          <div className="absolute inset-0 h-[85vh] bg-gradient-to-b from-brand/25 to-gray-950 -z-10" />

          <header className="flex justify-between items-center">
            <Link href="/">
              <img src="/logo.svg" alt="JumboCode" className="h-8" />
            </Link>
            <Nav />
          </header>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
