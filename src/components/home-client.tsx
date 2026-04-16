"use client";

import { useMemo, useState } from "react";
import SearchFilterBar from "@/components/search-filter-bar";
import ToolCard from "@/components/tool-card";
import { ToolCategory, ToolConfig } from "@/data/tools";

type HomeClientProps = {
  tools: ToolConfig[];
};

export default function HomeClient({ tools }: HomeClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>("all");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, tools]);

  return (
    <>
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategory={setSelectedCategory}
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </section>
    </>
  );
}
