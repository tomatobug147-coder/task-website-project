import Header from "@/components/Header";
import ALogi from "@/components/ALogi";
import Footer from "@/components/Footer";

const ALogin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <ALogi />
      </main>
      <Footer />
    </div>
  );
};

export default ALogin;
