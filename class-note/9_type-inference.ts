// 타입 추론이란 타입스크립트가 코드를 해석해 나가는 동작

// 타입 추론 기본 1
var a = 'abc'; // 타입을 따로 지정하지 않아도 string 타입 추론 가능

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

10 + '10'; // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
// 지정된 제네릭(K)을 Dropdown에 전달
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
  // value: K; - extends로 가짐
  // title: string;  - extends로 가짐
}

var detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 1,
  tag: 1,
  // value: 'a', - number 타입만 가능
  // tag: 'a', - number 타입만 가능
};

// Best Common Type - 가장 적절한 타입 (Best Common Type 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정)
var arr = [1, 2, true, true, 'a'];

let arr1 = [0, 1, null]; // number[]으로 추론
let arr2 = [0, 1, 'a', 'b', true] // 복합 - union Type ('string' | 'number' | 'boolean')