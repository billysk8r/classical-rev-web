export default function MediaPage() {
  return (
    <div className="flex flex-col gap-10 py-10 px-6 max-w-6xl mx-auto transition-colors">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic text-zinc-900 dark:text-white">
          Media
        </h1>
      </section>
      
      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="bg-zinc-100 dark:bg-zinc-900 aspect-square border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-700 italic text-sm p-6 text-center hover:border-red-600 transition-colors cursor-pointer"
          >
            [Photo/Video Placeholder: Live performance at Revolution Café]
          </div>
        ))}
      </div>

      {/* Press Section */}
      <div className="mt-10 p-10 bg-zinc-50 dark:bg-zinc-950 border-l-4 border-red-600 shadow-sm dark:shadow-none">
        <h3 className="text-xl font-bold uppercase italic mb-2 text-zinc-900 dark:text-white">
          Featured Press
        </h3>
        <p className="text-zinc-600 dark:text-zinc-500">
          "Classical Revolution is bringing chamber music back to its roots..." 
          <span className="block mt-2 font-bold text-zinc-900 dark:text-zinc-400">— The New York Times</span>
        </p>
      </div>
    </div>
  );
}