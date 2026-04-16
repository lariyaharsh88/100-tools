import { NextResponse } from "next/server";

type UtilityRequest = {
  input?: string;
  toolSlug?: string;
};

function handleWordCounter(input: string) {
  const words = input.trim() ? input.trim().split(/\s+/).length : 0;
  const characters = input.length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return `Words: ${words}\nCharacters: ${characters}\nEstimated reading time: ${readingTime} min`;
}

function handleImageConverter(input: string) {
  const maybePng = input.toLowerCase().includes("png");
  const maybeJpg = input.toLowerCase().includes("jpg") || input.toLowerCase().includes("jpeg");

  if (maybePng) {
    return "Suggested conversion: PNG -> JPG\nStatus: Ready for conversion pipeline integration.";
  }

  if (maybeJpg) {
    return "Suggested conversion: JPG -> PNG\nStatus: Ready for conversion pipeline integration.";
  }

  return "Provide input containing JPG or PNG to auto-detect conversion direction.";
}

export async function POST(request: Request) {
  try {
    const { input = "", toolSlug } = (await request.json()) as UtilityRequest;

    if (!input.trim()) {
      return NextResponse.json({ error: "Input is required." }, { status: 400 });
    }

    let result = "Utility result generated.";

    if (toolSlug === "word-counter") {
      result = handleWordCounter(input);
    }

    if (toolSlug === "image-converter-jpg-png") {
      result = handleImageConverter(input);
    }

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: "Failed to process utility request." }, { status: 500 });
  }
}
