export default function Events() {
  return (
    <section id="events" className="min-h-screen flex flex-col justify-center items-center p-5">
      <h2 className="font-commissioner text-4xl mb-8 text-center">EVENTS</h2>
      <div className="w-full max-w-[800px]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  );
}
