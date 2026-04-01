import Member from "@/models/Member";

/* Convert role → abbreviation */
function roleToBaseSlug(role: string) {
  const words = role
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const abbreviation = words.map((w) => w[0]).join("");

  return abbreviation;
}

/* Generate unique slug */
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