import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGrocery } from "../../context/GroceryContext";
import { toast } from "sonner";
import { Plus } from "lucide-react";

const GroceryForm = () => {
  const { createItem } = useGrocery();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "Vegetables",
    quantity: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Please enter an item name.");
      return;
    }

    setLoading(true);
    try {
      await createItem(formData);
   
      setFormData({ name: "", category: formData.category, quantity: 1 });
      toast.success("Item added!");
    } catch (error) {
      toast.error("Failed to add item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-8 shadow-md border-t-4 border-t-green-500">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Add Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
        >
      
          <div className="md:col-span-5">
            <Input
              placeholder="Item name (e.g., Milk)"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="h-10"
            />
          </div>

          
          <div className="md:col-span-3">
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="Grains">Grains</option>
              <option value="Meat">Meat</option>
              <option value="Bakery">Bakery</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
            </select>
          </div>

         
          <div className="md:col-span-2">
            <Input
              type="number"
              placeholder="Qty"
              min="1"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: Number(e.target.value) })
              }
              className="h-10"
            />
          </div>

        
          <Button
            type="submit"
            disabled={loading}
            className="md:col-span-2 h-10 bg-green-600 hover:bg-green-700 text-white"
          >
            {loading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" /> Add
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GroceryForm;