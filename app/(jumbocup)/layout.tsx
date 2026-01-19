import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "JumboCode",
  description: "Tufts University's student-run CS club empowering students and elevating non-profits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-950">
        <div className="max-w-screen-lg mx-auto px-8 sm:px-12 pt-4 sm:pt-8 pb-24">
          {/* Gradient background */}
          <div className="absolute inset-0 h-[85vh] bg-gradient-to-b from-brand/25 to-gray-950 -z-10" />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
