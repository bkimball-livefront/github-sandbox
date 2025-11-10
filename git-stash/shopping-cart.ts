// Shopping cart functionality
class ShoppingCart {
  private items: any[];

  constructor() {
    this.items = [];
  }
  
  addItem(item: any): void {
    this.items.push(item);
  }
}