import { RecipeCard } from "@/components/ui/custom/recipe-card";

const recipes = [
    {
      id: "1",
      title: "Chicken Stir Fry",
      image: "/images.jpeg",
      cookingTime: "30 mins",
      difficulty: "easy",
    },
    {
      id: "2",
      title: "Vegetable Curry",
      image: "/images.jpeg",
      cookingTime: "45 mins",
      difficulty: "medium",
    },
    {
      id: "3",
      title: "Vegetable Curry",
      image: "/images.jpeg",
      cookingTime: "45 mins",
      difficulty: "medium",
    },
    {
      id: "4",
      title: "Vegetable Curry",
      image: "/images.jpeg",
      cookingTime: "45 mins",
      difficulty: "medium",
    },
    {
      id: "5",
      title: "Vegetable Curry",
      image: "/images.jpeg",
      cookingTime: "45 mins",
      difficulty: "medium",
    },
    {
      id: "6",
      title: "Vegetable Curry",
      image: "/images.jpeg",
      cookingTime: "45 mins",
      difficulty: "medium",
    },
    {
      id: "7",
      title: "Vegetable Curry",
      image: "/images.jpeg",
      cookingTime: "45 mins",
      difficulty: "medium",
    }
  ] as const

export function RecipeGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 px-4 py-2">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
