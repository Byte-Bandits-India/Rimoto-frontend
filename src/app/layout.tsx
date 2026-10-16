import React from "react";

/**
 * RootLayout — a simple wrapper for page content.
 * Glancyr Variable font is loaded via @font-face in globals.css,
 * and mapped to Tailwind tokens (font-sans / font-display / font-heading).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col font-sans antialiased">
      {children}
    </div>
  );
}
