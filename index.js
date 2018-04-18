var cart = [];


function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const itemNameIndiv = item;
 const itemPriceIndiv = getRandomInt();
 const newItem = Object.assign({itemName: itemNameIndiv, itemPrice: itemPriceIndiv});
 cart.push(newItem);
 return `${itemNameIndiv} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
