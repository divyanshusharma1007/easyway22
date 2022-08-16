import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import Cookies from 'js-cookie';
export async function middleware(req) {
    let admin = req?.cookies?.get('auth')
    let url = req.url;
    if (url.includes('api')) {
        return NextResponse.next();
        console.log('api is calling ')
    }
    else if (url.includes('/admin') && !admin?.includes('admin')) {
        console.log('redirecting')
        return NextResponse.redirect(req.nextUrl.origin + '/login')
    }
    else {
        NextResponse.next();
    }
}
