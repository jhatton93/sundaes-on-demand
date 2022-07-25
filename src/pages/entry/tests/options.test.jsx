import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Option";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("displays image for each scoop from the server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each toppings option from the server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const imageTitles = toppingImages.map((img) => img.alt);
  expect(imageTitles).toStrictEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot Fudge topping",
  ]);
});
