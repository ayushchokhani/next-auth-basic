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
      
      {/* {session.status === 'authenticated' ? 'Logout' : 'Sign In'}  */}
      {session.status === 'authenticated' && (
        <button onClick={() => signOut()}>Logout</button>
      )}
      {session.status === 'unauthenticated' && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  )
}
