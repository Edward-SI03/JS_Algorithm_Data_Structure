/*
해결을 위한 계획 수립(문제에 접근하는 방법)

1 문제 이해
2 구체적인 예시 알아보기
3 문제 세분화
4 문제 단순화 및 해결
5 문제 복습 및 재구성

- 문제
문자열을 받아서 각각의 문자들의 갯수를 객체로 반환
문자열는 영문 소문자, 숫자에 대한 갯수를 카운트
*/

function charCount(str) {
  // 문자열을 돌면서 각각의 문자에 접근
  // 문자열을 소문자로 변환
  // 각각의 문자는 영문소문자, 숫자이면서 객체안에 있으면 +1
  // 각각의 문자는 영문소문자, 숫자이면서 객체안에 없으면 키 값을 추가하고 1
  // 해당 객체를 반환
  let result = {};
  const regex = /[a-z0-9]/;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (regex.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  console.log(result);
  return result;
}

charCount("Hello 12  23 hi!");

// 위 함수를 좀더 이쁘게 리팩토링
function charCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  console.log(result);
  return result;
}
