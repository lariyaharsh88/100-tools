import Link from "next/link";
import { ToolConfig } from "@/data/tools";

type ToolCardProps = {
  tool: ToolConfig;
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="ui-surface group rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <p
        className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase"
        style={{
          backgroundColor: "rgb(var(--ring) / 0.18)",
          color: "var(--primary)",
        }}
      >
        {tool.type}
      </p>
      <h2 className="text-lg font-semibold">{tool.name}</h2>
      <p className="ui-text-muted mt-2 text-sm">{tool.description}</p>
      <p className="mt-4 text-sm font-medium" style={{ color: "var(--primary)" }}>
        Open tool
      </p>
    </Link>
  );
}
