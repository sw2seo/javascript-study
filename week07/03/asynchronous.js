// 비동기 프로그래밍

// 비동기 프로그래밍

//  동기(Synchronous) = 1인 식당 (주문 → 요리 → 서빙 → 다음 주문)

// 손님 1: "짜장면 주세요"
//    → [요리 중... 10분 대기]
//    → 짜장면 나옴
// 손님 2: "짬뽕 주세요"
//    → [요리 중... 10분 대기]
//    → 짬뽕 나옴
// 손님 3: "볶음밥 주세요"
//    → [요리 중... 10분 대기]
//    → 볶음밥 나옴

// 총 소요 시간: 30분 

// ---

//  비동기(Asynchronous) = 일반 식당 (주문 다 받고, 동시에 요리!)

// 손님 1: "짜장면 주세요" → 접수! (번호표 101)
// 손님 2: "짬뽕 주세요" → 접수! (번호표 102)
// 손님 3: "볶음밥 주세요" → 접수! (번호표 103)

// [주방에서 동시에 요리 중...]

// "101번 짜장면 나왔습니다!" → 손님 1
// "103번 볶음밥 나왔습니다!" → 손님 3
// "102번 짬뽕 나왔습니다!" → 손님 2

// 총 소요 시간: 약 10분! 
// (+ 먼저 된 게 먼저 나옴! 순서가 바뀔 수 있음)

//동기 코드 예시 그냥 순서대로 진행된다는걸 보여주기 위함
console.log("1번: 시작!");
console.log("2번: 시작!");
console.log("3번: 시작!");

// 비동기 코드 예시
console.log("1번: 시작!");

//setTimeout: "N 밀리초 후에 이 함수를 실행"

// 1000 = 1

setTimeout(function(){
    console.log("2번: 3초후 실행!");
}, 3000); // 3000ns = 3초

console.log("3번 시작");

// ========================================
// setTimeout 다양한 예제
// ========================================

// 예제 1: 순서 예측하기
console.log('A');

setTimeout(function() {
    console.log('B');
}, 2000);  // 2초 후

setTimeout(function() {
    console.log('C');
}, 1000);  // 1초 후

setTimeout(function() {
    console.log('D');
}, 0);  // 0초 후?!

console.log('E');

// 출력 순서: A → E → D → C → B
// D는 0초지만, setTimeout이므로 비동기! → 동기 코드(E)보다 나중에 실행


// 예제 2: 로딩 메시지
const loadingDiv = document.querySelector('#loading');

loadingDiv.textContent = '로딩 중...';

setTimeout(function() {
    loadingDiv.textContent = '로딩 완료! ';
    loadingDiv.style.color = 'green';
}, 2000);