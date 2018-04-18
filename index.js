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
  let sampleString = "";
  sampleString += "In your cart, you have ";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    for (let i = 0; i < cart.length; i++) {
      sampleString += cart[i].itemName;
      sampleString += " at $";
      sampleString += cart[i].itemPrice;
      sampleString += ".";
    }
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (parseInt(i + 1) === cart.length) {
        sampleString += "and " + cart[i].itemName;
        sampleString += " at $";
        sampleString += cart[i].itemPrice;
        sampleString += ".";
      } else {
        sampleString += cart[i].itemName;
        sampleString += " at $";
        sampleString += cart[i].itemPrice;
        sampleString += ", ";
      }
    }
  }
  return sampleString;
}

function total() {
  // write your code here
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let message = "";
  for (let i = 0; i < cart.length; i++) {
    let currentItem = cart[i];
    if (currentItem === item) {
      let removed = cart.splice(i, 1);
      return cart;
    } else {
      message = "That item is not in your cart.";
    }
  }
  return message;
}

function placeOrder(cardNumber) {
  // write your code here
}
