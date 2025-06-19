import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deindj.ch',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Cache-Control', 
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Experimental features (removed deprecated options)
  experimental: {
    scrollRestoration: true,
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Output optimizations
  output: 'standalone',
  
  // Trailing slash handling
  trailingSlash: false,

  async redirects() {
    return [
      // Redirects for old pages
      {
        source: '/lesson',
        destination: '/en/teaching',
        permanent: true,
      },
      {
        source: '/lessons',
        destination: '/en/teaching',
        permanent: true,
      },
      {
        source: '/performances',
        destination: '/en/media',
        permanent: true,
      },
      {
        source: '/about-me',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/en/lesson',
        destination: '/en/teaching',
        permanent: true,
      },
      {
        source: '/en/lessons',
        destination: '/en/teaching',
        permanent: true,
      },
      {
        source: '/de/lesson',
        destination: '/de/teaching',
        permanent: true,
      },
      {
        source: '/de/lessons',
        destination: '/de/teaching',
        permanent: true,
      },
      {
        source: '/en/performances',
        destination: '/en/media',
        permanent: true,
      },
      {
        source: '/de/performances',
        destination: '/de/media',
        permanent: true,
      },
      {
        source: '/en/about-me',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/de/about-me',
        destination: '/de/about',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
