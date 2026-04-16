import { generatedToolConfigs } from "@/data/generated-tools";

export type ToolType = "ai" | "utility";

export type ToolConfig = {
  name: string;
  slug: string;
  description: string;
  type: ToolType;
  category: "social" | "writing" | "seo" | "image" | "text";
  promptTemplate?: string;
  seoContent?: {
    whatIs: string;
    howToUse: string;
    benefits: string;
    strategy: string;
  };
  inputPlaceholder: string;
  outputLabel: string;
  faq: Array<{ question: string; answer: string }>;
};

export const toolConfigs: ToolConfig[] = [
  {
    name: "Instagram Caption Generator",
    slug: "instagram-caption-generator",
    description: "Generate catchy Instagram captions tailored to your post and audience.",
    type: "ai",
    category: "social",
    promptTemplate:
      "Create 8 engaging Instagram captions for this topic. Keep them short, modern, and include optional emoji ideas: {{input}}",
    inputPlaceholder: "Describe your post, audience, and tone...",
    outputLabel: "Generated Captions",
    faq: [
      {
        question: "Can I generate captions for different niches?",
        answer:
          "Yes. Add details like niche, tone, and target audience in your prompt for more relevant captions.",
      },
      {
        question: "Are hashtags included automatically?",
        answer:
          "This tool focuses on captions. Use our Hashtag Generator for dedicated hashtag suggestions.",
      },
    ],
  },
  {
    name: "Hashtag Generator",
    slug: "hashtag-generator",
    description: "Get relevant hashtags to improve discoverability on social platforms.",
    type: "ai",
    category: "social",
    promptTemplate:
      "Generate 30 relevant hashtags grouped by popularity for this topic: {{input}}",
    inputPlaceholder: "Enter your topic, industry, or post description...",
    outputLabel: "Suggested Hashtags",
    faq: [
      {
        question: "How many hashtags should I use?",
        answer:
          "It depends on platform and niche, but mixing broad and niche hashtags generally performs better.",
      },
      {
        question: "Can this tool work for short videos?",
        answer:
          "Yes. Mention your content format and target audience for better hashtag relevance.",
      },
    ],
  },
  {
    name: "AI Bio Generator",
    slug: "ai-bio-generator",
    description: "Create polished bio options for social media, personal websites, and portfolios.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Write 6 professional and friendly bio options based on this information: {{input}}",
    inputPlaceholder: "Share role, strengths, goals, and personality...",
    outputLabel: "Generated Bios",
    faq: [
      {
        question: "Can I create a short and long bio together?",
        answer:
          "Yes. Mention preferred lengths and platform names in your prompt.",
      },
      {
        question: "Will the bio sound human?",
        answer:
          "The output is designed to be natural, but you should personalize final wording for best authenticity.",
      },
    ],
  },
  {
    name: "Blog Title Generator",
    slug: "blog-title-generator",
    description: "Generate compelling blog post titles optimized for clicks and search intent.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Create 20 SEO-friendly blog titles for this topic, including listicle and how-to variants: {{input}}",
    inputPlaceholder: "Enter your blog topic and audience...",
    outputLabel: "Generated Titles",
    faq: [
      {
        question: "Are these titles SEO optimized?",
        answer:
          "The tool targets search intent and click appeal, but you should still validate keywords with SEO tools.",
      },
      {
        question: "Can I get titles by style?",
        answer:
          "Yes. Include style instructions like authoritative, playful, or beginner-friendly.",
      },
    ],
  },
  {
    name: "Meta Description Generator",
    slug: "meta-description-generator",
    description: "Create concise, compelling meta descriptions that improve SERP CTR.",
    type: "ai",
    category: "seo",
    promptTemplate:
      "Generate 8 SEO meta descriptions under 155 characters for this page context: {{input}}",
    inputPlaceholder: "Paste your page topic, target keyword, and angle...",
    outputLabel: "Generated Meta Descriptions",
    faq: [
      {
        question: "Will descriptions stay within Google limits?",
        answer:
          "The tool aims for recommended lengths, but always review final character count before publishing.",
      },
      {
        question: "Can I include calls-to-action?",
        answer:
          "Yes. Ask for CTA styles such as discover, learn, compare, or get started.",
      },
    ],
  },
  {
    name: "Image Converter (JPG/PNG)",
    slug: "image-converter-jpg-png",
    description: "Convert image files between JPG and PNG format quickly in your browser workflow.",
    type: "utility",
    category: "image",
    inputPlaceholder: "Paste image URL or describe desired conversion...",
    outputLabel: "Conversion Result",
    faq: [
      {
        question: "Does this tool upload my image to a third party?",
        answer:
          "Use secure hosting and review your deployment setup. In this starter version, conversion is response-based and extensible.",
      },
      {
        question: "Which format is better for quality?",
        answer:
          "PNG is typically better for transparency and lossless graphics, while JPG is smaller for photos.",
      },
    ],
  },
  {
    name: "Word Counter",
    slug: "word-counter",
    description: "Count words, characters, and estimated reading time instantly.",
    type: "utility",
    category: "text",
    inputPlaceholder: "Paste text to analyze...",
    outputLabel: "Text Analysis",
    faq: [
      {
        question: "Is punctuation counted as words?",
        answer:
          "No. Word counts are based on tokenized text segments separated by whitespace.",
      },
      {
        question: "How is reading time calculated?",
        answer:
          "Reading time is estimated using an average speed of 200 words per minute.",
      },
    ],
  },
  {
    name: "TikTok Caption Generator",
    slug: "tiktok-caption-generator",
    description: "Generate short, engaging TikTok captions with hooks and CTA options.",
    type: "ai",
    category: "social",
    promptTemplate:
      "Create 12 TikTok caption options with a strong opening hook for this topic: {{input}}",
    inputPlaceholder: "Describe your TikTok video and audience...",
    outputLabel: "Generated TikTok Captions",
    faq: [
      {
        question: "Can I request trend-focused captions?",
        answer: "Yes. Include trend style, tone, and audience age range in your prompt.",
      },
      {
        question: "Can I ask for short captions only?",
        answer: "Yes. Add a max length requirement in your input.",
      },
    ],
  },
  {
    name: "LinkedIn Post Generator",
    slug: "linkedin-post-generator",
    description: "Create professional LinkedIn post drafts for personal brand growth.",
    type: "ai",
    category: "social",
    promptTemplate:
      "Write 5 LinkedIn post drafts with clear structure and CTA for this topic: {{input}}",
    inputPlaceholder: "Enter topic, perspective, and professional audience...",
    outputLabel: "Generated LinkedIn Posts",
    faq: [
      {
        question: "Can I generate thought leadership style posts?",
        answer: "Yes. Mention your stance, experience, and desired tone.",
      },
      {
        question: "Can this include a CTA?",
        answer: "Yes. Request CTA styles such as comment, share, or connect.",
      },
    ],
  },
  {
    name: "YouTube Title Generator",
    slug: "youtube-title-generator",
    description: "Generate click-worthy YouTube titles optimized for audience curiosity.",
    type: "ai",
    category: "social",
    promptTemplate:
      "Generate 20 YouTube title ideas with curiosity and clarity for: {{input}}",
    inputPlaceholder: "Describe your video topic and target audience...",
    outputLabel: "Generated YouTube Titles",
    faq: [
      {
        question: "Can titles be optimized for search and CTR?",
        answer: "Yes. Include your target keyword and intent in the prompt.",
      },
      {
        question: "Can I get list-style titles?",
        answer: "Yes. Mention listicle preference and desired title length.",
      },
    ],
  },
  {
    name: "Tweet Generator",
    slug: "tweet-generator",
    description: "Create concise tweet drafts for announcements, opinions, and promotions.",
    type: "ai",
    category: "social",
    promptTemplate:
      "Write 10 concise tweet options with optional hashtags for: {{input}}",
    inputPlaceholder: "Enter context, intent, and audience...",
    outputLabel: "Generated Tweets",
    faq: [
      {
        question: "Can I generate a thread starter?",
        answer: "Yes. Ask for thread-style hooks with a numbered format.",
      },
      {
        question: "Does this tool enforce character limits?",
        answer: "It targets concise output, but you should review final character count.",
      },
    ],
  },
  {
    name: "Product Description Generator",
    slug: "product-description-generator",
    description: "Generate persuasive product descriptions for ecommerce pages.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Write 5 persuasive product descriptions with benefits-first copy for: {{input}}",
    inputPlaceholder: "Add product features, audience, and brand tone...",
    outputLabel: "Generated Product Descriptions",
    faq: [
      {
        question: "Can I request short and long versions?",
        answer: "Yes. Include target word counts in the prompt.",
      },
      {
        question: "Can descriptions include SEO keywords?",
        answer: "Yes. Provide keyword targets and intent.",
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    slug: "email-subject-line-generator",
    description: "Generate subject lines designed to improve open rates.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Generate 25 email subject lines with varied tones for this campaign: {{input}}",
    inputPlaceholder: "Describe campaign goal, audience, and offer...",
    outputLabel: "Generated Subject Lines",
    faq: [
      {
        question: "Can I generate subject lines for newsletters?",
        answer: "Yes. Mention newsletter angle and audience sophistication level.",
      },
      {
        question: "Can I ask for A/B test variants?",
        answer: "Yes. Ask for grouped variants with different emotional triggers.",
      },
    ],
  },
  {
    name: "Cold Email Generator",
    slug: "cold-email-generator",
    description: "Create personalized cold outreach email drafts in seconds.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Write 4 personalized cold email drafts with clear CTA for: {{input}}",
    inputPlaceholder: "Enter prospect details, value prop, and CTA...",
    outputLabel: "Generated Cold Emails",
    faq: [
      {
        question: "Can I generate follow-up emails too?",
        answer: "Yes. Mention sequence step number and context.",
      },
      {
        question: "Can I keep emails under 120 words?",
        answer: "Yes. Include your strict word count request.",
      },
    ],
  },
  {
    name: "Paraphrasing Tool",
    slug: "paraphrasing-tool",
    description: "Rewrite text for clarity, tone, and originality.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Paraphrase this text in 3 styles: clear, formal, and conversational: {{input}}",
    inputPlaceholder: "Paste text to rewrite...",
    outputLabel: "Paraphrased Output",
    faq: [
      {
        question: "Will meaning be preserved?",
        answer: "The tool aims to keep intent, but you should review critical details.",
      },
      {
        question: "Can I ask for simpler language?",
        answer: "Yes. Specify reading level and tone in your prompt.",
      },
    ],
  },
  {
    name: "Blog Outline Generator",
    slug: "blog-outline-generator",
    description: "Create structured blog outlines aligned with search intent.",
    type: "ai",
    category: "writing",
    promptTemplate:
      "Create a detailed H2/H3 blog outline with key talking points for: {{input}}",
    inputPlaceholder: "Enter target keyword, audience, and topic...",
    outputLabel: "Generated Blog Outline",
    faq: [
      {
        question: "Can I get beginner and advanced outlines?",
        answer: "Yes. Mention skill level and desired depth.",
      },
      {
        question: "Can this include CTA sections?",
        answer: "Yes. Ask for CTA placements in the structure.",
      },
    ],
  },
  {
    name: "FAQ Generator",
    slug: "faq-generator",
    description: "Generate relevant FAQ questions and answers for landing pages.",
    type: "ai",
    category: "seo",
    promptTemplate:
      "Generate 12 FAQ question-answer pairs for this page topic: {{input}}",
    inputPlaceholder: "Describe your page, audience, and use case...",
    outputLabel: "Generated FAQs",
    faq: [
      {
        question: "Can FAQ output help with rich snippets?",
        answer: "It can support structured content, but schema implementation is still required.",
      },
      {
        question: "Can I request short answers?",
        answer: "Yes. Include preferred answer length in your prompt.",
      },
    ],
  },
  {
    name: "SEO Keyword Clustering Tool",
    slug: "seo-keyword-clustering-tool",
    description: "Group related keywords into topic clusters for content strategy.",
    type: "ai",
    category: "seo",
    promptTemplate:
      "Cluster these keywords by intent and topic. Return clear groups: {{input}}",
    inputPlaceholder: "Paste keyword list separated by commas or lines...",
    outputLabel: "Keyword Clusters",
    faq: [
      {
        question: "Can this separate by intent type?",
        answer: "Yes. Mention intent labels like informational or transactional.",
      },
      {
        question: "Can I use this for content hubs?",
        answer: "Yes. Clusters are useful for pillar and supporting page mapping.",
      },
    ],
  },
  {
    name: "SEO Slug Generator",
    slug: "seo-slug-generator",
    description: "Generate clean, readable, keyword-focused URL slugs.",
    type: "ai",
    category: "seo",
    promptTemplate:
      "Generate SEO-friendly URL slug options for this title or topic: {{input}}",
    inputPlaceholder: "Enter title or target keyword phrase...",
    outputLabel: "Generated Slugs",
    faq: [
      {
        question: "Should slugs include stop words?",
        answer: "Usually remove unnecessary words unless clarity suffers.",
      },
      {
        question: "Can I request short slugs only?",
        answer: "Yes. Add your max character preference.",
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    slug: "youtube-description-generator",
    description: "Create SEO-friendly video descriptions with CTA and links format.",
    type: "ai",
    category: "seo",
    promptTemplate:
      "Write 4 YouTube video descriptions optimized for discoverability: {{input}}",
    inputPlaceholder: "Share video topic, target keyword, and CTA...",
    outputLabel: "Generated YouTube Descriptions",
    faq: [
      {
        question: "Can this include timestamp templates?",
        answer: "Yes. Request timestamp-ready format in your prompt.",
      },
      {
        question: "Can descriptions include hashtags?",
        answer: "Yes. Ask for relevant tags appended at the end.",
      },
    ],
  },
  {
    name: "Alt Text Generator",
    slug: "alt-text-generator",
    description: "Generate descriptive image alt text for accessibility and SEO.",
    type: "ai",
    category: "seo",
    promptTemplate:
      "Generate 5 descriptive alt text options for this image context: {{input}}",
    inputPlaceholder: "Describe the image details and context...",
    outputLabel: "Generated Alt Text",
    faq: [
      {
        question: "Should alt text include keywords?",
        answer: "Only when naturally relevant; prioritize accurate descriptions first.",
      },
      {
        question: "Can I request concise alt text?",
        answer: "Yes. Add character length guidelines in your prompt.",
      },
    ],
  },
  {
    name: "Image Resizer",
    slug: "image-resizer",
    description: "Calculate and generate image resize guidance for web and social formats.",
    type: "utility",
    category: "image",
    inputPlaceholder: "Enter current size and target platform (e.g. 1920x1080 for Instagram)...",
    outputLabel: "Resize Guidance",
    faq: [
      {
        question: "Does this resize files directly?",
        answer: "This starter version returns sizing guidance and integration-ready output.",
      },
      {
        question: "Can I get multiple target sizes?",
        answer: "Yes. Provide all target platform dimensions in input.",
      },
    ],
  },
  {
    name: "Image Compress Estimator",
    slug: "image-compress-estimator",
    description: "Estimate compression savings for image optimization workflows.",
    type: "utility",
    category: "image",
    inputPlaceholder: "Enter file size and desired quality level...",
    outputLabel: "Compression Estimate",
    faq: [
      {
        question: "Is this exact compression output?",
        answer: "No. It provides a practical estimate for planning and optimization.",
      },
      {
        question: "Can this be connected to real compression APIs?",
        answer: "Yes. The utility endpoint is designed for easy extension.",
      },
    ],
  },
  {
    name: "Character Counter",
    slug: "character-counter",
    description: "Count characters with and without spaces for platform limits.",
    type: "utility",
    category: "text",
    inputPlaceholder: "Paste text to count characters...",
    outputLabel: "Character Count",
    faq: [
      {
        question: "Does it count spaces?",
        answer: "Yes. You can derive counts with and without spaces in processing logic.",
      },
      {
        question: "Can I use this for ad copy limits?",
        answer: "Yes. It helps validate platform character restrictions quickly.",
      },
    ],
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    description: "Convert text between upper case, lower case, and title case.",
    type: "utility",
    category: "text",
    inputPlaceholder: "Paste text and mention target case style...",
    outputLabel: "Converted Text",
    faq: [
      {
        question: "Can I convert to sentence case?",
        answer: "Yes. Mention desired case format in your input.",
      },
      {
        question: "Can this preserve punctuation?",
        answer: "Yes. Conversion focuses on letter case transformation.",
      },
    ],
  },
  {
    name: "Reading Time Calculator",
    slug: "reading-time-calculator",
    description: "Estimate reading duration based on text length and speed.",
    type: "utility",
    category: "text",
    inputPlaceholder: "Paste your article content...",
    outputLabel: "Reading Time Result",
    faq: [
      {
        question: "Can I change reading speed assumptions?",
        answer: "Yes. Extend utility logic with custom WPM input.",
      },
      {
        question: "Is this useful for UX?",
        answer: "Yes. Estimated read time improves content planning and engagement.",
      },
    ],
  },
  {
    name: "Text Summarizer",
    slug: "text-summarizer",
    description: "Summarize long text into concise key points.",
    type: "ai",
    category: "text",
    promptTemplate:
      "Summarize this content into concise bullet points and a short paragraph: {{input}}",
    inputPlaceholder: "Paste long-form text to summarize...",
    outputLabel: "Summary Output",
    faq: [
      {
        question: "Can I request executive summaries?",
        answer: "Yes. Specify audience and desired summary format.",
      },
      {
        question: "Can this preserve technical details?",
        answer: "Yes. Ask to retain terms, numbers, and key constraints.",
      },
    ],
  },
  {
    name: "Grammar Fixer",
    slug: "grammar-fixer",
    description: "Improve grammar, clarity, and tone while preserving meaning.",
    type: "ai",
    category: "text",
    promptTemplate:
      "Fix grammar and improve readability while keeping intent unchanged: {{input}}",
    inputPlaceholder: "Paste text that needs correction...",
    outputLabel: "Corrected Text",
    faq: [
      {
        question: "Will tone stay the same?",
        answer: "It aims to preserve tone, but you can request exact style instructions.",
      },
      {
        question: "Can it rewrite awkward sentences?",
        answer: "Yes. It improves fluency and readability as part of correction.",
      },
    ],
  },
  ...generatedToolConfigs,
];

export const toolCategories = ["all", "social", "writing", "seo", "image", "text"] as const;

export type ToolCategory = (typeof toolCategories)[number];

export function getToolBySlug(slug: string) {
  return toolConfigs.find((tool) => tool.slug === slug);
}
