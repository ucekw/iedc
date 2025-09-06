import type { Metadata } from "next";
import TeamPageClient from "./team-client";

const ogImageUrl = "https://iedc.uck.ac.in/banner/team25.jpg";


export const metadata: Metadata = {
  title: "Team - Legacy IEDC UCEK",
  description: "Meet our Executive Committee and team members driving innovation and entrepreneurship at University College of Engineering, Kariavattom",
  keywords: "Legacy IEDC UCEK team, executive committee, IEDC team members, UCEK team, innovation team, entrepreneurship team",
  openGraph: {
    title: "Team - Legacy IEDC UCEK",
    description: "Meet our Executive Committee and team members driving innovation and entrepreneurship at University College of Engineering, Kariavattom",
    type: "website",
    url: "https://legacyiedc.in/team",
    siteName: "Legacy IEDC UCEK",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Legacy IEDC UCEK Team 2025",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team - Legacy IEDC UCEK",
    description: "Meet our Executive Committee and team members driving innovation and entrepreneurship at University College of Engineering, Kariavattom",
    images: [ogImageUrl],
  },
};

export default function Page() {
  return <TeamPageClient />;
}
