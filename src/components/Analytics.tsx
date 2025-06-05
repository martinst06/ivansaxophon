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
          console.log('Longtask monitoring not supported, falling back to alternative methods:', e);
          
          if ('requestIdleCallback' in window) {
            let lastIdleTime = performance.now();
            
            const checkMainThreadBlocking = () => {
              const now = performance.now();
              const timeSinceLastIdle = now - lastIdleTime;
              
              // If more than 100ms have passed since last idle callback,
              // the main thread was likely blocked
              if (timeSinceLastIdle > 100) {
                console.log('Main thread blocking detected (fallback):', {
                  duration: timeSinceLastIdle,
                  timestamp: now
                });
              }
              
              lastIdleTime = now;
              requestIdleCallback(checkMainThreadBlocking);
            };
            
            requestIdleCallback(checkMainThreadBlocking);
          } else {
            // Final fallback: basic timer-based detection
            let lastCheckTime = performance.now();
            
            const checkWithTimer = () => {
              const now = performance.now();
              const expectedDelay = 50; // Expected 50ms delay
              const actualDelay = now - lastCheckTime;
              
              // If actual delay is significantly more than expected,
              // the main thread was likely blocked
              if (actualDelay > expectedDelay + 30) {
                console.log('Main thread blocking detected (timer fallback):', {
                  expectedDelay,
                  actualDelay,
                  blocking: actualDelay - expectedDelay,
                  timestamp: now
                });
              }
              
              lastCheckTime = now;
              setTimeout(checkWithTimer, expectedDelay);
            };
            
            setTimeout(checkWithTimer, 50);
          }
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