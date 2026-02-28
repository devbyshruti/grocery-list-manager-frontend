import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useGrocery } from "../../context/GroceryContext";
import { toast } from "sonner";

const PantryTable = () => {
  const { pantry, removePantryItem } = useGrocery();

  
  const totalQuantity = pantry.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Pantry Items (Total: {totalQuantity})
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Expiry</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pantry.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.expiry_date || "-"}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                   try {
                     await removePantryItem(item.id);
                     toast.success(`${item.name} removed from Pantry`);
                   } catch (err) {
                     toast.error(`Failed to remove ${item.name}`);
                   }
                }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PantryTable;