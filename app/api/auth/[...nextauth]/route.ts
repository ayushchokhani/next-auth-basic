
import  CredentialsProvider  from "next-auth/providers/credentials"
import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'email', // what we want to appear on page
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const username = credentials?.username
        const password = credentials?.password

        // db call to check valid username and password
        // suppose we get this user
        const user = {
          id: 1,
          username: 'ayush',
          email: "ayush@gmail.com",
          password: 'ayush',
        }

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
    
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }