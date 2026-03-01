import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";
import { useAuth } from "./AuthContext";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const { user } = useAuth(); 
  const [recipes, setRecipes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/recipes");
      setRecipes(data);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggestions = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/recipes/suggestions");
      setSuggestions(data.suggestions || []);
    } catch (err) {
      console.error("Failed to fetch recipe suggestions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;   
    fetchRecipes();
    fetchSuggestions();
  }, [user]);

  return (
    <RecipeContext.Provider
      value={{ recipes, suggestions, fetchRecipes, fetchSuggestions, loading }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);