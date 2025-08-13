"use client";

import type React from "react";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search")?.toString() || "";

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set("q", search);
      } else {
        params.delete("q");
      }
      router.push(`/?${params.toString()}`);
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm gap-2 mt-4 mb-8">
      <Input
        type="search"
        name="search"
        placeholder="Search recipes..."
        defaultValue={searchParams.get("q")?.toString()}
        className="w-full h-12"
      />
      <Button
        type="submit"
        variant="outline"
        size="icon"
        disabled={isPending}
        className="h-12"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
