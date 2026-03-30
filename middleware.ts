import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.method === "POST" &&
    request.nextUrl.pathname.startsWith("/api/")
  ) {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const allowedOrigins = [
      "https://reallawgroup.com",
      "https://www.reallawgroup.com",
      "http://localhost:3000",
    ];

    if (origin && !allowedOrigins.some((o) => origin.startsWith(o))) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (
      !origin &&
      referer &&
      !allowedOrigins.some((o) => referer.startsWith(o))
    ) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
