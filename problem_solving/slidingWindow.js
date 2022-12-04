/*
슬라이딩 윈도우 방법
기준점 간 이동 배열 패턴
긴 문자열, 배열안에서 하위 배열을 만들어 찾아야 할때 사용
중첩 반복을 도는게 아닌 기존 하위 배열에서
양끝의 인덱스를 더하고 빼줘서 새로운 하위 배열로 사용
*/

// O(n^2)
function maxSubarraySum2(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// O(n) 슬라이딩 윈도우 방법
// 중첩을 도는게 아닌 인덱스 양끝을 더하고 빼서 max값을 찾음
function maxSubarraySum(arr, num) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = num; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - num];
    if (sum > max) max = sum;
  }
  console.log(max);
}

maxSubarraySum([8, 6, 9, 4, 1, 8, 5, 9, 3], 3);
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
