import type { ToolConfig } from "@/data/tools";

type Example = {
  input: string;
  output: string;
};

type UseCase = {
  title: string;
  description: string;
};

function keywordBase(tool: ToolConfig) {
  return tool.name.toLowerCase().replace(/\(.*?\)/g, "").replace(/\s+/g, " ").trim();
}

export function createSeoBody(tool: ToolConfig): string[] {
  const seed = keywordBase(tool);
  const custom = tool.seoContent;

  const baseText =
    `${tool.name} is designed for creators, marketers, founders, and teams that need fast, high-quality outputs without expensive software. ` +
    `As part of our growing 100 Free AI Tools collection, this tool helps you move from idea to publish-ready result in minutes. ` +
    `Whether you are optimizing social content, writing better metadata, converting assets, or cleaning up copy, the goal is speed plus quality. ` +
    `The interface is intentionally simple: enter your input, click generate, review output, and iterate quickly. ` +
    `Because the workflow is lightweight, you can test multiple variations and choose the strongest result for your brand voice. ` +
    `This makes it ideal for solo builders and lean teams who need to produce content at scale while maintaining consistency. ` +
    `Our roadmap is built for growth, so you can expect additional templates, smarter prompts, and workflow automation over time. ` +
    `If your strategy depends on publishing speed and consistency, this type of focused generator can become one of your highest-leverage daily tools.`;

  const usageText =
    `To use ${tool.name}, start by entering clear context in the input field. ` +
    `Specific prompts usually produce better output than short generic instructions. ` +
    `After selecting generate, the tool processes your request and returns formatted output you can copy immediately. ` +
    `Use the history panel to compare previous generations and quickly restore an earlier version if needed. ` +
    `If you are publishing professionally, treat each output as a strong first draft and apply your editorial judgment before going live. ` +
    `For SEO-focused workflows, include target keywords, intent, and audience context in your input. ` +
    `This improves relevance and helps align the generated result with your ranking goals. ` +
    `You can also run multiple generations with small prompt variations to test messaging angles before publishing.`;

  const benefitText =
    `${tool.name} helps reduce manual effort while improving consistency across campaigns and pages. ` +
    `By centralizing production in a single tool page, you save switching time and avoid fragmented workflows. ` +
    `The system is also scalable for site owners: tools are configuration-driven, so adding new pages takes minimal engineering effort. ` +
    `This supports long-term SEO growth because each tool can target its own keyword cluster with rich informational content and FAQ schema. ` +
    `From a monetization perspective, reusable ad placements are integrated into strategic sections of the page without overwhelming the user experience. ` +
    `The result is a practical balance of value, discoverability, and revenue potential. ` +
    `As your library grows from a handful of pages to dozens or hundreds, this architecture makes long-term scaling realistic.`;

  const strategyText =
    `From an SEO standpoint, single-purpose tools like ${tool.name} can capture high-intent search traffic because users often look for direct solutions. ` +
    `By pairing utility functionality with long-form educational content, your page satisfies both transactional and informational intent in one destination. ` +
    `This hybrid structure helps increase dwell time, strengthens topical authority, and creates more opportunities to rank for long-tail keyword variations. ` +
    `For site owners, the config-based setup supports fast content expansion, consistent template quality, and easier internal linking between related tools. ` +
    `For users, the immediate value is simplicity: no signup wall, no complex onboarding, and clear output they can apply instantly. ` +
    `Over time, better user signals and stronger content depth can compound into durable organic growth. ` +
    `That is why this model works well for modern builder-led content businesses and productized media projects.`;

  const deepDiveText =
    `A high-performing ${seed} workflow is usually built on three layers: input quality, output refinement, and publishing context. ` +
    `Input quality means adding enough detail so the model understands audience, objective, constraints, and desired format. ` +
    `Output refinement means comparing multiple generations and selecting the strongest direction before polishing language and structure. ` +
    `Publishing context means adapting your final version to platform constraints such as character limits, metadata requirements, and tone expectations. ` +
    `Many users skip this third layer and lose performance even when the generated draft is strong. ` +
    `By using this tool with a repeatable framework, you can improve both speed and quality rather than choosing one over the other. ` +
    `This is especially useful for lean teams where one person manages strategy, execution, and distribution. ` +
    `When your process is repeatable, scaling from 5 assets a week to 50 becomes much more realistic.`;

  const optimizationText =
    `To get better results from ${tool.name}, write prompts the way you would brief a teammate. ` +
    `State the goal, define the audience, include what success looks like, and set clear constraints such as length or voice. ` +
    `If your first result feels generic, add specific examples and ask for alternatives with different angles. ` +
    `For SEO use, include primary keyword, secondary terms, intent type, and funnel stage in your prompt context. ` +
    `For social content, ask for multiple hooks and CTA styles to increase testing opportunities. ` +
    `For conversion pages, request value-first framing with objection-aware language. ` +
    `Small adjustments in prompt structure often produce significant improvements in output quality and relevance. ` +
    `Over repeated sessions, this compounds into stronger content operations and better performance metrics.`;

  const conversionText =
    `From a conversion perspective, tool landing pages work best when utility is immediate and trust is clear. ` +
    `That is why this page places the live generator above educational content, so users can experience value before reading deeply. ` +
    `After trying the tool, they are more likely to engage with use cases, examples, and best practices because the outcome is now concrete. ` +
    `This sequence reduces bounce rates and supports longer sessions. ` +
    `If you run monetization through ads, affiliate links, or premium upgrades, this behavior pattern is valuable because high-intent users spend more time exploring related pages. ` +
    `A practical way to increase conversion is linking to adjacent tools as part of a workflow, for example generating a title first, then a meta description, then social copy. ` +
    `Multi-step journeys create more opportunities for both user success and business outcomes. ` +
    `That is the strategic advantage of a unified tools ecosystem over isolated single pages.`;

  return [
    custom?.whatIs || baseText,
    custom?.howToUse || usageText,
    custom?.benefits || benefitText,
    custom?.strategy || strategyText,
    deepDiveText,
    optimizationText,
    conversionText,
  ];
}

