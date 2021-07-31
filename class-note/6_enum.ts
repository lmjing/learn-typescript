// 숫자형 이넘: 선언할 때 초기 값을 주면 초기 값부터 차례로 1씩 증가
// 선언 안하면 0부터 시작함
enum NumEnum {
  // Zero,
  One = 1,
  Two
}

console.log(NumEnum.One) // 1

// 문자형 이넘 - 모든 값에 대한 정의가 필요함
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}
askQuestion(Answer.Yes);
askQuestion('Yes');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

// 복합 이넘도 가능 - 단, 웬만하면 같은 타입으로만 선언할 것
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}