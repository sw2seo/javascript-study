// 배열(array) arr
// let student1 = "길동1";
// let student2 = "길동2";
// let student3 = "길동3";
// let student4 = "길동4";
// let student5 = "길동5";

// let students = ["길동1", "길동2", "길동3", "길동4", "길동5"] //여러개라 복수로 표현 
// //인덱스 번호       0       1        2       3        4

//배열 생성하기
// let fruits = ["사과", "바나나", "포도", "딸기"]

// let scroes = [90, 85, 72, 98, 65]

// let mixed = ["길동", 25, true, null] //혼합은 특수한경우에만 사용
// let emptyList = [];

// //배열 생성방법 2
// let numbers = new Array(1, 2, 3, 4, 5);

// let fruits = ["사과", "바나나", "포도", "딸기"]

// console.log(fruits[0]); // 0번부터 시작하니 착각 주의
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(fruits[4]);

// // 배열의 길이 체크(사이즈)
// console.log(fruits.length);

// // 배열 마지막 요소 가져오기
// console.log(fruits[fruits.length - 1]);

// // 배열 수정
// fruits[1] = "수박";
// console.log(fruits);


// ──────────────────────────────────────
// 실습 1-1: 좋아하는 음식 배열 만들기
// ──────────────────────────────────────
// let foods = ["치킨", "피자", "떡볶이", "삼겹살", "초밥"];

// console.log("좋아하는 음식 목록:");
// console.log("1위: " + foods[0]); // "치킨"
// console.log("2위: " + foods[1]); // "피자"
// console.log("3위: " + foods[2]); // "떡볶이"
// console.log("총 " + foods.length + "개의 음식"); // "총 5개의 음식"

// // ──────────────────────────────────────
// // 실습 1-2: 배열 + 반복문 조합! 많이사용
// // ──────────────────────────────────────
// let colors = ["빨강", "주황", "노랑", "초록", "파랑"];

// // for문으로 배열의 모든 요소 출력하기!
// for (let i = 0; i < colors.length; i++) {
//  // i = 0, 1, 2, 3, 4 (인덱스)
//  console.log((i + 1) + "번째 색: " + colors[i]);
// }
// // 출력:
// // 1번째 색: 빨강
// // 2번째 색: 주황
// // 3번째 색: 노랑
// // 4번째 색: 초록
// // 5번째 색: 파랑


// // 연습 문제 1

// // 숫자 배열 [10, 20, 30, 40, 50]의 총합을 구하는 코드를 작성하세요.
// // (힌트: for문으로 배열을 순회하면서 합계 변수에 더하기!)

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// // 여기에 코드를 작성하세요
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sum += numbers[i];
// }
// console.log(`총합 : ${sum}`);
// // 기대 결과: "총합: 150"



// push() — 배열 끝에 추가 (가장 많이 쓰는 메서드!)
// ──────────────────────────────────────
// push(): 배열의 맨 뒤에 요소 추가
// 비유: 기차 맨 뒤에 새 칸 연결!
// ──────────────────────────────────────

// let fruits = ["사과", "바나나"];
// console.log(fruits); // ["사과", "바나나"]

// fruits.push("포도"); // 맨 뒤에 "포도" 추가!
// console.log(fruits); // ["사과", "바나나", "포도"]

// fruits.push("딸기"); // 맨 뒤에 "딸기" 추가!
// console.log(fruits); // ["사과", "바나나", "포도", "딸기"]

// // 여러 개를 한 번에 추가할 수도 있어요!
// fruits.push("수박", "메론");
// console.log(fruits); // ["사과", "바나나", "포도", "딸기", "수박", "메론"]

// // push()는 추가한 후의 배열 길이를 반환해요
// let newLength = fruits.push("키위");
// console.log(newLength); // 7

// push() 시각화

// 추가 전: [사과] [바나나]
//  ← push("포도")
// 추가 후: [사과] [바나나] [포도]



// pop() — 배열 끝에서 제거

