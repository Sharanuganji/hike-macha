export default function TreksPage() {
  const treks = [
    "Kodachadri",
    "Kudremukh",
    "Kumara Parvatha",
    "Tadiandamol",
    "Netravati Peak",
    "Mullayanagiri",
  ];

  return (
    <main className="pt-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Explore Our Treks
        </h1>

        <p className="text-gray-600 mb-12">
          Discover the best trekking destinations in the Western Ghats.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <div
              key={trek}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 bg-gray-300"></div>

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {trek}
                </h2>

                <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}