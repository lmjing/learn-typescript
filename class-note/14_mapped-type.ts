// 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법
// Utility Type이 mapped type을 활용하여 잘 정의되어 있음

/*
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
 */
type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}

// for in 반복문 코드
// var arr = ['a','b','c'];
// for (var key in arr) {
//   console.log(arr[key]);
// }