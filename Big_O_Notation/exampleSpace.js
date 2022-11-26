// 공간 복잡도 예시
// 숫자는 불변의 공간으로 어떤 크기가 오더라도 변수 할당 시 상수시간이 적용됨
// O(1)의 공간 차지
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// n이 증가하더라도 숫자이기 때문에 상수 시간이 적용
// O(1)공간 차지
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// 배열의 경우 인덱스로 접근 할때 선형 시간이 적용됨
// O(n) 공간차지
// 문자, 객체를 키로 접근 도 선형 시간이 적용됨
function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
