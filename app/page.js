"use client";

import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

import Image from "next/image";
import Service from "@/components/Service";
import Reviews from "@/components/Reviews";
// import Contact from "@/components/Contact";
import About from "@/components/About";
import { useEffect, useState } from "react";
import Lifestyle from "@/components/LifeStyle/LifeStyle";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Video from "@/components/Video";
import BMICalculator from "@/components/BMICalculator";

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
      <Hero />
      <Slider />
      <Lifestyle />
      <Appointment/>
     <BMICalculator />
      <section id="service" className="scroll-mt-24">
        <Service />
      </section>
      <Video/>
      <section id="reviews" className="scroll-mt-24">
          <Reviews />
      </section>
      <section id="about" className="scroll-mt-24">
          <About/>
        </section>
      <Map />
      <Footer/>

      {/* 
        
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section> */}
    </div>
  );
}

{
  /* <section id="service" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="service" className="scroll-mt-24">
        <Slider />
      </section>

      <section className="">
        <Lifestyle />
      </section> */
}
