import type { Metadata } from "next";
import { Heart } from "lucide-react";


export const metadata: Metadata = {
  title: "Favourites",
  description: "Discover and save your favorite recipes",
};


export default function Favourites() {
  return (
    <div className="min-h-screen flex flex-col m-3">
      <h1 className="text-[#333] text-6xl">My Favourites</h1>
      <p className="text-xl text-gray-400">Your saved recipes in one place</p>

      <div className="flex flex-col items-center mt-3 gap-3">
        <Heart size={80} className="text-gray-600"/>
        <h2 className="text-5xl">No favourites yet</h2>
        <p className="text-gray-400">
          Start exploring recipes and click the heart icon to save your
          favorites here.
        </p>
      </div>
    </div>
  );
}
