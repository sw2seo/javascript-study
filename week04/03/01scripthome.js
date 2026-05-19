// 화살표 함수
// function add (a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// const multiply = function(a, b) {
//     return a * b;
// }

// const multiply = (a, b) => a * b;
// a = multiply(2, 4);
// console.log(a);

// const sayHi = () => console.log("안녕!");
// sayHi();

// const double = num => num * 2;
// console.log(double(5));

// const addNums = (a, b) => a + b;
// console.log(addNums(3, 7));

// const getGrade = (score) => {
//     if (score >= 90) return "A";
//     else if ( score >= 80) return "B";
//     else return "C";
// };

// console.log(getGrade(95));


// 연습 문제 3

// 아래 기존 함수들을 화살표 함수로 바꿔보세요!

// 문제 1: 기존 함수 → 화살표 함수로 변환
function square(n) {
 return n * n;
}

const square = (n) => n *n;

// 문제 2: 기존 함수 → 화살표 함수로 변환
function isAdult(age) {
 return age >= 18;
} 
let adult = (age) => age >= 18;

// 문제 3: 기존 함수 → 화살표 함수로 변환
function greet(name) {
 return "Hello, " + name + "!";
}


// 1. BMI 계산 함수 만들기
function calculateBMI(weight, height) { //60 / (160*160)
 // weight: 체중 (kg)
 // height: 키 (cm) → m로 변환 필요!
let heightM = height / 100;
return weight * (heightM * heightM);
}

 // 2. BMI 결과 판정 함수 만들기
function getBMIResult(bmi) {
 // bmi 값에 따라 "저체중", "정상"
    if (bmi < 18.5) return "저체중";
    else if (bmi < 25) return "정상";
    else return "과체중";
}



 // 3. 전체 결과 출력 함수 만들기
function showBMI(name, weight, height) {
 // calculateBMI와 getBMIResult를 조합!
let bmi = calculateBMI(weight, height);
let result = getBMIResult(bmi);
console.log(name + "님의 BMI:" + bmi.toFixed(1) + " (" + result +")");
}

// 테스트
showBMI("상원", 70, 175); // "상원님의 BMI: 22.9 (정상)"
showBMI("민수", 55, 170); // "민수님의 BMI: 19.0 (정상)"
showBMI("지영", 45, 160); // "지영님의 BMI: 17.6 (저체중)"