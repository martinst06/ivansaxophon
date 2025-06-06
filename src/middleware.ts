import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static files, API routes, and Next.js internal routes
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') || // Any file with extension
    pathname.startsWith('/apple-touch-icon') ||
    pathname.startsWith('/site.webmanifest') ||
    pathname.startsWith('/robots.txt')
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with supported locale
  const supportedLocales = ['en', 'de'];
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/en${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 