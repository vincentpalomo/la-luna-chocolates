export default function OurStory() {
  return (
    <main className="container mx-auto">
      <section className="grid md:grid-cols-2 items-center gap-8 py-12">
        <div className="space-y-6 px-6">
          <h2 className="text-4xl font-bold tracking-tighter">SOLID, VAST, DEPTH.</h2>
          <p className="text-lg text-muted-foreground">
            The Hawaiian word mānoa means solid, vast, and depth. We founded our company with this meaning in mind.
            Mānoa stands for taking care of the land where we harvest our cacao, the nuanced process of crafting our
            chocolate, and leaving the world better than when we came into it.
          </p>
        </div>
        <div className="relative h-[400px] md:h-[600px]">
          <img
            src="/images/placeholder.svg?height=600&width=800"
            alt="Harvesting cacao"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 items-center gap-8 py-12">
        <div className="relative h-[400px] md:h-[600px]">
          <img
            src="/images/placeholder.svg?height=600&width=800"
            alt="Chocolate making process"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="space-y-6 px-6">
          <h2 className="text-4xl font-bold tracking-tighter">CRAFT & QUALITY</h2>
          <p className="text-lg text-muted-foreground">
            Every step of our process is carefully considered and executed with precision. From bean selection to
            tempering, we maintain the highest standards of quality. Our craft chocolate making process preserves the
            unique flavors of each origin while creating something truly exceptional.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 items-center gap-8 py-12">
        <div className="space-y-6 px-6">
          <h2 className="text-4xl font-bold tracking-tighter">SUSTAINABILITY FIRST</h2>
          <p className="text-lg text-muted-foreground">
            Our commitment to sustainability goes beyond just words. We work directly with farmers, ensuring fair wages
            and sustainable farming practices. Every chocolate bar we produce is a testament to our dedication to
            environmental stewardship and social responsibility.
          </p>
        </div>
        <div className="relative h-[400px] md:h-[600px]">
          <img
            src="/images/placeholder.svg?height=600&width=800"
            alt="Sustainable farming"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
