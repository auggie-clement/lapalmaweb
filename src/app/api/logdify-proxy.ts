// pages/api/lodgify-proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure it's a GET request
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Get the target Lodgify iCal URL from the query parameters
  const { url: targetUrl } = req.query;

  // Validate the target URL
  if (!targetUrl || typeof targetUrl !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid target iCal URL parameter (`url`)' });
  }

  // Basic validation (optional)
  try {
    new URL(targetUrl);
  } catch (_) {
    return res.status(400).json({ error: 'Invalid target iCal URL provided' });
  }

  console.log(`Proxying request to: ${targetUrl}`); // Log for debugging

  try {
    // Fetch the iCal data from Lodgify (server-to-server)
    const response = await fetch(targetUrl, {
        method: 'GET',
        headers: { /* Optional: User-Agent */ },
        // ***** ADD THIS LINE *****
        redirect: 'follow', // Automatically follow redirects (like 301)

        // signal: AbortSignal.timeout(10000), // Optional timeout
    });

    // Check if the fetch was successful
    if (!response.ok) {
        console.error(`Upstream fetch failed: ${response.status} ${response.statusText}`);
        // Forward the upstream error status if possible, or use a generic 502 Bad Gateway
        return res.status(response.status < 500 ? 502 : response.status)
                  .json({ error: `Failed to fetch iCal from origin: ${response.statusText}` });
    }

    // Get the iCal data as text
    const icalData = await response.text();

    // Set appropriate headers
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    // Optional: Add caching headers
    // res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=1800');

    // Send the iCal data back to the client
    res.status(200).send(icalData);

  } catch (error: any) {
    console.error('Proxy Error:', error);
     // Handle potential fetch errors (network issues, timeouts)
    res.status(500).json({ error: 'Internal Server Error fetching iCal data via proxy', details: error.message });
  }
}