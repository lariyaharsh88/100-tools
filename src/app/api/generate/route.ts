import { NextResponse } from "next/server";
import { getToolBySlug } from "@/data/tools";
import { formatPrompt } from "@/lib/utils";

type GenerateRequest = {
  input?: string;
  toolSlug?: string;
};

async function callOpenAI(prompt: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data?.choices?.[0]?.message?.content?.trim() || null;
}

async function callGemini(prompt: string) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  );

  if (!response.ok) return null;

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateRequest;
    const input = body.input?.trim();

    if (!input) {
      return NextResponse.json({ error: "Input is required." }, { status: 400 });
    }

    const tool = body.toolSlug ? getToolBySlug(body.toolSlug) : undefined;
    const prompt = tool ? formatPrompt(tool, input) : input;

    const openAIResult = await callOpenAI(prompt);
    const geminiResult = openAIResult ? null : await callGemini(prompt);

    const result =
      openAIResult ||
      geminiResult ||
      `Mock response for: ${input}\n\n- Option 1: Professional angle\n- Option 2: Conversational angle\n- Option 3: SEO-focused angle`;

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}
