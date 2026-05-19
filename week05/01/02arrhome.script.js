// let fruits = ["사과", "바나나", "딸기", "오렌지"]

// let scores = [95, 90, 77, 85, 60]

// console.log(fruits[0]);

// console.log(scores.length);

// let foods = ["치킨", "피자", "삼겹살", "초밥"]

// console.log("내가 좋아하는 음식 순위");
// console.log("1위 :" + foods[3]);
// console.log("2위 :" + foods[2]);
// console.log("3위 :" + foods[1]);

// console.log("총" + foods.length + "개의 음식");

// let colors = ["빨강", "주황", "노랑", "초록", "파랑"];

// for (let i = 0; i < colors.length; i++) {
//      console.log((i + 1) + "번째 색: " + colors[i]);
// }

// // // 숫자 배열 [10, 20, 30, 40, 50]의 총합을 구하는 코드를 작성하세요.
// // // (힌트: for문으로 배열을 순회하면서 합계 변수에 더하기!)

// let numbers = [10, 20, 30, 40, 50]
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sum += numbers[i];
// }
//     console.log(`총합 : ${sum}`);

// let fruits = ["사과", "바나나"];
// console.log(fruits);

// fruits.push("포도");
// console.log(fruits);

// fruits.push("딸기");
// console.log(fruits);

// fruits.push("메론", "참외");
// console.log(fruits);

// let newLength = fruits.push("키위");
// console.log(newLength);

// let fruits = ["사과", "딸기", "바나나", "포도"];

// let removed = fruits.pop();
// console.log(removed);
// console.log(fruits);

// let fruits = ["사과", "딸기"];

// let check = fruits.unshift("포도");
// console.log(fruits);
// console.log(check);

// let first = fruits.shift();
// console.log(first);
// console.log(fruits);

// includs 문
// let fruits = ["사과", "바나나", "포도", "딸기", "바나나", "수박"];

// console.log(fruits.includes("포도"));
// console.log(fruits.includes("두리안"));

// console.log(fruits.indexOf("바나나"));
// console.log(fruits.indexOf("키위"));

// // slice배열

// let some = fruits.slice(1, 3);
// console.log(some);
// console.log(fruits);

// // join 배열을 하나의 문자열로 합치기

// let result = fruits.join(", ");
// console.log(result);

// let result2 = fruits.join(" / ");
// console.log(result2);

// // reverse 배열뒤집기
// let nums = [1, 2, 3, 4, 5];
// nums.reverse();
// console.log(nums);

// // sort 배열 정렬하기
// let names = ["지영", "민수", "하은", "상원"];
// names.sort();
// console.log(names);

// 연습 문제 2

// 빈 배열 shoppingList에 장보기 목록을 추가하고 조작해보세요!

let shoppingList = [];

// 1. "우유", "계란", "빵"을 추가하세요 (push 사용)
shoppingList.push("우유", "계란", "빵");
console.log(shoppingList);
// 2. 맨 뒤에 있는 아이템을 제거하세요 (pop 사용)
let removed = shoppingList.pop();
console.log(shoppingList);
// 3. "사과"를 맨 앞에 추가하세요 (unshift 사용)
let check = shoppingList.unshift("사과");
console.log(shoppingList);
// 4. 현재 목록의 길이를 출력하세요
console.log(shoppingList.length);
// 5. "계란"이 목록에 있는지 확인하세요 (includes 사용)
console.log(shoppingList.includes("계란"));
// 6. 최종 목록을 " → " 로 연결해서 출력하세요 (join 사용)
console.log(shoppingList.join("→"));