'use client'

import { signIn } from "next-auth/react"

export default function JoinButton() {
  return (
    <button 
      onClick={() => signIn('google')}
      className="block w-full bg-zinc-900 text-white dark:bg-white dark:text-black font-black py-4 text-center uppercase tracking-tighter hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-colors"
    >
      Sign In to Join
    </button>
  );
}