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
      <section className="ui-surface mb-8 rounded-3xl p-8">
        <h1 className="text-3xl font-bold sm:text-4xl">All Tools</h1>
        <p className="ui-text-muted mt-3">
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
            className="ui-surface rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p
              className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase"
              style={{ backgroundColor: "rgb(var(--ring) / 0.18)", color: "var(--primary)" }}
            >
              {tool.type}
            </p>
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="ui-text-muted mt-2 text-sm">{tool.description}</p>
          </Link>
        ))}
      </section>

      <div className="mt-8">
        <AdComponent placement="bottom" />
      </div>
    </main>
  );
}
