import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ oldSlug: string }>;
}) {
  await connectDB();

  const { oldSlug } = await params; // ✅ FIX

  const member = await Member.findOne({
    oldSlug,
  }).lean();

  if (member) {
    redirect(`/team/member/${member.slug}`);
  }

  return <div>Member not found</div>;
}