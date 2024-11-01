import Image from 'next/image';
import Header from '../components/Header';

export default function OurCocoa() {
  return (
    <>
      <Header />
      <main className="sm:mx-10 mt-20 p-5">
        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">GLOBAL SOURCING</h2>
            <p className="text-lg text-muted-foreground font-text">
              For our cocoa, we use beans from around the world. My current bean of choice is a direct trade bean from
              Uganda. Individual smallholder farmers surveyed and contracted by company staff supply our fermentation
              cocoa beans. Collection locations are located along one stretch of road running through the Galiraya,
              Kisonko and Buganikere communities. Cacao from these locations is blended throughout the process.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image14.png"
              width={800}
              height={600}
              alt="Global cocoa sourcing"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/info-pages/image6.png"
              width={800}
              height={600}
              alt="Rwenzururu sub-region"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">UGANDAN ORIGIN</h2>
            <p className="text-lg text-muted-foreground font-text">
              The Rwenzururu sub-region of Uganda sits at 3,000 feet above sea level and borders the DR Congo, the
              Rwenzori Mountain range and Semuliki National Park. The climate is tropical with over 1,000mm of rainfall
              which typically occurs in 2 seasons, March to April and September to January. The region suffers from
              recurring conflict between cultural and rebel groups straddling the DR Congo border. Bundibugyo district
              likely accounts for more than 70% of cocoa production in Uganda.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">SMALLHOLDER FARMERS</h2>
            <p className="text-lg text-muted-foreground font-text">
              Wet cocoa is purchased from over 500 contracted smallholder farmers, each with 1-2 hectares of cocoa
              trees, often divided between several plots. Staff collect cocoa in the afternoon of harvest day from
              contracted farmers from established collection points near the farms. Farmers are paid cash on the spot
              for fresh cocoa at 40% of the dry cocoa market price. 10-20% bonuses are then paid to farmers at the end
              of the season based on delivered volumes and consistency of deliveries (required 1x per month to ensure
              consistency of source material).
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image3.png"
              width={800}
              height={600}
              alt="Smallholder cocoa farmers"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/info-pages/image1.png"
              width={800}
              height={600}
              alt="Fermentation facility"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">FERMENTATION FACILITY</h2>
            <p className="text-lg text-muted-foreground font-text">
              The fermentation facility and store is located in a converted B&B in the village of Bumate at the base of
              the hills leading into the mountains. With a shortage of available land in the district, the site is
              designed to take advantage of all possible available sunshine while limiting runoff from heavy rainfall.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">FERMENTATION PROCESS</h2>
            <p className="text-lg text-muted-foreground font-text">
              Paired box fermentation built with eucalyptus timber sourced from local timber plantations. Boxes are
              500kg capacity with removable shutters to allow turning cacao for uniform fermentation. Fermentation
              temperatures are recorded at regular intervals 3x daily. Total duration of fermentation varies from
              5.5-6.5 days.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image7.png"
              width={800}
              height={600}
              alt="Cocoa fermentation process"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/info-pages/image9.png"
              width={800}
              height={600}
              alt="Quality control process"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">QUALITY CONTROL</h2>
            <p className="text-lg text-muted-foreground font-text">
              The quality of fresh cacao is evaluated by bag and hand sorted prior to filling of fermentation boxes. Any
              lower grade or cacao harvested on the previous day is separated. Beans are sampled and cut from the start
              of the 5th fermentation day onward. Prior to drying, beans are again separated based on quality of
              fermentation and consistency within the box. After drying and sorting, beans are sampled and cut to sort
              fermentation levels prior to blending.
            </p>
          </div>
        </section>

        {/* <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 px-6">
            <h2 className="text-4xl font-bold tracking-tighter">OUR COCOA</h2>
            <p className="text-lg font-text">
              For our cocoa, we use beans from around the world. My current bean of choice is a direct trade bean from
              Uganda.
            </p>
            <p className="text-lg font-text">
              Individual smallholder farmers surveyed and contracted by company staff supply our fermentation cocoa
              beans. Collection locations are located along one stretch of road running through the Galiraya, Kisonko
              and Buganikere communities. Cacao from these locations is blended throughout the process.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/info-pages/image3.png"
              width={800}
              height={600}
              alt="Harvesting cacao"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/placeholder.svg"
              width={800}
              height={600}
              alt="Chocolate making process"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="space-y-6 px-6">
            <h2 className="text-4xl font-bold tracking-tighter">CRAFT & QUALITY</h2>
            <p className="text-lg font-text">
              Every step of our process is carefully considered and executed with precision. From bean selection to
              tempering, we maintain the highest standards of quality. Our craft chocolate making process preserves the
              unique flavors of each origin while creating something truly exceptional.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 px-6">
            <h2 className="text-4xl font-bold tracking-tighter">SUSTAINABILITY FIRST</h2>
            <p className="text-lg font-text">
              Our commitment to sustainability goes beyond just words. We work directly with farmers, ensuring fair
              wages and sustainable farming practices. Every chocolate bar we produce is a testament to our dedication
              to environmental stewardship and social responsibility.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/placeholder.svg"
              width={800}
              height={600}
              alt="Sustainable farming"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </section> */}
      </main>
    </>
  );
}
