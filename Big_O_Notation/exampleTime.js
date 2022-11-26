// n이 5보다 크면 n만큼 콘솔로그를 출력, 5보다 작으면 5까지만 출력
// n이 5보다 클 경우가 많기 때문에 O(n)로 단순화
function logLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// n이 5보다 작으면 n만큼 콘솔로그를 출력, 5보다 크면 5까지만 출력
// n이 5보다 작을 경우가 많기 때문에 O(1)로 단순화
function logMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
