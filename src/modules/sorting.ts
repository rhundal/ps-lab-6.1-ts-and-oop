import Product from "../models/Product.js";

export default function sorting<T extends Product>(
  sortBy: number | string,
  productsToSort: T[],
): Product[] | undefined {
  // this module/function sorts products using union and returns an array of sroted products

  if (typeof sortBy === "number") {
    // sort by price

    return productsToSort.sort((a: Product, b: Product) => {
      return a.price - b.price;
    });
    return;
  }

  return productsToSort.sort((a: Product, b: Product) => {
    return a.name.localeCompare(b.name);
  });
}
