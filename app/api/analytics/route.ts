import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, value, delta, id } = body;

    // In production, send to your analytics service:
    // - Google Analytics Measurement Protocol
    // - Datadog RUM
    // - New Relic
    // - Custom database
    
    console.log(`[Web Vitals] ${name}: ${value}ms (delta: ${delta}ms, id: ${id})`);

    // Example: Send to Google Analytics 4 via Measurement Protocol
    if (process.env.GA4_MEASUREMENT_ID && process.env.GA4_API_SECRET) {
      try {
        await fetch(
          `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              client_id: id,
              events: [{
                name: 'web_vitals',
                params: {
                  metric_name: name,
                  metric_value: value,
                  metric_delta: delta,
                },
              }],
            }),
          }
        );
      } catch (gaError) {
        console.error('Failed to send to GA4:', gaError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Analytics endpoint error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
