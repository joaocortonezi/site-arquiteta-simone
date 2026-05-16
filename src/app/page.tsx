"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Specialty from "@/components/Specialty/Specialty";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <>
      <LoadingScreen />
      <main>
        <Header />
        <Hero />
        <About />
        <Specialty />
        <Portfolio />
        <Services />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
