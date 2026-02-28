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

const GroceryTable = () => {
  const { groceries, removeItem, moveToPantry} = useGrocery();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {groceries.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                 <Button
                   variant="outline"
                   size="sm"
                   onClick={() => moveToPantry(item)}
                 >
                   Move
                 </Button>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeItem(item.id)}
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

export default GroceryTable;