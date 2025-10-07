/**
 * Problem: Two Sum
 * Difficulty: Easy

* Question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Constraints:
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
 */

console.clear();
const now = new Date();
console.log(`\n===== Running Solution at ${now.toLocaleString()} =====`);

const problemTitle = "Two Sum"; // e.g., "Two Sum", "Reverse Linked List", etc.
console.log(`🧩 Problem: ${problemTitle}\n`);

function func(nums, target) {
  result = [];

  if (nums.length >= 2 && nums.length <= Math.pow(10, 4)) {
    for (i = 0; i < nums.length; i++) {
      if ((nums[i] >= Math.pow(-10, 9) && nums[i] <= Math.pow(10, 9)) && (target >= Math.pow(-10, 9) && target <= Math.pow(10, 9))) {
        for (j = 1; j < nums.length; j++) {
          if (nums[i] + nums[j] == target && i != j) {
            if (!result.includes(i))
              result.push(i);
            if (!result.includes(j))
              result.push(j);
          }

        }

      }
    }
  }
  return result;
}

// Example run:
console.log(func([2, 7, 11, 15], 9)); // Output: [0, 1]
