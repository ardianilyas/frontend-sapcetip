import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  const protectedRoutes = ["/dashboard", "/profile"];
  const guestOnlyRoutes = ["/auth/signin", "/auth/signup"];

  const { pathname } = req.nextUrl;

  if (protectedRoutes.some((path) => pathname.startsWith(path))) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
  }

  if (guestOnlyRoutes.some((path) => pathname.startsWith(path))) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/auth/:path*"],
};
