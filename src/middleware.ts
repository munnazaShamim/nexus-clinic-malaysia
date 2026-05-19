import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./i18n/settings";

acceptLanguage.languages(languages);

const cookieName = "i18next";

const nonLocalizedPaths = ["/sitemap.xml", "/robots.txt", "/blogs"];
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

   if (nonLocalizedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if a non-default locale is in the path
  const nonDefaultLanguages = languages.filter((l) => l !== fallbackLng);
  const pathnameHasLocale = nonDefaultLanguages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // If path starts with /en/, redirect to path without /en/ (English is default, no prefix)
  if (pathname.startsWith(`/${fallbackLng}/`) || pathname === `/${fallbackLng}`) {
    const pathWithoutLocale = pathname.replace(`/${fallbackLng}`, "") || "/";
    const newUrl = new URL(pathWithoutLocale, request.url);
    newUrl.search = request.nextUrl.search;
    return NextResponse.redirect(newUrl);
  }

  // Detect language from cookie or Accept-Language header
  let lng: string | undefined;
  const cookieValue = request.cookies.get(cookieName)?.value;
  if (cookieValue) lng = acceptLanguage.get(cookieValue) ?? undefined;
  if (!lng) lng = acceptLanguage.get(request.headers.get("Accept-Language")) ?? undefined;
  if (!lng) lng = fallbackLng;

  // If detected language is the default (English), serve without prefix
  // The page will be rendered with fallback locale via rewrite
  if (lng === fallbackLng) {
    // Rewrite to /en/... internally but keep URL clean
    const newUrl = new URL(`/${fallbackLng}${pathname}`, request.url);
    newUrl.search = request.nextUrl.search;
    return NextResponse.rewrite(newUrl);
  }

  // For non-default languages, redirect to locale-prefixed path
  const newUrl = new URL(`/${lng}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon|.*\\..*).*)"],
};
