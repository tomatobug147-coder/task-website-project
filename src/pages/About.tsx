import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutQuickActions from "@/components/AboutQuickActions";
import AboutHowItWorks from "@/components/AboutHowItWorks";
import AboutStats from "@/components/AboutStats";
import AboutProvenResults from "@/components/AboutProvenResults";
import AboutMicrochipPromo from "@/components/AboutMicrochipPromo";
import AboutReady from "@/components/AboutReady";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <AboutHero />
        <AboutQuickActions />
         <AboutHowItWorks />
         <AboutStats />
         <AboutProvenResults />
         <AboutMicrochipPromo /> 
         <AboutReady />
      </main>
      <Footer />
    </div>
  );
};

export default About;
