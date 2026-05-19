//  현실 세계 비유

// 집에 보안 시스템을 설치한다고 생각해 보세요.

// 1. 감시 대상 = 현관문 (→ HTML 요소)
// 2. 감시할 사건 = 문이 열림 (→ 이벤트 종류)
// 3. 감시자 = CCTV/센서 (→ 이벤트 리스너)
// 4. 대응 행동 = 경보 울리기 (→ 이벤트 핸들러)

// "현관문에 센서를 붙여서, 문이 열리면 경보를 울려라!"
// → "버튼에 리스너를 붙여서, 클릭하면 함수를 실행해라!"

//  자주 사용하는 이벤트 목록

// 인터페이스(마우스, 키보드)

// [마우스 이벤트]
// - click       : 클릭했을 때
// - dblclick    : 더블클릭했을 때
// - mouseover   : 마우스를 올렸을 때
// - mouseout    : 마우스가 벗어났을 때
// - mousedown   : 마우스 버튼을 누를 때
// - mouseup     : 마우스 버튼을 뗄 때

// [키보드 이벤트]
// - keydown     : 키를 누를 때
// - keyup       : 키를 뗄 때
// - keypress    : 키를 눌러서 문자가 입력될 때 (요즘은 잘 안 씀)

// [폼(Form) 이벤트]
// - submit      : 폼을 제출할 때
// - input       : 입력 필드에 값이 바뀔 때 (실시간)
// - change      : 입력 필드의 값이 확정되었을 때
// - focus       : 입력 필드에 커서가 들어갈 때
// - blur        : 입력 필드에서 커서가 나올 때

// [기타]
// - scroll      : 스크롤할 때
// - resize      : 창 크기가 바뀔 때
// - load        : 페이지가 완전히 로드되었을 때

// const button = document.querySelector("button");

// button.addEventListener("click", function() {
//     alert("반갑습니다");
// });

// 실습 목표: 버튼을 클릭하면 텍스트가 바뀌는 페이지 만들기
const change2 = document.querySelector("#change");
const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function() {
    change2.textContent = "이거로 바뀜";
    change2.style.fontSize = "18px";
});