export function buildFaqSchema(tool: ToolConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getKeywordVariations(tool: ToolConfig): string[] {
  const base = keywordBase(tool);
  return [
    `${base} tool`,
    `free ${base}`,
    `${base} online`,
    `best ${base}`,
    `${base} generator`,
    `${base} assistant`,
    `${base} examples`,
    `${base} templates`,
  ];
}

export function getToolExamples(tool: ToolConfig): Example[] {
  return [
    {
      input: `Create a ${tool.name.toLowerCase()} for a beginner audience in a friendly tone.`,
      output:
        "Option A with clear structure, Option B with stronger hook, and Option C optimized for quick publishing.",
    },
    {
      input: `Generate 5 variations with SEO focus and include one high-conversion CTA.`,
      output:
        "Five variations segmented by intent, each with concise wording and one conversion-oriented call to action.",
    },
    {
      input: `Rewrite for enterprise audience with concise and professional language.`,
      output:
        "Professional version with clear value proposition, confidence-building language, and decision-focused messaging.",
    },
  ];
}

export function getToolUseCases(tool: ToolConfig): UseCase[] {
  return [
    {
      title: "Content teams and agencies",
      description:
        `Use ${tool.name} to speed up production cycles, reduce revision loops, and maintain consistent messaging across campaigns.`,
    },
    {
      title: "Founders and solo builders",
      description:
        "Launch high-quality content faster without hiring large teams by turning rough ideas into usable first drafts in minutes.",
    },
    {
      title: "SEO and growth operators",
      description:
        "Generate keyword-aligned variations and test messaging angles quickly to improve click-through rates and ranking outcomes.",
    },
  ];
}
