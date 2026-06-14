import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold">
          Hike Macha
        </h2>

        <p className="text-gray-400 mt-2">
          Explore Trails. Build Friendships. Create Memories.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold mb-3">
              Contact
            </h3>

            <p>+91 80735 25884</p>
            <p>@hikemacha</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/treks">Treks</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Region
            </h3>

            <p>
              Western Ghats Treks
            </p>

            <p>
              Karnataka, India
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-gray-500">
          © 2026 Hike Macha. All rights reserved.
        </div>

      </div>
    </footer>
  );
}