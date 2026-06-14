import Navbar from "../components/Navbar";
import FeaturedTreks from "../components/FeaturedTreks";
import UpcomingDepartures from "../components/UpcomingDepartures";
import WhyHikeMacha from "../components/WhyHikeMacha";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import Link from "next/link";

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
            <Link
              href="/treks"
              className="bg-green-700 px-8 py-4 rounded-lg"
            >
              Explore Treks
            </Link>

            <Link
              href="/contact"
              className="bg-orange-500 px-8 py-4 rounded-lg"
            >
              Upcoming Departures
            </Link>
          </div>
        </div>
        <div className="space-y-6 text-xl">
          <p>📞 +91 80735 25884</p>
          <p>💬 WhatsApp: +91 80735 25884</p>
          <p>📷 Instagram: @hikemacha</p>
        </div>

        <a
          href="https://wa.me/918073525884"
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Chat on WhatsApp
        </a>
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

        <a
          href="https://wa.me/918073525884?text=Hi%20Hike%20Macha,%20I%20would%20like%20to%20book%20a%20trek."
          target="_blank"
          className="bg-orange-500 text-white px-5 py-3 rounded-lg"
        >
          Book Now
        </a>
      </section>
      <WhatsAppButton />
      <Footer />
    </main>
  );
}