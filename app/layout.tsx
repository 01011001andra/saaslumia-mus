import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina | Effortless Productivity",
  description: "Lumina is a modern SaaS platform designed to centralize and simplify your workflow with AI-powered efficiency.",
  keywords: ["SaaS", "Productivity", "AI", "Efficiency", "Workflow", "Lumina"],
  authors: [{ name: "Lumina Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-plus-jakarta antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
