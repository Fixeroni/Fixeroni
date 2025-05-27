"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (query: string) => void;
}
export function SearchBar({
  placeholder = "What service do you need?",
  buttonText = "Search",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-sm:w-fit w-[350px] md:w-[40vw] max-w-3xl  items-center rounded-full border-[0.1vw] border-gray-400 md:ml-0 ml-5 max-sm:ml-0  bg-transparent shadow-sm overflow-hidden"
    >
      <div className="flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-400 border-transparent" />
      </div>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border-0 bg-transparent border-transparent py-3 px-3 md:px-32 italic text-base text-[10px] md:text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button
        type="submit"
        className="md:h-full rounded-none rounded-r-full bg-[#10B981] hover:bg-emerald-600 md:px-8 text-base font-medium"
      >
        {buttonText}
      </Button>
    </form>
  );
}
