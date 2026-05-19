let obj = document.querySelector(".box .message");
console.log(obj.textContent);

obj.textContent = "반갑습니다.";
// obj.textContent = "<strong>안녕</strong>";

console.log(obj.innerHTML);
obj.innerHTML = "<strong>안녕</strong>";
obj = document.querySelector(".box");
console.log(obj.innerHTML);


// HTML: <h1 id="main-title">환영합니다!</h1>

const title = document.getElementById("main-title");

// 글자 색 변경
title.style.color = "blue";

// 배경색 변경
title.style.backgroundColor = "yellow";

// 글자 크기 변경
title.style.fontSize = "48px";

// 테두리 추가
title.style.border = "3px solid red";

// 패딩 추가
title.style.padding = "20px";

// 텍스트 정렬
title.style.textAlign = "center";