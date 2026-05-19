// ============================================
//  classList 실습
// ============================================

// 카드 요소 찾기
const cards = document.querySelectorAll(".card");

// --- 실습 1: add — 클래스 추가하기 ---
// 첫 번째 카드에 active 클래스 추가
cards[0].classList.add("active");
console.log("첫 번째 카드 활성화!");
console.log("active 있나?", cards[0].classList.contains("active")); // true

// --- 실습 2: remove — 클래스 제거하기 ---
// 만약 active를 제거하고 싶다면:
// cards[0].classList.remove("active");

// --- 실습 3: toggle — 토글 (on/off) ---
// 두 번째 카드에 highlight를 토글
cards[1].classList.toggle("highlight");
console.log("두 번째 카드 highlight 토글!");

// 한 번 더 토글하면 사라짐
// cards[1].classList.toggle("highlight");

// --- 실습 4: 여러 클래스 동시에 추가 ---
cards[2].classList.add("danger");
console.log("세 번째 카드에 danger 추가!");

// --- 실습 5: contains로 확인 후 조건 처리 ---
cards.forEach(function(card, index) {
    if (card.classList.contains("active")) {
        console.log(index + "번째 카드는 활성화 상태입니다!");
    }
});