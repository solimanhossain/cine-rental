import { match } from "@formatjs/intl-localematcher";
import { NextResponse } from "next/server";
import Negotiator from "negotiator";

const defaultLocale = "en";
const locales = ["en", "bn"];

function getLocale(request) {
    const acceptLanguage = request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptLanguage };
    let languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/((?!api|assets|_next|favicon.ico).*)"],
};
