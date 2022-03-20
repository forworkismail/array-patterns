function firstNegativeNumberInEveryWindowOfSizeK(arr, k, n) {
  let firstNegativeIndex = 0;
  let firstNegativeElement;


  for (let i = k - 1; i < n; i++) {

      // skip out of window and positive elements
      while ((firstNegativeIndex < i) && (firstNegativeIndex <= i - k ||
              arr[firstNegativeIndex] > 0)) {
          firstNegativeIndex++;
      }

      // check if a negative element is found, otherwise use 0
      if (arr[firstNegativeIndex] < 0) {
          firstNegativeElement = arr[firstNegativeIndex];
      }
      else {
          firstNegativeElement = 0;
      }
      console.log(firstNegativeElement)
  }

}

let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let n = arr.length;
let k = 3;
firstNegativeNumberInEveryWindowOfSizeK(arr, k, n);
