import Header from "@/components/Header";
import POHero from "@/components/POHero";
import PONeed from "@/components/PONeed";
import POLog from "@/components/POLog";
import Footer from "@/components/Footer";

const POLogin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white pt-20">
        <POHero />
        <POLog />
        <PONeed />
      </main>
      <Footer />
    </div>
  );
};

export default POLogin;
