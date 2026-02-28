import Container from "../components/layout/Container";
import GroceryForm from "../components/grocery/GroceryForm";
import GroceryTable from "../components/grocery/GroceryTable";

const GroceryPage = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold mb-6">Grocery List</h2>
      <GroceryForm />
      <GroceryTable />
    </Container>
  );
};

export default GroceryPage;