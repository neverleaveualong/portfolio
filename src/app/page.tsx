"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocaleTransition from "@/components/LocaleTransition";

export default function Home() {
  return (
    <>
      <Navigation />
      <LocaleTransition>
        <main>
          <Hero />
          <Career />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </LocaleTransition>
    </>
  );
}
