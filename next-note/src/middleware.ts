import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 ㄱㄱㄱ");
    console.log(request);

    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  // 하위 경로에서만 실행
  matcher: ["/products/:path*"],
};
