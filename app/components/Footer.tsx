export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-screen flex sm:flex-row flex-col justify-center items-center p-5 text-center sm:justify-between sm:px-10"
    >
      <div className="text-left text-[32px] tracking-tighter hidden sm:block font-text w-[640px]">
        <p>
          SMALL BATCH BEAN-TO-BAR CHOCOLATE
          <br />
          100% FAIR TRADE BEANS,
          <br />
          100% LOUISIANA CANE SUGAR MADE IN BATON ROUGE
        </p>

        <div className="mt-8">
          <p className="font-text text-[32px] font-bold uppercase">Follow Us</p>
          <a href="#" aria-label="Facebook" className="text-3xl mx-2">
            f
          </a>
          <a href="#" aria-label="Twitter" className="text-3xl mx-2">
            t
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start sm:pt-10">
        <h2 className="font-text text-4xl pb-1">CONTACT US</h2>
        <form className="w-full mx-auto flex flex-col">
          <div className="mb-1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="sm:flex sm:gap-2 ">
            <div className="mb-1">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-1">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="mb-1">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="w-full p-2 border border-gray-300 rounded-lg h-[150px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white border-none py-2 px-5 text-lg cursor-pointer rounded-lg hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 sm:hidden">
        <p className="font-text text-[32px] font-bold uppercase">Follow Us</p>
        <a href="#" aria-label="Facebook" className="text-3xl mx-2">
          f
        </a>
        <a href="#" aria-label="Instagram" className="text-3xl mx-2">
          i
        </a>
      </div>
    </footer>
  );
}
