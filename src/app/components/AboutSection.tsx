import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-24 bg-white grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-gray-700 text-lg mb-4">
          A Global Classroom (AGC) is a multidisciplinary education and consulting initiative...
        </p>
        <p className="text-gray-600 text-sm italic mt-4 border-l-2 pl-4 border-gray-400">
          No buzzwords. No ever-changing jargon. Just thoughtfully designed materials...
        </p>
      </div>
      <Image
        src='/class.png'
        alt='/class.png'
        width={500}
        height={700}
        loading="lazy"
        className="w-full h-auto object-cover"
      />
    </section >
  );
}
