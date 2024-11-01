import Image from 'next/image';
import Header from '../components/Header';

export default function OurProcessPage() {
  return (
    <>
      <Header />
      <main className="sm:mx-10 mt-20 p-5">
        {/* <div className="relative h-[50vh] w-full mb-12">
          <Image src="/images/placeholder.svg" fill alt="Chocolate making process" className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white p-8">OUR PROCESS</h1>
          </div>
        </div> */}

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">COCOA BEAN INSPECTION</h2>
            <p className="text-lg text-muted-foreground">
              The first step I do when making chocolate is to inspect all of the beans. Occasionally some are a bit too
              small, or are cracked open already. I make sure I only move forward with the finest beans to ensure the
              best quality.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image10.png"
              width={800}
              height={600}
              alt="Cocoa bean inspection process"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/info-pages/image12.jpg"
              width={800}
              height={600}
              alt="Roasting cocoa beans"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">ROASTING COCOA BEANS</h2>
            <p className="text-lg text-muted-foreground">
              All of the beans are laid out on trays and roasted at specific temperature and time intervals. Roasting
              allows for the beans to separate easier from the shells and enhances the flavor greatly.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">GRINDING THE BEANS</h2>
            <p className="text-lg text-muted-foreground">
              After roasting, I allow the beans to cool before grinding them. The grinding process separates the nib
              from the husk. The nib is the part that is used in chocolate, while the husk is just the shell of the
              bean.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image13.png"
              width={800}
              height={600}
              alt="Grinding cocoa beans"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/info-pages/image8.png"
              width={800}
              height={600}
              alt="Winnowing cocoa beans"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">WINNOWING COCOA BEANS</h2>
            <p className="text-lg text-muted-foreground">
              After grinding, the beans and husks are all mixed together. The best way to separate them, so that only
              the nibs are used, is to winnow them. Winnowing is the process of blowing away the husks by using just the
              right amount of air pressure that allows only the heavier nibs to pass through the machine.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">REFINING AND MAKING CHOCOLATE</h2>
            <p className="text-lg text-muted-foreground">
              The next step is to put the nibs into a melanger. This machine has two rotating stone wheels that turn the
              nibs into a chocolate liquor. After the nibs are now liquid, I add in any other ingredients needed to make
              the specific chocolate bar I am aiming for. After all of the ingredients are added, the chocolate
              continues to refine for ~24 hours.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image5.png"
              width={800}
              height={600}
              alt="Refining and making chocolate"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <Image
              src="/images/info-pages/image4.png"
              width={800}
              height={600}
              alt="Chocolate tempering process"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold tracking-tighter">CHOCOLATE TEMPERING</h2>
            <p className="text-lg text-muted-foreground">
              After the chocolate is smooth and runny, and all ingredients are properly incorporated, the chocolate must
              be tempered. Chocolate has many possible crystalline states, and only one of them allows for it to shine,
              not melt on your fingers easily, and snap when you break it. To get this perfectly tempered chocolate, you
              must heat the chocolate, then cool it, then heat it once more, all at specific temperatures and in a
              proper time frame, otherwise the process must be restarted.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 items-center gap-8 py-12">
          <div className="space-y-6 order-1 md:order-1">
            <h2 className="text-4xl font-bold tracking-tighter">POURING MOLDS</h2>
            <p className="text-lg text-muted-foreground">
              After the chocolate has been properly tempered, it&apos;s time to pour it into the mold! After pouring,
              each mold is vibrated until the air bubbles are released and the chocolate is spread evenly. Then, the
              chocolate is allowed to cool until the bar is solid and it can be wrapped and enjoyed by you!
            </p>
          </div>
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-2">
            <Image
              src="/images/info-pages/image2.png"
              width={800}
              height={600}
              alt="Pouring chocolate into molds"
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
