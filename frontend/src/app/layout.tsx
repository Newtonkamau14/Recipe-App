import type { Metadata } from "next";
import { plexMono } from "./font";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/custom/app-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";


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
