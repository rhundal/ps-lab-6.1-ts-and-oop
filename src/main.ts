import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";
import sorting from "./modules/sorting.js";
import Product from "./models/Product.js";

let p1: PhysicalProduct = new PhysicalProduct("6010", "Nike shoes", 23.5, 20);
let p2: PhysicalProduct = new PhysicalProduct(
  "1010",
  "Adidas Shirt",
  15.5,
  0.5,
);
let p3: PhysicalProduct = new PhysicalProduct("0005", "Mouse", 53.5, 0.2);
let p4: PhysicalProduct = new PhysicalProduct("5553", "Laptop", 1000, 1.5);
let p5: PhysicalProduct = new PhysicalProduct("2212", "Clay Pot", 33.5, 2.0);

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

console.log("\nDemo of bulkDiscounts on physical product P1 based on quantity");

let priceAfterBulkDiscountBasedOnQty = p1.bulkDiscounts(3);
console.log(priceAfterBulkDiscountBasedOnQty);

console.log("\nDemo of bulkDiscounts on physical product P1 based on size");

let priceAfterBulkDiscountBasedOnSize = p2.bulkDiscounts(3.5);
console.log(priceAfterBulkDiscountBasedOnSize);

console.log(
  "\nDemo of DiscountableProduct interface - applying discount to product d1.",
);

let discountedPrice = d1.applyDiscount(2.3);
console.log(discountedPrice);

let arrayOfProducts = [];

arrayOfProducts.push(p1);
arrayOfProducts.push(p2);
arrayOfProducts.push(p3);
arrayOfProducts.push(p4);
arrayOfProducts.push(p5);

console.log("\nDemo of sorting of products based on price");

let sortedArrayByPrice = sorting(p1.price, arrayOfProducts);

sortedArrayByPrice?.forEach((prod) => {
  console.log(`${prod.name} has price $${prod.price}`);
});

console.log("\nDemo of sorting of products based on name");

let sortedArrayByName = sorting(p1.name, arrayOfProducts);

sortedArrayByName?.forEach((prod) => {
  console.log(`${prod.name}`);
});
