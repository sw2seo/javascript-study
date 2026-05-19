// ============================================
//  DOM 요소 선택 실습
// ============================================

// --- 1. getElementById로 찾기 ---
const mainTitle = document.getElementById("main-title");
console.log("제목:", mainTitle);

const nameEl = document.getElementById("name");
console.log("이름:", nameEl);

// --- 2. querySelector로 찾기 ---
const firstBox = document.querySelector(".box");
console.log("첫 번째 박스:", firstBox);

const message = document.querySelector(".message");
console.log("메시지:", message);

// --- 3. querySelectorAll로 찾기 ---
const allFruits = document.querySelectorAll(".fruit");
console.log("과일 전부:", allFruits);
console.log("과일 개수:", allFruits.length);

// 각 과일을 하나씩 출력
allFruits.forEach(function(fruit) {
    console.log("과일:", fruit.textContent);
});