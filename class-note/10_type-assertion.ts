// 타입 단언(type assertion)
let t1;
t1 = 1;
t1 = 'a';
let t2 = t1 as number; // string으로 단언함. - 이제 t2는 string, t1은 아직 any

// DOM API 조작 - 자주 사용됨ㄴ
// <div id="app">hi</div>

// var div = document.querySelector('div'); // response -> HTMLElementTagNameMap[K] | null 
// if (div) { // null check 
//   div.innerText // innerText는 null에서 사용불가하므로
// }

var div = document.querySelector('div') as HTMLDivElement; // response -> HTMLElementTagNameMap[K] | null 
div.innerText; // HTMLDivElement로 단언하여 바로 사용가능

