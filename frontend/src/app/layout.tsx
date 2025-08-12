import type { Metadata } from "next";
import { plexMono } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Discover and save your favorite recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
