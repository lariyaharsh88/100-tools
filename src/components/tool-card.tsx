import Link from "next/link";
import { ToolConfig } from "@/data/tools";

type ToolCardProps = {
  tool: ToolConfig;
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <p className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
        {tool.type}
      </p>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{tool.name}</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
      <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-300">Open tool</p>
    </Link>
  );
}
