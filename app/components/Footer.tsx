export default function Footer() {
  return (
    <footer id="contact" className="min-h-screen flex flex-col justify-center items-center p-5 text-center">
      <h2 className="font-commissioner text-4xl mb-8">CONTACT US</h2>
      <form className="contact-form max-w-[800px] w-full mx-auto p-5 border border-black">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            className="w-full p-2 border border-gray-300 rounded h-[150px]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white border-none py-2 px-5 text-lg cursor-pointer rounded hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
      <p className="mt-8">
        SMALL BATCH BEAN-TO-BAR CHOCOLATE
        <br />
        100% FAIR TRADE BEANS,
        <br />
        100% LOUISIANA CANE SUGAR MADE IN BATON ROUGE
      </p>
      <div className="mt-8">
        <h3 className="text-xl mb-2">CONTACT US</h3>
        <p>EMAIL: info@lalunachocolates.com</p>
        <p>PHONE: (555) 123-4567</p>
      </div>
      <div className="mt-8">
        <a href="#" aria-label="Facebook" className="text-3xl mx-2">
          f
        </a>
        <a href="#" aria-label="Twitter" className="text-3xl mx-2">
          t
        </a>
      </div>
    </footer>
  );
}
