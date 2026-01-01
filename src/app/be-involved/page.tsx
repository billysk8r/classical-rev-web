import { auth } from "@/auth";
import Link from "next/link";
import JoinButton from "@/components/JoinButton"; // Import the new button

export default async function BeInvolvedPage() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-16 py-10 px-6 max-w-5xl mx-auto transition-colors">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic text-zinc-900 dark:text-white">
          Join The Revolution
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Whether you are a performer or a listener, there is a place for you.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Musicians Section */}
        <div className="border border-zinc-200 dark:border-zinc-800 p-10 space-y-6 bg-zinc-50 dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-950 transition-all">
          <h2 className="text-3xl font-bold uppercase text-red-600 italic">For Musicians</h2>
          <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 list-disc list-inside">
            <li>Sign up for our Musician Portal</li>
            <li>Propose a new venue or event</li>
            <li>Join local "Chamber Jams"</li>
          </ul>
          
          {!session ? (
            // Direct sign-in button instead of a Link to the intermediary page
            <JoinButton />
          ) : (
            <Link 
              href="/be-involved/setup"
              className="block w-full bg-zinc-900 text-white dark:bg-white dark:text-black font-black py-4 text-center uppercase tracking-tighter hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-colors"
            >
              Enter Musician Portal
            </Link>
          )}
        </div>

        {/* Audience Section (remains the same) */}
        <div className="border border-zinc-200 dark:border-zinc-800 p-10 space-y-6 bg-zinc-50 dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-950 transition-all">
          <h2 className="text-3xl font-bold uppercase italic text-zinc-900 dark:text-white">For Audience</h2>
          <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 list-disc list-inside">
            <li>Join our mailing list</li>
            <li>Volunteer for local chapters</li>
            <li>Host a house concert</li>
          </ul>
          <button className="w-full border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-black py-4 uppercase tracking-tighter hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
}