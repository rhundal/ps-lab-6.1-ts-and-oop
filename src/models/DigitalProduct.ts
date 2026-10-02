import ProductClass from "./Product.js";

interface DiscountableProduct {
  applyDiscount(discount: number): number;
}
class DigitalProduct extends ProductClass implements DiscountableProduct {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    // using constructor to make an instance of product
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  override getPriceWithTax(): number {
    if (!this.price) {
      return 0.0;
    }

    return this.price;
  }

  formattedSizeGB(): string {
    return `${this.name} has size of ${this.fileSize} mb`;
  }

  applyDiscount(discountToApply: number): number {
    let priceAfterAppliedDiscount =
      this.getPriceWithTax() - this.getPriceWithTax() / discountToApply;

    return priceAfterAppliedDiscount;
  }
}

export default DigitalProduct;
