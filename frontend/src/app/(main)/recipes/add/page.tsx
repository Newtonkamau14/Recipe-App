import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectLabel } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export const metadata: Metadata = {
  title: "Add Recipe",
  description: "Discover and save your favorite recipes",
};

export default function RecipeForm() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Add new recipe</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="text"
                  type="title"
                  placeholder="Beef stew"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mainPicture">Cover Photo</Label>
                <Input id="mainPicture" type="file" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="otherPictures">Other Photos</Label>
                <Input id="otherPictures" type="file" multiple />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="cookingTime">Cooking Time&#40;mins&#41;</Label>
                <Input
                  id="text"
                  type="number"
                  min={1}
                  placeholder="cooking time(mins)"
                  required
                />
              </div>
              <div className="relative border rounded-md p-2 mb-2 z-10">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder="Select the difficulty"
                      className="text-start"
                    />
                  </SelectTrigger>

                  <SelectContent className="z-50 bg-gray-50 w-full">
                    <SelectGroup>
                      <SelectLabel>Difficulty</SelectLabel>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2 mb-4">
                <Label htmlFor="ingredients">Ingredients</Label>
                <Textarea placeholder="Enter the recipe ingredients here." />
              </div>

              <div className="grid gap-2 mb-4">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea placeholder="Enter the recipe instructions here." />
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" className="text-lg">
                Cancel
              </Button>
              <Button variant="default" className="text-lg">
                Add
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
