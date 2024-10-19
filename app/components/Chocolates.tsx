import Image from 'next/image';

export default function Chocolates() {
  return (
    <section id="chocolates" className="min-h-screen flex flex-col justify-center items-center p-5">
      <h2 className="font-commissioner text-4xl mb-8 text-center">CHOCOLATES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1200px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="chocolate-item">
            <Image
              src="/placeholder.svg"
              alt={`Chocolate ${i}`}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
