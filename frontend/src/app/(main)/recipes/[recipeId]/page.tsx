import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChefHat, Clock, Flame, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Recipe() {
  return (
    <main className="container min-h-screen p-4 md:p-10 mx-auto">
      <div className="space-y-6">
        <Link
          href="/"
          className="flex items-center gap-4 w-fit h-fit px-6 py-3 rounded-md text-xl hover:bg-stone-100"
        >
          <ArrowLeft />
          Back to Recipes
        </Link>
        <h1 className="text-3xl font-semibold">Chicken Stir Fry</h1>
        <p className="text-2xl text-gray-500">
          A quick and delicious chicken stir fry with fresh vegetables and
          savory sauce.
        </p>

        <div className="text-gray-500 text-xl flex gap-3 md:flex-row flex-col">
          <span className="flex items-center gap-1">
            <Clock />
            <p>Prep&#58; 15 mins</p>
          </span>
          <Separator orientation="vertical" />
          <span className="flex items-center">
            <p>Cook&#58; 30 mins</p>
          </span>
          <Separator orientation="vertical" />

          <span className="flex items-center gap-1">
            <Users />
            <p>4 servings</p>
          </span>
          <Separator orientation="vertical" />

          <span className="flex items-center gap-1">
            <ChefHat />
            <Badge variant="outline" className="font-semibold text-black">
              easy
            </Badge>
          </span>
          <Separator orientation="vertical" />

          <span className="flex items-center gap-1">
            <Flame />
            <p>320 cal</p>
          </span>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-md mt-2 p-4">
        <Carousel className="bg-blue-300 w-full">
          <CarouselContent className="h-[800px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem>
                <div className="text-xl font-semibold">{index}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Tabs defaultValue="ingredients">
        <TabsList className="my-3 w-full md:h-12 md:text-lg">
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>
        <TabsContent value="ingredients">
          <div className="border border-gray-300 rounded-sm p-6 md:text-xl">
            <ul className="space-y-4">
              <li className="flex justify-between">
                Chicken breast
                <div>
                  <h4 className="text-end font-semibold">1 lb</h4>
                  <p>cut into strips</p>
                </div>
              </li>
              <li className="flex justify-between">
                Bell peppers
                <div>
                  <h4 className="text-end font-semibold">2</h4>
                  <p>sliced</p>
                </div>
              </li>
              <li className="flex justify-between">
                Broccoli florets
                <div>
                  <h4 className="text-end font-semibold">2 cups</h4>
                </div>
              </li>
              <li className="flex justify-between">
                Carrots
                <div>
                  <h4 className="text-end font-semibold">2</h4>
                  <p>julienned</p>
                </div>
              </li>
              <li className="flex justify-between">
                Garlic
                <div>
                  <h4 className="text-end font-semibold">3 cloves</h4>
                  <p>minced</p>
                </div>
              </li>
              <li className="flex justify-between">
                Ginger
                <div>
                  <h4 className="text-end font-semibold">1 tbsp</h4>
                  <p>minced</p>
                </div>
              </li>
              <li className="flex justify-between">
                Soy sauce
                <div>
                  <h4 className="text-end font-semibold">3 tbsp</h4>
                </div>
              </li>
              <li className="flex justify-between">
                Oyster sauce
                <div>
                  <h4 className="text-end font-semibold">2 tbsp</h4>
                </div>
              </li>
              <li className="flex justify-between">
                Sesame oil
                <div>
                  <h4 className="text-end font-semibold">1 tbsp</h4>
                </div>
              </li>
              <li className="flex justify-between">
                Vegetable oil
                <div>
                  <h4 className="text-end font-semibold">2 tbsp</h4>
                  <p>for cooking</p>
                </div>
              </li>
              <li className="flex justify-between">
                Green onions
                <div>
                  <h4 className="text-end font-semibold">2</h4>
                  <p>chopped</p>
                </div>
              </li>
              <li className="flex justify-between">
                Sesame seeds
                <div>
                  <h4 className="text-end font-semibold">1 tbsp</h4>
                  <p>for garnish</p>
                </div>
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="instructions">
          <div className="border border-gray-300 rounded-sm p-6 md:text-xl">
            <h2>Instructions</h2>
            <div className="flex flex-row gap-2">
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums mt-1">
                1
              </Badge>
              <div>
                <h3 className="font-semibold">Prepare the ingredients</h3>
                <p>
                  Cut chicken into strips, slice vegetables, and mince garlic
                  and ginger. Mix soy sauce, oyster sauce, and sesame oil in a
                  small bowl.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="nutrition">
          <div className="border border-gray-300 rounded-sm p-6">
            <h2 className="text-3xl font-semibold">Nutrition Information</h2>
            <h3 className="text-2xl text-gray-400 font-semibold">
              Per serving
            </h3>
            <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-4 mt-4">
              <div className="text-center">
                <h4 className="text-3xl font-semibold">320</h4>
                <p className="text-gray-500">Calories</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-semibold">28g</h4>
                <p className="text-gray-500">Protein</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-semibold">12g</h4>
                <p className="text-gray-500">Carbs</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-semibold">18g</h4>
                <p className="text-gray-500">Fat</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-semibold">4g</h4>
                <p className="text-gray-500">Fiber</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
