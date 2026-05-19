const change = document.querySelector("#change");
const changBtn = document.querySelector("#changeBtn");

addEventListener("click", function() {
    change.textContent = "이거로 바뀜";
    change.style.fontSize = "20px";
});

