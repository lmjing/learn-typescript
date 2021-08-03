<<<<<<< HEAD
// 인터페이스에 제네릭을 선언하는 방법
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
// Generic 미사용시 - value의 타입만 다를 뿐 다른 코드들은 동일한데 interface 정의를 위한 불필요한 코드가 늘어남.
// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
=======
const emails = [
>>>>>>> d48e9e404bab03fad6ad4981100c563a5ebc7d0a
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
});