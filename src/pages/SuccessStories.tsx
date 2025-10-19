import Header from "@/components/Header";
import SuccessStoriesHero from "@/components/SuccessStoriesHero";
import SuccessStoriesRecent from "@/components/SuccessStoriesRecent";
import SuccessStoriesMore from "@/components/SuccessStoriesMore";
import SuccessStoriesNumber from "@/components/SuccessStoriesNumber";
import SuccessStoriesShare from "@/components/SuccessStoriesShare";
import Footer from "@/components/Footer";

const SuccessStories = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <SuccessStoriesHero />
        <SuccessStoriesRecent />
        <SuccessStoriesMore />
        <SuccessStoriesNumber />
        <SuccessStoriesShare />
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
