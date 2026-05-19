//배열과 반복문
// forEach

// let fruits = ["사과", "바나나", "포도"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // forEach 방식 (같은결과)
// fruits.forEach(function(fruits) {
//     console.log(fruits);
// })

// // 화살표 함수로 간단하게
// fruits.forEach((fruits) => {
//     console.log(fruits);
// });

// // 한줄로 한다면
// fruits.forEach(fruits => console.log(fruits));

//번호와 같이쓰는것에서 선호
// fruits.forEach((fruits, index) => {
//     console.log(index + 1 + "번 : " + fruits);
// });

// let number1 = [1, 2, 3, 4, 5];
// let doubled = number1.map((num) => {
//     return num * 2;
// });

// console.log(doubled);
// console.log(number1);

// let names = ["상원", "민수", "지영"];
// let formal = names.map(name => name + "님");
// console.log(formal);

// let lengths = names.map(name => name.length);
// console.log(lengths);

//filter문
// let scores = [90, 85, 68, 32, 55, 77];
// let passed = scores.filter((score) => {
//     return score >= 70;
// });

// console.log(scores);
// console.log(passed);

// // filter문자배열 필터링
// let fruits = ["사과", "바나나", "포도", "파인애플", "딸기", "블루베리"];

// // 2글자인 과일만
// let short = fruits.filter(fruit => fruit.length >= 2);
// console.log(short);

// let long = fruits.filter(fruit => fruit.length >= 3);
// console.log(long);

// // filter 짝수만 골라내기
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evens = numbers2.filter(num => num % 2 === 0);
// console.log(evens);

// //홀수로 나누기
// let odds = numbers2.filter(num => num % 2 !== 0);
// console.log(odds);

// 연습 문제 3

// 아래 배열을 사용해서 요구사항을 만족하는 코드를 작성하세요.

// let prices = [15000, 8000, 32000, 5000, 20000, 3000, 45000];

// // 1. forEach로 모든 가격을 "15,000원" 형태로 출력하세요
// prices.forEach((prices, index) => {
//     console.log((index + 1) + "번 : " + prices.toLocaleString() + "원");
// });

// // 2. map으로 각 가격에 10% 할인을 적용한 새 배열을 만드세요
// let disCount = prices.map((prices) => {
//     return prices * 0.9;
// })
// console.log(disCount);

// // 3. filter로 10,000원 이상인 가격만 골라내세요
// let manWon = prices.filter(prices => prices >= 10000);
// console.log(manWon);

// // 보너스: 메서드 체이닝(chaining) — 연결해서 사용!
// // 만원 이상 → 10% 할인

// let result = prices
// .filter(prices => prices >= 10000)
// .map(prices => prices * 0.9);

// console.log(result);


// let studentScores = [88, 45, 92, 73, 65, 98, 55, 80];

// // 1. filter: 70점 이상인 학생들의 점수만 골라내세요
// let passed = studentScores.filter(studentScores => studentScores >= 70);
// console.log(passed);
// // 2. map: 골라낸 점수를 "88점(합격)" 형태의 문자열로 변환하세요
// let messages = passed.map((scores) => scores + "(합격)");
// console.log(messages);

// // 3. forEach: 변환된 결과를 하나씩 출력하세요
// messages.forEach(msg => console.log(msg));

// // 메서드 체이닝으로 한 번에!
// studentScores
//  .filter(score => score >= 70)
//  .map(score => score + "점 (합격)")
//  .forEach(msg => console.log(msg));

 // ================================================================
// 종합 실습: 학생 성적 관리 시스템
// ================================================================

// 1. 데이터 준비 (학생 이름 배열, 점수 배열)

let names = ["상원", "민수", "지영", "서준", "하은"];
let scores = [92, 78, 88, 95, 65];

// 2. 평균 점수를 계산하는 함수
function getAverage(scroeArray) {
    let total = 0;
    scroeArray.forEach(score => {
        total += score;
    });
    return total / scroeArray.length;
}

console.log("평균점수 : " + getAverage(scores).toFixed(1));


// 3. 최고 점수를 찾는 함수
function getMax(scoreArray) {
    let Max = scoreArray[0];
    scoreArray.forEach(score => {
        if (score > Max) {
            Max = score;
        }
    });
    return Max;
}

console.log("최고 점수 : " + getMax(scores));

// 4. 점수를 학점으로 변환하는 함수
const getGrade = (score) => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else return "F";
};

// 5. map으로 학점 배열 만들기
let grades = scores.map(score => getGrade(score));
console.log("학점 : ", grades);

// 6. filter로 80점 이상 학생 찾기
let highScores = [];
scores.forEach((score, index) => {
    if (score >= 80) {
        highScores.push(names[index]); // index는 왜들어간건지?
    }
});
console.log("80점 이상:", highScores);

// 7. 전체 성적표 출력 함수

function showReport() {
  console.log("===성적표===");   

names.forEach((name, i) => {
    let grade = getGrade(scores[i]);
    console.log(name + ": " + scores[i] + "점 (" + grade + ")");
  });

  console.log("===통계===");
  console.log("평균 : " + getAverage(scores).toFixed(1) + "점");
  console.log("최고 : " + getMax(scores) + "점");
}
showReport();


