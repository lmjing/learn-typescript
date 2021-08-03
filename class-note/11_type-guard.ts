interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 타입 단언이 필요한 이유(일반  사용시)
function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce(); // union Type이다. (Developer | Person)
console.log(tony.skill); // 따라서, Developer에만 있는 skill을 쓸 수 없다. (확정X)

// 해결책 - 타입 단언으로 사용 - 단점: 복잡함.
if ((tony as Developer).skill) { 
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age); 
}

// 해결책 - 타입 가드 정의 - 명확함
// isDeveloper -> 내부 property의 값의 유무로 interface Type 체크
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill); // Developer이므로 바로 skill에 접근 가능
} else {
  console.log(tony.age); // Person이므로 바로 age에 접근 가능
}