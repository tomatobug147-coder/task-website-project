import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactSend from "@/components/ContactSend";
import ContactAsk from "@/components/ContactAsk";
import Footer from "@/components/Footer";

const Contacth = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <ContactHero />
        <ContactSend />
        <ContactAsk />
      </main>
      <Footer />
    </div>
  );
};

export default Contacth;
