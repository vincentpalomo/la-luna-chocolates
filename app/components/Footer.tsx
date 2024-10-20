'use client';

import { Facebook, Instagram } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer() {
  const [formStatus, setFormStatus] = useState('');

  console.log(formStatus);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(response);

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        // e.currentTarget.reset();
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email', error);
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <footer
      id="contact"
      className="min-h-screen flex sm:flex-row flex-col justify-center items-center p-5 text-center sm:justify-between sm:px-10 2xl:px-12"
    >
      <div className="text-left text-[32px] tracking-tighter hidden sm:block font-main w-[640px]">
        <p>
          SMALL BATCH BEAN-TO-BAR CHOCOLATE
          <br />
          100% FAIR TRADE BEANS
          <br />
          100% LOUISIANA CANE SUGAR
          <br />
          MADE IN BATON ROUGE
        </p>

        <div className="mt-8">
          <p className="font-main text-[32px] font-bold uppercase">Follow Us</p>
          <div className="flex items-center mt-2">
            <a href="https://www.facebook.com/LaLunaChocolate/" target="_blank" aria-label="Facebook" className="mr-4">
              <Facebook size={32} color="black" />
            </a>
            <a
              href="https://www.instagram.com/lalunachocolates/?hl=en"
              target="_blank"
              aria-label="Instagram"
              className="ml-4"
            >
              <Instagram size={32} color="black" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start sm:pt-10">
        <h2 className="font-main text-4xl pb-1">CONTACT US</h2>
        <form onSubmit={handleSubmit} className="w-full mx-auto flex flex-col">
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
        {formStatus && <p className="mt-4 text-lg font-bold">{formStatus}</p>}
      </div>

      <div className="mt-8 sm:hidden flex flex-col items-center justify-center">
        <p className="font-text text-[32px] font-bold uppercase">Follow Us</p>
        <div className="flex items-center mt-2">
          <a href="https://www.facebook.com/LaLunaChocolate/" target="_blank" aria-label="Facebook" className="mr-4">
            <Facebook size={32} color="black" />
          </a>
          <a
            href="https://www.instagram.com/lalunachocolates/?hl=en"
            target="_blank"
            aria-label="Instagram"
            className="ml-4"
          >
            <Instagram size={32} color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
}
