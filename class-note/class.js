function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

// Java 등의 객체지향에 더 익숙한 사람들을 위해 새로 생성된 개념으로
// babel등으로 돌리면 실제 위와 같이 기존 JS 기능을 사용해 개발된 것을 알 수 있다.
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho);