import { Ingredient } from "./ingredient";
import { Instruction } from "./instruction";

export interface IRecipePreview {
  poster: {
    asset: {
      url: string | undefined;
    };
  };
  title: string;
  description: string;
}


export interface IRecipe extends IRecipePreview {
  slug: string;
  time: number;
  serving: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
}