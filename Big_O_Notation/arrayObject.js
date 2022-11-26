/*
- Array
삽입 : 상황에 따라 다름
삭제 : 상황에 따라 다름
끝에 삽입, 삭제 : O(1)
시작, 중간에 삽입, 삭제 : O(n) 
탐색 : O(n)
접근 : O(1)

array method
push : O(1)
pop : O(1)
shift : O(n) 시작에 추가(추가하면 인덱스를 다 변경해야하기 때문에 선형시간)
unshift : O(n)
concat : O(n) 두 배열을 합침
slice : O(n) 기존 배열안에 요소를 새로운 배열로 반환
splice : O(n) 기존 배열안에 요소를 삽입, 삭제, 교체
sort : O(n * logn)
forEach, map, filter, reduce  : O(n)


- Object
삽입 : O(1)
삭제 : O(1)
탐색 : O(n)
접근 : O(1)

object method
object.keys : O(n) 키값들을 배열로 만들어줌
object.values : O(n) 벨류값들을 배열로 만들어줌
object.entries : O(n) 키값, 벨류값들을 배열로 만들어줌
hasOwnProperty : O(1) 객체 안에 키값의 유무를 알려줌(바로 접근)
*/
