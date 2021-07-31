// javaScript 문법 살펴보기

// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');

// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
// input 타입만 다를뿐 다른 코드들은 중복되어 효율성이 좋지 않음

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점
// input, 반환값이 union Type 이기 때문에 단일 Type에서 사용할 수 있는 메소드들 사용에 제한이 있음

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// a.split(); // error - string 타입에서만 split 사용 가능 (a는 string | number 타입)
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// logText('하이'); // generic에 "하이" = string이 들어옴

// 제네릭 장점 - 사용시 타입을 정의해주기 때문에 확장성이 좋음
// const str = logText<string>('abc');
// str.split('');
// const login = logText<boolean>(true);

// logText('a')
// logText(10)

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<number> = { value: 'abc', selected: false };

// 제네릭 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// LengthType을 상속받은 타입이기 때문에 length 속성 사용 가능
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('text') // O
// logTextLength(10); // X - length가 정의되어 있지 않아 불가
// logTextLength({ leng: 10 }); // X - length가 정의되어 있지 않아 불가

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem의 property 중 한가지만 들어갈 수 있다. - 범위를 줄임 
// ('name' | 'price' | 'stock')
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
