import { useEffect } from "react";
import Header from "@/components/Header";
import SuccessHero from "@/components/SuccessHero";
import SuccessComplete from "@/components/SuccessComplete";
import SuccessImportant from "@/components/SuccessImportant";
import SuccessHelp from "@/components/SuccessHelp";
import Footer from "@/components/Footer";

const Registersuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white pt-20">
        <SuccessHero />
        <SuccessComplete />
        <SuccessImportant />
        <SuccessHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Registersuccess;
