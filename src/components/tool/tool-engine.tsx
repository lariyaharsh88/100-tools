"use client";

import { useMemo, useState } from "react";
import { ToolConfig } from "@/data/tools";

type HistoryItem = {
  input: string;
  output: string;
  createdAt: string;
};

type ToolEngineProps = {
  tool: ToolConfig;
};

export default function ToolEngine({ tool }: ToolEngineProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const endpoint = useMemo(() => {
    return tool.type === "ai" ? "/api/generate" : "/api/utility";
  }, [tool.type]);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, toolSlug: tool.slug }),
      });

      const data = await response.json();
      const nextOutput = data.result ?? "No result generated.";
      setOutput(nextOutput);

      setHistory((prev) => [
        { input, output: nextOutput, createdAt: new Date().toISOString() },
        ...prev,
      ]);
    } catch (error) {
      setOutput("Unable to generate output right now. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  return (
    <section className="ui-surface rounded-3xl p-6">
      <div className="space-y-4">
        <label htmlFor="tool-input" className="block text-sm font-medium">
          Input
        </label>
        <textarea
          id="tool-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={tool.inputPlaceholder}
          className="ui-input h-36 w-full p-4"
        />
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isLoading}
          className="inline-flex items-center rounded-xl px-5 py-2.5 font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          style={{ backgroundColor: "var(--primary)", color: "var(--primary-contrast)" }}
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Generating...
            </span>
          ) : (
            "Generate"
          )}
        </button>
      </div>

      <div className="ui-surface ui-surface-muted mt-8 rounded-2xl p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold">{tool.outputLabel}</h3>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!output}
            className="rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
              backgroundColor: "var(--surface)",
            }}
          >
            Copy to Clipboard
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-sm">{output || "Your generated result appears here."}</pre>
      </div>

      <div className="mt-8">
        <h3 className="ui-text-muted mb-3 text-sm font-semibold uppercase tracking-wide">
          Generation History
        </h3>
        {history.length === 0 ? (
          <p className="ui-text-muted text-sm">No generations yet.</p>
        ) : (
          <ul className="space-y-3">
            {history.slice(0, 5).map((item) => (
              <li key={item.createdAt} className="ui-surface ui-surface-muted rounded-xl p-3 text-sm">
                <p className="font-medium">Input: {item.input}</p>
                <p className="ui-text-muted mt-1">Output: {item.output}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
