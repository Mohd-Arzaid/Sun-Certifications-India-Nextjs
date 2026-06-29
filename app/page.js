import Hero from "@/components/manual/home-page-sections/Hero";
import LogoTicker from "@/components/manual/home-page-sections/LogoTicker";
import HomeOurServices from "@/components/manual/home-page-sections/HomeOurServices";
import AuditsMarquee from "@/components/manual/home-page-sections/AuditsMarquee";
import Contact from "@/components/manual/home-page-sections/Contact";
import WebinarSeminarMarquee from "@/components/manual/home-page-sections/WebinarSeminarMarquee";
import LatestNews from "@/components/manual/home-page-sections/LatestNews";
import Countries from "@/components/manual/home-page-sections/Countries";
import CertificationAndAchievements from "@/components/manual/home-page-sections/CertificationAndAchievements";
import WhatsOurCustomersSaySection from "@/components/manual/home-page-sections/WhatsOurCustomersSaySection";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";

const Home = () => {
  return (
    <>
      <Hero />
      <LogoTicker />
      <HomeOurServices />
      <AuditsMarquee />
      <Contact />
      <WebinarSeminarMarquee />
      <LatestNews />
      <Countries />
      <CertificationAndAchievements />
      <WhatsOurCustomersSaySection />
      <LogoTicker />
      <VideoSection />
    </>
  );
};

export default Home;
