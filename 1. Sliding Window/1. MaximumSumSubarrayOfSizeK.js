const solution = (A, K) => {
  if (K > 0 && K <= A.length) {
    let currentSum = 0;
    let maxSumSeen = -Infinity;

    for (let i = 0; i < A.length; i++) {
      currentSum += A[i];
      if (i >= (K - 1)) {
        maxSumSeen = Math.max(maxSumSeen, currentSum);
        currentSum -= A[i - (K - 1)];
      }
    }

    return maxSumSeen;
  }

  return null;
}

const arr1 = [1, 3, 9, 8, 11, 3, 5, 7];
const size = 3;