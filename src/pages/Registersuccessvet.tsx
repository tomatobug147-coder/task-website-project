import Header from "@/components/Header";
import RegisterHerovet from "@/components/RegisterHerovet";
import RegisterMainvet from "@/components/RegisterMainvet";
import Footer from "@/components/Footer";

const Contacth = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <RegisterHerovet />
        <RegisterMainvet />
      </main>
      <Footer />
    </div>
  );
};

export default Contacth;
