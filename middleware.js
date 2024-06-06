import NextAuth from "next-auth/next"
import { authConfig } from "@/lib/auth.config"

export default NextAuth(authConfig).auth

export const config = {
    mactcher: ['/((?!api|static|.*\\..*|_next).*)']
}