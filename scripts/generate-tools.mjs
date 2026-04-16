import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const keywordsPath = path.join(projectRoot, "src/data/tool-keywords.json");
const outputPath = path.join(projectRoot, "src/data/generated-tools.ts");
const baseToolsPath = path.join(projectRoot, "src/data/tools.ts");
const targetCount = Number(process.argv[2] ?? 100);

const categories = ["social", "writing", "seo", "image", "text"];

const promptTemplates = [
  "Generate 10 high-performing outputs for this {keyword} request: {{input}}",
  "Create a practical step-by-step {keyword} result using this context: {{input}}",
  "Produce SEO-friendly and conversion-focused {keyword} options for: {{input}}",
  "Write concise and professional {keyword} variations from this input: {{input}}",
  "Return an optimized {keyword} draft with alternatives using: {{input}}",
];

const intros = [
  "is built to give creators and teams an immediate production advantage.",
  "helps reduce the time from idea to publish-ready output.",
  "supports high-volume workflows without sacrificing message quality.",
  "turns rough context into polished output in a repeatable process.",
  "is designed for speed, consistency, and practical execution.",
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toTitleCase(text) {
  return text
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function uniqueKeywords(list, count) {
  const seen = new Set();
  const out = [];

  for (const item of list) {
    const normalized = String(item).trim();
    if (!normalized) continue;
    const key = normalized.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(normalized);
    if (out.length >= count) break;
  }

  return out;
}

function extractExistingSlugs(source) {
  const slugs = new Set();
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match = slugRegex.exec(source);

  while (match) {
    slugs.add(match[1]);
    match = slugRegex.exec(source);
  }

  return slugs;
}

function createUniqueSlug(baseSlug, takenSlugs, keyword, collisionLog) {
  let candidate = baseSlug;
  let counter = 2;

  while (takenSlugs.has(candidate)) {
    candidate = `${baseSlug}-${counter}`;
    counter += 1;
  }

  if (candidate !== baseSlug) {
    collisionLog.push({ keyword, original: baseSlug, resolved: candidate });
  }

  takenSlugs.add(candidate);
  return candidate;
}

function createTool(keyword, index, takenSlugs, collisionLog) {
  const keywordTitle = toTitleCase(keyword);
  const keywordSlug = slugify(keyword);
  const uniqueSlug = createUniqueSlug(`${keywordSlug}-generator`, takenSlugs, keyword, collisionLog);
  const category = categories[index % categories.length];
  const promptTemplate = promptTemplates[index % promptTemplates.length].replace("{keyword}", keyword);

  return {
    name: `${keywordTitle} Generator`,
    slug: uniqueSlug,
    description: `Create optimized ${keyword} output quickly for marketing, SEO, and content workflows.`,
    type: "ai",
    category,
    promptTemplate,
    seoContent: {
      whatIs: `${keywordTitle} Generator ${intros[index % intros.length]} It is designed for teams that need focused ${keyword} content without long production cycles. The tool combines structured prompting with reusable output formats so users can move faster from draft to publishing while still preserving brand clarity and quality.`,
      howToUse: `Start by describing your ${keyword} objective, target audience, and preferred tone in the input field. Click generate to receive multiple draft options. Compare outputs, keep the strongest version, then refine wording for your brand voice. For better accuracy, include intent, constraints, and examples in your input before each run.`,
      benefits: `This ${keyword} tool improves speed, consistency, and output quality across repeated content tasks. Teams can produce more assets in less time, standardize messaging quality, and reduce editing overhead. The template-driven format also supports scalable operations when growing from a few pages to a much larger SEO-focused tool library.`,
      strategy: `From an SEO perspective, this page targets users searching for direct ${keyword} solutions with practical intent. Combining utility and explanatory content strengthens topical relevance, improves on-page depth, and supports long-tail keyword coverage. As more keyword-based tools are added, internal linking can compound authority and increase discoverability across the entire site.`,
    },
    inputPlaceholder: `Describe your ${keyword} goal, audience, and preferred style...`,
    outputLabel: `Generated ${keywordTitle} Output`,
    faq: [
      {
        question: `Can this tool generate ${keyword} content for different audiences?`,
        answer:
          "Yes. Include audience details, tone, and context in your prompt to get better targeted results.",
      },
      {
        question: `How can I improve ${keyword} output quality?`,
        answer:
          "Use specific inputs with goals, examples, and constraints, then iterate on the strongest draft.",
      },
    ],
  };
}

function toTsModule(tools) {
  return `/* eslint-disable */\n// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.\n// Run: npm run generate:tools\n\nimport type { ToolConfig } from "@/data/tools";\n\nexport const generatedToolConfigs: ToolConfig[] = ${JSON.stringify(tools, null, 2)};\n`;
}

async function main() {
  const raw = await fs.readFile(keywordsPath, "utf8");
  const parsed = JSON.parse(raw);
  const baseToolsSource = await fs.readFile(baseToolsPath, "utf8");
  const takenSlugs = extractExistingSlugs(baseToolsSource);
  const collisionLog = [];

  if (!Array.isArray(parsed)) {
    throw new Error("src/data/tool-keywords.json must be an array of strings.");
  }

  const keywords = uniqueKeywords(parsed, targetCount);

  if (keywords.length < targetCount) {
    throw new Error(`Expected at least ${targetCount} unique keywords, found ${keywords.length}.`);
  }

  const tools = keywords.map((keyword, index) => createTool(keyword, index, takenSlugs, collisionLog));
  const output = toTsModule(tools);

  await fs.writeFile(outputPath, output, "utf8");
  console.log(`Generated ${tools.length} tools -> src/data/generated-tools.ts`);

  if (collisionLog.length > 0) {
    console.log(`Resolved ${collisionLog.length} slug collision(s):`);
    for (const entry of collisionLog) {
      console.log(`- "${entry.keyword}" => ${entry.original} -> ${entry.resolved}`);
    }
  } else {
    console.log("No slug collisions detected.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
