import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Process from "../components/Process";
import InfoPanel from "../components/InfoPanel";
import BlogPreview from "../components/BlogPreview";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Services />
        <WhyChooseUs />
        <InfoPanel />
        <Projects />
        <Process />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
