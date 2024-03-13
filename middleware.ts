// import { withAuth } from 'next-auth/middleware'


// Or like this if you need to do something here.
// export default auth((req) => {
//   console.log(req.auth) //  { session: { user: { ... } } }
// })

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

// import { getToken } from 'next-auth/jwt'
// import { withAuth } from 'next-auth/middleware'
// import { NextResponse } from 'next/server'

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req })
//     const isAuth = !!token
//     const isAuthPage =
//       req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')

//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL('/dashboard', req.url))
//       }

//       return null
//     }

//     if (!isAuth) {
//       let from = req.nextUrl.pathname
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search
//       }

//       return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url))
//     }
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true
//       }
//     }
//   }
// )

// export const config = {
//   matcher: ['/dashboard/:path*', '/home/:path*', '/login', '/register']
// }
