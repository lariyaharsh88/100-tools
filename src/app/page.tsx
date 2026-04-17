import dynamic from "next/dynamic";
import AdComponent from "@/components/ad-component";
import { toolConfigs } from "@/data/tools";

const HomeClient = dynamic(() => import("@/components/home-client"), {
  ssr: false,
  loading: () => <p className="ui-text-muted text-sm">Loading tools...</p>,
});

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section
        className="rounded-3xl p-8 shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--primary) 92%, #1e3a8a 8%) 0%, color-mix(in srgb, var(--primary) 75%, #4338ca 25%) 100%)",
          color: "white",
        }}
      >
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-blue-100">AI Toolkit Platform</p>
        <h1 className="text-3xl font-bold sm:text-4xl">100 Free AI Tools</h1>
        <p className="mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
          Launch faster with free AI and utility tools built for creators, founders, marketers, and SEO teams.
          Every tool has a dedicated search-optimized landing page.
        </p>
      </section>

      <section className="my-8">
        <AdComponent placement="top" />
      </section>

      <HomeClient tools={toolConfigs} />

      <section className="my-8">
        <AdComponent placement="bottom" />
      </section>
    </main>
  );
}
