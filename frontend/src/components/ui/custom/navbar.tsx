import Link from "next/link"
import { UserPlus } from "lucide-react";
import { Button } from "../button";
import { SidebarTrigger } from "../sidebar";

export function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between items-center bg-gray-50 w-full h-14 border-b">
      <SidebarTrigger className="cursor-pointer" />
      <Button className="mr-3">
        <Link href="/login" className="flex items-center gap-2 text-lg">
          <UserPlus />
          Login
        </Link>
      </Button>
    </header>
  );
}
