import Image from "next/image";
import Link from "next/link";
import { Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    image: string;
    cookingTime: string;
    difficulty: "easy" | "medium" | "hard";
  };
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="overflow-hidden transition-colors hover:bg-muted/50 w-72 sm:w-[23.75rem] p-1">
        <CardHeader className="border-b p-0">
          {/* Fixed the image container sizing */}
          <div className="relative w-full pt-[56.25%]">
            {" "}
            {/* 16:9 aspect ratio */}
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              fill
              className="absolute inset-0 object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            /> 
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h2 className="line-clamp-1 text-lg font-semibold">{recipe.title}</h2>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{recipe.cookingTime}</Badge>
            <Badge variant="outline">{recipe.difficulty}</Badge>
                          <Heart className="hover:text-red-400 hover:fill-red-400 text-slate-400"/>

          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
