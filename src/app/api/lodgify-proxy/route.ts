// app/api/lodgify-proxy/route.ts
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get the target Lodgify iCal URL from the query parameters
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  // Validate the target URL
  if (!targetUrl) {
    return NextResponse.json(
      { error: 'Missing target iCal URL parameter (`url`)' },
      { status: 400 }
    );
  }

  // Basic validation to ensure it looks like a URL (optional but recommended)
  try {
    new URL(targetUrl);
  } catch (_) {
    return NextResponse.json(
      { error: 'Invalid target iCal URL provided' },
      { status: 400 }
    );
  }

  console.log(`Proxying request to: ${targetUrl}`); // Log for debugging

  try {
    // Fetch the iCal data from Lodgify (server-to-server)
    const response = await fetch(targetUrl, {
        method: 'GET',
        headers: { /* Optional: User-Agent */ },
        // ***** ADD THIS LINE *****
        redirect: 'follow', // Automatically follow redirects (like 301)

        // Optional: Set a reasonable timeout
        // signal: AbortSignal.timeout(10000), // 10 seconds timeout (requires Node 16.14+ or specific polyfill)
        next: {
            // Optional: Revalidate cache periodically (e.g., every hour)
            // Adjust the revalidate time based on how often you expect changes
            revalidate: 3600, // Revalidate every 3600 seconds (1 hour)
        }
    });

    // Check if the fetch was successful
    if (!response.ok) {
      console.error(`Upstream fetch failed: ${response.status} ${response.statusText}`);
      // Forward the upstream error status if possible, or use a generic 502 Bad Gateway
      return NextResponse.json(
        { error: `Failed to fetch iCal from origin: ${response.statusText}` },
        { status: response.status < 500 ? 502 : response.status } // Return 502 or the original error status
      );
    }

    // Get the iCal data as text
    const icalData = await response.text();

    // Return the iCal data with the correct Content-Type
    // Using standard Response object for more control
    return new Response(icalData, {
      status: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        // Optional: Add caching headers for the browser/CDN
        // 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1800' // Cache for 10min, revalidate in background up to 30min
      },
    });

  } catch (error: any) {
    console.error('Proxy Error:', error);
    // Handle potential fetch errors (network issues, timeouts)
    return NextResponse.json(
      { error: 'Internal Server Error fetching iCal data via proxy', details: error.message },
      { status: 500 }
    );
  }
}