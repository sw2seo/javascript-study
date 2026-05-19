// ============================================
//  DOM 요소 선택 실습
// ============================================

// --- 1. getElementById로 찾기 ---
// 제목
let title = document.getElementById("main-title")
console.log(title);
// 이름
let name = document.getElementById("name")
console.log(name);
// --- 2. querySelector로 찾기 ---
// 첫번째 박스
let firstBox = document.querySelector(".box")
console.log(firstBox);
// 메시지
let message = document.querySelector(".message")
console.log(message);

// --- 3. querySelectorAll로 찾기 ---

// 과일 전부 출력
let fruits = document.querySelectorAll(".fruit")
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.forEach(function (fruit){
    console.log(fruit.textContent);
});

// 과일 개수

// 각가 과일 출력