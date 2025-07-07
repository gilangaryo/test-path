import Image from "next/image";

export default function ExploreLessonsSection() {
  return (
    <section className="bg-[#e8dbd3] py-20 px-6 md:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src='/hero-section.png'
            alt='hero-section'
            width={500}
            height={700}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Explore Free Lessons →</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">FOUNDATION OF A GLOBAL POLITICS</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2c3e50]">EXPLORE FREE LESSONS</h2>
      </div>
    </section>
  );
}
