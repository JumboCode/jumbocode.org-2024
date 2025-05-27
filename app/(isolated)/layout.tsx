import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <body className="antialiased bg-gray-900 min-h-screen flex flex-col justify-center">
            <div className="max-w-screen-lg mx-auto px-4 pt-4 sm:pt-8 pb-24">
            <main>{children}</main>
            </div>
        </body>
    </html>
  );
}