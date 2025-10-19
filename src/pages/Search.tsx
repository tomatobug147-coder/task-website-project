import Header from "@/components/Header";
import SearchHero from "@/components/SearchHero";
import SearchSearch from "@/components/SearchSearch";
import SearchNeed from "@/components/SearchNeed";
import Footer from "@/components/Footer";

const Search = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <SearchHero />
        <SearchSearch />
        <SearchNeed />
      </main>
      <Footer />
    </div>
  );
};

export default Search;
