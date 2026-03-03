import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";
import MemberProfile from "@/components/MemberProfile";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();

  // ✅ REQUIRED in Next 16
  const { slug } = await params;

  const member = await Member.findOne({ slug }).lean();

  if (!member) return notFound();

  return (
    <MemberProfile
      member={JSON.parse(JSON.stringify(member))}
    />
  );
}