// get result based on groups
function solution(T, R) {
  if (T.length == R.length) {
    let map = {};
    numOfGroups = 0;

    for (let i = 0; i < T.length; i++) {
      let number = T[i].match(/(\d+)/);
      if (number[0] in map) {
        map[number[0]] = (map[number[0]] === true && R[i] === 'OK') ? true : false;
      } else {
        map[number[0]] = R[i] === 'OK' ? true : false;
        numOfGroups++;
      }
    }

    let sum = 0;

    for (key in map) {
      if (map[key] == true) {
        sum += 1;
      }
    }
    return Math.floor(sum * 100 / numOfGroups);
  }

  return 0;
}

const a = solution(["codility1", "codility3", "codility2", "codility4b", "codility4a"], ["Wrong answer", "OK", "OK", "Runtime error", "OK"])
const a = solution(["test1a", "test2", "test", "codility4b", "codility4a"], ["Wrong answer", "OK", "OK", "Runtime error", "OK"])


