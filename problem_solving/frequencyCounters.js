/*
- Frequency Counters
js 객체를 사용해서 다양한 값과 빈도를 수집하는 모습

여러데이터와 입력값이 서로 비슷한 값으로 구성되어있는지,
서로 간의 아나그램인지,
값이 다른 값에 포함되는지 여부를 비교,
데이터를 입력값이나 두 개 이상의 빈도 혹은 특정하게 발생하는 빈도와 비교 할때 유용

중첩루프와 관련 있거나 n의 제곱 시간을 사용하는 더 쉬운 해결책

=> 루프를 통해 객체를 만들어 사용하고,
중첩되지 않은 다른 루프를 통해 비교하여 사용함(중첩루프가 아니므로 O(n)의 복잡도를 가짐)


1번 배열의 제곱 값이 2배열에 있는지 확인
올바른 값과 빈도도 같아야 함
순서는 상관 없음
*/

// 중첩 루프여서 O(n^2)의 복잡도
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    // indexOf 자체가 반복문을 돌면서 인덱스를 파악하므로 사실상 중첩 루프가 되어 O(n^2)
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  console.log(true);
  return true;
}

// 반복문이 3개가 들어가 3n의 연산이 필요하지만, n^2 보다 나은 방법
// O(n)의 복잡도
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let val of arr1) {
    // console.log(val);
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  console.log(frequency1);
  for (let key in frequency1) {
    // console.log(key);
    if (!(key ** 2 in frequency2)) {
      return false;
    }
    if (frequency2[key ** 2] !== frequency1[key]) {
      return false;
    }
  }
  console.log(true);
  return true;
}

same2([1, 2, 3, 2], [9, 1, 4, 4]);
