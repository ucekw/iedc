import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name') || 'Team Member';
  const role = searchParams.get('role') || 'Legacy IEDC UCEK Team';
  const imageId = searchParams.get('id');

  try {
   
    

    let memberImage;
    
    // Try to get the member's photo if available
    if (imageId) {
      try {
        const imageResponse = await fetch(`https://lh3.googleusercontent.com/d/${imageId}`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          },
          signal: AbortSignal.timeout(10000),
        });

        if (imageResponse.ok) {            
          const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
          
          // Process member image - make it circular and resize
          memberImage = await sharp(imageBuffer)
            .resize(264, 264, { fit: 'cover', position: 'center' })
            .png()
            .toBuffer();
        }
      } catch (error) {
        console.log('Could not fetch member image:', error);
      }
    }


    console.log('Generated custom OG image for', name);
    
    if (!memberImage) {
      return new NextResponse('Image not found', { status: 404 });
    }

    return new NextResponse(new Uint8Array(memberImage), {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        'CDN-Cache-Control': 'public, max-age=86400',
        'Vercel-CDN-Cache-Control': 'public, max-age=86400',
      },
    });

  } catch (error) {
    console.error('Error generating custom OG image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}