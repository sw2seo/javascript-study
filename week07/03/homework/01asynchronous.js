// console.log("1번: 시작!");
// console.log("2번: 시작!");
// console.log("3번: 시작!");

// console.log("1번: 시작!");

// //setTimeout: "N 밀리초 후에 이 함수를 실행"

// // 1000 = 1

// setTimeout(function(){
//     console.log("2번: 3초후 실행!");
// }, 3000); // 3000ns = 3초

// console.log("3번 시작");

// console.log('A');

// setTimeout(function() {
//     console.log('B');
// }, 2000);  // 2초 후

// setTimeout(function() {
//     console.log('C');
// }, 1000);  // 1초 후

// setTimeout(function() {
//     console.log('D');
// }, 0);  // 0초 후?!

// console.log('E');

const loadingDiv = document.querySelector("#loading");

loadingDiv.textContent = "로딩 중...";

setTimeout(function() {
    loadingDiv.textContent = "로딩완료"
    loadingDiv.style.color = "blue";
}, 1000);