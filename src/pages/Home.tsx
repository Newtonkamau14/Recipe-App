import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Recipe from "../components/Recipe";
import { IRecipePreview } from "../components/Card";
import { IRecipe } from "../components/Recipe";
import { sanityClient } from "../client";

function Home() {
  const [recipes, setRecipes] = useState<IRecipePreview[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState();

  const getRecipes = () => {
    sanityClient
      .fetch(
        `*[_type == "recipe"]{
            title,
            description,
            poster {
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setRecipes(data))
      .catch(console.error);
  };

  const getOneRecipe = () => {
    sanityClient
      .fetch(
        `*[_type == "recipe"]{
          title,
          description,
          poster {
            asset->{
              _id,
              url
            }
          },
          slug {
            current
          },
          time,
          serving,
          ingredients,
          instructions
        }`
      )
      .then((data) => setCurrentRecipe(currentRecipe))
      .catch(console.error);
  };

  useEffect(() => {
    getRecipes();
    getOneRecipe();
  }, []);
  console.log(recipes);
  return (
    <div className="m-8">
      <div className="flex justify-center gap-4">
        <div className="border border-gray-300 rounded-md shadow p-6">
          <SearchBar />

          {recipes && recipes.map((recipe) => <Card recipe={recipe} />)}
        </div>
        <Recipe recipe={currentRecipe}/>
      </div>
    </div>
  );
}

export default Home;
