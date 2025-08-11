import { RecipeGrid } from "@/components/ui/custom/recipe-grid";
import { SearchForm } from "@/components/ui/custom/search-form";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center">
        <SearchForm/>
        <RecipeGrid/>
    </div>
  );
}
