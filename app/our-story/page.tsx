import Image from 'next/image';
import Header from '../components/Header';

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="sm:mx-10 mt-20 p-5">
        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">THE BEGINNING</h2>
            <p className="text-lg text-muted-foreground font-text">
              Like almost everyone, I have always had a special place in my heart for chocolate. But it was only while
              locked down during covid in 2020 that I had the idea to make my own. Armed with my first bag of beans, I
              worked nonstop until I had a finished batch of bars. They were horrible! Since then, I was determined to
              get it right.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/beans.jpg"
              width={800}
              height={600}
              alt="Harvesting cacao"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/molds-beans-processor.JPG"
              width={800}
              height={600}
              alt="Chocolate making process"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">THE JOURNEY</h2>
            <p className="text-lg text-muted-foreground font-text">
              I kept researching and trying until I eventually reached one of the yummiest chocolate bars I have ever
              tried. It was then that I knew I had to keep going. I started to sell bars to friends and family, slowly
              purchasing equipment that allowed me to focus less on the manual work of making chocolate, but on the
              process and refining the flavor profile.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">COMMUNITY & FUTURE</h2>
            <p className="text-lg text-muted-foreground font-text">
              Now, I sell chocolate at local pop-up events around Baton Rouge. This hobby has become a true passion of
              mine, and I hope to one day make this my full time business. Until that happens, I am happy to be meeting
              new people in my community and sharing with them the love and joy that chocolate brings.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/molds.jpg"
              width={800}
              height={600}
              alt="Sustainable farming"
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
