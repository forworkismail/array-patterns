// Given an array, find the average of all contiguous sub arrays of size ‘K’ in it.
// https://leetcode.com/problems/maximum-average-subarray-i/
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

//     n == nums.length
//     1 <= k <= n <= 105
//     -104 <= nums[i] <= 104

// Time complexity O(N) solution 
const findMaxAverage = (nums, k) => {
  let maxAverage = -Infinity;
  let windowStart = 0;
  let windowEnd = k;

  for (let i = 0; i < nums.length - k + 1; i++) {
    sum = 0;
    for (let j = windowStart; j < windowEnd; j++) {
      sum += nums[j];
    }
    if ((sum / k) > maxAverage) {
      maxAverage = sum / k;
    }
    windowStart++;
    windowEnd++;
  }

  return maxAverage;
}

const nums = [1, 12, -5, -6, 50, 3];
const nums1 = [1];
const nums2 = [];
const nums3 = [-10, -20];
console.log(findMaxAverage(nums, 4))

// Input: nums = [1,12,-5,-6,50,3], k = 4
