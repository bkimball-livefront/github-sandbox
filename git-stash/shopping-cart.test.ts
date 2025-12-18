// Test file for ShoppingCart functionality
import { ShoppingCart, CartItem } from './shopping-cart';

// Simple test runner
function testAddItem() {
  console.log('🧪 Running test: addItem should add an item to the cart');
  
  const cart = new ShoppingCart();
  const item: CartItem = {
    id: '1',
    name: 'Test Item',
    price: 9.99
  };
  
  cart.addItem(item);
  const items = cart.getItems();
  
  if (items.length !== 1) {
    console.error('❌ FAILED: Expected 1 item in cart, got', items.length);
    process.exit(1);
  }
  
  if (items[0].id !== '1' || items[0].name !== 'Test Item' || items[0].price !== 9.99) {
    console.error('❌ FAILED: Item properties do not match');
    process.exit(1);
  }
  
  console.log('✅ PASSED: Item was added correctly to the cart');
}

function testAddMultipleItems() {
  console.log('🧪 Running test: addItem should add multiple items to the cart');
  
  const cart = new ShoppingCart();
  const item1: CartItem = { id: '1', name: 'Item 1', price: 10 };
  const item2: CartItem = { id: '2', name: 'Item 2', price: 20 };
  
  cart.addItem(item1);
  cart.addItem(item2);
  const items = cart.getItems();
  
  if (items.length !== 2) {
    console.error('❌ FAILED: Expected 2 items in cart, got', items.length);
    process.exit(1);
  }
  
  console.log('✅ PASSED: Multiple items were added correctly');
}

function testCartStartsEmpty() {
  console.log('🧪 Running test: cart should start with 5 items (INTENTIONALLY FAILING)');
  
  const cart = new ShoppingCart();
  const items = cart.getItems();
  
  // This will intentionally fail - a new cart should have 0 items, not 5
  if (items.length !== 5) {
    console.error('❌ FAILED: Expected 5 items in new cart, got', items.length);
    process.exit(1);
  }
  
  console.log('✅ PASSED: Cart starts with 5 items');
}

// Run all tests
console.log('\n🚀 Starting ShoppingCart tests...\n');
testAddItem();
testAddMultipleItems();
testCartStartsEmpty();
console.log('\n✨ All tests passed!\n');
