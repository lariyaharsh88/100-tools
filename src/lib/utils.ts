import { ToolConfig } from "@/data/tools";

export function formatPrompt(tool: ToolConfig, input: string) {
  if (!tool.promptTemplate) {
    return input;
  }

  return tool.promptTemplate.replace("{{input}}", input.trim());
}

export function titleCase(text: string) {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
