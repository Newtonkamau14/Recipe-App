import Link from "next/link";
import { Home, Search, BookOpen, ChefHat, Heart, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Cookbook",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Favourites",
    url: "/favourites",
    icon: Heart,
  },
  {
    title: "Add Recipe",
    url: "recipes/add",
    icon: Plus
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="font-light text-start flex flex-row items-center py-6 text-xl">
        <Link href="/" className="flex gap-1">
          <ChefHat />
          Recipe App
        </Link>
      </SidebarHeader>
      <Separator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
