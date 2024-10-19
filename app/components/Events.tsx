export default function Events() {
  return (
    <section id="events" className="min-h-screen flex flex-col justify-center items-center p-5">
      {/* <h2 className="font-commissioner text-4xl mb-8 sm:text-[200px] sm:mb-20 text-center">EVENTS</h2> */}
      <div className="w-full max-w-[800px]">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&title=La%20Luna%20Chocolate%20Events&src=NjgxODNjMDY4MDk5NmM3N2U5M2QyNGU5YmFhZjk1ODliZDhiMGYxYzlmNWQwN2E0NTE5YmFlNDEyMTBiNzIwZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
          width="800"
          height="600"
        ></iframe>
      </div>
    </section>
  );
}