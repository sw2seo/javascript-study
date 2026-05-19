// if(조건) {
//     실행할 코드
// } else {
//     실행할 코드
// }

// 비교 연산자 표
// ┌─────────┬──────────────────┬──────────────────────────────┐
// │ 연산자   │ 의미              │ 예시                         │
// ├─────────┼──────────────────┼──────────────────────────────┤
// │  ===    │ 같다 (일치)       │ 5 === 5  → true             │
// │  !==    │ 같지 않다 (불일치) │ 5 !== 3  → true             │
// │  >      │ 크다 (초과)       │ 10 > 5   → true             │
// │  <      │ 작다 (미만)       │ 3 < 7    → true             │
// │  >=     │ 크거나 같다 (이상) │ 5 >= 5   → true             │
// │  <=     │ 작거나 같다 (이하) │ 3 <= 5   → true             │
// └─────────┴──────────────────┴──────────────────────────────┘

// === (엄격한 비교) — 값과 자료형 모두 같아야 true
// console.log(5 === 5);       // true  (숫자 5 === 숫자 5)
// console.log(5 === "5");     // false (숫자 5 !== 문자열 "5")
// console.log(0 === false);   // false (숫자 0 !== 불리언 false)

// // == (느슨한 비교) — 값만 비교, 자료형 자동 변환
// console.log(5 == "5");      // true  ( 문자열 "5"를 숫자로 변환해서 비교!)
// console.log(0 == false);    // true  ( false를 0으로 변환해서 비교!)
// console.log("" == false);   // true  ( 이상한 결과!)

// //  == 쓰지 마세요! 항상 === 을 쓰세요!
// // ==는 예상치 못한 결과를 만들어서 버그의 원인이 됩니다.
// // 이 수업에서는 항상 === 와 !== 만 사용합니다.

// console.log(5 === 3);
// console.log("안녕" === "안녕");
// console.log("반갑" === "안녕");

// console.log(5 !== 3);
// console.log(5 !== 5);

// console.log(10 > 5);
// console.log(5 > 10);

// console.log(10 > 3);
// console.log(10 < 3);

// console.log(5 >= 5);
// console.log(6 >= 5);
// console.log(3 >= 5);

// console.log(5 <= 5);
// console.log(3 <= 5);
// console.log(7 <= 5);

// 논리 연산자
// ┌─────────┬────────────┬──────────────────────────────────┐
// │ 연산자    │ 이름        │ 의미                            │
// ├─────────┼────────────┼──────────────────────────────────┤
// │  &&     │ AND (그리고) │ 두 조건 모두 true면 true          │
// │  ||     │ OR (또는)    │ 하나라도 true면 true             │
// │  !      │ NOT (부정)   │ true→false, false→true          │
// └─────────┴─────────────┴─────────────────────────────────┘

// && = 두 조건이 "모두" true일 때만 true
// 둘 중 하나라도 false면 false

// let age = 25;
// let hasLicense = true;

// // 나이가 18 이상 "그리고" 면허가 있으면 → 운전 가능
// console.log(age >= 18 && hasLicense === true); // true (둘 다 true)

// let age2 = 16;
// console.log(age2 >= 18 && hasLicense === true); // false (나이 조건이 false)

// // && 진리표
// console.log(true && true);    // true  (둘 다 참 → 참)
// console.log(true && false);   // false (하나가 거짓 → 거짓)
// console.log(false && true);   // false (하나가 거짓 → 거짓)
// console.log(false && false);  // false (둘 다 거짓 → 거짓)

// // 비유: 문을 열려면 '열쇠도 있어야 하고' '비밀번호도 맞아야 함'
// //       하나라도 없으면 문이 안 열림!

// // || = 하나라도 true이면 true
// // 둘 다 false일 때만 false

// let hasCash = false;
// let hasCard = true;

// // 현금이 있거나 "또는" 카드가 있으면 → 결제 가능
// console.log(hasCash || hasCard); // true (카드가 있으니까!)

