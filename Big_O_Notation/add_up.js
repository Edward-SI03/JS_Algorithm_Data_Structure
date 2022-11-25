// n의 숫자 만큼 더하는 fn(n)

// 오래 걸리는 방법(시간 : n만큼 비례, 연산 : 5n+2, BigO : O(n))
function addUpToFirst(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// performance.now() : 브라우저가 이 문서를 만든 시간(창이 열려있는 시간)
const t1 = performance.now();
addUpToFirst(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// 빠른 방법(시간 : n과 무관하게 빠름, 연산 : 3 상수, BigO : O(1))
function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

const time1 = performance.now();
addUpToSecond(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
