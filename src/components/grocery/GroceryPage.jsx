import GroceryForm from "../components/grocery/GroceryForm";
import GroceryTable from "../components/grocery/GroceryTable";

const GroceryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Grocery List
        </h1>

        <GroceryForm />
        <GroceryTable />
      </div>
    </div>
  );
};

export default GroceryPage;