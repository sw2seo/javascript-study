// 배열과 반복문
// forEach() 배열의 

// let fruits = ["사과", "바나나", "포도"]

// // 기본 문법
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // forEach 방식 (같은 결과)
// fruits.forEach(function(fruits) {
//     console.log(fruits);
// });


// //화살표 함수로 간결하게 / 최신문법 <-얘를 좀더 선호하는듯
// fruits.forEach((fruits) => {
//     console.log(fruits);
// });

// // 한줄로 한다면
// fruits.forEach(fruits => console.log(fruits));


// //번호와 같이 쓰는것에서 선호함
// fruits.forEach((fruits, index) => {
//     console.log(index + 1 + "번 : " + fruits);
// });



// map() — 배열을 변환해서 새 배열 만들기

// map() = 컨베이어 벨트 비유

// 원재료 배열: [1] [2] [3] [4] [5]
//  ↓ ↓ ↓ ↓ ↓
// 가공 과정: (각각 × 2)
//  ↓ ↓ ↓ ↓ ↓
// 새 배열(완제품): [2] [4] [6] [8] [10]

let numbers1 = [1, 2, 3, 4, 5];

// ──────────────────────────────────────
// map(): 각 숫자를 2배로 만든 새 배열
// ──────────────────────────────────────
let doubled = numbers1.map((num) => {
 return num * 2; // 각 요소에 × 2 적용
});
// 짧게: let doubled = numbers1.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10] ← 새 배열!
console.log(numbers1); // [1, 2, 3, 4, 5] ← 원래 배열은 그대로!

// ──────────────────────────────────────
// map(): 문자열 배열 변환
// ──────────────────────────────────────
let names = ["상원", "민수", "지영"];

// 각 이름에 "님" 붙이기
let formal = names.map(name => name + "님");
console.log(formal); // ["상원님", "민수님", "지영님"]

// 각 이름의 글자 수로 변환
let lengths = names.map(name => name.length);
console.log(lengths); // [2, 2, 2]


// filter() — 조건에 맞는 요소만 골라내기

// filter() = 체로 거르기 비유

// 원래 배열: [90] [45] [72] [88] [30] [95]
//  ↓ ↓ ↓
// 필터 조건: score >= 70 이상만 통과!
//  ↓ ↓ ↓
// 새 배열: [90] [72] [88] [95]

let scores = [90, 45, 72, 88, 30, 95];

// ──────────────────────────────────────
// filter(): 70점 이상만 골라내기
// ──────────────────────────────────────
let passed = scores.filter((score) => {
 return score >= 70; // true면 통과, false면 제거
});
// 짧게: let passed = scores.filter(score => score >= 70);

console.log(passed); // [90, 72, 88, 95] ← 조건 통과한 것만!
console.log(scores); // [90, 45, 72, 88, 30, 95] ← 원래 배열은 그대로!

// ──────────────────────────────────────
// filter(): 문자열 배열에서 필터링
// ──────────────────────────────────────
let fruits = ["사과", "바나나", "포도", "파인애플", "딸기", "블루베리"];

// 2글자인 과일만
let short = fruits.filter(fruit => fruit.length === 2);
console.log(short); // ["사과", "포도", "딸기"]

// 3글자 이상인 과일만
let long = fruits.filter(fruit => fruit.length >= 3);
console.log(long); // ["바나나", "파인애플", "블루베리"]

// ──────────────────────────────────────
// filter(): 짝수만 골라내기
// ──────────────────────────────────────
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 (2로 나눈 나머지가 0)
let evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// 홀수만 (2로 나눈 나머지가 1)
let odds = numbers2.filter(num => num % 2 !== 0);
console.log(odds); // [1, 3, 5, 7, 9]


// 연습 문제 3

// 아래 배열을 사용해서 요구사항을 만족하는 코드를 작성하세요.

let prices = [15000, 8000, 32000, 5000, 20000, 3000, 45000];

// 1. forEach로 모든 가격을 "15,000원" 형태로 출력하세요
prices.forEach((price) => {
    console.log(price)
});
// 2. map으로 각 가격에 10% 할인을 적용한 새 배열을 만드세요
let disCount = prices.map((price) => {
    return price - (price * 0.1)
});
console.log(disCount);
console.log(prices);
// 3. filter로 10,000원 이상인 가격만 골라내세요

let manWon = prices.filter((price) => {
    return price >= 10000;
});

console.log(manWon);