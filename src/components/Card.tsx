import { Link } from "react-router-dom";

export interface IRecipePreview {
  poster: {
    asset: {
      url: string | undefined;
    };
  };
  title: string;
  description: string;
};

type CardProps = {
  recipe: IRecipePreview;
};

function Card({ recipe }: CardProps) {
  return (
    <div className="border rounded-md my-4">
      <Link to="#">
        <img src={recipe.poster.asset.url} alt="food image" />
        <h1 className="font-normal p-2">{recipe.title}</h1>
        <p className="text-gray-400 p-2">{recipe.description}</p>
      </Link>
    </div>
  );
}
export default Card;
