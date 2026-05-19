// id="main-title"인 요소의 텍스트를 **"상원님의 DOM 놀이터"**로 바꾸세요.

const title = document.getElementById("main-title");
console.log(title.textContent);
title.textContent = "상원의 DOM 놀이터";

// class="message"인 요소의 글자색을 **빨간색(red)**으로, 글자 크기를 24px로 바꾸세요
const msg = document.querySelector(".message");
msg.style.color = "red";
msg.style.fontSize = "24px";

// 모든 .fruit 요소의 배경색을 "#FFF9C4" (연한 노랑)으로 바꾸세요.
const fruits = document.querySelectorAll(".fruit");
fruits.forEach(function(fruit) {
    fruit.style.backgroundColor = "#fff9c4";
});

const hobby = document.getElementById("hobby");
console.log(hobby.textContent);
hobby.textContent = "취미 : 축구";

// const hobby = document.getElementById("hobby");
// hobby.textContent = "취미 : 축구";
// hobby.style.color = "green";
// hobby.style.fontSize = "20px";

