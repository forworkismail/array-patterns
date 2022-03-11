const maximumSumSubarrayOfSizeK = (arr, k) => {

  if (arr.length < k) return null;

  let maxSum = 0;

  // Compute size of first subarray of size k starting from index 0
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  // Start from index of k and keep sliding the window by size k
  // removing first element of previous window and adding the last element of
  // current window
  let tempSum = maxSum;
  for (let j = k; j < arr.length; j++) {
    tempSum += arr[j] - arr[j - k];
    maxSum = Math.max(maxSum, tempSum);
  }

  return tempSum;
}