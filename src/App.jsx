import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Team from "./components/Team";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Section from "./components/Section";

import site from "./config/site";

export default function App() {
  const { modules } = site;

  return (
    <>
      <Header site={site} />

      <main>
        <Hero site={site} />

        <Section enabled={modules.services}>
          <Services site={site} />
        </Section>

        <Section enabled={modules.about}>
          <About site={site} />
        </Section>

        <Section enabled={modules.stats}>
          <Stats site={site} />
        </Section>

        <Section enabled={modules.team}>
          <Team site={site} />
        </Section>

        <Section enabled={modules.portfolio}>
          <Portfolio site={site} />
        </Section>

        <Section enabled={modules.process}>
          <Process site={site} />
        </Section>

        <Section enabled={modules.testimonials}>
          <Testimonials site={site} />
        </Section>

        <Section enabled={modules.faq}>
          <FAQ site={site} />
        </Section>

        <Section enabled={modules.cta}>
          <CTA site={site} />
        </Section>

        <Section enabled={modules.contact}>
          <Contact site={site} />
        </Section>

        <FloatingWhatsApp site={site} />
      </main>

      <Footer site={site} />
    </>
  );
}