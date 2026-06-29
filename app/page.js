import Hero from "@/components/manual/home-page-sections/Hero";
import LogoTicker from "@/components/manual/home-page-sections/LogoTicker";
import OurServices from "@/components/manual/home-page-sections/OurServices";
import AuditsMarquee from "@/components/manual/home-page-sections/AuditsMarquee";
import Contact from "@/components/manual/home-page-sections/Contact";
import WebinarSeminarMarquee from "@/components/manual/home-page-sections/WebinarSeminarMarquee";

const Home = () => {
  return (
    <>
      <Hero />
      <LogoTicker />
      <OurServices />
      <AuditsMarquee />
      <Contact />
      <WebinarSeminarMarquee />
    </>
  );
};

export default Home;
