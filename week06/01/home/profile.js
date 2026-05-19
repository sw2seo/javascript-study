const myName = document.getElementById("name");
myName.textContent = "서상원";
myName.style.color = "yellow";

const myAge = document.querySelector("#age");
myAge.textContent = "나이: 29세";
myAge.style.color = "white";

const myGoal = document.querySelector("#goal");
myGoal.textContent = "목표: JacaScript마스터";
myGoal.style.color = "white";
myGoal.innerHTML = "<strong>목표 : JavaScript 마스터되기! </strong>"

const skills = document.querySelectorAll(".skill-list");
skills.forEach(function(skill) {
    skill.style.fontSize = "18px";
    skill.style.fontWeight = "bold";
});

const cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
    card.style.border = "3px solid rgb(37, 19, 206)"
    card.style.backgroundColor = "rgb(71, 125, 226)";
});

