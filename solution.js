/**
 * Problem: Two Sum
 * Difficulty: Easy
 */
console.clear();
const now = new Date();
console.log(`\n===== Running Solution at ${now.toLocaleString()} =====`);

const problemTitle = "Two Sum"; // e.g., "Two Sum", "Reverse Linked List", etc.
console.log(`🧩 Problem: ${problemTitle}\n`);

function func(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Example run:
console.log(func([2, 7, 11, 15], 9)); // Output: [0, 1]
