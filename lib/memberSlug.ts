import Member from "@/models/Member";

/* Smart Abbreviation Generator */
function roleToBaseSlug(role: string) {
  const lower = role.toLowerCase();

  // Special well-known abbreviations
  if (lower.includes("chief executive officer")) return "ceo";
  if (lower.includes("chief technology officer")) return "cto";
  if (lower.includes("chief finance officer")) return "cfo";

  // Remove common words
  const clean = lower
    .replace(/chief/gi, "")
    .replace(/officer/gi, "")
    .trim();

  const words = clean.split(/\s+/);

  const abbreviation = words
    .map((word) => word[0])
    .join("");

  return abbreviation || lower.replace(/\s+/g, "-");
}

/* Generate unique slug with year */
export async function generateUniqueSlug(role: string, year: string) {
  const base = roleToBaseSlug(role);
  const prefix = `${year}${base}`;

  const existing = await Member.find({
    slug: new RegExp(`^${prefix}`)
  }).lean();

  if (existing.length === 0) {
    return prefix;
  }

  return `${prefix}${existing.length + 1}`;
}