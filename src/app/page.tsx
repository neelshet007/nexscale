import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Process from "../components/Process";
import MeetTeam from "../components/MeetTeam";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Process />
        <MeetTeam />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
