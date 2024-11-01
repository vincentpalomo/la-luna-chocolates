'use client';

import gsap from 'gsap';
import { useState } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRouter, usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const trigger = (selector: string) => {
    toggleMenu();
    scrollTo(selector);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (selector: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        gsap.to(window, { duration: 2, scrollTo: { y: selector } });
      });
    } else {
      gsap.to(window, { duration: 2, scrollTo: { y: selector } });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 sm:px-10 bg-white z-50">
      {/* mobile */}
      <div className="sm:hidden fixed top-0 left-0 right-0 flex justify-between items-center p-5 sm:px-10 bg-white z-50">
        <div className="text-2xl font-bold" onClick={() => scrollTo('#home')}>
          <Image src="/images/lalunachocolates.svg" alt={``} width={300} height={300} className="h-20 w-20" />
        </div>
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
              className="absolute top-10 right-5 bg-none border-none text-4xl cursor-pointer z-50 lg:hidden"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              X
            </button>
          )}
          <div
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={() => trigger('#home')}
          >
            Home
          </div>
          <div
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={() => trigger('#about')}
          >
            About
          </div>
          <div
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={() => trigger('#chocolates')}
          >
            Products
          </div>
          <div
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={() => trigger('#events')}
          >
            Events
          </div>
          <div
            className="block  text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4"
            onClick={() => trigger('#contact')}
          >
            Contacts
          </div>
        </nav>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex">
        <div
          className="block text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 cursor-pointer"
          onClick={() => scrollTo('#home')}
        >
          Home
        </div>
        <div
          className="block text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 cursor-pointer"
          onClick={() => scrollTo('#about')}
        >
          About
        </div>
        <div
          className="block text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 cursor-pointer"
          onClick={() => scrollTo('#chocolates')}
        >
          Products
        </div>
        <div
          className="block text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 cursor-pointer"
          onClick={() => scrollTo('#events')}
        >
          Events
        </div>
      </div>
      <div
        className="text-2xl font-bold w-[35%] 2xl:w-[20%] hidden sm:flex cursor-pointer"
        onClick={() => scrollTo('#home')}
      >
        <Image src="/images/lalunachocolates.svg" alt={`logo`} width={300} height={300} className="h-20 w-20" />
      </div>
      <div
        className="sm:block text-black text-[72px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 cursor-pointer hidden"
        onClick={() => scrollTo('#contact')}
      >
        Contacts
      </div>
    </header>
  );
}
