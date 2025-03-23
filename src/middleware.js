import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const currentCookie = request.cookies.get('nextjs-token')
    console.log('currentCookie', currentCookie);

    const dummyUserData = {
        role: 'user',
        // role: 'admin',
        email: 'test@admin.com'
    }
    let isServicesPage = request.nextUrl.pathname.startsWith("/services")
    // console.log('request', request.nextUrl.pathname.startsWith("/services"));
    let isAdmin = dummyUserData.role == 'admin'
    if (isServicesPage && !isAdmin)
        // return NextResponse.rewrite(new URL('/login', request.url))
        return NextResponse.redirect(new URL('/login', request.url))

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }