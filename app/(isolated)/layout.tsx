import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body className="antialiased bg-gray-950 min-h-screen">
            <div className="max-w-screen-lg mx-auto px-4 pt-4 sm:pt-8">
              <main>{children}</main>
            </div>
        </body>
    </html>
  );
}