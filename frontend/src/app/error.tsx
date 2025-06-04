"use client";
import Link from "next/link";
import { Bug } from "lucide-react";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <Bug className="h-20 w-20" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Oops! Something went wrong.
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        This is an error page. Please try again later.
      </p>
      <Link href="/" className="underline text-lg">Go to home</Link>
    </div>
  );
}
