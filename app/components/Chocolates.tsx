import Image from 'next/image';

export default function Chocolates() {
  return (
    <section id='chocolates' className='min-h-screen flex flex-col justify-center items-center p-5'>
      <h2 className='font-commissioner text-[48px] sm:text-[160px] sm:tracking-tighter mb-4 text-center sm:-mb-10 sm:mt-10 mt-24 2xl:-mb-10'>
        CHOCOLATES
      </h2>

      <div className='flex sm:flex-row flex-col justify-around gap-4 w-full max-w-[1000px]'>
        {[
          { id: 1, type: 'Milk Chocolate' },
          { id: 2, type: 'Milky-Dark Chocolate' },
          { id: 3, type: 'Dark Chocolate' },
        ].map((chocolate) => (
          <div key={chocolate.id} className='chocolate-item w-full'>
            <Image
              src={`/images/image.psd-${chocolate.id}.png`}
              alt={`${chocolate.type}`}
              width={300}
              height={300}
              className='w-full h-[500px] object-contain'
            />
            <div className='mt-2 text-center font-text text-[20px]'>{chocolate.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
