import { getMemberData } from "@/lib/data";
import type { Metadata } from 'next';
import TeamMemberClient from "@/components/teamMemberClient";

// Server-side metadata generation
export async function generateMetadata({ 
  params, 
  searchParams 
}: {
  params: { slug: string };
  searchParams: { id?: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const id = searchParams.id;
  const slugId = slug + (id ? `-${id}` : "");

  try {
    const result = await getMemberData(slugId.toLowerCase());
    const data = result[0];

    if (!data) {
      return {
        title: 'Team Member Not Found - Legacy IEDC UCEK',
        description: 'Team member profile not found at Legacy IEDC UCEK',
      };
    }

    const memberName = data[1] || "Team Member";
    const memberRole = data[5] || "Legacy IEDC UCEK Team";
    
    // Handle image URL
    let imageUrl = "/logo.svg"; // Default fallback
    if (data[9]) {
      const match = data[9].match(/\/d\/([\w-]+)/);
      if (match && match[1]) {
        imageUrl = `https://lh3.googleusercontent.com/d/${match[1]}`;
      }
    }

    return {
      title: `${memberName} - Legacy IEDC UCEK`,
      description: `${memberName}, ${memberRole} at Legacy IEDC UCEK. Learn about our team member and their role in Innovation and Entrepreneurship Development.`,
      openGraph: {
        title: `${memberName} - Legacy IEDC UCEK`,
        description: `${memberName}, ${memberRole} at Legacy IEDC UCEK.`,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${memberName} - Legacy IEDC UCEK Team Member`,
          }
        ],
        type: 'profile',
        siteName: 'Legacy IEDC UCEK',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${memberName} - Legacy IEDC UCEK`,
        description: `Meet ${memberName}, ${memberRole} at Legacy IEDC UCEK.`,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Legacy IEDC UCEK Team',
      description: 'Meet our team at Legacy IEDC UCEK',
    };
  }
}

function Page() {
  return <TeamMemberClient />;
}

export default Page;