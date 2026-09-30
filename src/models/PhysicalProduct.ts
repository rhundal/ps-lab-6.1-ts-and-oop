import ProductClass from "./Product.js";

class PhysicalProduct extends ProductClass {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  override getPriceWithTax(): number {
    if (!this.price) {
      return 0.0;
    }

    let priceAfterTenPerTax: number = this.price * 0.1;
    priceAfterTenPerTax += this.price;

    return priceAfterTenPerTax;
  }

  getFormattedWeight() {
    return `${this.name} weights:${this.weight} kg`;
  }
}

export default PhysicalProduct;
