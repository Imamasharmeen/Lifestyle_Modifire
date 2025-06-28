"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden relative ">
      {/* Outer Wrapper */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] ">
        {/* Slide Row */}
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translate(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover "
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="" // Changed from object-cover to object-contain
                // sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                priority={index === 0} // Add priority for the first image to improve LCP
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button> */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === current ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}