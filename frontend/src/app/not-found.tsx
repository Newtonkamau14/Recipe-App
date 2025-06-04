"use client";
import Link from "next/link"
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">
      <Frown className="h-20 w-20" />
      <p className="text-3xl w-6xl">
        We couldn&apos;t find the page you were looking for. It might have been
        moved or deleted. Please check the URL or head back to our homepage.
      </p>
      
      <Link href="/" className="underline text-2xl">Go to home</Link>
    </div>
  );
}
