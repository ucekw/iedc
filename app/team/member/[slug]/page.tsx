import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";
import MemberProfile from "@/components/MemberProfile";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();

  // ✅ FIX: unwrap params
  const { slug } = await params;

  const member = await Member.findOne({ slug })
    .select("name image role year bio slug")
    .lean();

  if (!member) {
    return notFound();
  }

  return (
    <MemberProfile
      member={JSON.parse(JSON.stringify(member))}
    />
  );
}