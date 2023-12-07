/* 
 * Filename: sophisticated_example.js
 * Description: This code is a sophisticated and elaborate example that showcases various concepts in JavaScript.
 */

// Class representing a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentSpeed = 0;
    this.isEngineStarted = false;
  }

  startEngine() {
    this.isEngineStarted = true;
    console.log("Engine started!");
  }

  stopEngine() {
    this.isEngineStarted = false;
    console.log("Engine stopped!");
  }

  accelerate(speed) {
    if (this.isEngineStarted) {
      this.currentSpeed += speed;
      console.log(`Accelerated to ${this.currentSpeed} km/h`);
    } else {
      console.log("Engine not started!");
    }
  }

  brake() {
    if (this.currentSpeed > 0) {
      this.currentSpeed -= 10;
      console.log(`Brake applied. Current speed: ${this.currentSpeed} km/h`);
    } else {
      console.log("Car already stopped!");
    }
  }
}

// Create instances of Car class
const bmw = new Car("BMW", "X5", 2022);
const audi = new Car("Audi", "A4", 2021);

// Invoke methods on Car instances
bmw.startEngine();
audi.startEngine();
bmw.accelerate(60);
audi.accelerate(80);
bmw.brake();
audi.brake();
bmw.stopEngine();
audi.stopEngine();

// Utility function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`Factorial of 5: ${factorial(5)}`);

// Higher-order function to calculate the sum of squares
function sumOfSquares(numbers) {
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(`Sum of squares: ${sumOfSquares(numbers)}`);

// Custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Async function that throws a custom error
async function throwError() {
  throw new CustomError("This is a custom error");
}

// Handling the custom error using try-catch
async function handleCustomError() {
  try {
    await throwError();
  } catch (error) {
    console.log(error);
  }
}

handleCustomError();