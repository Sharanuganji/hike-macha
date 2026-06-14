export default function GalleryPage() {
  return (
    <main className="pt-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Trek Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6,7,8,9].map((img) => (
            <div
              key={img}
              className="h-72 bg-gray-300 rounded-xl"
            />
          ))}
        </div>
      </div>
    </main>
  );
}