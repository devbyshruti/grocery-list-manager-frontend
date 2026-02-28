import Container from "../components/layout/Container";
import PantryTable from "../components/pantry/PantryTable";

const PantryPage = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold mb-6">Pantry</h2>
      <PantryTable />
    </Container>
  );
};

export default PantryPage;