import Image from 'next/image';

export default function Chocolates() {
  return (
    <section id="chocolates" className="min-h-screen flex flex-col justify-center items-center p-5">
      <h2 className="font-commissioner text-4xl sm:text-[200px] sm:tracking-tighter mb-8 text-center sm:mb-20 mt-24">
        CHOCOLATES
      </h2>

      <div className="flex sm:flex-row flex-col justify-around gap-4 w-full max-w-[1200px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="chocolate-item">
            <Image
              src={`/images/image.psd-${i}.png`}
              alt={`Chocolate ${i}`}
              width={300}
              height={300}
              className="w-full sm:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
