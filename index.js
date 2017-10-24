var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  var itemPrice = Math.floor(Math.random() * (max - min + 1)) + min;
  cart.push({[itemName]: itemPrice});
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var str = "In your cart, you have ";
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(str + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ".");
  } else if (cart.length === 2) {
    console.log(str + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + " and " + Object.keys(cart[1])[0] + " at $" + cart[1][Object.keys(cart[1])[0]] + ".");
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length -1){
        str += "and " + Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ".";
      } else {
      str += Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ", ";
      }
    }
    console.log(str);
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      sum += cart[i][key];
    }
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]){
      if (key === item) {
        cart.slice(i, (i+1));
      } else {
        return "That item is not in your cart.";
      }
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
