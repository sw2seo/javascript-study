// getElementById로 찾기

//제목
let title = document.getElementById("main-title")
console.log(title);

// 이름
let name = document.getElementById("name")
console.log(name);

// querySelector로 찾기
let firstBox = document.querySelector(".box")
console.log(firstBox);

let message = document.querySelector(".message")
console.log(message);

// querySelectorAll로 찾기
// 과일 전부출력
const allFruits = document.querySelectorAll(".fruit");
console.log("과일전부 : ", allFruits);
console.log("과일갯수 : ", allFruits.length);

// 각 과일 하나씩 출력
allFruits.forEach(function(fruit) {
    console.log("과일 : ", fruit.textContent);
});