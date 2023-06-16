// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}
// console.log(lengthOfString("asjdhsakjfhdskjfh"));

function sumOfArray(arr, sum = 0, index = 0) {
  // This function returns the sum of all of the numbers in a given array.
  //base case
  if (index >= arr.length) return sum;

  //action
  sum += arr[index];

  //recursive
  return sumOfArray(arr, sum, ++index);
}
// console.log(sumOfArray([12, 53, 36, 78]));

function findMax(arr, index = 0, max = arr[index]) {
  // This function returns the largest number in a given array.
  //base case
  if (index >= arr.length) return max;
  max = arr[index] > max ? arr[index] : max;
  return findMax(arr, ++index, max);
}
// console.log(findMax([22, -1, 35, 63, 78]));

function factorial(num, total = 1) {
  // This function returns the factorial of a given number.

  //base case
  if (num === 0) return total;
  total *= num;
  // recursive step
  return factorial(num - 1, total);
}
// console.log(factorial(7));

function fibonacci(arr = [1, 1], x = 0, num) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1

  /*
  create fib sequence, store them in the array
  when array length is equal to num (input), return last element? 
  */

  //base case
  if (num <= arr.length) return arr[num - 1];

  //action
  const fib = [arr[x] + arr[x + 1]];

  //recursive
  return fibonacci(arr + fib, ++x, num);
}
console.log(fibonacci(1));

function coinFlips() {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};