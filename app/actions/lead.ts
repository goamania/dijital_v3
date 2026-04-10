'use server';

import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type LeadResult = {
  success: boolean;
  message: string;
  data?: any;
};

export async function submitLead(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}): Promise<LeadResult> {
  try {
    // Validate form data
    const validatedData = leadSchema.parse(formData);

    // Prepare payload for CRM webhook (e.g., HubSpot)
    const payload = {
      fields: [
        { name: 'fullname', value: validatedData.name },
        { name: 'email', value: validatedData.email },
        { name: 'phone', value: validatedData.phone || '' },
        { name: 'company', value: validatedData.company || '' },
        { name: 'service_interested', value: validatedData.service },
        { name: 'message', value: validatedData.message },
      ],
      context: {
        pageUri: 'https://www.dijitalv3.com',
        pageName: 'Homepage',
      },
    };

    // Send to CRM webhook (HubSpot example)
    // In production, replace with your actual HubSpot endpoint and API key
    const CRM_WEBHOOK_URL = process.env.HUBSPOT_WEBHOOK_URL;
    
    if (CRM_WEBHOOK_URL) {
      const response = await fetch(CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('CRM webhook error:', response.statusText);
        // Don't fail the user experience if CRM fails
      }
    }

    // Log the lead (in production, save to database)
    console.log('New lead received:', validatedData.email);

    return {
      success: true,
      message: 'Thank you! We\'ll contact you within 24 hours.',
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues[0]?.message || 'Validation failed',
      };
    }

    console.error('Lead submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
