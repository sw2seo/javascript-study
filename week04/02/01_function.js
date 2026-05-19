// 함수선언

// function 함수이름() {
// 실행할 코드;
// }

// 선언
// function sayHello() {
//     console.log("안녕하세요! 반갑습니다");
// }

// sayHello();
// sayHello();
// sayHello();

// 함수 이름 짓기
// 좋은 함수 이름 예시 — 동사로 시작!
// function sayHello() { } // say = 말하다
// function calculateSum() { } // calculate = 계산하다
// function getUserName() { } // get = 가져오다
// function checkAge() { } // check = 확인하다
// function showResult() { } // show = 보여주다
// function createCard() { } // create = 만들다

// // 안 좋은 함수 이름
// function hello() { } // 동사가 아니라 명사 느낌
// function data() { } // 뭘 하는 함수인지 모호함
// function x() { } // 의미 없는 이름
// function abc123() { } // 의미를 알 수 없음

// function introduce() {
//     console.log('---------')
//     console.log('이름 : 서상원');
//     console.log('목표 : JavaScript 배우기');
//     console.log('취미 : 축구');
//     console.log('---------');
// }

// introduce();

// console.log("");

// introduce();

// 매개변수 (parmeter)와 반환값(return)
// function sayHello() {
//     console.log('안녕하세요');
// }

// function sayHelloTo(name) { //(파라미터 매개변수)
//     console.log('안녕세요,' + name + '님! 반갑습니다!');
// }

// sayHelloTo('길동');
// sayHelloTo('상원');


// ──────────────────────────────────────
// 매개변수 2개 — 이름과 나이를 받는 함수
// ──────────────────────────────────────
// function introduceUser(name, age) {
//  // name: 첫 번째 매개변수 (이름)
//  // age: 두 번째 매개변수 (나이)
//  console.log("이름: " + name);
//  console.log("나이: " + age + "세");
//  console.log("─────────────────");
// }

// introduceUser("상원", 25);
// // 출력:
// // 이름: 상원
// // 나이: 25세
// // ─────────────────

// introduceUser("민수", 30);
// // 출력:
// // 이름: 민수
// // 나이: 30세
// // ─────────────────

// // ──────────────────────────────────────
// // 매개변수 3개 — 더하기, 빼기 등 계산하는 함수
// // ──────────────────────────────────────
// function calculate(num1, num2, operator) {
//  // num1: 첫 번째 숫자
//  // num2: 두 번째 숫자
//  // operator: 연산 기호 ("+", "-" 등)
//  if (operator === "+") {
//     console.log(num1 + " + " + num2 + " = " + (num1 + num2));
//  } else if (operator === "-") {
//     console.log(num1 + " - " + num2 + " = " + (num1 - num2));
//  } else if (operator === "*") {
//     console.log(num1 + " × " + num2 + " = " + (num1 * num2));
//  }
// }

// calculate(10, 3, "+"); // 10 + 3 = 13
// calculate(10, 3, "-"); // 10 - 3 = 7
// calculate(10, 3, "*"); // 10 × 3 = 30


// ──────────────────────────────────────
// console.log만 쓰는 함수 (보여주기만 함)
// ──────────────────────────────────────
// function addAndShow(a, b) {
//  console.log(a + b); // 화면에 보여주기만 함
//  // 결과를 다른 곳에서 쓸 수 없음...
// }

// addAndShow(3, 5); // 화면에 8이 출력되지만, 이 값을 저장할 수 없음

// // ──────────────────────────────────────
// // return을 쓰는 함수 (값을 돌려줌!)
// // ──────────────────────────────────────
// function add(a, b) {
//  return a + b; // 결과를 "돌려줌"
// }

// // 돌려받은 값을 변수에 저장할 수 있음!
// let result = add(3, 5); // result = 8
// console.log(result); // 8

// // 바로 사용할 수도 있음!
// console.log(add(10, 20)); // 30

// // 다른 계산에 활용할 수도 있음!
// let total = add(3, 5) + add(10, 20); // 8 + 30 = 38
// console.log(total); // 38

//return의 장점
// function checkAdult(age) {
//     if (age >= 18) {
//         return "성인입니다";
//     }
//     return "미성년자입니다.";
// }

