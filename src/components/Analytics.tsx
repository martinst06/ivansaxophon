'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor page load performance
      const monitorPageLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Performance:', {
            loadComplete: navigation.loadEventEnd - navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            firstByte: navigation.responseStart - navigation.fetchStart,
          });
        }
      };

      // Monitor resource loading performance
      const monitorResources = () => {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const largeResources = resources.filter(
          resource => resource.transferSize && resource.transferSize > 500000 // > 500KB
        );
        
        if (largeResources.length > 0) {
          console.log('Large resources detected:', largeResources.map(r => ({
            name: r.name,
            size: r.transferSize,
            duration: r.duration
          })));
        }
      };

      // Performance Observer for monitoring long tasks
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'longtask' && entry.duration > 50) {
                console.log('Long task detected:', {
                  duration: entry.duration,
                  startTime: entry.startTime
                });
              }
            });
          });

          observer.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          // Fallback for browsers that don't support longtask
        }
      }

      // Run monitoring after page load
      setTimeout(() => {
        monitorPageLoad();
        monitorResources();
      }, 2000);
    }
  }, []);

  return null;
} 