export default function ConcertsPage() {
  const upcomingEvents = [
    { date: "Oct 24", venue: "The Revolution Café", city: "San Francisco", program: "Mozart & Brahms Jams" },
    { date: "Nov 02", venue: "Public Records", city: "Brooklyn", program: "Contemporary Strings" },
  ];

  return (
    <div className="flex flex-col gap-10 py-10 px-6 max-w-4xl mx-auto transition-colors">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic text-red-600">
          Concerts
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 italic">
          "Classical music in neighborhood hangouts."
        </p>
      </section>
      
      {/* Event List */}
      <div className="space-y-4">
        {upcomingEvents.map((event, i) => (
          <div 
            key={i} 
            className="group border border-zinc-200 dark:border-zinc-800 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex justify-between items-center"
          >
            <div>
              <div className="text-red-600 font-bold tracking-widest uppercase text-sm">
                {event.date}
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {event.venue}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-500">
                {event.city} — {event.program}
              </p>
            </div>
            
            {/* Adaptive Button */}
            <button className="hidden md:block border border-zinc-900 dark:border-white px-6 py-2 font-bold uppercase text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="mt-10 p-8 border-2 border-dashed border-zinc-300 dark:border-zinc-800 text-center text-zinc-500 dark:text-zinc-600 bg-zinc-50 dark:bg-transparent">
        [Dynamic Map Component Placeholder: Show all 40+ global chapters]
      </div>
    </div>
  );
}