// console.log(checkAdult(25));
// console.log(checkAdult(15));


// ──────────────────────────────────────
// 실습 2-1: 두 수의 합을 반환하는 함수
// ──────────────────────────────────────
function add(a, b) {
 // a와 b를 더한 결과를 돌려줌(return)
 return a + b;
}

let sum1 = add(10, 20); // sum1 = 30
let sum2 = add(100, 200); // sum2 = 300
console.log(sum1); // 30
console.log(sum2); // 300
console.log(add(sum1, sum2)); // 330 (30 + 300)

// ──────────────────────────────────────
// 실습 2-2: 인사 메시지를 반환하는 함수
// ──────────────────────────────────────
function makeGreeting(name, time) {
 // time: "아침", "점심", "저녁" 등
 if (time === "아침") {
    return "좋은 아침이에요, " + name + "님! ";
 } else if (time === "저녁") {
    return "좋은 저녁이에요, " + name + "님! ";
 } else {
    return "안녕하세요, " + name + "님! ";
 }
}

let message1 = makeGreeting("상원", "아침");
let message2 = makeGreeting("상원", "저녁");
let message3 = makeGreeting("민수", "점심");

console.log(message1); // "좋은 아침이에요, 상원님! "
console.log(message2); // "좋은 저녁이에요, 상원님! "
console.log(message3); // "안녕하세요, 민수님! "

// ──────────────────────────────────────
// 실습 2-3: 점수를 받아서 학점을 반환하는 함수
// ──────────────────────────────────────
function getGrade(score) {
 // score: 0~100 사이의 점수
 if (score >= 90) {
 return "A"; // 90점 이상이면 A
 } else if (score >= 80) {
 return "B"; // 80점 이상이면 B
 } else if (score >= 70) {
 return "C"; // 70점 이상이면 C
 } else {
 return "F"; // 70점 미만이면 F
 }
}

// 함수 결과를 변수에 저장
let myGrade = getGrade(95); // "A"
let friendGrade = getGrade(72); // "C"

console.log("내 학점: " + myGrade); // "내 학점: A"
console.log("친구 학점: " + friendGrade); // "친구 학점: C"

// 함수 결과를 바로 다른 함수에 넣을 수도 있음!
console.log("85점은 " + getGrade(85) + "학점"); // "85점은 B학점"


// 연습문제
// 두 수를 받아서 큰 수를 반환하는 함수 getmax(a,b)를 만들어보세요!
function getMax(a, b) {
    // if문 활용 - 내가한거
    // if (a < b) {
    //     console.log(`${b}`);
    // } else if (a > b) {
    //     console.log(`${a}`);
    // } else {
    //     console.log(`${a}=${b}`);
    // }
    // 선생님 
    if (a <= b) {
        return b;
    } else {
        return a;
    }
}
console.log(getMax(10, 20));
console.log(getMax(99, 1));
console.log(getMax(50, 50));


//연습문제 2
// 이름(name)과 과목(subject)과 점수(score)를 받아서,
// "길동님의 수학 성적은 A입니다" 형태의 문자열을 반환하는 함수를 만들어보세요!
// (힌트: 위에서 만든 getGrade 함수를 활용해보세요)

function getGrade(score) {
 // score: 0~100 사이의 점수
 if (score >= 90) {
 return "A"; // 90점 이상이면 A
 } else if (score >= 80) {
 return "B"; // 80점 이상이면 B
 } else if (score >= 70) {
 return "C"; // 70점 이상이면 C
 } else {
 return "F"; // 70점 미만이면 F
 }
}

function getReport(name, subject, score) {
 // 여기에 코드를 작성하세요
 // 힌트: getGrade(score)를 호출해서 학점을 받고,
 // 문자열을 조합해서 return 하면 돼요!
    let grade = getGrade(score);
    return `${name}님의 ${subject} 성적은 ${grade}입니다`
    
}



console.log(getReport("길동", "수학", 95));
// 기대 결과: "길동님의 수학 성적은 A입니다"

console.log(getReport("민수", "영어", 72));
// 기대 결과: "민수님의 영어 성적은 C입니다"