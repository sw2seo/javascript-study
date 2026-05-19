let obj = document.querySelector(".box .message");
console.log(obj.textContent);

obj.textContent = "반갑습니다";

console.log(obj.innerHTML);
obj.innerHTML = "<strong>안녕</strong>";
obj = document.querySelector(".box");
console.log(obj.innerHTML);

const title = document.getElementById("main-title");

title.style.color = "blue";
title.style.backgroundColor = "green";
title.style.fontSize = "48px";
title.style.border = "3px solid red";
title.style.padding = "20px";
title.style.textAlign = "center";