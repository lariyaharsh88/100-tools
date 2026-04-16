import type { ToolConfig } from "@/data/tools";

export function createSeoBody(tool: ToolConfig): string[] {
  if (tool.seoContent) {
    return [
      tool.seoContent.whatIs,
      tool.seoContent.howToUse,
      tool.seoContent.benefits,
      tool.seoContent.strategy,
    ];
  }

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

  return [baseText, usageText, benefitText, strategyText];
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
