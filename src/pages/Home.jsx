import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ProductsSection from "../components/home/ProductsSection";
import BrandsSection from "../components/home/BrandsSection";
import GlobalPresence from "../components/home/GlobalPresence";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <AboutSection />

      <ProductsSection />

      

      <GlobalPresence />
        <BrandsSection />
      <ProjectsSection />

      <ContactSection />

      <Footer />
    </>
  );
}