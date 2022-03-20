// count of all subarrays with average equal to S
function solution(A, S) {
  if (A.length >= 0 && A.length <= 100000) {
    let result = 0;
    let currentSum = 0;
    let map = {};

    for (let i = 0; i < A.length; i++) {

      currentSum += (A[i] - S);

      if (currentSum == 0) {
        result++;
      }

      if (currentSum in map) {
        result += map[currentSum];
      }

      if (currentSum in map) {
        map[currentSum] = map[currentSum] + 1;
      }
      else {
        map[currentSum] = 1;
      }

    }
    if (result > 1000000000) {
      return 1000000000;
    }
    return result;
  }
  return 0;
}