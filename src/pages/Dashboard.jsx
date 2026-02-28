import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSuggestions } from "../services/api";
import Container from "../components/layout/Container";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const { data } = await getSuggestions();
        setSuggestions(data.suggestions || []); // FIX
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestions();
  }, []);

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/grocery">
          <Card className="p-6 hover:shadow-xl transition cursor-pointer h-32 flex items-center justify-center">
            <CardContent>
              <h2 className="text-xl font-semibold text-center">Grocery List</h2>
            </CardContent>
          </Card>
        </Link>

        <Link to="/pantry">
          <Card className="p-6 hover:shadow-xl transition cursor-pointer h-32 flex items-center justify-center">
            <CardContent>
              <h2 className="text-xl font-semibold text-center">Pantry</h2>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-8">
        <Card className="p-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Smart Recipe Suggestions</h2>
            {loading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="animate-spin" />
              </div>
            ) : suggestions.length === 0 ? (
              <p className="text-muted-foreground">
                Add items to your pantry to get suggestions.
              </p>
            ) : (
              <ul className="space-y-2">
                {suggestions.map((recipe, index) => (
                  <li key={index} className="p-3 bg-slate-50 rounded-lg">
                    <span className="font-bold">{recipe.name}</span> 
                    <span className="text-sm text-muted-foreground ml-2">
                      (Missing: {recipe.missingIngredients?.join(", ")})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Dashboard;