/* filename: complex_code.js */

// This code demonstrates a complex algorithm for finding prime numbers up to a given limit
// It utilizes the Sieve of Eratosthenes algorithm to mark non-prime numbers

function findPrimes(limit) {
  let primes = [];
  let sieve = new Array(limit + 1).fill(true);

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i ** 2; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(findPrimes(1000));
console.log(findPrimes(10000));
console.log(findPrimes(100000));
console.log(findPrimes(1000000));

// This code includes the Mergesort algorithm for sorting an array of numbers

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

const arr = [5, 2, 8, 12, 3, 1, 7];
console.log(mergeSort(arr));

// This code implements a simple nested loop algorithm to find pairs in an array that sum up to a given target

function findSumPairs(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

const numbers = [2, 4, 6, 8, 10];
const targetSum = 12;
console.log(findSumPairs(numbers, targetSum));