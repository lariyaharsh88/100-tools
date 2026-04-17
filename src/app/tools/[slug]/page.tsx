import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import AdComponent from "@/components/ad-component";
import { getToolBySlug, toolConfigs } from "@/data/tools";
import { buildFaqSchema, createSeoBody } from "@/lib/seo";

const ToolEngine = dynamic(() => import("@/components/tool/tool-engine"), {
  ssr: false,
  loading: () => <p className="ui-text-muted text-sm">Loading tool...</p>,
});

type ToolPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return toolConfigs.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return {
      title: "Tool Not Found | 100 Free AI Tools",
    };
  }

  return {
    title: `${tool.name} | 100 Free AI Tools`,
    description: `${tool.description} Use this free tool instantly and improve your workflow with optimized output in seconds.`,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  const [whatIsText, howToUseText, benefitsText, strategyText] = createSeoBody(tool);
  const faqSchema = buildFaqSchema(tool);

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-4">
        <h1 className="text-3xl font-bold sm:text-4xl">{tool.name}</h1>
        <p className="ui-text-muted text-base">{tool.description}</p>
      </article>

      <AdComponent placement="top" />

      <ToolEngine tool={tool} />

      <AdComponent placement="middle" />

      <section className="ui-surface space-y-6 rounded-3xl p-6">
        <section>
          <h2 className="text-2xl font-semibold">What is this tool?</h2>
          <p className="ui-text-muted mt-3 leading-7">{whatIsText}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">How to use</h2>
          <h3 className="mt-2 text-lg font-medium">Step-by-step workflow</h3>
          <p className="ui-text-muted mt-2 leading-7">{howToUseText}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Benefits</h2>
          <p className="ui-text-muted mt-3 leading-7">{benefitsText}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">SEO and growth strategy</h2>
          <p className="ui-text-muted mt-3 leading-7">{strategyText}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-4 space-y-4">
            {tool.faq.map((faq) => (
              <div key={faq.question} className="ui-surface ui-surface-muted rounded-xl p-4">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="ui-text-muted mt-2 text-sm leading-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <AdComponent placement="bottom" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}
