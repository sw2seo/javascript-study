// 화살표 함수
// 기존 함수 표현 방법
// function add(a, b) {
//     return a + b;
// }
// // 이미 많이 쓰이고 있는 방법임 많이 선호하는방식 그나마 3번도 조금씀


// const add = (a, b) => {
//     return a + b;
// }
// // 조금 애매한 방식이긴 함


// const add = (a, b) => (a + b);



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Step 1: 기존 함수 선언 방식
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// function multiply(a, b) {
//  return a * b;
// }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Step 2: 변수에 저장하는 방식 (함수 표현식)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// const multiply = function(a, b) {
//  return a * b;
// };

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Step 3: function 키워드 제거 + => 추가
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// const multiply = (a, b) => {
//  return a * b;
// };

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Step 4: 한 줄이니까 {} 와 return 생략!
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// const multiply = (a, b) => a * b;

// a = multiply(1, 4);
// console.log(a);



// ──────────────────────────────────────
// 매개변수 0개: 소괄호 필수!
// ──────────────────────────────────────
// const sayHi = () => console.log("안녕!");
// sayHi(); // "안녕!"

// // ──────────────────────────────────────
// // 매개변수 1개: 소괄호 생략 가능! - 괄호를 포함하는게 좋긴함
// // ──────────────────────────────────────
// const double = num => num * 2;
// // 또는
// const double2 = (num) => num * 2; // 소괄호 있어도 OK
// console.log(double(5)); // 10

// // ──────────────────────────────────────
// // 매개변수 2개 이상: 소괄호 필수!
// // ──────────────────────────────────────
// const addNums = (a, b) => a + b;
// console.log(addNums(3, 7)); // 10

// // ──────────────────────────────────────
// // 코드가 여러 줄이면: {} 와 return 필요!
// // ──────────────────────────────────────
// const getGrade = (score) => {
//  if (score >= 90) return "A";
//  else if (score >= 80) return "B";
//  else return "C";
// };
// console.log(getGrade(95)); // "A"


// 연습 문제 3

// 아래 기존 함수들을 화살표 함수로 바꿔보세요!

// 문제 1: 기존 함수 → 화살표 함수로 변환
// function square(n) {
//  return n * n;
// }
// const double = (n) => n * n;

// // 문제 2: 기존 함수 → 화살표 함수로 변환
// function isAdult(age) {
//  return age >= 18;
// }
// let adult = (age) => age >= 18;

// // // // 문제 3: 기존 함수 → 화살표 함수로 변환
// function greet(name) {
//  return "Hello, " + name + "!";
// }
// greet = (name) => "Hello, " + name + "!";
// console.log(double(5)); // 25
// console.log(adult(20)); // true
// console.log(adult(15)); // false
// console.log(greet("상원")); // "Hello, 상원!"

// 문제 1 정답
// const square = (n) => n * n;
// // 또는: const square = n => n * n; (매개변수 1개니까 괄호 생략 가능)

// // 문제 2 정답
// const isAdult = (age) => age >= 18;
// // 또는: const isAdult = age => age >= 18;

// // 문제 3 정답
// const greet = (name) => "Hello, " + name + "!";
// // 또는: const greet = name => "Hello, " + name + "!";



// 1. BMI 계산 함수 만들기
function calculateBMI(weight, height) { //60 / (160*160)
 // weight: 체중 (kg)
 // height: 키 (cm) → m로 변환 필요!
    let heightM = height / 100;
    return weight / (heightM * heightM);
}
console.log(calculateBMI(70, 170));



// 2. BMI 결과 판정 함수 만들기
function getBMIResult(bmi) {
 // bmi 값에 따라 "저체중", "정상", "과체중" 반환
    if (bmi < 18.5) {
        return "저체중";
    } else  if (bmi < 25) {
        return "정상";
    } else {
        return "과체중"
    }

}

console.log(getBMIResult(30));

// 3. 전체 결과 출력 함수 만들기
function showBMI(name, weight, height) {
 // calculateBMI와 getBMIResult를 조합!
let bmi = calculateBMI(weight, height);
let result = getBMIResult(bmi);
console.log(name +"님의 BMI: " + bmi.toFixed(1) + " (" + result +")");
}

// 테스트
showBMI("상원", 70, 175); // "상원님의 BMI: 22.9 (정상)"
showBMI("민수", 55, 170); // "민수님의 BMI: 19.0 (정상)"
showBMI("지영", 45, 160); // "지영님의 BMI: 17.6 (저체중)"