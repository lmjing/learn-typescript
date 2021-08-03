// 타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미합니다.
// 자바스크립트는 객체 리터럴이나 익명 함수 등을 사용하기 때문에 명시적으로 타입을 지정하는 것보다는 코드의 구조 관점에서 타입을 지정하는 것이 더 잘 어울립니다.

// 인터페이스, 클래스 모두 내부 property 기준으로 비교
// 단, 클래스는 스태틱 멤버(static member)와 생성자(constructor)를 제외하고 속성만 비교
interface Developer1 {
  name: string;
  skill: string;
}

interface Engineer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
//   // skill: string;
// }
class Human {
  name: string;
}

// 구조적 타이핑(structural typing) - 코드 구조 관점에서 타입이 서로 호환되는지의 여부를 판단하는 것
let developer: Developer1;
let engineer: Engineer;
let person: Human;
developer = engineer; // 내부 property가 동일하기 때문에 타입 호환이 가능
developer = new Human(); // Developer에만 있는 skill property가 human에는 없기 때문에 호환 불가능
person = developer; // person에 유일하게 선언된 name이 Developer에도 동일하게 정의되어 있어 호환 가능

// Soundness: 타입스크립트가 컴파일 시점에 타입을 추론할 수 없는 특정 타입에 대해서 일단 안전하다고 보는 특성

// 함수 - 매개변수와 리턴 타입에 대한 호환
var add = function(a: number) {
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}
sum = add;
// add = sum;

// 제네릭: 제네릭 타입 간의 호환 여부를 판단할 때 타입 인자 <T>가 속성에 할당 되었는지를 기준으로 합니다

// 제네릭은 선언되었지만, 내부 속성값에 대한 정의가 되어 있지 않아 호환 가능

interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;

// Enum interger 타입과 호환 가능하나, enum 타입끼리는 호환 불가능
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status1 = Status.Ready;
status1 = Color.Green;  // Error
status1 = 1;