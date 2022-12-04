function countUniqueValues2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(i, i + 1);
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  console.log(count);
  return count;
}

function countUniqueValues3(arr) {
  let count = 0;
  let L = 0;
  let R = 1;
  while (L <= arr.length && R <= arr.length) {
    console.log(L, R);
    if (arr[L] !== arr[R]) count++;

    L < R ? (L += 2) : (R += 2);
  }
  console.log(count);
  return count;
}

// 솔루션 방법
function countUniqueValues(arr) {
  if (arr.length === 0) return console.log(0);
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}

// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

function areThereDuplicates() {
  let arr = [...arguments];
  arr = arr.sort();
  // console.log(arr);
  let L = 0;
  let R = 1;

  while (L < arr.length && R < arr.length) {
    if (arr[L] === arr[R]) {
      return console.log(true);
    }
    arr[L] < arr[R] ? (L += 2) : (R += 2);
  }
  return console.log(false);
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "c"); // true
