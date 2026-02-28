import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGrocery } from "../../context/GroceryContext";

const GroceryItem = ({ item }) => {
  const { removeItem } = useGrocery();

  return (
    <Card className="shadow-md rounded-2xl">
      <CardContent className="flex justify-between items-center p-4">
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted-foreground">
            Quantity: {item.quantity}
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={() => removeItem(item._id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default GroceryItem;