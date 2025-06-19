import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'de']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())
    for (const locale of preferredLocales) {
      if (locale.startsWith('de')) return 'de'
      if (locale.startsWith('en')) return 'en'
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname, host, protocol } = request.nextUrl

  // Enforce canonical domain (https://ivansaxophon.ch)
  const isWww = host.startsWith('www.')
  const isHttp = protocol === 'http:'
  
  if (isWww || isHttp) {
    const newHost = isWww ? host.replace('www.', '') : host
    const newUrl = new URL(pathname, `https://` + newHost)
    return NextResponse.redirect(newUrl.toString(), 301)
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // Construct new URL with the detected locale
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
} 