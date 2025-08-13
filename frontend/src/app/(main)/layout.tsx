import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/custom/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserPlus } from "lucide-react";
import { Navbar } from "@/components/custom/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="overflow-hidden w-full">
        <Navbar/>
        {children}
      </main>
    </SidebarProvider>
  );
}
