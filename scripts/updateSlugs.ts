import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

// Load .env file manually
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// Connect manually (do NOT use @ alias)
import Member from "../models/Member";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.MONGODB_URI as string);
}

/* Convert role → short code */
function roleToBaseSlug(role: string) {
  const map: Record<string, string> = {
    "Chief Executive Officer": "ceo",
    "Chief Quality and Operation Officer": "coo",
    "Chief Technology Officer": "cto",
    "Technology Officer": "to",
    "Chief Finance Officer": "cfo",
  };

  return map[role] || role.toLowerCase().replace(/\s+/g, "-");
}

async function run() {
  await connectDB();

  const members = await Member.find().sort({ createdAt: 1 });

  const counter: Record<string, number> = {};

  for (const m of members) {
    const base = roleToBaseSlug(m.role);

    counter[base] = (counter[base] || 0) + 1;

    const slug =
      counter[base] === 1
        ? base
        : `${base}${counter[base]}`;

    m.slug = slug;
    await m.save();

    console.log(`${m.name} → ${slug}`);
  }

  console.log("✅ Slugs updated successfully");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});