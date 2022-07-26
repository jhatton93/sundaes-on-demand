import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Option";

export default function OrderEntry() {
  const [OrderDetails] = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {OrderDetails.totals.grandTotal}</h2>
    </div>
  );
}
