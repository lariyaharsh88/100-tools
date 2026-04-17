"use client";

import { ToolCategory, toolCategories } from "@/data/tools";

type SearchFilterBarProps = {
  searchTerm: string;
  onSearchTerm: (value: string) => void;
  selectedCategory: ToolCategory;
  onCategory: (value: ToolCategory) => void;
};

export default function SearchFilterBar({
  searchTerm,
  onSearchTerm,
  selectedCategory,
  onCategory,
}: SearchFilterBarProps) {
  return (
    <div className="space-y-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchTerm(event.target.value)}
        placeholder="Search free AI tools..."
        className="ui-input w-full"
      />

      <div className="flex flex-wrap gap-2">
        {toolCategories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                active
                  ? "shadow-sm"
                  : "border hover:opacity-90"
              }`}
              style={
                active
                  ? { backgroundColor: "var(--primary)", color: "var(--primary-contrast)" }
                  : {
                      backgroundColor: "var(--surface)",
                      color: "var(--text-muted)",
                      borderColor: "var(--border)",
                    }
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
