/**
 * Filename: ComplexCode.js
 * 
 * Description: A sophisticated and complex JavaScript code demonstration.
 * This code is a fictitious implementation of a simple e-commerce website.
 * It includes multiple components such as user authentication, product listing, cart functionality,
 * checkout process, and other features commonly found in real-world websites.
 * 
 * Note: This code is for learning and demonstration purposes only.
 */

// ---------- User Authentication Module ----------

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  authenticate() {
    // Simulating a server call to authenticate the user
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.username === 'admin' && this.password === 'password') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000); // Simulating a delay for the server response
    });
  }
}

// ---------- Product Listing Module ----------

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const products = [
  new Product('Product A', 10),
  new Product('Product B', 20),
  new Product('Product C', 30),
  new Product('Product D', 40),
  new Product('Product E', 50),
  new Product('Product F', 60),
  // ... and so on
];

// ---------- Shopping Cart Module ----------

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product === product);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(product, quantity) {
    const existingItem = this.items.find(item => item.product === product);

    if (existingItem) {
      if (existingItem.quantity <= quantity) {
        const index = this.items.indexOf(existingItem);
        this.items.splice(index, 1);
      } else {
        existingItem.quantity -= quantity;
      }
    }
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
}

// ---------- Checkout Module ----------

class PaymentGateway {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  processPayment(amount) {
    // Simulating a server call to process the payment
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a success or failure response based on the provided amount
        if (amount > 0 && amount < 1000) {
          resolve('Payment processed successfully!');
        } else {
          reject('Payment failed. Please try again!');
        }
      }, 2000); // Simulating a delay for the server response
    });
  }
}

class Order {
  constructor(user, cart) {
    this.user = user;
    this.cart = cart;
  }

  checkout(paymentGateway) {
    return new Promise((resolve, reject) => {
      // Authenticate the user before proceeding
      this.user.authenticate()
        .then(authenticated => {
          if (authenticated) {
            const totalPrice = this.cart.getTotalPrice();

            // Process payment using the provided payment gateway
            paymentGateway.processPayment(totalPrice)
              .then(() => {
                resolve('Order placed successfully!');
              })
              .catch(error => {
                reject(`Error processing payment: ${error}`);
              });
          } else {
            reject('User authentication failed!');
          }
        })
        .catch(error => {
          reject(`Error authenticating user: ${error}`);
        });
    });
  }
}

// ---------- Usage Example ----------

const user = new User('admin', 'password');
const cart = new Cart();
const paymentGateway = new PaymentGateway('ABCDE12345');
const order = new Order(user, cart);

cart.addItem(products[0], 2);
cart.addItem(products[1], 3);
cart.addItem(products[2], 1);

order.checkout(paymentGateway)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

// This is just a small part of the fictitious e-commerce website code.
// You can imagine many other functionalities and components to make it more complex and realistic.