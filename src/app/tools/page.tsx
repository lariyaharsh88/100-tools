import Link from "next/link";
import AdComponent from "@/components/ad-component";
import { toolConfigs } from "@/data/tools";

export const metadata = {
  title: "All Tools | 100 Free AI Tools",
  description:
    "Browse all free AI and utility tools. Find generators and productivity tools by category and use case.",
};

export default function ToolsIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900">
        <h1 className="text-3xl font-bold sm:text-4xl">All Tools</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Explore every tool in the 100 Free AI Tools library. Select a tool to open its dedicated page.
        </p>
      </section>

      <div className="mb-8">
        <AdComponent placement="top" />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolConfigs.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
              {tool.type}
            </p>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
          </Link>
        ))}
      </section>

      <div className="mt-8">
        <AdComponent placement="bottom" />
      </div>
    </main>
  );
}
