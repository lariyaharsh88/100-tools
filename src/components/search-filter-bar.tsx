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
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-blue-900"
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
                  ? "bg-blue-600 text-white shadow"
                  : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
