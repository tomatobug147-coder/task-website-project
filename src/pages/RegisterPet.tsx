import Header from "@/components/Header";
import RegisterHero from "@/components/RegisterHero";
import RegisterMenu from "@/components/RegisterMenu";
import Footer from "@/components/Footer";

const RegisterPet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <RegisterHero />
        <RegisterMenu />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPet;
