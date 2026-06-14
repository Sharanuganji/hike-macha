const departures = [
  {
    trek: "Kodachadri Trek",
    date: "27-28 June",
    price: "₹1,999",
  },
  {
    trek: "Kudremukh Trek",
    date: "July 2026",
    price: "₹2,299",
  },
  {
    trek: "Maharashtra Expedition",
    date: "Coming Soon",
    price: "₹4,999",
  },
];

export default function UpcomingDepartures() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Upcoming Departures
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Reserve your spot before the batch fills up.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {departures.map((trip) => (
            <div
              key={trip.trek}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold">
                {trip.trek}
              </h3>

              <p className="mt-3 text-gray-600">
                {trip.date}
              </p>

              <p className="mt-2 text-green-700 font-bold text-xl">
                {trip.price}
              </p>

              <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}