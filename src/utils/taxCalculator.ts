import Product from "../models/Product.js";

export function calculateTax(product: Product): number {
  let calculatedTaxVal = 0.0;
  calculatedTaxVal = product.getPriceWithTax();
  return calculatedTaxVal;
}
