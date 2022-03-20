function solution (cards) {
  let flatArray = [].concat(...cards);
  let array = occurredOnce(flatArray, flatArray.length);
  let sortedArray = array.sort((a, b) => {
    return a - b;
  })
  return sortedArray[sortedArray.length - 1];
}

console.log(solution([[1, 3, 4], [11, 2, 3]]))

function occurredOnce(arr, n)
{
    let mp = new Map();
    let arr1 = [];
     
    // Store all the elements in the map
    // with their occurrence
    for(let i = 0; i < n; i++)
    {
        if (mp.has(arr[i]))
            mp.set(arr[i], 1 + mp.get(arr[i]));
        else
            mp.set(arr[i], 1);
    }
 
    // Traverse the map and print all the
    // elements with occurrence 1
    for(let [key, value] of mp.entries())
    {
        if (value == 1)
            arr1.push(key);
    }
    return arr1;
}

function findDifference(a, b) {
  diff = b;
  for(let i = 0; i < a.length; i++) {
    const char = a[i];
    diff = diff.replace((new RegExp(`${char}`)), '');
  }

  return diff;
}

let astring = "abcd";
let bstring = "bczda";

console.log(findDifference(astring, bstring));