var cart = [];


function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}

function getCart(item) {
  keyVar = item;
  price = getRandomInt();
  console.log(keyVar, price)
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
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
