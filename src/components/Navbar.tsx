'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'Our  Programmes', href: '/programmes' },
  { name: 'Our Programmes', href: '/enrichment' },
  { name: 'Tuition & Fees', href: '/tuition' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Wonder Lab', href: '/wonderlab' },
  // { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  // { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="w-full bg-slate-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 flex items-center justify-end text-white h-10 gap-5 text-sm">
          <Link href={'/about'} className='transition-all hover:underline'>About Us</Link>
          <Link href={'/contact'} className='transition-all hover:underline'>Contact</Link>
          <span>|</span>
          <Link href={'tel:+233256124133'} className='transition-all hover:underline'>+233 (0) 256124133</Link>
        </div>
    </div>
    <header className="sticky top-0 z-[999] border-b border-gray-200 bg-white/80 backdrop-blur-lg py-2 transition-all duration-500">
      <nav className="container px-4 mx-auto sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <div className="flex lg:flex-1 items-center">
            <img src="/logo.svg" alt='Logo' width={60} height={60} />
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold font-heading text-primary" style={{ color: "#27455c" }} >TechTots</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/application"
              className="btn btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'sticky inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900/80" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold font-heading text-primary">TechTots</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/admissions"
                  className="w-full text-center btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
} 