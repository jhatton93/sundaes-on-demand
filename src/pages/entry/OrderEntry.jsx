import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Option";
import { Button } from "react-bootstrap/Button";

export default function OrderEntry({ setOrderPhase }) {
  const [OrderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = OrderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {OrderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </Button>
    </div>
  );
}
