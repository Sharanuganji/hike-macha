export default function KodachadriPage() {
  return (
    <main className="pt-24">
      <div className="h-[60vh]">
        <img
          src="/images/treks/kodachadri.jpg"
          alt="Kodachadri"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-6">
          Kodachadri Trek
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="font-bold">Difficulty</h3>
            <p>Moderate</p>
          </div>

          <div>
            <h3 className="font-bold">Duration</h3>
            <p>2 Days</p>
          </div>

          <div>
            <h3 className="font-bold">Region</h3>
            <p>Western Ghats</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Overview
        </h2>

        <p className="mb-8">
          Experience one of the most scenic treks in Karnataka,
          featuring dense forests, breathtaking viewpoints,
          and unforgettable sunsets.
        </p>

        <a
          href="https://wa.me/918073525884"
          target="_blank"
          className="bg-green-700 text-white px-8 py-4 rounded-xl"
        >
          Book on WhatsApp
        </a>
      </div>
    </main>
  );
}