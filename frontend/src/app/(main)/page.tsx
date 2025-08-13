import { RecipeGrid } from "@/components/custom/recipe-grid";
import { SearchForm } from "@/components/custom/search-form";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center">
        <SearchForm/>
        <RecipeGrid/>
    </div>
  );
}
