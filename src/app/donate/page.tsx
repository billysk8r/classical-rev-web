export default function DonatePage() {
  return (
    <div className="flex flex-col gap-10 py-10 px-6 max-w-2xl mx-auto text-center transition-colors">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic text-zinc-900 dark:text-white">
          Support
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Help us keep chamber music accessible. Your donations pay our musicians 
          and keep the "Chamber Jams" free for the community.
        </p>
      </section>
      
      {/* Donation Amount Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['$25', '$50', '$100'].map((amount) => (
          <button 
            key={amount} 
            className="border-2 border-zinc-200 dark:border-zinc-800 py-6 text-2xl font-black text-zinc-900 dark:text-white hover:border-red-600 hover:text-red-600 dark:hover:border-red-600 dark:hover:text-red-600 transition-all bg-white dark:bg-transparent"
          >
            {amount}
          </button>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900 p-10 border border-zinc-200 dark:border-zinc-800">
        <p className="text-zinc-500 dark:text-zinc-500 mb-4 uppercase text-xs tracking-widest font-bold">
          Secure Checkout
        </p>
        <div className="h-12 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded flex items-center justify-center text-zinc-500 dark:text-zinc-600 italic">
          [Stripe / PayPal Integration Placeholder]
        </div>
      </div>
      
      <p className="text-xs text-zinc-400">
        Classical Revolution is a non-profit organization. All donations are tax-deductible.
      </p>
    </div>
  );
}