export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center sm:p-5">
      <main className="sm:mx-10  mt-20 w-[95vw] sm:w-full">
        <div className="font-main font-semibold text-[24px] md:text-6xl leading-tight md:leading-[60px] tracking-[-3%] text-center max-w-[95vw] 2xl:text-[72px] 2xl:leading-[72px] flex items-center justify-center mb-12">
          <div className="flex flex-col sm:items-center items-center">
            <p>Small batch bean-to-bar chocolate</p>
            <p>100% Fair trade beans</p>
            <p>100% Louisiana cane sugar</p>
            <p>Made in Baton Rouge</p>
          </div>
        </div>
      </main>
    </section>
  );
}
