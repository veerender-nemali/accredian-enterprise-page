import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrackRecord from "@/components/sections/TrackRecord";
import Partnerships from "@/components/sections/Partnerships";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import CatFramework from "@/components/sections/CatFramework";
import DeliveryProcess from "@/components/sections/DeliveryProcess";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrackRecord />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CatFramework />
        <DeliveryProcess />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
