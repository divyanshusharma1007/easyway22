import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
export function middleware(req) {
    let verify = req.cookies.get('auth')
    let url = req.url;
    if (!verify && url.includes('admin')) {
        return NextResponse.redirect(req.nextUrl.origin+'/login')
    }
    else {
        NextResponse.next();
    }
}
