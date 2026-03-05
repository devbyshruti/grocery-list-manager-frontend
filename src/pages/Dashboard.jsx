import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRecipe } from "../context/RecipeContext";

const Dashboard = () => {
  const { suggestions = [], loading } = useRecipe();

  return (
    <div className="space-y-10">

      
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome back 
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your groceries, pantry and discover smart recipes.
        </p>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <DashboardCard to="/grocery" title="Grocery List" />
        <DashboardCard to="/pantry" title="Pantry" />
        <DashboardCard to="/recipes" title="All Recipes" />
        <DashboardCard to="/recipes/suggestions" title="Suggested Recipes" />
      </motion.div>

      
      <Card className="border border-border bg-white/5 backdrop-blur-md">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-6">
            Smart Recipe Suggestions
          </h2>

          {loading ? (
            <div className="flex justify-center py-6">
              <Loader2 className="animate-spin text-muted-foreground" />
            </div>
          ) : suggestions.length === 0 ? (
            <div className="text-muted-foreground text-sm">
              Add items to your pantry to start receiving recipe suggestions.
            </div>
          ) : (
            <ul className="space-y-3">
              {suggestions.slice(0, 5).map((recipe, index) => (
                <li
                  key={recipe.id || index}
                  className="p-4 rounded-xl border border-border bg-background hover:bg-muted/40 transition"
                >
                  <div className="font-medium">{recipe.name}</div>

                  {recipe.missingIngredients?.length > 0 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Missing: {recipe.missingIngredients.join(", ")}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

    </div>
  );
};

const DashboardCard = ({ to, title }) => {
  return (
    <Link to={to}>
      <Card className="h-32 flex items-center justify-center border border-border bg-white/5 backdrop-blur-md hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        <CardContent>
          <h2 className="text-lg font-medium">{title}</h2>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Dashboard;