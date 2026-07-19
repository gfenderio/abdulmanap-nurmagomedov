import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://feeds.behold.so/5g8dhtE2gIgC4iTrHerE', {
      next: { revalidate: 3600 }, // Cache response for 1 hour to prevent hitting rate limits
    });
    
    if (!response.ok) {
      throw new Error(`Behold API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching from Behold:', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram feed' }, { status: 500 });
  }
}
