// 삼항 연산자 기본 문법

// 조건 ? 참일 때 값 : 거짓일 때 값

// if/else로 쓸 때
let age = 20;
let status;

if (age >= 18) {
    status = "성인";
} else {
    status = "미성년자";
}
console.log(status); // "성인"

// 삼항 연산자로 쓸 때 (한 줄!)
let status2 = age >= 18 ? "성인" : "미성년자";
console.log(status2); // "성인"

// 삼항 연산자 예제

// 예시 1: 짝수/홀수
let num = 7;
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(`${num}은(는) ${result}입니다.`); // "7은(는) 홀수입니다."

// 예시 2: 합격/불합격
let score = 75;
let pass = score >= 60 ? "합격" : "불합격";
console.log(`점수: ${score}점 → ${pass}`); // "점수: 75점 → 합격"

// 예시 3: console.log() 안에서 직접 사용
let temperature = 28;
console.log(`오늘 날씨: ${temperature >= 25 ? "더움" : "선선함"}`);
// "오늘 날씨: 더움"

// 예시 4: 인사말
let hour = 14;
let greeting = hour < 12 ? "좋은 아침이에요!" : "좋은 오후예요!";
console.log(greeting); // "좋은 오후예요!"