// // || 진리표
// console.log(true || true);    // true  (하나 이상 참 → 참)
// console.log(true || false);   // true  (하나 이상 참 → 참)
// console.log(false || true);   // true  (하나 이상 참 → 참)
// console.log(false || false);  // false (둘 다 거짓 → 거짓)

// // 비유: 버스나 지하철 중 하나만 타도 학교 갈 수 있음
// //       둘 다 안 오면 못 감!

// // ! = true를 false로, false를 true로 뒤집기

// let isRaining = true;
// console.log(!isRaining);  // false (비가 오고 있다 → 비가 안 오고 있다)

// let isEmpty = false;
// console.log(!isEmpty);    // true (비어있지 않다 → 뭔가 있다)

// // if (!isRaining) { // 비가오지 않아야하는 조건을 원합니다. true로 만들어야함
// //     // 선크림을 바르겠습니다.
// // }

// // NOT 진리표
// console.log(!true);       // false
// console.log(!false);      // true

// // 비유: "비가 오지 않으면(!isRaining)" 산책하자


// 예제 
// let age = 20;
// let isMember = true;
// let hasTicket = false;

// // 복합조건
// console.log(age >= 18 && isMember); // (성인이고 회원)
// console.log(age < 18 || hasTicket); // (미성년도 아니고 티켓도 없음)
// console.log(!age >= 18); // (성인이 아닌게 아님 = 성인)

// let score = 85;
// // 점수가 80점이상이고 100 이하 인지 확인
// console.log(score >= 80 && score <= 100);
// // console.log(80 <= score <= 100); 이렇게 써도 나옴

// // 점수가 90점 이상이거나 출석률이 90이상이거나
// let attendance = 95;
// console.log(score >= 90 || attendance >= 90);


// if문 기본
// let temperature = 35;

// // 만약 온도가 30도 이상이면
// if (temperature >= 30) {
//     console.log("오늘은 정말 덥네요");
//     console.log("물을 많이 마시세요");
// }

// let temperature2 = 20;
// if (temperature2 >= 30) {
//     console.log("이 메세지는 출력되지 않습니다");
// }

// // if / else 문 - 둘중하나
// let age = 16;

// if (age >= 18) {
//     console.log("성인입니다. 입장 가능합니다.");
// } else {
//     console.log("미성년자 입니다. 입장 불가능합니다.");
// }

// // 다른 예시 : 짝수/홀수 판별
// let number = 7;

// if (number % 2 === 0) {
//     console.log(`${number}은(는) 짝수입니다.`);
// } else {
//     console.log(`${number}은(는) 홀수입니다.`);
// }

// // if / else if / else 여러갈래 조건
// let score = "백";

// if (score >= 90) {
//     console.log("A 등급입니다. 훌륭합니다!");
// } else if (score >= 80) {
//     console.log("B 등급입니다. 잘했습니다!");
// } else if (score >= 70) {
//     console.log("C 등급입니다. 조금 더 노력해봐요");
// } else if (score >= 60) {
//     console.log("D 등급입니다. 분발해주세요");
// } else {
//     console.log("F 등급입니다. 다시 한 번 도전해봐요");
// }


// 중첩 조건문
// if 안에 if를 넣을 수도 있어요 (하지만 너무 깊이 중첩하지 마세요!)

let hasTicket = true;
let age = 15;

if (hasTicket) {
    console.log("티켓 확인 완료!");

    // 티켓이 있다면, 나이를 추가 확인
    if (age >= 18) {
        console.log("성인 좌석으로 안내합니다.");
    } else {
        console.log("청소년 좌석으로 안내합니다.");
    }
} else {
    console.log("티켓이 없습니다. 매표소를 이용해주세요.");
}

//  하지만 중첩이 깊어지면 코드가 읽기 어려워져요.
// 보통 2단계 이내로 유지하는 게 좋습니다.