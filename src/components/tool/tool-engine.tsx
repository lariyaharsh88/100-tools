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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="space-y-4">
        <label htmlFor="tool-input" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Input
        </label>
        <textarea
          id="tool-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={tool.inputPlaceholder}
          className="h-36 w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 text-slate-800 outline-none ring-blue-200 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
        />
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isLoading}
          className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
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

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{tool.outputLabel}</h3>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!output}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            Copy to Clipboard
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-200">{output || "Your generated result appears here."}</pre>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Generation History
        </h3>
        {history.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">No generations yet.</p>
        ) : (
          <ul className="space-y-3">
            {history.slice(0, 5).map((item) => (
              <li key={item.createdAt} className="rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-700">
                <p className="font-medium text-slate-800 dark:text-slate-200">Input: {item.input}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">Output: {item.output}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
