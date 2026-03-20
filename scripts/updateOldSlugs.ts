import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

async function updateOldSlugs() {
  await connectDB();

  const slugMap: Record<string, string> = {
    "2025no": "no",
    "2025cto": "cto",
    "2025ceo": "ceo",
    "2025cfo": "cfo",
    "2025cqao": "cqao",
    "2025bmo": "bmo",
    "2025cbmo": "cbmo"
  };

  for (const [slug, oldSlug] of Object.entries(slugMap)) {
    await Member.updateOne(
      { slug },
      { $set: { oldSlug } }
    );

    console.log(`${slug} → ${oldSlug}`);
  }

  console.log("Old slugs updated");
  process.exit();
}

updateOldSlugs();