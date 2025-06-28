"use client";

import Image from "next/image";
import Seba from "@/components/Seba";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { useEffect, useState } from "react";

export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section id="seba" className="scroll-mt-24">
          <Seba />
        </section>
        <section id="reviews" className="scroll-mt-24">
          <Reviews />
        </section>
        <section id="about" className="scroll-mt-24">
          <About/>
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}
