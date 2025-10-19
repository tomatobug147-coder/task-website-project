import Header from "@/components/Header";
import FindHero from "@/components/FindHero";
import FindReady from "@/components/FindReady";
import FindSearchs from "@/components/FindSearchs";
import FindMain from "@/components/FindMain";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white pt-20">
        <FindHero />
        <FindSearchs />
        <FindMain />
        <FindReady />
      </main>
      <Footer />
    </div>
  );
};

export default About;
