const cards = document.querySelectorAll(".card");

// 실습 1 add 클래스 추가하기
// 첫번쨰 카드에 active추가
cards[0].classList.add("active");
console.log("첫번째 카드 활성화!");
console.log("active 있나?", cards[0].classList.contains("active"));

// 실습 2 remove 클래스 제거하기
// 만약 active를 제거하고싶다면
// cards[0].classList.remove("active");

//실습 3 toggle
// 두번째 카드에 highlight를 toggle
cards[1].classList.toggle("highlight");
console.log("두번째 카드 highlight 토글!");

// 한번더 하면 토글 사라짐
// cards[1].classList.toggle("highlight");

// 실습 4 여러클래스 동시에 추가
cards[2].classList.add("danger");
console.log("세번째 카드에 danger 추가!");

// 실습5 contains로 확인 후 조건 처리
cards.forEach(function(card, index) {
    if (card.classList.contains("active")) {
        console.log(index + "번쨰 카드는 활성화 상태입니다!");
    }
});