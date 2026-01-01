import './globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import { Inter } from 'next/font/google';
import { auth } from '@/auth'; // Import the server-side auth

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Classical Revolution | Chamber Music for the People',
  description: 'Bringing classical music to neighborhood hangouts since 2006.',
};

// We make this function "async" so we can await the session
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Fetch the session once on the server
  const session = await auth();

  return (
    <html lang="en">
      {/* Updated body: Removed hardcoded bg-black to support light mode */}
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors`}>
        {/* 2. Pass the session into your AuthProvider */}
        <AuthProvider session={session}>
          <Navbar />
          <main className="w-full">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}