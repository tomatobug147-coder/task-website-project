import Header from "@/components/Header";
import VetRegisterHero from "@/components/VetRegisterHero";
import VetRegisterHeroMenu from "@/components/VetRegisterHeroMenu";
import Footer from "@/components/Footer";

const VetRegister = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <VetRegisterHero />
        <VetRegisterHeroMenu />
      </main>
      <Footer />
    </div>
  );
};

export default VetRegister;
