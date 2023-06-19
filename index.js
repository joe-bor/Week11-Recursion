// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.slice(1);
  // console.log(restOfString);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}
// console.log(lengthOfString("123"));

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

function fibonacci(n) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  let fibArr = [1, 1];
  let x = 0;

  function fibHelper(arr, n) {
    if (n <= arr.length) return arr[n - 1];
    let fib = fibArr[x] + fibArr[x + 1];
    fibArr.push(fib);
    x++;
    return fibHelper(fibArr, n);
  }

  return fibHelper(fibArr, n);
}

// console.log(fibonacci(8));

function coinFlips(numFlips) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"

  let results = [];

  function coinFlipsHelper(numFlips, combination) {
    // base case
    // if out of flips,
    // push gathered combination to results
    // then return results
    // each 'branch' would return it's own
    if (numFlips === 0) {
      results.push(combination);
      return results;
    }

    // recursive call
    // n - 1 every time we flip to get to base case
    // add 'H' to one branch, and  'T' to another
    //TODO: How to not hard code 'H' and 'T' ? pass in an array of possible results and loop thru it?
    coinFlipsHelper(numFlips - 1, combination + "T");
    coinFlipsHelper(numFlips - 1, combination + "H");
  }

  coinFlipsHelper(numFlips, "");
  return results;
}

// console.log(coinFlips(2));

//TODO: Refactor logic, i just made coinflips() with 'dynamic' choices
function letterCombinations(arr) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

  let results = [];

  function letterCombinationsHelper(arr, combination, index) {
    // base case
    if (index === arr.length) {
      results.push(combination);
      return results;
    }

    //recursive case
    //call the function n-times after appending each choice onto current combination
    // where n is equal to number of choices, aka arr.length
    for (let i = 0; i < arr.length; i++) {
      combination += arr[i];
      console.log(index);
      letterCombinationsHelper(arr, combination, index + 1);
    }
  }

  letterCombinationsHelper(arr, "", 0);
  return results;
}

console.log(letterCombinations(["a", "b"]));

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
