/**
 * Problem: Palindrome Number
 * Difficulty: Easy

* Question: Given an integer x, return true if x is a palindrome, and false otherwise.

  Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

  Constraints:
  -231 <= x <= 231 - 1
 */

console.clear();
const now = new Date();
console.log(`\n===== Running Solution at ${now.toLocaleString()} =====`);

const problemTitle = "Palindrome Number";
console.log(`🧩 Problem: ${problemTitle}\n`);

function func(x) {
  result = false;

  if (x >= Math.pow(-2, 31) && x <= (Math.pow(2, 31) - 1)) {
    number = x.toString()

    for (i = 0; i < number.length; i++) {
      if (number[i] == number[((number.length) - 1) - i]) {
        result = true;
      }
      else {
        result = false;
        break;
      }
    }
  }

  return result;
}

// Example run:
console.log(func(1001)); // Output: [0, 1]
