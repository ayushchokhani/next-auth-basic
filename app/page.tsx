
/* csr, useSession hook 
"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {

  return (
    <SessionProvider>
      <HomeMain />
    </SessionProvider>
  )
}


export function HomeMain() {
  const session = useSession()
  // to use useSession hook, wrap page.tsx in SessionProvider
  return (
    <div >
      
      
      {session.status === 'authenticated' && (
        <button onClick={() => signOut()}>Logout</button>
      )}
      {session.status === 'unauthenticated' && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  )
}
*/

import { getServerSession } from "next-auth";

// using ssr, getServerSession hook
// to use ssr, we need to make nextauth_Secret, nextauth_url in .env
// and use it in route.ts (in nextjs dotenv is not needed)

export default async function Home() {
  const session = await getServerSession();

  return <div>
    {JSON.stringify(session)}
  </div>
}