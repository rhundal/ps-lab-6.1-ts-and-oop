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

  bulkDiscounts(criteria: number | string) {
    let bulkDiscount = 0.0;

    if (typeof criteria === "number") {
      // quantity

      bulkDiscount = this.getPriceWithTax() - this.getPriceWithTax() / criteria; // get bulk discount based on number of units
    } else {
      // size
      let sizeInNum = Number(criteria);
      bulkDiscount =
        this.getPriceWithTax() - this.getPriceWithTax() / sizeInNum; // get bulk discount based on file size
    }

    return bulkDiscount;
  }
}

export default PhysicalProduct;
