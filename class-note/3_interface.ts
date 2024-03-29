interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
// User의 모든 property가 정의되어야 함
const capt = {
  name: '캡틴',
  age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string; // 모든 인덱스의 값은 string만 허용한다.
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
  // str: 'test' // String 지정 불가; RegExp만 가능
}
// obj['cssFile'] = 'a'

Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

// extends 를 사용해 인터페이스 확장 - 기존 property 상속 받음
interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴'
}