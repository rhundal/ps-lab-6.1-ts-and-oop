import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";

let p1: PhysicalProduct = new PhysicalProduct("6010", "Nike shoes", 23.5, 20);
let d1: DigitalProduct = new DigitalProduct(
  "1801",
  "Mario Videogame",
  50.0,
  70,
);

[p1, d1].forEach((product) => {
  if (product === p1) {
    console.log(p1.displayDetails());
    console.log(p1.getFormattedWeight());
    console.log(
      `${p1.name} with 10% tax applied costs $${p1.getPriceWithTax()}`,
    );
  } else {
    console.log(d1.displayDetails());
    console.log(d1.formattedSizeGB());
    console.log(
      `${d1.name} with no tax applied costs $${d1.getPriceWithTax()}`,
    );
  }
});
