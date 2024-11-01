'use client';

import gsap from 'gsap';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRouter, usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const trigger = (selector: string) => {
    toggleMenu();
    scrollTo(selector);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const scrollTo = (selector: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        gsap.to(window, { duration: 1, scrollTo: { y: selector } });
        setActiveSection(selector);
      });
    } else {
      gsap.to(window, { duration: 1, scrollTo: { y: selector } });
      setActiveSection(selector);
    }
    setIsMenuOpen(false);
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setActiveSection('');
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false); // Close dropdown on navigation
  };

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return pathname === '/' && activeSection === path ? 'underline decoration-2 underline-offset-8' : '';
    }
    return pathname === path ? 'underline decoration-2 underline-offset-8' : '';
  };

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
    }
  }, [pathname]);

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
          className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-white pt-12 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-start pl-5 ${
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
            className={`block text-black text-[60px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 ${isActive(
              '#home'
            )}`}
            onClick={() => trigger('#home')}
          >
            Home
          </div>
          <div className="relative">
            <div
              className={`block text-black text-[60px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 ${
                isActive('#about') || isActive('/our-story') || isActive('/our-cocoa') || isActive('/our-process')
              }`}
              onClick={toggleAboutDropdown}
            >
              About<span>&#9662;</span> {/* ▼ */}
            </div>
            {isAboutDropdownOpen && (
              <div className="ml-4 mt-2">
                <div
                  className="block text-black text-[40px] capitalize sm:uppercase sm:text-[16px] no-underline lg:py-1 lg:px-2 cursor-pointer"
                  onClick={() => navigateTo('/our-story')}
                >
                  Our Story
                </div>
                <div
                  className="block text-black text-[40px] capitalize sm:uppercase sm:text-[16px] no-underline lg:py-1 lg:px-2"
                  onClick={() => navigateTo('/our-cocoa')}
                >
                  Our Cocoa
                </div>
                <div
                  className="block text-black text-[40px] capitalize sm:uppercase sm:text-[16px] no-underline lg:py-1 lg:px-2"
                  onClick={() => navigateTo('/our-process')}
                >
                  Our Process
                </div>
              </div>
            )}
          </div>
          <div
            className={`block text-black text-[60px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 ${isActive(
              '#chocolates'
            )}`}
            onClick={() => trigger('#chocolates')}
          >
            Products
          </div>
          <div
            className={`block text-black text-[60px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 ${isActive(
              '#events'
            )}`}
            onClick={() => trigger('#events')}
          >
            Events
          </div>
          <div
            className={`block text-black text-[60px] capitalize sm:uppercase sm:text-[20px] no-underline lg:inline-block lg:py-2 lg:px-4 ${isActive(
              '#contact'
            )}`}
            onClick={() => trigger('#contact')}
          >
            Contacts
          </div>
        </nav>
      </div>

      <div className="hidden sm:flex justify-between items-center w-full mx-2">
        {/* Left navigation group */}
        <div className="flex-1 flex justify-start">
          <div className="flex space-x-4 items-center">
            <div
              className={`block text-black uppercase text-[16px] lg:inline-block lg:py-2 lg:px-2 cursor-pointer whitespace-nowrap ${isActive(
                '#home'
              )}`}
              onClick={() => scrollTo('#home')}
            >
              Home
            </div>
            {/* About dropdown */}
            <div className="relative">
              <div
                className={`block text-black uppercase text-[16px] lg:inline-block lg:py-2 lg:px-2 cursor-pointer whitespace-nowrap ${isActive(
                  '#about'
                )}`}
                onClick={toggleAboutDropdown}
              >
                About<span>&#9662;</span>
              </div>
              {isAboutDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white border-2">
                  <div
                    className={`block text-black uppercase text-[16px] px-4 py-2 hover:bg-gray-100 cursor-pointer ${isActive(
                      '/our-story'
                    )}`}
                    onClick={() => navigateTo('/our-story')}
                  >
                    Our Story
                  </div>
                  <div
                    className={`block text-black uppercase text-[16px] px-4 py-2 hover:bg-gray-100 cursor-pointer ${isActive(
                      '/our-cocoa'
                    )}`}
                    onClick={() => navigateTo('/our-cocoa')}
                  >
                    Our Cocoa
                  </div>
                  <div
                    className={`block text-black uppercase text-[16px] px-4 py-2 hover:bg-gray-100 cursor-pointer ${isActive(
                      '/our-process'
                    )}`}
                    onClick={() => navigateTo('/our-process')}
                  >
                    Our Process
                  </div>
                </div>
              )}
            </div>
            <div
              className={`block text-black uppercase text-[16px] lg:inline-block lg:py-2 lg:px-2 cursor-pointer whitespace-nowrap ${isActive(
                '#chocolates'
              )}`}
              onClick={() => scrollTo('#chocolates')}
            >
              Products
            </div>
            <div
              className={`block text-black uppercase text-[16px] lg:inline-block lg:py-2 lg:px-2 cursor-pointer whitespace-nowrap ${isActive(
                '#events'
              )}`}
              onClick={() => scrollTo('#events')}
            >
              Events
            </div>
          </div>
        </div>

        {/* Center logo */}
        <div className="flex-none mx-8">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollTo('#home')}>
            <Image src="/images/lalunachocolates.svg" alt={`logo`} width={300} height={300} className="h-20 w-20" />
          </div>
        </div>

        {/* Right navigation group */}
        <div className="flex-1 flex justify-end">
          <div className="flex space-x-4 items-center">
            <div
              className={`block text-black uppercase text-[16px] lg:inline-block lg:py-2 lg:px-2 cursor-pointer whitespace-nowrap ${isActive(
                '#contact'
              )}`}
              onClick={() => scrollTo('#contact')}
            >
              Contacts
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
