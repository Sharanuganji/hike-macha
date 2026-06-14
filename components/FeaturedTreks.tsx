const treks = [
  {
    name: "Kodachadri",
    image: "/images/kodachadri.jpg",
    duration: "2 Days",
    difficulty: "Moderate",
    slug: "kodachadri",
  },
  {
    name: "Kudremukh",
    image: "/images/kudremukh.jpg",
    duration: "2 Days",
    difficulty: "Moderate",
    slug: "kudremukh",
  },
  {
    name: "Kumara Parvatha",
    image: "/images/kumara.jpg",
    duration: "2 Days",
    difficulty: "Hard",
    slug: "kumara-parvatha",
  },
];

import Link from "next/link";

export default function FeaturedTreks() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Treks
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore the most breathtaking trails in the Western Ghats.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <div
              key={trek.name}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={trek.image}
                alt={trek.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {trek.name}
                </h3>

                <div className="mt-3 flex justify-between text-gray-600">
                  <span>{trek.duration}</span>
                  <span>{trek.difficulty}</span>
                </div>

                <Link
                    href="/treks/kodachadri"
                    className="mt-5 inline-block bg-green-700 text-white px-5 py-2 rounded-lg"
                >
                    View Trek
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}