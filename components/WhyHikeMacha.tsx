export default function WhyHikeMacha() {
  const features = [
    {
      title: "Experienced Trek Coordinators",
      description: "Guided and well-organized adventures.",
    },
    {
      title: "Transportation Included",
      description: "Convenient pickups and comfortable travel.",
    },
    {
      title: "Permits & Logistics Managed",
      description: "Focus on trekking while we handle the details.",
    },
    {
      title: "Safety First",
      description: "First aid support and responsible trek planning.",
    },
    {
      title: "Community Experience",
      description: "Meet like-minded adventurers and make memories.",
    },
    {
      title: "Western Ghats Specialists",
      description: "Carefully curated trails and destinations.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Hike Macha?
        </h2>

        <p className="text-center text-gray-400 mb-12">
          More than a trek. An experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="border border-gray-800 rounded-2xl p-6 hover:border-green-600 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}