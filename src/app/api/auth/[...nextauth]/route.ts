import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";


const handler = NextAuth({
    pages: {
        signIn: '/authentication'
    }, 
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: ""},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 
                        'Cache-Control':'max-age=120',
                        "Content-Type": "application/json" 
                    }
                })
                const user = await res.json()
                console.log("Before print");
                console.log(user);
                console.log("After print");

                // If no error and we have user data, return it
                if (res.ok && (Boolean(user))) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user};
        },
        async session({session, token}){
            session.user = token as any;
            return session;
        }
    },
    session: { strategy: "jwt"}
})

export { handler as GET, handler as POST }