// ──────────────────────────────────────
// pop(): 배열의 맨 뒤 요소 제거 (제거된 값을 반환!)
// 비유: 기차 맨 뒤 칸 분리!
// ──────────────────────────────────────
// let fruits = ["사과", "바나나", "포도", "딸기"];

// let removed = fruits.pop(); // 맨 뒤의 "딸기" 제거!
// console.log(removed); // "딸기" (제거된 값)
// console.log(fruits); // ["사과", "바나나", "포도"]

// fruits.pop(); // "포도" 제거
// console.log(fruits); // ["사과", "바나나"]

// pop() 시각화

// 제거 전: [사과] [바나나] [포도] [딸기]
//  → pop() → "딸기" 반환
// 제거 후: [사과] [바나나] [포도]



// unshift() — 배열 앞에 추가 / shift() — 배열 앞에서 제거

// ──────────────────────────────────────
// unshift(): 배열의 맨 앞에 요소 추가
// 비유: 기차 맨 앞에 새 칸 연결!
// ──────────────────────────────────────
// let fruits = ["바나나", "포도"];

// let check = fruits.unshift("사과"); // 맨 앞에 "사과" 추가!
// console.log(fruits); // ["사과", "바나나", "포도"]

// //배열의 길이를 반환합니다
// console.log(check);

// // ──────────────────────────────────────
// // shift(): 배열의 맨 앞 요소 제거
// // 비유: 기차 맨 앞 칸 분리!
// // ──────────────────────────────────────
// let first = fruits.shift(); // 맨 앞의 "사과" 제거!
// console.log(first); // "사과"
// console.log(fruits); // ["바나나", "포도"]


// let fruits = ["사과", "바나나", "포도", "딸기", "바나나", "수박"];

// // ──────────────────────────────────────
// // includes(): 특정 요소가 있는지 확인 (true/false)
// // ──────────────────────────────────────
// console.log(fruits.includes("포도")); // true (있음!)
// console.log(fruits.includes("키위")); // false (없음!)

// // ──────────────────────────────────────
// // indexOf(): 특정 요소의 인덱스(위치) 찾기
// // ──────────────────────────────────────
// console.log(fruits.indexOf("바나나")); // 1 (1번 인덱스에 있음) 제일 처음 찾은 대상의 위치만 반환함
// console.log(fruits.indexOf("키위")); // -1 (없으면 -1 반환)

// // ──────────────────────────────────────
// // slice(): 배열의 일부분을 잘라서 새 배열 만들기
// // ──────────────────────────────────────
// let some = fruits.slice(1, 3); // 인덱스 1부터(<= <)3 "(-1 한 위치)직전"까지
// console.log(some); // ["바나나", "포도"]
// console.log(fruits); // ["사과", "바나나", "포도", "딸기", "수박"] (원본 유지!)

// // ──────────────────────────────────────
// // join(): 배열을 하나의 문자열로 합치기
// // ──────────────────────────────────────
// let result = fruits.join(", ");
// console.log(result); // "사과, 바나나, 포도, 딸기, 수박"

// let result2 = fruits.join(" / ");
// console.log(result2); // "사과 / 바나나 / 포도 / 딸기 / 수박"

// // ──────────────────────────────────────
// // reverse(): 배열 순서 뒤집기
// // ──────────────────────────────────────
// let nums = [1, 2, 3, 4, 5];
// nums.reverse();
// console.log(nums); // [5, 4, 3, 2, 1]

// // ──────────────────────────────────────
// // sort(): 배열 정렬하기
// // ──────────────────────────────────────
// let names = ["지영", "상원", "민수", "하은"];
// names.sort();
// console.log(names); // ["민수", "상원", "지영", "하은"] (가나다 순)


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
console.log(check);
// 4. 현재 목록의 길이를 출력하세요 
console.log(check); //랭스가 더 좋을수도있음
// 5. "계란"이 목록에 있는지 확인하세요 (includes 사용)
console.log(shoppingList.includes("계란"));
// 6. 최종 목록을 " → " 로 연결해서 출력하세요 (join 사용)
let result = shoppingList.join(" → ");
console.log(result);