/*
- MultiplePointer

인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라
중간지점에서부터 시작지점이나 끝지점이나 양쪽 지점을 향해 이동시키는 것

즉, 배열이나 문자열과 같은 일종의 선형 구조나, 이중 연결리스트, 단일 연결리스트를 만드는것
한쌍의 값이나 조건을 충족시키는 무언가를 찾는 개념

중첩 루프를 돌면서 n인덱스와 n+1 인덱스를 도는게 아닌
단일 루프로 양끝 인덱스에서 가운데 지점으로 수렴하는 모습

오른차순으로 정렬된 배열에서
2개의 요소를 더하여 0이 되는 요소 두개를 출력

*/

// 중첩 루프를 사용하여 O(n^2)의 복잡도
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j]);
        return [arr[i], arr[j]];
      }
    }
  }
}

/* 
단일 루프로 인덱스 처음과 끝을 비교함
합이 0보다 크면 끝에서 -1 인덱스로 다시 비교, 
합이 0보다 작으면 시작에서 +1 인덱스로 다시비교
합이 0일때 인덱스를 통해 요소를 출력
O(n)의 복잡도를 가짐
*/
function sumZero2(arr) {
  let left = 0;
  let rigth = arr.length - 1;

  while (left < rigth) {
    let sum = arr[left] + arr[rigth];
    if (sum === 0) {
      console.log([arr[left], arr[rigth]]);
      return [arr[left], arr[rigth]];
    } else if (sum > 0) {
      rigth--;
    } else {
      left++;
    }
  }
}

sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]);
