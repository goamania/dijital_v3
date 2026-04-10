'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

type WebVitalsMetric = {
  name: string;
  value: number;
  delta: number;
  id: string;
};

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    const { name, value, id } = metric;
    
    // Round value for cleaner reporting
    const roundedValue = Math.round(name === 'CLS' ? value * 1000 : value);
    
    // Prepare analytics payload
    const payload: WebVitalsMetric = {
      name,
      value: roundedValue,
      delta: Math.round(metric.delta),
      id,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${name}:`, roundedValue);
    }

    // Send to analytics endpoint
    // In production, replace with your analytics service (Google Analytics, Datadog, etc.)
    try {
      // Example: Send to your analytics API
      // This uses navigator.sendBeacon for reliable delivery even when page is unloading
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon('/api/analytics', blob);
    } catch (error) {
      console.error('[Web Vitals] Failed to report metrics:', error);
    }

    // Optional: Report to Google Analytics (if using GA4)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        value: roundedValue,
        event_category: 'Web Vitals',
        event_label: id,
        non_interaction: true,
      });
    }
  });

  // This component doesn't render anything
  return null;
}

// Helper function to evaluate metric ratings
export function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, [number, number]> = {
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    FID: [100, 300],
    INP: [200, 500],
    LCP: [2500, 4000],
    TTFB: [800, 1800],
  };

  const [good, poor] = thresholds[name] || [0, 0];
  
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

// Helper to format metric values for display
export function formatMetric(name: string, value: number): string {
  if (name === 'CLS') return (value / 1000).toFixed(3);
  if (name === 'TTFB' || name === 'FCP' || name === 'LCP' || name === 'INP' || name === 'FID') {
    return `${value}ms`;
  }
  return value.toString();
}
