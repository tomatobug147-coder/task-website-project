import Header from "@/components/Header";
import VHero from "@/components/VHero";
import VDashboard from "@/components/VDashboard";
import VLog from "@/components/VLog";
import Footer from "@/components/Footer";

const VLogin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white pt-20">
        <VHero />
        <VLog />
        <VDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default VLogin;
