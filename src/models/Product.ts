class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `${this.name} with id:${this.sku} costs:${this.price}`;
  }

  getPriceWithTax(): number {
    if (!this.price) {
      return 0.0;
    }

    return this.price;
  }
}

export default Product;
