// const parent = document.querySelector(".box");
// const newE1 = document.createElement("p");
// newE1.textContent = "새 요소!";

// // 1. 맨뒤에 추가
// parent.appendChild(newE1);

// // 2. 텍스트 바로 추가 가능
// parent.append("그냥 텍스트도 넣을 수 있어요!");

// // 3. 맨앞에 추가
// const firstE1 = document.createElement("p");
// firstE1.textContent = "나는 맨앞에!";
// parent.prepend(firstE1);

// // 4. 특정 요소 앞에 추가
// const referenceEl = document.querySelector(".box p");
// const beforeE1 = document.createElement("p");
// beforeE1.textContent = "기준 앞에 추가";
// parent.insertBefore(beforeE1, newE1);

// 배열 데이터를 바탕으로 여러 요소를 추가 하는 패턴 실무에서 많이 쓰임

// const newFruits = ["복숭아", "키위", "체리"];
// const list = document.querySelector("ul");

// newFruits.forEach(function(fruitName) {
//     //1. 새 li 만들기
//     const li = document.createElement("li");
//     //2. 텍스트 넣기
//     li.textContent = fruitName;
//     li.className = "fruit";
//     //3. 리스트에 추가
//     list.appendChild(li);
// });

// 요소 삭제하기

// const target = document.getElementsByClassName("fruit");
// target[0].remove();

// 방법2
// const target = document.querySelector(".box");
// target.remove();

// const target2 = document.querySelector("ul li");
// target2.remove();

// const target3 = document.querySelector("script");
// target3.remove();

// 기준요소를 하나 선택하고 하위 요소를 검색하는 방법
// const list = document.getElementById("fruit-list");
// const firstItem = list.querySelector("li");

// list.removeChild(firstItem);


// 교체
// const oldTitle = document.getElementById("old-title");

// const newTitle = document.createElement("h2");
// newTitle.textContent = "새로운제목!";
// newTitle.style.color = "purple";

// oldTitle.replaceWith(newTitle);

// --- 실습 1: 마지막 과일 삭제하기 ---
const allFruits = document.querySelectorAll(".fruit");
const lastFruit = allFruits[allFruits.length - 1];
lastFruit.remove();
console.log("마지막 과일 삭제!");

// // --- 실습 2: 특정 조건의 과일만 삭제하기 ---
const fruits = document.querySelectorAll(".fruit");
fruits.forEach(function(fruit) {
    if (fruit.textContent.includes("바나나")) {
        fruit.remove();
        console.log("바나나 삭제!");
    }
});