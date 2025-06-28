

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./Theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className=" mx-auto px-4 py-4 flex items-center justify-between border border-gray-200 dark:border-gray-700">
        {/* Logo */}
        <div className=" w-1/3 flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <div className="leading-tight">
            <h1 className="text-red-500 dark:text-red-500 font-bold text-sm md:text-base lg:text-lg">
              MD ABDUL KAIYUM
            </h1>
            <p className="font-bold text-sm text-black dark:text-white">
              Lifestyle modifier
            </p>
          </div>
        </div>

        {/* Desktop Nav + CTA */}
        <div className=" w-2/3 hidden md:flex  items-center justify-end">
          <ul className="hidden md:flex gap-5 items-center text-base font-medium text-gray-700 mr-4 dark:text-gray-200">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200"
              >
                হোম
              </Link>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                সেবা
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                রিভিউ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                যোগাযোগ
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer text-lg font-semibold"
              >
                FAQ
              </a>
            </li>
          </ul>
          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <Link href="/book-appointment">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                বুক অ্যাপয়েন্টমেন্ট
              </button>
            </Link>

            <Link href="/bmi-calculator">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                BMI Calculator
              </button>
            </Link>

            <Link href="/download-app">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                Download app
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                লগিন করুন
              </button>
            </Link>
            <Link
              href="/shop-now"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer text-lg font-semibold"
            >
              <Image src="/cart.png" alt="Cart" width={22} height={22} />
              <span>Shop Now</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <details className="relative">
            <summary className="list-none cursor-pointer text-gray-700 dark:text-white">
              <Menu className="w-6 h-6" />
            </summary>
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 space-y-4 z-50">
              <ul className="flex flex-col gap-3 text-base font-medium text-gray-700 dark:text-gray-200">
               <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200"
              >
                হোম
              </Link>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                সেবা
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                রিভিউ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                যোগাযোগ
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer text-lg font-semibold"
              >
                FAQ
              </a>
            </li>
              </ul>
              <div className="flex flex-col gap-3 ">
                <Link href="/book-appointment">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                    বুক অ্যাপয়েন্টমেন্ট
                  </button>
                </Link>

                <Link href="/bmi-calculator">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                    BMI Calculator
                  </button>
                </Link>

                <Link href="/download-app">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                    Download app
                  </button>
                </Link>
                <Link href="/login">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-lg font-medium hover:bg-blue-700">
                    লগিন করুন
                  </button>
                </Link>
                <Link
                  href="/shop-now"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-200 cursor-pointer text-lg font-semibold"
                >
                  <Image src="/cart.png" alt="Cart" width={22} height={22} />
                  <span>Shop Now</span>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}

