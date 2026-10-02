class Product {
  public name: string;
  private _sku: string;
  protected _price: number;

  constructor(sku: string, name: string, price: number) {
    this._sku = sku;
    this.name = name;
    this._price = price;
  }

  displayDetails(): string {
    return `${this.name} with id:${this._sku} costs:${this._price}`;
  }

  getPriceWithTax(): number {
    if (!this._price) {
      return 0.0;
    }

    return this._price;
  }

  get price(): number {
    return this._price;
  }

  get sku(): string {
    return this._sku;
  }
}

export default Product;
