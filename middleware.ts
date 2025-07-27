import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const validBasePaths = [
  "/",
  "/about-us",
  "/blogs",
  "/branches",
  "/contact-us",
  "/cooperation",
  "/doctor",
  "/doctors",
  "/fonts", // If this is for a page /fonts, it's fine.
  // If for files like /fonts/myfont.woff, the static check below handles it.
  "/insurances",
  "/news",
  "/nikan-international",
  "/nikan365",
  "/social-responsibility",
  "/virtual-hospital",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip middleware for common static file extensions
  // This allows files from /public (images, fonts, etc.) and other static assets to pass through.
  if (
    /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|otf|js|css|json|xml|txt|pdf)$/i.test(
      pathname
    )
  ) {
    return NextResponse.next();
  }
  //console.log("Incoming request:", pathname); // 🐛 Log it

  // 2. Apply your validation logic for page paths
  const isValidPagePath = validBasePaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (!isValidPagePath) {
    // If it's not a static file (checked above) and not a valid page path,
    // redirect to the homepage.
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // Temporarily use the broadest matcher
};
