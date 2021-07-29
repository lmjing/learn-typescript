// 가장 큰 차이는 확장 가능 / 불가능의 차이
// 가능한한 확장이 가능한 interface를 쓸 것

// interface Type 선언시 프리뷰에 세부 property는 표시되지 않는다. 단, 참조가 가능하다.
// 새로운 Type 값을 생성
// interface Person {
//   name: string;
//   age: number;  
// }

// 복잡한 타입을 참조할 수 있는 별칭 - 신규 생성되지 않고 쉽게 참고할 수 있게 이름만 부여
// 따라서, 프리뷰에 모든 타입이 표시됨
type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}