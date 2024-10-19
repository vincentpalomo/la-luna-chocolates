'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 sm:px-10 bg-white z-50">
      {/* mobile */}
      <div className="sm:hidden fixed top-0 left-0 right-0 flex justify-between items-center p-5 sm:px-10 bg-white z-50">
        <Link href="#home" className="text-2xl font-bold">
          <Image src="/images/lalunachocolates.svg" alt={``} width={300} height={300} className="h-20 w-20" />
        </Link>
        {!isMenuOpen && (
          <button
            id="menuToggle"
            className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="w-8 h-1 bg-black rounded-full transition-all duration-300 origin-left"></span>
            <span className="w-8 h-1 bg-black rounded-full transition-all duration-300 origin-left"></span>
            <span className="w-8 h-1 bg-black rounded-full transition-all duration-300 origin-left"></span>
          </button>
        )}
        <nav
          className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-white pt-12 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:transform-none lg:opacity-100 lg:flex-row lg:pt-0`}
        >
          {isMenuOpen && (
            <button
              id="closeMenu"
              className="absolute top-4 right-5 bg-none border-none text-4xl cursor-pointer z-50 lg:hidden"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              X
            </button>
          )}
          <Link
            href="#home"
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#chocolates"
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="#events"
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            href="#contact"
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={toggleMenu}
          >
            Contacts
          </Link>
        </nav>
      </div>
      <div className="">
        <Link
          href="#home"
          className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="#chocolates"
          className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
          onClick={toggleMenu}
        >
          Products
        </Link>
        <Link
          href="#events"
          className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
          onClick={toggleMenu}
        >
          Events
        </Link>
      </div>
      <Link href="#home" className="text-2xl font-bold w-[35%] 2xl:w-[20%]">
        <Image src="/images/lalunachocolates.svg" alt={``} width={300} height={300} className="h-20 w-20" />
      </Link>
      <Link
        href="#contact"
        className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
        onClick={toggleMenu}
      >
        Contacts
      </Link>
    </header>
  );
}
