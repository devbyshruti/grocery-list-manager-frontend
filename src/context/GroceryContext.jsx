import { createContext, useContext, useEffect, useState } from "react";
import {
  getGroceries,
  addGrocery,
  deleteGrocery,
  getPantry,
  addToPantry,
  deletePantryItem, 
} from "../services/api";

const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
  const [groceries, setGroceries] = useState([]);
  const [pantry, setPantry] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGroceries = async () => {
    try {
      setLoading(true);
      const { data } = await getGroceries();
      setGroceries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPantry = async () => {
    try {
      const { data } = await getPantry();
      setPantry(data);
    } catch (err) {
      console.error(err);
    }
  };

  const createItem = async (item) => {
    await addGrocery(item);
    fetchGroceries();
  };

  const removeItem = async (id) => {
    try {
      await deleteGrocery(id);
      setGroceries((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const moveToPantry = async (item) => {
    try {
      await addToPantry({
        name: item.name,
        quantity: item.quantity,
      });

      await deleteGrocery(item.id);

      setGroceries((prev) => prev.filter((g) => g.id !== item.id));

      fetchPantry();
    } catch (err) {
      console.error(err);
    }
  };

  
  const removePantryItem = async (id) => {
    try {
      await deletePantryItem(id);
      setPantry((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to remove pantry item:", err);
    }
  };

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    fetchGroceries();
    fetchPantry();
  }
}, []);

  return (
    <GroceryContext.Provider
      value={{
        groceries,
        pantry,
        createItem,
        removeItem,
        moveToPantry,
        removePantryItem,
        loading,
      }}
    >
      {children}
    </GroceryContext.Provider>
  );
};

export const useGrocery = () => useContext(GroceryContext);