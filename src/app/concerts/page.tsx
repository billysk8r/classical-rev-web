import Link from "next/link";

export default function ConcertsPage() {
  const upcomingEvents = [
    { 
      date: "Jan 27", 
      time: "7:00 PM",
      venue: "Napoleon Street Gallery", 
      city: "San Francisco", 
      program: "Mozart Birthday House Concert",
      link: "https://www.eventbrite.com/e/1979273892493"
    },
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
            className="group border border-zinc-200 dark:border-zinc-800 p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              {/* Date/Time Tag */}
              <div className="text-red-600 font-bold tracking-widest uppercase text-sm mb-1">
                {event.date} • {event.time}
              </div>

              {/* Program Name (Emphasized) */}
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors leading-tight">
                {event.program}
              </h2>

              {/* Venue and City (Secondary) */}
              <p className="text-zinc-600 dark:text-zinc-500 font-medium">
                {event.venue}, {event.city}
              </p>
            </div>
            
            {/* Action Button */}
            <Link 
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center border border-zinc-900 dark:border-white px-8 py-3 font-bold uppercase text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Get Tickets
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}