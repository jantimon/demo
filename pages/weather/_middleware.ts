import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {

    const city = req.geo?.city || "Berlin";
    const url = req.nextUrl.clone();

    const pathParts = url.pathname.split('/');

    if (!pathParts[2] || pathParts[2] === 'current') {
        pathParts[2] = city;
        url.pathname = pathParts.join('/')
        return NextResponse.rewrite(url);
    }

}