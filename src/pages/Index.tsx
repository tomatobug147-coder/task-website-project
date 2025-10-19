import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import ProvenResults from "@/components/ProvenResults";
import MicrochipPromo from "@/components/MicrochipPromo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <Hero />
        <QuickActions />
        <HowItWorks />
        <Stats />
        <ProvenResults />
        <MicrochipPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
