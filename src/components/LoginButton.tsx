'use client'

import { signIn, signOut } from "next-auth/react"
import { Session } from "next-auth"

export default function LoginButton({ initialSession }: { initialSession: Session | null }) {
  // Use the session passed from the server
  const session = initialSession;

  if (session) {
    return (
      <div className="flex items-center gap-3 border-l border-zinc-200 dark:border-zinc-800 pl-6">
        <div className="text-right">
          <p className="text-[10px] text-zinc-500 uppercase font-bold leading-none">Logged In</p>
          <p className="text-xs text-zinc-900 dark:text-white italic">{session.user?.name}</p>
        </div>
        <button 
          onClick={() => signOut()}
          className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-1 text-[10px] font-bold uppercase hover:bg-red-600 hover:text-white transition-all"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => signIn('google')}
      className="bg-zinc-900 text-white dark:bg-white dark:text-black px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all whitespace-nowrap"
    >
      Sign In with Google
    </button>
  );
}