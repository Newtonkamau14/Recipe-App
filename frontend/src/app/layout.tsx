import type { Metadata } from "next";
import { plexMono } from "./font";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/custom/app-sidebar";


export const metadata: Metadata = {
  title: "Recipe App",
  description: "Discover and save your favorite recipes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexMono.className} antialiased`}
      >
         <SidebarProvider>
          <AppSidebar />
          <main className="overflow-hidden w-full">
            <header className="sticky top-0 flex items-center bg-gray-50 w-full h-14 border-b">
              <SidebarTrigger className="cursor-pointer"/>
            </header>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
