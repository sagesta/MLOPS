import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new NextResponse("OpenAI API key is not configured. Set OPENAI_API_KEY in Vercel (or .env locally).", {
      status: 500,
    });
  }

  const openai = new OpenAI({ apiKey });
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  const response = await openai.chat.completions.create({
    model,
    messages: [
      { role: "user", content: "Come up with a new business idea for AI Agents" },
    ],
  });

  const text = response.choices[0]?.message?.content ?? "";
  if (!text) {
    return new NextResponse("No content returned from the model.", { status: 502 });
  }

  return new NextResponse(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
