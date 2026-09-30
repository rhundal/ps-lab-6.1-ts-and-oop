import ProductClass from "./Product.js";

class DigitalProduct extends ProductClass {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
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
}

export default DigitalProduct;
