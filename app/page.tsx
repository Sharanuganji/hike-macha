import Navbar from "../components/Navbar";
import FeaturedTreks from "../components/FeaturedTreks";
import UpcomingDepartures from "../components/UpcomingDepartures";
import WhyHikeMacha from "../components/WhyHikeMacha";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            alt="Western Ghats"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover the Western Ghats
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Trek through misty peaks, hidden waterfalls and unforgettable
            trails with Hike Macha.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-green-700 hover:bg-green-800 px-8 py-4 rounded-lg font-semibold">
              Explore Treks
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold">
              Upcoming Departures
            </button>
          </div>
        </div>
      </section>
      <FeaturedTreks />
      <UpcomingDepartures />
      <WhyHikeMacha />
      <section className="bg-green-700 text-white py-24 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">
          Ready For Your Next Adventure?
        </h2>

        <p className="text-xl mb-8">
          Join upcoming treks across the Western Ghats.
        </p>

        <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold">
          Book Your Trek
        </button>
      </section>
    </main>
  );
}