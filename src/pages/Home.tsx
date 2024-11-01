import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Recipe from "../components/Recipe";

function Home() {
  return (
    <div className="m-8">
      <div className="flex justify-center gap-4">
        <div className="border border-gray-300 rounded-md shadow p-6">
          <SearchBar />

          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Recipe />
      </div>
    </div>
  );
}

export default Home;
