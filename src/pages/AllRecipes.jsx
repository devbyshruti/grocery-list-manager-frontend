import { useRecipe } from "../context/RecipeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AllRecipes = () => {
  const { recipes, loading } = useRecipe();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Card key={recipe.id} className="shadow-md hover:scale-105 transition-transform">
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Dietary:</strong> {recipe.dietary_type || "N/A"}</p>
            <p><strong>Calories:</strong> {recipe.calories || "-"}</p>
            <p><strong>Ingredients:</strong> {JSON.stringify(recipe.ingredients)}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllRecipes;