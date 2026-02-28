import { useRecipe } from "../context/RecipeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SuggestedRecipes = () => {
  const { suggestions, loading } = useRecipe();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!suggestions.length)
    return <p className="text-center mt-10">No suggested recipes yet.</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {suggestions.map((recipe) => (
        <Card key={recipe.name} className="shadow-md hover:scale-105 transition-transform">
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              Missing Ingredients: {recipe.missingCount}
            </p>
            {recipe.missingIngredients && recipe.missingIngredients.length > 0 ? (
              <ul className="list-disc pl-4 text-sm">
                {recipe.missingIngredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            ) : (
              <p className="text-green-600 font-bold">You have all ingredients!</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SuggestedRecipes;