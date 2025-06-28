"use client";

import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

import Image from "next/image";
// import Service from "@/components/Service";
// import Reviews from "@/components/Reviews";
// import Contact from "@/components/Contact";
// import About from "@/components/About";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // Load mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update localStorage and html class on toggle
  const toggleMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div>
      <section id="service" className="scroll-mt-24">
        <Hero />
      </section>
       <section id="service" className="scroll-mt-24">
        <Slider />
      </section>
      <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {/* 
        <section id="service" className="scroll-mt-24">
          <Service />
        </section>
        <section id="reviews" className="scroll-mt-24">
          <Reviews />
        </section>
        <section id="about" className="scroll-mt-24">
          <About/>
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section> */}
        </main>
      </div>
    </div>
  );
}
