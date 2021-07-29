// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

// 인터섹션(교차) 타입
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 코드는 Developer | Person 중 어떤 타입이 들어올지 모르므로
// interface Union Type의 경우 공통된 속성에 대해서만 접근이 가능함
function askSomeoneByUnion(someone: Developer | Person) {
  someone.name;
  // someone.age;
  // someone.skill;
}

// intersection Type
// Developer와 Person의 property들이 모두 정의된 Type이 들어올 수 있다.
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}
// 즉, Developer 나 Person만 들어오는 경우 에러가 발생됨
// askSomeone({name: '개발자', age: 28});
askSomeone({name: '개발자', age: 28, skill: '웹 개발'});