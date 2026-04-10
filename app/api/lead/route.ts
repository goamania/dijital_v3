import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, service, message } = body;
    
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, service, message' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare CRM payload
    const payload = {
      timestamp: new Date().toISOString(),
      source: 'website_contact_form',
      lead: {
        name,
        email,
        phone: body.phone || null,
        company: body.company || null,
        service,
        message,
      },
    };

    // Send to CRM webhook if configured
    const CRM_WEBHOOK_URL = process.env.HUBSPOT_WEBHOOK_URL;
    
    if (CRM_WEBHOOK_URL) {
      try {
        await fetch(CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: [
              { name: 'fullname', value: name },
              { name: 'email', value: email },
              { name: 'phone', value: body.phone || '' },
              { name: 'company', value: body.company || '' },
              { name: 'service_interested', value: service },
              { name: 'message', value: message },
            ],
          }),
        });
      } catch (crmError) {
        console.error('CRM integration failed:', crmError);
        // Continue anyway - don't block user experience
      }
    }

    // In production: Save to database, send notification email, etc.
    console.log('Lead received via API:', email);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        timestamp: payload.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Rate limiting helper (simple in-memory implementation)
// In production, use Redis or similar
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = requestCounts.get(ip);
  
  if (!limit) {
    requestCounts.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return false;
  }
  
  if (now > limit.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + 3600000 });
    return false;
  }
  
  if (limit.count >= 10) { // Max 10 requests per hour
    return true;
  }
  
  limit.count++;
  return false;
}
