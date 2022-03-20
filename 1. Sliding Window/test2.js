// smallest subarray containing all the elements at least one time 

function solution(A) {
  let distinctMap = {};
  for (let i = 0; i < A.length; i++) {
    if (!(A[i] in distinctMap)) {
      distinctMap[A[i]] = 1;
    } else {
      distinctMap[A[i]] += 1;
    }
  }
  let start = 0;
  let end = A.length - 1;
  let breakFromStartLoop = false;
  let breakFromEndLoop = 0;
  for (let i = 0; i < A.length; i++) {
    if (distinctMap[A[start]] > 1) {
      distinctMap[A[start]] -= 1;
      start++;
    } else {
      breakFromStartLoop = true;
    }
    if (distinctMap[A[end]] > 1) {
      distinctMap[A[end]] -= 1;
      end--;
    } else {
      breakFromEndLoop = true;
    }
    if (breakFromStartLoop && breakFromEndLoop) {
      break;
    }
  }

  console.log(distinctMap)

  return (end - start + 1);
}

const a = [2, 1, 1, 3, 2, 1, 1, 3];