import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import GroceryPage from "./pages/GroceryPage";
import PantryPage from "./pages/PantryPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { GroceryProvider } from "./context/GroceryContext";
import { AuthProvider } from "./context/AuthContext";
import { RecipeProvider } from "./context/RecipeContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import { Toaster } from "./components/ui/sonner";
import NotFound from "./pages/NotFound";
import AllRecipes from "./pages/AllRecipes";
import SuggestedRecipes from "./pages/SuggestedRecipes";

function App() {
  return (
   <AuthProvider>
  <BrowserRouter>
    <Routes>

     
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      
      <Route element={<ProtectedRoute />}>
        <Route
          element={
            <GroceryProvider>
              <RecipeProvider>
                <ProtectedLayout />
              </RecipeProvider>
            </GroceryProvider>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/grocery" element={<GroceryPage />} />
          <Route path="/pantry" element={<PantryPage />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/recipes/suggestions" element={<SuggestedRecipes />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
</AuthProvider>
  );
}

export default App;