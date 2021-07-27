// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
// - 파라미터를 제한함
//  . 무조건 정해진 개수만큼 매개변수를 전달해야 함 (undefined, null 값이라도)
//  . JS의 유연함(추가 매개변수 전달 가능, 누락 가능 등이 불가함)
function sum(a: number, b: number): number {
  return a + b;
}
sum(10);

function noReturn(): void {
  console.log('함수의 반환 값에 타입을 정하지 않을 때는 void라도 사용')
}

// 함수의 옵셔널 파라미터(?)
// - ?가 붙은 매개변수는 선택적으로 전달할 수 있다. (누락되어도 상관없음)
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');

// 파라미터 초기화
// - JS와 동일하게 초기화가 가능하다.
function init(a = 'same') {

}