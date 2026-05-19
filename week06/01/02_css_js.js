const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("active");
box.classList.toggle("active"); //on off 스위치 없으면 추가 있으면 삭제
console.log(box.classList.contains("active"));