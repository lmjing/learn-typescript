function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T ): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
// function getNumberAndArray<T>(value: T): T {
//   value.length; // X
//   return value;
// }

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O - T가 배열의 형태로 들어와 length를 사용할 수 있는 것을 알 수 있음
  return value;
}
// getNumberAndArray('test') // 배열의 형태로만 넘겨줄 수 있음.
getNumberAndArray(['test', 'test2'])

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  return option;
  // if (option === 'name' || option === 'address') {
  //   console.log('option type is string');
  //   return option;
  // }
  // if (option === 'price' || option === 'stock') {
  //   console.log('option type is number');
  //   return option;
  // }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name
