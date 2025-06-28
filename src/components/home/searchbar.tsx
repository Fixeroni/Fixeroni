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
      className="flex max-sm:w-fit w-[350px] md:w-[40vw] max-w-3xl h-[45px]  items-center rounded-full border border-[#0000007f]   md:ml-0 ml-5 max-sm:ml-0  bg-transparent overflow-hidden"
    >
      <div className="flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-400 border-transparent" />
      </div>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1  bg-transparent  border-0 py-3 px-3 md:px-32 italic text-base text-[10px] md:text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button
        type="submit"
        className="md:h-full rounded-none rounded-r-full bg-[#10B981] hover:bg-emerald-600 md:px-8 text-white font-medium"
      >
        {buttonText}
      </Button>
    </form>
  );
}

// /* Rectangle 28 */

// box-sizing: border-box;

// position: absolute;
// width: 606px;
// height: 60px;
// left: 80px;
// top: 600px;

// opacity: 0.5;
// border: 1px solid #0000007f;
// border-radius: 41px 0px 0px 41px;

