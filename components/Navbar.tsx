import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Hike Macha"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <h1 className="text-white font-bold text-xl">
              Hike Macha
            </h1>

            <p className="text-gray-300 text-xs">
              Ba Macha, Let's Trek
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">Treks</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}