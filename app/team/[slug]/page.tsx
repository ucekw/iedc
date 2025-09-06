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
    const baseUrl = 'https://iedc.uck.ac.in';
    
    // Handle image URL with proper sizing for social media
    let ogImageUrl = `${baseUrl}/logo.svg`; // Default fallback
    let twitterImageUrl = `${baseUrl}/logo.svg`; // Default fallback
    
    if (data[9]) {
      const match = data[9].match(/\/d\/([\w-]+)/);
      if (match && match[1]) {
        const driveImageId = match[1];
        
        // Create properly sized images for different platforms
        ogImageUrl = `${baseUrl}/api/image-proxy?id=${driveImageId}`;
        twitterImageUrl = `${baseUrl}/api/image-proxy?id=${driveImageId}&width=1200&height=675`; // Twitter's preferred ratio
      }
    }

    return {
      title: `${memberName} - Legacy IEDC UCEK`,
      description: `${memberName}, ${memberRole} at Legacy IEDC UCEK. Learn about our team member and their role in Innovation and Entrepreneurship Development.`,
      
      openGraph: {
        title: `${memberName} - Legacy IEDC UCEK`,
        description: `${memberRole} at Legacy IEDC UCEK.`,
        url: `${baseUrl}/team/${slug}${id ? `?id=${id}` : ''}`,
        siteName: 'Legacy IEDC UCEK',
        type: 'profile',
        images: [
          {
            url: ogImageUrl,
            width: 264,
            height: 264,
            alt: `${memberName} - Legacy IEDC UCEK Team Member`,
            type: 'image/jpeg',
          }
        ],
        locale: 'en_US',
      },
      
      twitter: {
        card: 'summary_large_image',
        title: `${memberName} - Legacy IEDC UCEK`,
        description: `${memberName}, ${memberRole} at Legacy IEDC UCEK.`,
        images: [
          {
            url: twitterImageUrl,
            alt: `${memberName} - Legacy IEDC UCEK Team Member`,
            width: 1200,
            height: 675,
          }
        ],
        creator: '@LegacyIEDCUCEK', // Replace with your Twitter handle
        site: '@LegacyIEDCUCEK', // Replace with your Twitter handle
      },

      // Additional metadata for better compatibility
      verification: {
        // Add verification tokens if you have them
        // google: 'your-google-verification-token',
        // yandex: 'your-yandex-verification-token',
      },
      
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      
      // Additional social media metadata
      other: {
        // WhatsApp uses these
        'og:image:width': '1200',
        'og:image:height': '630',
        // LinkedIn specific
        'linkedin:owner': 'your-linkedin-page-id',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Legacy IEDC UCEK Team',
      description: 'Meet our team at Legacy IEDC UCEK',
      openGraph: {
        title: 'Legacy IEDC UCEK Team',
        description: 'Meet our team at Legacy IEDC UCEK',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://iedc.uck.ac.in'}/logo.svg`,
            width: 1200,
            height: 630,
            alt: 'Legacy IEDC UCEK',
          }
        ],
      },
    };
  }
}

function Page() {
  return <TeamMemberClient />;
}

export default Page;