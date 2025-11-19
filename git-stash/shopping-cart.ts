// Shopping cart functionality
interface CartItem {
  id: string;
  name: string;
  price: number;
}

class ShoppingCart {
  private items: CartItem[];

  constructor() {
    this.items = [];
  }
  
  addItem(item: CartItem): void {
    this.items.push(item);
  }
}