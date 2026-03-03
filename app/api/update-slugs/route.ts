import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

/* Smart Abbreviation */
function roleToBaseSlug(role: string) {
  const lower = role.toLowerCase();

  if (lower.includes("chief executive officer")) return "ceo";
  if (lower.includes("chief technology officer")) return "cto";
  if (lower.includes("chief finance officer")) return "cfo";

  const clean = lower
    .replace(/chief/gi, "")
    .replace(/officer/gi, "")
    .trim();

  const words = clean.split(/\s+/);

  return words.map((w) => w[0]).join("");
}

export async function GET() {
  await connectDB();

  const members = await Member.find().sort({ year: 1, role: 1 });

  const counter: Record<string, number> = {};

  for (const m of members) {
    const base = roleToBaseSlug(m.role);
    const key = `${m.year}${base}`;

    counter[key] = (counter[key] || 0) + 1;

    const slug =
      counter[key] === 1
        ? key
        : `${key}${counter[key]}`;

    m.slug = slug;
  }

  // Save AFTER generating all
  for (const m of members) {
    await m.save();
    console.log(`${m.name} → ${m.slug}`);
  }

  return NextResponse.json({ message: "Slugs regenerated safely" });
}