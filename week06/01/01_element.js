// const parent = document.querySelector(".box");
// const newEl = document.createElement("p");
// newEl.textContent = "새 요소!";

// // 1. appendChild — 맨 뒤에 추가 (가장 많이 씀!)
// parent.appendChild(newEl);

// // 2. append — appendChild와 비슷, 텍스트도 바로 추가 가능
// parent.append("그냥 텍스트도 넣을 수 있어요!");

// // 3. prepend — 맨 앞에 추가!
// const firstEl = document.createElement("p");
// firstEl.textContent = "나는 맨 앞에!";
// parent.prepend(firstEl);

// 4. insertBefore — 특정 요소 앞에 추가 - 보통은 중간에 넣으려고 사용함
// const referenceEl = document.querySelector(".box p"); // 기준 요소 <-뛰어쓰기가 되면 class="box"의 하위에 p태그 모두 지칭
// const beforeEl = document.createElement("p");
// beforeEl.textContent = "기준 앞에 추가!";
// parent.insertBefore(beforeEl, referenceEl);

// 배열의 데이터를 바탕으로 여러 요소를 추가하는 패턴
// (실무에서 정말 많이 쓰는 패턴이에요!)

const newFruits = [" 복숭아", " 키위", " 체리"];
const list = document.querySelector("ul");

newFruits.forEach(function(fruitName) {
    // 1. 새 li 만들기
    const li = document.createElement("li");
    // 2. 텍스트 넣기
    li.textContent = fruitName;
    li.className = "fruit";
    // 3. 리스트에 추가!
    list.appendChild(li);
});

// // 결과: 복숭아, 키위, 체리가 리스트 맨 뒤에 차례대로 추가됨!

// 요소 삭제하기

// 예외적으로 getElemetsByClassName (class)는 다수의 내용을 가지고 올수 있다보니 HTMLCollection(리스트 형태)로 반환을 해줍니다.
// const target = document.getElementsByClassName("box"); 
// // 배열 안에 요소를 인덱스로 접근하지 않으면 삭제할 수 없음
// // target.remove(); // null 에러 발생
// // 제거 시에는 인덱스로 접근하여 삭제합니다.
// target[0].remove(); // 제일 첫번째 요소를 삭제

// 방법2.
// const target = document.querySelector(".box");
// target.remove();

// const target2 = document.querySelector("ul");
// target2.remove();

// const target3 = document.querySelector("script");
// target3.remove();


// HTML:
// <ul id="fruit-list">
//     <li> 사과</li>
//     <li> 바나나</li>
//     <li> 딸기</li>
// </ul>

// 기준요소를 하나 선택하고 하위 요소를 검색하는방법
// const list = document.getElementById("fruit-list");
// const firstItem = list.querySelector("li"); // 첫 번째 li (사과)

// // 부모(ul)가 자식(li)을 삭제!
// list.removeChild(firstItem);
// // 결과: 사과가 삭제됨!

// // HTML: <h2 id="old-title">오래된 제목</h2>

// const oldTitle = document.getElementById("old-title");

// // 새 요소 만들기
// const newTitle = document.createElement("h2");
// newTitle.textContent = "새로운 제목! ";
// newTitle.style.color = "purple";

// // 교체!
// oldTitle.replaceWith(newTitle);
// 오래된 제목이 사라지고, 그 자리에 새 제목이!


// ============================================
//  요소 삭제 실습
// ============================================

// --- 실습 1: 마지막 과일 삭제하기 ---
// querySelector는 배열로 반환함
// const allFruits = document.querySelectorAll(".fruit");
// const lastFruit = allFruits[allFruits.length - 1]; // 마지막 과일
// lastFruit.remove();
// console.log("마지막 과일 삭제!");

// // --- 실습 2: 특정 조건의 과일만 삭제하기 ---
// const fruits = document.querySelectorAll(".fruit");
// fruits.forEach(function(fruit) {
//     if (fruit.textContent.includes("바나나")) {
//         fruit.remove();
//         console.log("바나나 삭제!");
//     }
// });