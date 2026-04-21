'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Programmes', href: '/enrichment' },
  { name: 'Summer School', href: '/summer-school' },
  { name: 'Tuition & Fees', href: '/tuition' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Wonder Lab', href: '/wonderlab' },
  { name: 'Talent Community', href: '/community' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-slate-900">
        <div className="container mx-auto flex h-10 items-center justify-end gap-5 px-4 text-sm text-white sm:px-6 lg:px-8">
          <Link href="/about" className="transition-all hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="transition-all hover:underline">
            Contact
          </Link>
          <span>|</span>
          <Link href="tel:+233256124133" className="transition-all hover:underline">
            +233 (0) 256124133
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-[999] border-b border-gray-200 bg-white/80 py-2 backdrop-blur-lg transition-all duration-500">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Logo" width={60} height={60} />
              <Link href="/" className="shrink-0">
                <span
                  className="text-2xl font-bold font-heading text-primary"
                  style={{ color: '#27455c' }}
                >
                  TechTots
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
         <div className="hidden min-w-0 justify-center px-8 xl:px-12 lg:flex">
              <div className="flex min-w-0 items-center justify-center gap-5 xl:gap-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="whitespace-nowrap text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link href="/application" className="btn btn-primary px-6 py-3 whitespace-nowrap">
                Apply Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="ml-auto flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'sticky inset-0 z-50' : 'hidden'}`}>
          <div className="fixed inset-0 bg-gray-900/80" aria-hidden="true" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src="/logo.svg" alt="Logo" width={44} height={44} />
                <span
                  className="text-2xl font-bold font-heading text-primary"
                  style={{ color: '#27455c' }}
                >
                  TechTots
                </span>
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="py-6">
                  <Link
                    href="/admissions"
                    className="btn btn-primary w-full text-center"
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