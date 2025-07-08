"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programmes" },
  { name: "Admissions", href: "/admissions" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <header className="sticky inset-x-0 top-0 z-[999] border-b border-gray-200 bg-white/80 backdrop-blur-lg py-2">
      <nav
        className="container px-4 mx-auto sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1 items-center">
            <Image src={require('../../public/logo.svg')} alt="Logo" className="max-md:w-12 w-16" />
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="max-md:text-xl text-2xl font-bold font-heading text-primary">
                TechTots
              </span>
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
            <NavigationMenu>
              <NavigationMenuList className="lg:gap-x-8">
                {navigation.map((nav, idx) => {
                  const isActive = pathname === nav.href;
                  return (
                    <NavigationMenuItem key={idx}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={nav.href}
                          className={`text-sm font-semibold leading-6 transition-colors hover:text-primary ${isActive ? "text-primary font-extrabold" : "text-gray-900"}`}
                        >
                          {nav.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/admissions" className="btn btn-primary">
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}
      >
        <div className="fixed inset-0 bg-gray-900/80" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold font-heading text-primary">
                TechTots
              </span>
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
  );
};

export default Navbar;
