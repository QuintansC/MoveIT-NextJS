import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: "/inicio",
};